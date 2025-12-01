import re, os

input_path = r"f:/LJR/onhigh management/Trionica/WebsiteCopy.txt"
output_path = r"f:/LJR/onhigh management/Trionica/FullBuildSpec.txt"

if not os.path.exists(input_path):
    raise FileNotFoundError(f"Input file not found: {input_path}")

with open(input_path, "r", encoding="utf-8") as f:
    lines = [line.rstrip('\n') for line in f]

pages = []
idx = 0
while idx < len(lines):
    line = lines[idx]
    if line.startswith("Page:"):
        m = re.match(r"Page: (.+) \(ID: (\d+)\)", line)
        if not m:
            idx += 1
            continue
        title, page_id = m.groups()
        page = {"title": title, "id": page_id, "type": "", "content": [], "images": []}
        # advance to find Type line
        idx += 1
        while idx < len(lines) and not lines[idx].startswith("Type:"):
            idx += 1
        if idx < len(lines) and lines[idx].startswith("Type:"):
            page["type"] = lines[idx].split(":",1)[1].strip()
            idx += 1
        # skip possible blank lines and "Copy:" label
        while idx < len(lines) and (lines[idx].strip() == "" or lines[idx].startswith("Copy:")):
            idx += 1
        # collect content until a line starting with "---" or "Images:"
        while idx < len(lines) and not lines[idx].startswith("---") and not lines[idx].startswith("Images:"):
            page["content"].append(lines[idx])
            idx += 1
        # skip separator lines
        while idx < len(lines) and lines[idx].startswith("---"):
            idx += 1
        # images line
        if idx < len(lines) and lines[idx].startswith("Images:"):
            imgs = lines[idx].split(":",1)[1].strip()
            if imgs and imgs != "None":
                page["images"] = [i.strip() for i in imgs.split(",")]
            idx += 1
        pages.append(page)
    else:
        idx += 1

with open(output_path, "w", encoding="utf-8") as out:
    out.write("# Full Build Specification\n\n")
    out.write("This file contains the complete plain‑text content for each page/post together with the image filenames referenced.\n\n")
    for p in pages:
        out.write(f"## {p['title']} (ID: {p['id']})\n\n")
        out.write(f"Type: {p['type']}\n\n")
        out.write("Content:\n\n")
        out.write("\n".join(p['content']))
        out.write("\n\n")
        out.write("Images:\n")
        if p['images']:
            for img in p['images']:
                out.write(f"- {img}\n")
        else:
            out.write("- None\n")
        out.write("\n---\n\n")
print(f"Full spec written to {output_path}")
