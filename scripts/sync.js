const fs = require('fs');
const path = require('path');

// Load config
const CONFIG_PATH = path.join(__dirname, '../sync-config.json');
if (!fs.existsSync(CONFIG_PATH)) {
  console.error('Error: sync-config.json not found. Copy sync-config.example.json to sync-config.json and configure it.');
  process.exit(1);
}

const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
const rootDir = path.join(__dirname, '..');

const masterFiles = ['CLAUDE.md', 'PRINCIPLES.md', 'GEMINI.md', 'WRITING.md', 'DESIGN.md', 'DATABASE.md', 'DEVOPS.md', 'TESTING.md', 'SECURITY.md', 'ANALYSIS.md', 'AGILE.md', 'STACKS.md'];

const missing = masterFiles.filter((name) => !fs.existsSync(path.join(rootDir, name)));
if (missing.length > 0) {
  console.error(`Error: Master file(s) not found in root: ${missing.join(', ')}.`);
  process.exit(1);
}

const CANON_URL = 'https://github.com/malkoromanievgenovich/ai-process-architecture';
const PROVENANCE = `\n\n---\n*Synced from the canon — single source of truth: <${CANON_URL}>. Edit at the source, not here; local changes are overwritten on the next sync.*\n`;

const masterContents = masterFiles.map((name) => ({
  name,
  content: fs.readFileSync(path.join(rootDir, name), 'utf8'),
}));

function syncProject(project) {
  console.log(`Syncing project: ${project.name} at ${project.path}`);

  if (!fs.existsSync(project.path)) {
    console.warn(`Warning: Path ${project.path} does not exist. Skipping.`);
    return;
  }

  // Optional per-project layout: canon files land in `subpath`, except the
  // files in `rootFiles` which always stay at the project root (e.g. CLAUDE.md,
  // which the agent auto-loads from root). Absent subpath → flat sync to root.
  const subpath = project.subpath || '';
  const rootFiles = project.rootFiles || (subpath ? ['CLAUDE.md'] : []);

  const targetDir = path.join(project.path, subpath);
  if (subpath && !fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  masterContents.forEach(({ name, content }) => {
    const stamped = `${content.replace(/\s*$/, '')}${PROVENANCE}`;
    const dir = rootFiles.includes(name) ? project.path : targetDir;
    fs.writeFileSync(path.join(dir, name), stamped, 'utf8');
    const rel = path.relative(project.path, path.join(dir, name));
    console.log(`  Updated: ${rel}`);
  });
}

config.projects.forEach(syncProject);
console.log('Sync complete.');
