const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const wpContentSrc = path.join(__dirname, 'wp-content');
const wpContentDest = path.join(distDir, 'wp-content');

console.log('Starting build...');

// 1. Create dist directory
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
    console.log('Created dist directory');
}

// 2. Copy HTML files
const files = fs.readdirSync(__dirname);
files.forEach(file => {
    if (path.extname(file) === '.html') {
        const srcPath = path.join(__dirname, file);
        const destPath = path.join(distDir, file);
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${file}`);
    }
});

// 3. Copy wp-content
if (fs.existsSync(wpContentSrc)) {
    console.log('Copying wp-content...');
    // fs.cpSync is available in Node > 16.7
    try {
        fs.cpSync(wpContentSrc, wpContentDest, { recursive: true });
        console.log('Successfully copied wp-content');
    } catch (err) {
        console.error('Error copying wp-content:', err);
        process.exit(1);
    }
} else {
    console.warn('Warning: wp-content directory NOT found! Assets may be missing.');
}

console.log('Build complete: Static files copied to dist/');
