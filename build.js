const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');

// Create dist directory
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}

// Copy index.html
if (fs.existsSync(path.join(__dirname, 'index.html'))) {
    fs.copyFileSync(path.join(__dirname, 'index.html'), path.join(distDir, 'index.html'));
}

// Copy wp-content
const wpContentSrc = path.join(__dirname, 'wp-content');
const wpContentDest = path.join(distDir, 'wp-content');

if (fs.existsSync(wpContentSrc)) {
    // fs.cpSync is available in Node 16.7.0+
    if (fs.cpSync) {
        fs.cpSync(wpContentSrc, wpContentDest, { recursive: true });
    } else {
        // Fallback for older Node versions (though Vercel should be new enough)
        console.warn('fs.cpSync not found, skipping wp-content copy (please use Node 16.7+)');
    }
}

console.log('Build complete: Static files copied to dist/');
