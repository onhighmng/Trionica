const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');

// Create dist directory
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}

// Copy all HTML files
const htmlFiles = fs.readdirSync(__dirname).filter(file => file.endsWith('.html'));
htmlFiles.forEach(file => {
    fs.copyFileSync(path.join(__dirname, file), path.join(distDir, file));
    console.log(`Copied ${file}`);
});

// Copy wp-content
const wpContentSrc = path.join(__dirname, 'wp-content');
const wpContentDest = path.join(distDir, 'wp-content');

if (fs.existsSync(wpContentSrc)) {
    if (fs.cpSync) {
        fs.cpSync(wpContentSrc, wpContentDest, { recursive: true });
        console.log('Copied wp-content/');
    } else {
        console.warn('fs.cpSync not found, skipping wp-content copy (please use Node 16.7+)');
    }
}

console.log('Build complete: Static files copied to dist/');
