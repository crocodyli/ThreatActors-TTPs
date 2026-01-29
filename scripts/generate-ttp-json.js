#!/usr/bin/env node

/**
 * scripts/generate-ttp-json.js
 * 
 * Reads all markdown files from threat actor folders and generates:
 * - ttp-index.json: Complete indexed JSON of all TTPs
 * - data/[actor-name].json: Individual actor files
 * 
 * FIXED VERSION with better error handling and logging
 */

const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '..', 'data');
const INDEX_FILE = path.join(__dirname, '..', 'ttp-index.json');

console.log(`[TTP] Working directory: ${process.cwd()}`);
console.log(`[TTP] Script directory: ${__dirname}`);
console.log(`[TTP] Output directory: ${OUTPUT_DIR}`);

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  try {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`[TTP] ✓ Created directory: ${OUTPUT_DIR}`);
  } catch (err) {
    console.error(`[TTP] ✗ Failed to create directory: ${err.message}`);
    process.exit(1);
  }
}

function extractTechniques(content) {
  const techniques = [];
  const lines = content.split('\n');
  
  for (const line of lines) {
    // Match MITRE technique codes: T1234, T1234.001, T1234.01, etc.
    // Updated to match any number of digits after the dot
    const matches = line.match(/T\d{4}(?:\.\d+)?/g);
    if (matches) {
      techniques.push(...matches);
    }
  }
  
  // Return unique, sorted
  return [...new Set(techniques)].sort();
}

function extractMetadata(content) {
  const metadata = {
    description: '',
    aliases: [],
    cves: [],
    commands: [],
    payloadLocations: []
  };
  
  const lines = content.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Extract description (first non-empty paragraph)
    if (!metadata.description && line.trim() && !line.startsWith('#') && !line.startsWith('|')) {
      metadata.description = line.trim().substring(0, 200); // First 200 chars
    }
    
    // Extract aliases
    if (line.toLowerCase().includes('alias')) {
      const nextLine = lines[i + 1];
      if (nextLine) {
        const alias = nextLine.trim().replace(/^[-*]\s+/, '');
        if (alias && !alias.startsWith('#') && !alias.startsWith('|')) {
          metadata.aliases.push(alias);
        }
      }
    }
    
    // Extract CVEs
    const cveMatches = line.match(/CVE-\d{4}-\d{4,}/g);
    if (cveMatches) {
      metadata.cves.push(...cveMatches);
    }
  }
  
  return metadata;
}

function scanActorFolders() {
  const rootDir = path.join(__dirname, '..');
  console.log(`[TTP] Scanning root directory: ${rootDir}`);
  
  let entries;
  try {
    entries = fs.readdirSync(rootDir, { withFileTypes: true });
  } catch (err) {
    console.error(`[TTP] ✗ Failed to read root directory: ${err.message}`);
    process.exit(1);
  }
  
  const actors = [];
  
  for (const entry of entries) {
    // Skip system files and non-directories
    if (!entry.isDirectory() || entry.name.startsWith('.')) {
      continue;
    }
    
    // Skip known non-actor folders
    if (['scripts', 'data', 'node_modules', '.github'].includes(entry.name)) {
      continue;
    }
    
    const actorName = entry.name;
    const actorPath = path.join(rootDir, actorName);
    
    // Find markdown files in actor folder
    let files;
    try {
      files = fs.readdirSync(actorPath);
    } catch (err) {
      console.warn(`[TTP] ⚠ Failed to read folder ${actorName}: ${err.message}`);
      continue;
    }
    
    const mdFiles = files.filter(f => f.endsWith('.md'));
    
    if (mdFiles.length === 0) {
      console.log(`[TTP] ⊘ Skipping ${actorName} (no markdown files)`);
      continue;
    }
    
    console.log(`[TTP] Processing actor: ${actorName} (${mdFiles.length} files)`);
    
    let allTechniques = [];
    let metadata = {
      description: '',
      aliases: [],
      cves: [],
      files: []
    };
    
    // Process all markdown files for this actor
    for (const mdFile of mdFiles) {
      const filePath = path.join(actorPath, mdFile);
      
      let content;
      try {
        content = fs.readFileSync(filePath, 'utf-8');
      } catch (err) {
        console.warn(`[TTP] ⚠ Failed to read ${mdFile}: ${err.message}`);
        continue;
      }
      
      // Extract techniques
      const techniques = extractTechniques(content);
      allTechniques.push(...techniques);
      
      // Extract metadata
      const fileMeta = extractMetadata(content);
      
      if (fileMeta.description && !metadata.description) {
        metadata.description = fileMeta.description;
      }
      metadata.aliases.push(...fileMeta.aliases);
      metadata.cves.push(...fileMeta.cves);
      
      metadata.files.push({
        name: mdFile,
        techniques: techniques.length > 0 ? techniques : []
      });
      
      console.log(`    └─ ${mdFile}: ${techniques.length} techniques`);
    }
    
    // Only add if we found techniques
    if (allTechniques.length === 0) {
      console.log(`[TTP] ⚠ ${actorName} has no techniques - skipping`);
      continue;
    }
    
    // Deduplicate
    const uniqueTechniques = [...new Set(allTechniques)].sort();
    metadata.cves = [...new Set(metadata.cves)].sort();
    metadata.aliases = [...new Set(metadata.aliases)];
    
    actors.push({
      name: actorName,
      techniques: uniqueTechniques,
      techniqueCount: uniqueTechniques.length,
      cveCount: metadata.cves.length,
      metadata
    });
  }
  
  return actors;
}

console.log('[TTP] Scanning threat actor folders...');
const actors = scanActorFolders();

console.log(`\n[TTP] Found ${actors.length} threat actors`);

if (actors.length === 0) {
  console.error('[TTP] ✗ No actors found! Check your folder structure.');
  process.exit(1);
}

// Generate index
const index = {
  generated: new Date().toISOString(),
  actorCount: actors.length,
  totalTechniques: new Set(actors.flatMap(a => a.techniques)).size,
  actors: actors.map(a => ({
    name: a.name,
    techniqueCount: a.techniqueCount,
    cveCount: a.cveCount,
    techniques: a.techniques
  }))
};

// Save index
try {
  fs.writeFileSync(INDEX_FILE, JSON.stringify(index, null, 2));
  console.log(`[TTP] ✓ Index saved (${actors.length} actors, ${index.totalTechniques} unique techniques)`);
} catch (err) {
  console.error(`[TTP] ✗ Failed to save index: ${err.message}`);
  process.exit(1);
}

// Save individual actor files
let savedCount = 0;
for (const actor of actors) {
  const filePath = path.join(OUTPUT_DIR, `${actor.name}.json`);
  try {
    fs.writeFileSync(filePath, JSON.stringify(actor, null, 2));
    savedCount++;
    console.log(`[TTP] ✓ Saved ${actor.name}.json (${actor.techniqueCount} techniques)`);
  } catch (err) {
    console.error(`[TTP] ✗ Failed to save ${actor.name}.json: ${err.message}`);
  }
}

console.log(`\n[TTP] ✓ Successfully saved ${savedCount} individual actor files to ${OUTPUT_DIR}`);
console.log('[TTP] ✓ Done!');
