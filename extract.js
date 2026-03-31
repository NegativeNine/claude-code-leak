const fs = require('fs');
const path = require('path');

const map = JSON.parse(fs.readFileSync('cli.js.map', 'utf8'));

map.sources.forEach((source, i) => {
  const content = map.sourcesContent?.[i];
  if (!content) return;

  // Strip common bundler prefixes
  let cleanPath = source
    .replace(/^webpack:\/\/[^/]*\//, '')
    .replace(/^\.\//, '')
    .replace(/^\/*/, '')
    .replace(/\?\w+$/, '');

  // Skip node_modules if you only want app code
  // if (cleanPath.startsWith('node_modules')) return;

  const outPath = path.join('output', cleanPath);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, content);
  console.log(`Extracted: ${outPath}`);
});