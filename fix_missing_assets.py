import os
import shutil
import re
from urllib.parse import unquote

def fix_assets():
    source_dir = "Extracted_Images"
    if not os.path.exists(source_dir):
        print(f"Source directory {source_dir} not found.")
        return

    # Map of commonly missing files to their likely counterparts in Extracted_Images
    # This acts as a fallback or override if exact filename match fails or we need to map jpg to png
    manual_map = {
        "Contadores-mecânicos-e-eletrónicos-300x300.jpg": "Contadores-mecânicos.png", # Approximate
        "instrumentaçao-aguas.jpg": "Venturi-Meter-Close-Small_eb63490c4c5f076e66b6fd68063c6f1d.jpg", # Approximate
        "ETARs-–-Estações-de-Tratamento-de-aguas-residuais.jpg": "ETARs.jpg", # Approximate
        "ruido-e-vibraçao.jpg": "Ruido-e-vibração.jpg", # Character mismatch
        "Magnetómetro-ou-gradiómetros.jpg": "Overhauser.jpg", # Approximate
    }

    html_files = [f for f in os.listdir('.') if f.endswith('.html')]
    
    img_src_re = re.compile(r'<img[^>]+src=["\']([^"\']+)["\']', re.IGNORECASE)
    
    for html_file in html_files:
        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
        except UnicodeDecodeError:
            with open(html_file, 'r', encoding='latin-1') as f:
                content = f.read()
                
        for match in img_src_re.finditer(content):
            src = match.group(1)
            if src and not src.startswith('http') and not src.startswith('data:') and not src.startswith('#'):
                # Clean path
                rel_path = unquote(src.split('?')[0])
                if os.path.exists(rel_path):
                    continue
                
                # File is missing
                filename = os.path.basename(rel_path)
                
                # Check for exact match in Extracted_Images
                source_path = os.path.join(source_dir, filename)
                
                # Check for manual map
                if filename in manual_map:
                    if manual_map[filename]:
                        source_path = os.path.join(source_dir, manual_map[filename])
                    else:
                        print(f"Skipping manual map None for {filename}")
                        continue
                
                # Try to find file with different case or encoding if not found
                if not os.path.exists(source_path):
                    # Try finding in source_dir ignoring case
                    found = False
                    for existing_file in os.listdir(source_dir):
                        if existing_file.lower() == filename.lower():
                            source_path = os.path.join(source_dir, existing_file)
                            found = True
                            break
                        # specific fix for 'vibraçao' vs 'vibração'
                        if 'vibra' in filename and 'vibra' in existing_file and filename[:5] == existing_file[:5]:
                             # Loose match? No be careful.
                             pass
                    
                    if not found and filename not in manual_map:
                        print(f"Could not find source for {filename}")
                        continue
                        
                if os.path.exists(source_path):
                    # Create destination directory
                    dest_dir = os.path.dirname(rel_path)
                    os.makedirs(dest_dir, exist_ok=True)
                    
                    # Copy
                    shutil.copy2(source_path, rel_path)
                    print(f"Restored {rel_path} from {source_path}")
                else:
                    print(f"Source file still not found for {rel_path} (looked for {source_path})")

if __name__ == "__main__":
    fix_assets()
