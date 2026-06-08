const fs = require('fs');
const path = require('path');

const modulesDir = path.join(__dirname, '../modules');
const categories = ['backend', 'frontend', 'mobile', 'engineering', 'core'];

let errors = [];

function checkModule(modulePath, moduleName) {
  const claudMd = path.join(modulePath, 'CLAUDE.md');
  const geminiMd = path.join(modulePath, 'GEMINI.md');

  if (!fs.existsSync(claudMd) && !fs.existsSync(geminiMd)) {
    errors.push(`Module "${moduleName}" must have at least CLAUDE.md or GEMINI.md`);
  }

  if (fs.existsSync(claudMd)) {
    const content = fs.readFileSync(claudMd, 'utf8');
    if (!content.startsWith('# CLAUDE.md — ')) {
      errors.push(`Module "${moduleName}" CLAUDE.md should start with "# CLAUDE.md — "`);
    }
  }
}

categories.forEach(cat => {
  const catPath = path.join(modulesDir, cat);
  if (!fs.existsSync(catPath)) {
    errors.push(`Category directory "${cat}" missing in modules/`);
    return;
  }

  if (cat === 'core') {
    checkModule(catPath, 'core');
  } else {
    const modules = fs.readdirSync(catPath);
    modules.forEach(mod => {
      const modPath = path.join(catPath, mod);
      if (fs.lstatSync(modPath).isDirectory()) {
        checkModule(modPath, `${cat}/${mod}`);
      }
    });
  }
});

// Validate sync-config.json
const configPath = path.join(__dirname, '../sync-config.json');
if (fs.existsSync(configPath)) {
  try {
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    if (!config.projects || !Array.isArray(config.projects)) {
      errors.push('sync-config.json must contain a "projects" array');
    } else {
      config.projects.forEach((proj, index) => {
        if (!proj.name || !proj.path || !proj.modules) {
          errors.push(`Project at index ${index} in sync-config.json is missing required fields (name, path, modules)`);
        }
      });
    }
  } catch (e) {
    errors.push(`sync-config.json is not a valid JSON: ${e.message}`);
  }
} else {
  console.log('Note: sync-config.json not found, skipping config validation.');
}

if (errors.length > 0) {
  console.error('Validation failed:');
  errors.forEach(err => console.error(`- ${err}`));
  process.exit(1);
} else {
  console.log('Validation passed!');
}
