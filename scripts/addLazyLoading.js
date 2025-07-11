import fs from "fs";
import path from "path";

const targetDirs = ["./src/pages", "./src/components"];
const extensions = [".jsx", ".tsx"];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, "utf-8");
  const originalContent = content;

  content = content.replace(
    /<img(?![^>]*loading=)([^>]*)\/>/g,
    (match, attrs) => {
      return `<img${attrs} loading="lazy" />`;
    }
  );

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Updated: ${filePath}`);
    return true;
  }
  return false;
}

function walkDir(dir) {
  let updatedCount = 0;
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      updatedCount += walkDir(fullPath);
    } else if (extensions.includes(path.extname(fullPath))) {
      if (processFile(fullPath)) {
        updatedCount++;
      }
    }
  });
  return updatedCount;
}

let totalUpdated = 0;
for (const dir of targetDirs) {
  if (fs.existsSync(dir)) {
    totalUpdated += walkDir(dir);
  }
}

console.log(`\n🎉 Completed. Total files updated: ${totalUpdated}`);
