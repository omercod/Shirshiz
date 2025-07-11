import sharp from "sharp";
import fs from "fs";
import path from "path";
import { glob } from "glob";

// הגדר תיקייה
const imagesDir = "./public/assets"; // או איפה שאתה מחזיק את התמונות

// קח את כל הקבצים
const files = glob.sync(`${imagesDir}/**/*.{jpg,jpeg,png}`);

console.log(`🎯 Found ${files.length} image(s) to convert.`);

for (const file of files) {
  const ext = path.extname(file);
  const output = file.replace(ext, ".webp");

  if (fs.existsSync(output)) {
    console.log(`✅ Already exists: ${output}`);
    continue;
  }

  try {
    await sharp(file).webp({ quality: 90 }).toFile(output);

    console.log(`✅ Converted: ${file} -> ${output}`);
  } catch (err) {
    console.error(`❌ Failed to convert ${file}:`, err);
  }
}

console.log("🚀 All done!");
