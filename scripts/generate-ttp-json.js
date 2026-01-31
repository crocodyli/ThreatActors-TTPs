#!/usr/bin/env node

/**
 * scripts/generate-ttp-json.js
 * 
 * Reads all markdown files from threat actor folders and generates:
 * - ttp-index.json: Complete indexed JSON of all TTPs WITH MITRE descriptions
 * - data/[actor-name].json: Individual actor files
 * 
 * MITRE enrichment: Fetches technique descriptions from official MITRE STIX data
 * and embeds them in the index, eliminating the need for clients to fetch the 60MB file
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const OUTPUT_DIR = path.join(__dirname, '..', 'data');
const INDEX_FILE = path.join(__dirname, '..', 'ttp-index.json');
const MITRE_STIX_URL = 'https://raw.githubusercontent.com/mitre/cti/master/enterprise-attack/enterprise-attack.json';
const MITRE_INTRUSION_SETS_URL = 'https://raw.githubusercontent.com/mitre/cti/master/enterprise-attack/intrusion-set/intrusion-set.json';

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log(`[TTP] Created directory: ${OUTPUT_DIR}`);
}

/**
 * Fetch MITRE intrusion-set descriptions (APT groups)
 */
async function fetchMITREActorDescriptions() {
  console.log('[TTP] Fetching MITRE intrusion-set descriptions...');
  
  return new Promise((resolve, reject) => {
    https.get(MITRE_INTRUSION_SETS_URL, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const stixData = JSON.parse(data);
          const actorMap = new Map();
          
          console.log('[TTP] Parsing MITRE intrusion-set data...');
          
          for (const obj of stixData.objects || []) {
            if (obj.type === 'intrusion-set') {
              const name = obj.name || '';
              const aliases = obj.aliases || [];
              const description = obj.description || '';
              const mitreId = obj.external_references?.find(ref => ref.source_name === 'mitre-attack')?.external_id;
              
              // Map by name
              if (name) {
                actorMap.set(name.toLowerCase(), {
                  name,
                  description,
                  aliases,
                  mitreId
                });
              }
              
              // Map by all aliases for easier lookup
              for (const alias of aliases) {
                if (alias) {
                  actorMap.set(alias.toLowerCase(), {
                    name,
                    description,
                    aliases,
                    mitreId
                  });
                }
              }
            }
          }
          
          console.log(`[TTP] Loaded ${actorMap.size} MITRE actor entries`);
          resolve(actorMap);
        } catch (err) {
          reject(new Error(`Failed to parse MITRE intrusion-set data: ${err.message}`));
        }
      });
    }).on('error', (err) => {
      reject(new Error(`Failed to fetch MITRE intrusion-set data: ${err.message}`));
    });
  });
}

/**
 * Fetch MITRE ATT&CK technique descriptions
 * This runs server-side during generation, so the 60MB download doesn't impact users
 */
async function fetchMITREDescriptions() {
  console.log('[TTP] Fetching MITRE ATT&CK descriptions...');
  
  return new Promise((resolve, reject) => {
    https.get(MITRE_STIX_URL, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const stixData = JSON.parse(data);
          const techniqueMap = new Map();
          
          console.log('[TTP] Parsing MITRE STIX data...');
          
          for (const obj of stixData.objects || []) {
            if (obj.type === 'attack-pattern' && obj.external_references) {
              const mitreRef = obj.external_references.find(
                ref => ref.source_name === 'mitre-attack' && ref.external_id
              );
              
              if (mitreRef) {
                const tNumber = mitreRef.external_id;
                
                techniqueMap.set(tNumber, {
                  name: obj.name || '',
                  description: obj.description || '',
                  url: mitreRef.url || `https://attack.mitre.org/techniques/${tNumber.replace('.', '/')}`,
                  tactics: obj.kill_chain_phases?.map(phase => phase.phase_name) || [],
                  platforms: obj.x_mitre_platforms || []
                });
              }
            }
          }
          
          console.log(`[TTP] Loaded ${techniqueMap.size} MITRE technique descriptions`);
          resolve(techniqueMap);
        } catch (err) {
          reject(new Error(`Failed to parse MITRE data: ${err.message}`));
        }
      });
    }).on('error', (err) => {
      reject(new Error(`Failed to fetch MITRE data: ${err.message}`));
    });
  });
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

async function main() {
  console.log('[TTP] Starting TTP JSON generation with MITRE enrichment...');
  
  // Fetch MITRE descriptions first
  let mitreDescriptions;
  let mitreActorDescriptions;
  
  try {
    [mitreDescriptions, mitreActorDescriptions] = await Promise.all([
      fetchMITREDescriptions(),
      fetchMITREActorDescriptions()
    ]);
  } catch (err) {
    console.error(`[TTP] WARNING: Failed to fetch MITRE data: ${err.message}`);
    console.error('[TTP] Continuing without MITRE enrichment...');
    mitreDescriptions = new Map();
    mitreActorDescriptions = new Map();
  }
  
  // Scan actor folders
  console.log('[TTP] Scanning threat actor folders...');
  const actors = scanActorFolders();
  
  console.log(`[TTP] Found ${actors.length} threat actors`);
  
  // Collect all unique techniques across all actors
  const allUniqueTechniques = new Set(actors.flatMap(a => a.techniques));
  
  // Build enriched technique details
  const techniqueDetails = {};
  let enrichedCount = 0;
  let missingCount = 0;
  
  for (const tNumber of allUniqueTechniques) {
    const mitreInfo = mitreDescriptions.get(tNumber);
    if (mitreInfo) {
      techniqueDetails[tNumber] = mitreInfo;
      enrichedCount++;
    } else {
      // Technique exists in our data but not in MITRE (possibly deprecated or typo)
      console.warn(`[TTP] Warning: Technique ${tNumber} not found in MITRE data`);
      techniqueDetails[tNumber] = {
        name: tNumber,
        description: 'Description not available',
        url: `https://attack.mitre.org/techniques/${tNumber.replace('.', '/')}`,
        tactics: [],
        platforms: []
      };
      missingCount++;
    }
  }
  
  console.log(`[TTP] Enriched ${enrichedCount} techniques with MITRE data`);
  if (missingCount > 0) {
    console.warn(`[TTP] ${missingCount} techniques missing from MITRE data`);
  }
  
  // Generate enriched index
  const index = {
    generated: new Date().toISOString(),
    actorCount: actors.length,
    totalTechniques: allUniqueTechniques.size,
    mitreEnriched: enrichedCount > 0,
    techniques: techniqueDetails, // MITRE descriptions embedded here!
    actors: actors.map(a => ({
      name: a.name,
      techniqueCount: a.techniqueCount,
      cveCount: a.cveCount,
      techniques: a.techniques
    }))
  };
  
  // Save enriched index
  fs.writeFileSync(INDEX_FILE, JSON.stringify(index, null, 2));
  const indexSizeKB = (fs.statSync(INDEX_FILE).size / 1024).toFixed(2);
  console.log(`[TTP] Enriched index saved to ${INDEX_FILE} (${indexSizeKB} KB)`);
  
  // Save individual actor files to data/ folder
  for (const actor of actors) {
    const filePath = path.join(OUTPUT_DIR, `${actor.name}.json`);
    fs.writeFileSync(filePath, JSON.stringify(actor, null, 2));
  }
  
  console.log(`[TTP] Saved ${actors.length} individual actor files to ${OUTPUT_DIR}`);
  
  // Generate actor.json in each actor's folder with MITRE descriptions
  console.log('[TTP] Generating actor.json files in actor folders...');
  const rootDir = path.join(__dirname, '..');
  let actorJsonCount = 0;
  
  for (const actor of actors) {
    const actorFolderPath = path.join(rootDir, actor.name);
    
    // Skip if folder doesn't exist
    if (!fs.existsSync(actorFolderPath)) {
      continue;
    }
    
    // Check if this actor has MITRE description
    const mitreInfo = mitreActorDescriptions.get(actor.name.toLowerCase());
    
    // Determine actor type based on naming patterns
    const APT_PATTERNS = [
      /^APT\d+/i, /^APT-\d+/i,
      /lazarus/i, /kimsuky/i, /andariel/i, /bluenoroff/i,
      /equation group/i, /cozy bear/i, /fancy bear/i, /sandworm/i,
      /winnti/i, /carbanak/i, /ocean lotus/i, /turla/i, /dragonfly/i,
      /leafminer/i, /oilrig/i, /^FIN\d+/i, /admin@338/i, /naikon/i
    ];
    const isAPT = APT_PATTERNS.some(pattern => pattern.test(actor.name));
    
    // Build actor.json content
    const actorJson = {
      name: actor.name,
      type: isAPT ? 'apt' : 'ransomware',
      description: mitreInfo?.description || actor.metadata?.description || '',
      aliases: mitreInfo?.aliases || actor.metadata?.aliases || [],
      mitreId: mitreInfo?.mitreId || null,
      techniqueCount: actor.techniqueCount,
      techniques: actor.techniques,
      cveCount: actor.cveCount,
      cves: actor.metadata?.cves || [],
      lastUpdated: new Date().toISOString()
    };
    
    // Extract first sentence of description for preview
    if (actorJson.description) {
      const firstSentence = actorJson.description.match(/^[^.!?]+[.!?]/);
      actorJson.descriptionPreview = firstSentence ? firstSentence[0].trim() : actorJson.description.slice(0, 150);
    } else {
      actorJson.descriptionPreview = '';
    }
    
    // Write actor.json to actor's folder
    const actorJsonPath = path.join(actorFolderPath, 'actor.json');
    fs.writeFileSync(actorJsonPath, JSON.stringify(actorJson, null, 2));
    actorJsonCount++;
  }
  
  console.log(`[TTP] Generated ${actorJsonCount} actor.json files in actor folders`);
  console.log('[TTP] Done!');
}

// Run
main().catch(err => {
  console.error('[TTP] Fatal error:', err);
  process.exit(1);
});
