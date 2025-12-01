const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');

if (fs.existsSync(wpContentSrc)) {
    if (fs.cpSync) {
        fs.cpSync(wpContentSrc, wpContentDest, { recursive: true });
        console.log('Copied wp-content/');
    } else {
        console.warn('fs.cpSync not found, skipping wp-content copy (please use Node 16.7+)');
    }
}

console.log('Build complete: Static files copied to dist/');
