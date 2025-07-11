/**
 * Script to convert all image references in code files (jsx, tsx, html, htm, js)
 * from .jpg/.jpeg/.png to .webp (case-insensitive).
 * Includes also data files (galleryData.js, recipesData.js).
 */

import fs from "fs";
import { glob } from "glob";

const exts = ["jsx", "tsx", "html", "htm", "js"];

for (const ext of exts) {
  const files = await glob(`./src/**/*.${ext}`);

  for (const file of files) {
    let content = fs.readFileSync(file, "utf-8");

    const updated = content.replace(/(\.jpg|\.jpeg|\.png)(?=["'])/gi, ".webp");

    if (updated !== content) {
      fs.writeFileSync(file, updated, "utf-8");
      console.log(`✅ Updated: ${file}`);
    }
  }
}

// Also update public HTML files
const htmlFiles = await glob(`./public/**/*.html`);
for (const file of htmlFiles) {
  let content = fs.readFileSync(file, "utf-8");
  const updated = content.replace(/(\.jpg|\.jpeg|\.png)(?=["'])/gi, ".webp");

  if (updated !== content) {
    fs.writeFileSync(file, updated, "utf-8");
    console.log(`✅ Updated: ${file}`);
  }
}

// Also handle your specific data files
const dataFiles = ["./src/data/galleryData.js", "./src/data/recipesData.js"];

for (const file of dataFiles) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, "utf-8");
    const updated = content.replace(/(\.jpg|\.jpeg|\.png)(?=["'])/gi, ".webp");

    if (updated !== content) {
      fs.writeFileSync(file, updated, "utf-8");
      console.log(`✅ Updated data file: ${file}`);
    }
  }
}

console.log("🚀 Done replacing all image extensions to .webp");
