#!/usr/bin/env node

/**
 * scripts/generate-ttp-json.js
 * 
 * Reads all markdown files from threat actor folders and generates:
 * - ttp-index.json: Complete indexed JSON of all TTPs
 * - data/[actor-name].json: Individual actor files
 */

const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '..', 'data');
const INDEX_FILE = path.join(__dirname, '..', 'ttp-index.json');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log(`[TTP] Created directory: ${OUTPUT_DIR}`);
}

function extractTechniques(content) {
  const techniques = [];
  const lines = content.split('\n');
  
  for (const line of lines) {
    // Match MITRE technique codes: T1234, T1234.001, etc.
    const matches = line.match(/T\d{4}(?:\.\d{3})?/g);
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
    if (!metadata.description && line.trim() && !line.startsWith('#')) {
      metadata.description = line.trim().substring(0, 200); // First 200 chars
    }
    
    // Extract aliases
    if (line.toLowerCase().includes('alias')) {
      const nextLine = lines[i + 1];
      if (nextLine) {
        const alias = nextLine.trim().replace(/^[-*]\s+/, '');
        if (alias && !alias.startsWith('#')) {
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
  const entries = fs.readdirSync(rootDir, { withFileTypes: true });
  
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
    const files = fs.readdirSync(actorPath);
    const mdFiles = files.filter(f => f.endsWith('.md'));
    
    if (mdFiles.length === 0) {
      continue;
    }
    
    console.log(`[TTP] Processing actor: ${actorName}`);
    
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
      const content = fs.readFileSync(filePath, 'utf-8');
      
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
        techniques: techniques
      });
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

console.log(`[TTP] Found ${actors.length} threat actors`);

// Generate index
const index = {
  generated: new Date().toISOString(),
  actorCount: actors.length,
  totalTechniques: new Set(actors.flatMap(a => a.techniques)).size,
  actors: actors.map(a => ({
    name: a.name,
    techniqueCount: a.techniqueCount,
    cveCount: a.cveCount,
    techniques: a.techniques,
    description: a.metadata.description || '',
    descriptionPreview: a.metadata.description ? a.metadata.description.substring(0, 100) : '',
    aliases: a.metadata.aliases || []
  }))
};

// Save index
fs.writeFileSync(INDEX_FILE, JSON.stringify(index, null, 2));
console.log(`[TTP] Index saved to ${INDEX_FILE}`);

// Save individual actor files
for (const actor of actors) {
  const filePath = path.join(OUTPUT_DIR, `${actor.name}.json`);
  fs.writeFileSync(filePath, JSON.stringify(actor, null, 2));
}

console.log(`[TTP] Saved ${actors.length} individual actor files to ${OUTPUT_DIR}`);
console.log('[TTP] Done!');
