const fs = require('fs');
const path = require('path');

const root = __dirname;
const distDir = path.join(root, 'dist');

// Server-side WordPress leftovers and source files that a static site never serves.
// Dropping them keeps the deploy well under Cloudflare's per-version file limit.
const SKIP_EXT = new Set(['.php', '.tsx', '.ts', '.map', '.md', '.po', '.mo', '.pot']);
const SKIP_DIRS = new Set(['wp-content/cache', 'wp-content/languages']);

console.log('Starting build...');
fs.rmSync(distDir, { recursive: true, force: true });
fs.mkdirSync(distDir, { recursive: true });

// 1. Top-level pages and static files
for (const file of fs.readdirSync(root)) {
    const ext = path.extname(file);
    if (ext === '.html' || file === 'robots.txt') {
        fs.copyFileSync(path.join(root, file), path.join(distDir, file));
        console.log(`Copied ${file}`);
    }
}

// 2. Domain-verification folders (e.g. ACME / PKI validation)
const wellKnown = path.join(root, '.well-known');
if (fs.existsSync(wellKnown)) {
    fs.cpSync(wellKnown, path.join(distDir, '.well-known'), { recursive: true });
}

// 3. wp-content, filtered
let copied = 0;
function copyDir(rel) {
    if (SKIP_DIRS.has(rel)) return;
    const src = path.join(root, rel);
    for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
        const childRel = `${rel}/${entry.name}`;
        if (entry.isDirectory()) {
            copyDir(childRel);
        } else if (!SKIP_EXT.has(path.extname(entry.name).toLowerCase())) {
            const dest = path.join(distDir, childRel);
            fs.mkdirSync(path.dirname(dest), { recursive: true });
            fs.copyFileSync(path.join(root, childRel), dest);
            copied++;
        }
    }
}
if (fs.existsSync(path.join(root, 'wp-content'))) {
    copyDir('wp-content');
    console.log(`Copied ${copied} files from wp-content`);
} else {
    console.warn('Warning: wp-content directory NOT found! Assets may be missing.');
}

console.log('Build complete: Static files copied to dist/');
