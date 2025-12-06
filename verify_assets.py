import os
import re
from urllib.parse import unquote

def check_assets():
    html_files = [f for f in os.listdir('.') if f.endswith('.html')]
    missing_assets = []
    
    # Simple regex to capture src="..." or href="..."
    # We are looking for locally referenced files
    
    # Regex for src attributes
    img_src_re = re.compile(r'<img[^>]+src=["\']([^"\']+)["\']', re.IGNORECASE)
    # Regex for link href (stylesheets)
    link_href_re = re.compile(r'<link[^>]+href=["\']([^"\']+)["\']', re.IGNORECASE)
    
    for html_file in html_files:
        print(f"Checking {html_file}...")
        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
        except UnicodeDecodeError:
             with open(html_file, 'r', encoding='latin-1') as f:
                content = f.read()

        # Check images
        for match in img_src_re.finditer(content):
            src = match.group(1)
            if src and not src.startswith('http') and not src.startswith('data:') and not src.startswith('#'):
                # Clean path (remove query params)
                path = unquote(src.split('?')[0])
                if not os.path.exists(path):
                    missing_assets.append(f"{html_file}: Image not found: {path}")
                    
        # Check stylesheets
        for match in link_href_re.finditer(content):
            href = match.group(1)
            # Filter for css or likely local files
            if href and not href.startswith('http') and not href.startswith('data:') and not href.startswith('#'):
                 path = unquote(href.split('?')[0])
                 if not os.path.exists(path):
                    missing_assets.append(f"{html_file}: Asset not found: {path}")
                    
    if missing_assets:
        print("\nMissing Assets Found:")
        for item in missing_assets:
            print(item)
    else:
        print("\nAll local assets verified successfully!")

if __name__ == "__main__":
    check_assets()
