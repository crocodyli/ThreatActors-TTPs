#!/usr/bin/env python3
"""
MITRE APT Data Sync Script
Syncs MITRE ATT&CK APT groups to ThreatActors-TTPs repo
- Adds only NEW techniques to markdown files
- Adds only NEW CVEs to CVEs.json
- Cleans up malformed markdown tables
"""

import json
import os
import re
from pathlib import Path
from datetime import datetime

def clean_markdown_table(raw_content: str, group_name: str, section_name: str) -> str:
    """
    Cleans malformed markdown tables:
    - Removes duplicate headers
    - Removes auto-generated footers
    - Ensures single proper header
    - Preserves only table rows
    """
    lines = raw_content.split('\n')
    
    # Extract all table rows (lines starting with |)
    table_rows = []
    for line in lines:
        line = line.strip()
        # Skip empty lines
        if not line:
            continue
        # Skip auto-generated footers
        if 'auto-generated' in line.lower() or line.startswith('*'):
            continue
        # Skip markdown headers (#)
        if line.startswith('#'):
            continue
        # Collect table rows
        if line.startswith('|'):
            # Skip header separator lines (|---|---|)
            if all(c in '|-: ' for c in line):
                continue
            # Skip header row itself (contains "Technique | Name | Source")
            if 'Technique' in line and 'Name' in line and 'Source' in line:
                continue
            table_rows.append(line)
    
    # Build clean markdown
    clean_content = f"# {group_name} - {section_name}\n\n"
    clean_content += "| Technique | Name | Source | Date |\n"
    clean_content += "|-----------|------|--------|------|\n"
    
    if table_rows:
        clean_content += '\n'.join(table_rows) + '\n'
    
    return clean_content


def main():
    print("=" * 80)
    print("MITRE APT Data Sync")
    print("=" * 80)

    # Load MITRE data
    with open('enterprise-attack.json', 'r') as f:
        mitre_data = json.load(f)

    # Extract APT groups and their techniques/CVEs
    apt_groups = {}
    technique_map = {}
    software_map = {}

    # Build technique ID -> details mapping
    for obj in mitre_data['objects']:
        if obj['type'] == 'attack-pattern':
            for ref in obj.get('external_references', []):
                if ref.get('source_name') == 'mitre-attack':
                    technique_id = ref.get('external_id')
                    if technique_id:
                        technique_map[obj['id']] = {
                            'id': technique_id,
                            'name': obj.get('name', ''),
                            'description': obj.get('description', '')
                        }

    # Build software/malware -> CVEs mapping
    for obj in mitre_data['objects']:
        if obj['type'] in ['malware', 'tool']:
            software_name = obj.get('name')
            if software_name:
                # Extract CVEs from description and external references
                cves = set()
                
                # From description
                desc = obj.get('description', '')
                cve_matches = re.findall(r'CVE-\d{4}-\d+', desc)
                cves.update(cve_matches)
                
                # From external references
                for ref in obj.get('external_references', []):
                    if 'cve' in ref.get('source_name', '').lower():
                        ext_id = ref.get('external_id', '')
                        if ext_id.startswith('CVE-'):
                            cves.add(ext_id)
                
                if cves:
                    software_map[obj['id']] = {
                        'name': software_name,
                        'cves': list(cves)
                    }

    # Find APT groups (intrusion-sets)
    for obj in mitre_data['objects']:
        if obj['type'] == 'intrusion-set':
            group_name = obj.get('name')
            if group_name:
                apt_groups[obj['id']] = {
                    'name': group_name,
                    'aliases': obj.get('aliases', []),
                    'description': obj.get('description', ''),
                    'techniques': [],
                    'cves': set()
                }

    # Find relationships
    for obj in mitre_data['objects']:
        if obj['type'] == 'relationship' and obj.get('relationship_type') == 'uses':
            source_id = obj.get('source_ref')
            target_id = obj.get('target_ref')
            
            # APT group -> technique
            if source_id in apt_groups and target_id in technique_map:
                technique = technique_map[target_id]
                apt_groups[source_id]['techniques'].append(technique)
            
            # APT group -> software/malware -> CVEs
            if source_id in apt_groups and target_id in software_map:
                software = software_map[target_id]
                apt_groups[source_id]['cves'].update(software['cves'])

    print(f"\nFound {len(apt_groups)} APT groups in MITRE ATT&CK\n")

    # Process each APT group
    total_new_ttps = 0
    total_new_cves = 0
    folders_created = 0
    folders_updated = 0

    for group_id, group_data in apt_groups.items():
        group_name = group_data['name']
        techniques = group_data['techniques']
        cves = list(group_data['cves'])
        
        # Skip if no data
        if not techniques and not cves:
            continue

        # Sanitize folder name
        folder_name = group_name.replace('/', '-').replace('\\', '-').strip()
        folder_path = Path(folder_name)
        
        # Create folder if doesn't exist
        if not folder_path.exists():
            folder_path.mkdir(parents=True, exist_ok=True)
            folders_created += 1
            print(f"📁 Created folder: {folder_name}")
        
        # === CLEANUP EXISTING MARKDOWN FILES ===
        # Fix any malformed markdown files from previous runs
        md_files = list(folder_path.glob('*.md'))
        for md_file in md_files:
            try:
                raw_content = md_file.read_text(encoding='utf-8')
                
                # Detect the section name from filename
                if 'mitre' in md_file.name.lower():
                    section_name = 'MITRE ATT&CK TTPs'
                elif 'autodiscovered' in md_file.name.lower():
                    section_name = 'Auto-discovered TTPs'
                else:
                    section_name = 'TTPs'
                
                # Clean the markdown
                cleaned_content = clean_markdown_table(raw_content, folder_name, section_name)
                
                # Only write if content changed
                if cleaned_content != raw_content:
                    md_file.write_text(cleaned_content, encoding='utf-8')
                    print(f"🧹 Cleaned: {md_file.name}")
            except Exception as e:
                print(f"⚠️  Error cleaning {md_file}: {e}")
        
        # === PROCESS TTPs ===
        if techniques:
            # Read all existing markdown files to find existing TTPs
            existing_ttps = set()
            md_files = list(folder_path.glob('*.md'))
            
            for md_file in md_files:
                try:
                    content = md_file.read_text(encoding='utf-8')
                    # Extract T-numbers from markdown (T1234, T1234.001, etc)
                    ttp_matches = re.findall(r'T\d{4}(?:\.\d{3})?', content)
                    existing_ttps.update(ttp_matches)
                except Exception as e:
                    print(f"⚠️  Error reading {md_file}: {e}")
            
            # Find NEW techniques not in any markdown
            new_techniques = [t for t in techniques if t['id'] not in existing_ttps]
            
            if new_techniques:
                # Append to TTPs-mitre-sync.md (separate from auto-discovered)
                mitre_md_path = folder_path / 'TTPs-mitre-sync.md'
                
                # Read existing content if file exists and clean it up
                if mitre_md_path.exists():
                    raw_content = mitre_md_path.read_text(encoding='utf-8')
                    existing_content = clean_markdown_table(raw_content, folder_name, 'MITRE ATT&CK TTPs')
                else:
                    existing_content = f"# {folder_name} - MITRE ATT&CK TTPs\n\n"
                    existing_content += "| Technique | Name | Source | Date |\n"
                    existing_content += "|-----------|------|--------|------|\n"
                
                # Append new techniques
                new_rows = []
                for tech in new_techniques:
                    row = f"| {tech['id']} | {tech['name']} | MITRE ATT&CK | {datetime.now().strftime('%Y-%m-%d')} |"
                    new_rows.append(row)
                
                updated_content = existing_content.rstrip() + '\n' + '\n'.join(new_rows) + '\n'
                mitre_md_path.write_text(updated_content, encoding='utf-8')
                
                total_new_ttps += len(new_techniques)
                folders_updated += 1
                print(f"✅ {folder_name}: Added {len(new_techniques)} new TTPs")
        
        # === PROCESS CVEs ===
        if cves:
            cve_json_path = folder_path / 'CVEs.json'
            
            # Read existing CVEs.json if exists
            existing_cves = set()
            if cve_json_path.exists():
                try:
                    cve_data = json.loads(cve_json_path.read_text(encoding='utf-8'))
                    cve_list = cve_data.get('cves', cve_data if isinstance(cve_data, list) else [])
                    for cve_entry in cve_list:
                        cve_id = cve_entry.get('id') or cve_entry.get('cveId') or cve_entry.get('CVE')
                        if cve_id:
                            existing_cves.add(cve_id)
                except Exception as e:
                    print(f"⚠️  Error reading CVEs.json for {folder_name}: {e}")
            
            # Find NEW CVEs
            new_cves = [cve for cve in cves if cve not in existing_cves]
            
            if new_cves:
                # Load existing data structure
                if cve_json_path.exists():
                    try:
                        cve_data = json.loads(cve_json_path.read_text(encoding='utf-8'))
                    except:
                        cve_data = {'group': folder_name, 'cves': []}
                else:
                    cve_data = {'group': folder_name, 'cves': []}
                
                # Ensure cves is a list
                if 'cves' not in cve_data:
                    cve_data['cves'] = []
                
                # Add new CVEs
                for cve_id in new_cves:
                    cve_data['cves'].append({
                        'id': cve_id,
                        'source': 'MITRE ATT&CK',
                        'dateFound': datetime.now().strftime('%Y-%m-%d')
                    })
                
                # Write back
                cve_json_path.write_text(json.dumps(cve_data, indent=2), encoding='utf-8')
                
                total_new_cves += len(new_cves)
                print(f"✅ {folder_name}: Added {len(new_cves)} new CVEs")

    print("\n" + "=" * 80)
    print("SUMMARY")
    print("=" * 80)
    print(f"📁 Folders created: {folders_created}")
    print(f"📝 Folders updated: {folders_updated}")
    print(f"🎯 New TTPs added: {total_new_ttps}")
    print(f"🔒 New CVEs added: {total_new_cves}")
    print("=" * 80)

    # Exit with code 1 if nothing changed (skip commit)
    if folders_created == 0 and total_new_ttps == 0 and total_new_cves == 0:
        print("\n✨ No new data to sync - everything is up to date!")
        exit(1)


if __name__ == '__main__':
    main()
