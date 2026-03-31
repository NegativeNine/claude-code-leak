Readme · MD
Copy

# Extracting Source Code from npm Source Maps
 
## 1. Find the .map file
 
Check an installed npm package for source maps:
 
```bash
npm pack <package-name>
tar -xzf <package-name>-<version>.tgz
find package/ -name "*.map"
```
 
Or check CDNs directly:
 
```
https://unpkg.com/<package-name>/dist/index.js.map
```
 
## 2. Inspect the map file
 
```bash
cat your-file.js.map | jq '.sources[:10]'
cat your-file.js.map | jq '.sourcesContent | length'
```
 
If `sourcesContent` is empty, the map doesn't contain embedded source — you'll need to get it from the repo instead.
 
## 3. Extract to files
 
Save the following as `extract.js`:
 
```javascript
const fs = require('fs');
const path = require('path');
 
const map = JSON.parse(fs.readFileSync('your-file.js.map', 'utf8'));
 
map.sources.forEach((source, i) => {
  const content = map.sourcesContent?.[i];
  if (!content) return;
 
  let cleanPath = source
    .replace(/^webpack:\/\/[^/]*\//, '')
    .replace(/^\.\//, '')
    .replace(/^\/*/, '')
    .replace(/\?\w+$/, '');
 
  const outPath = path.join('output', cleanPath);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, content);
  console.log(`Extracted: ${outPath}`);
});
```
 
Run it:
 
```bash
node extract.js
```
 
Adjust the `replace()` lines based on your bundler's path format (webpack, rollup, vite, etc.).