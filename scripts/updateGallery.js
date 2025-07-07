import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import prettier from "prettier";
import { galleryImages } from "../src/data/galleryData.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const galleryFolder = path.join(__dirname, "../public/assets/images/gallery");

// קבצים קיימים בנתיב הגלריה
const allFiles = fs
  .readdirSync(galleryFolder)
  .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file));

// שמות קבצים שכבר קיימים ברשימה
const existingFiles = new Set(
  galleryImages.map((img) => path.basename(img.src))
);

// מזהה תמונות חדשות
const newImages = allFiles.filter((file) => !existingFiles.has(file));

console.log(`📸 Existing images in galleryData.js: ${galleryImages.length}`);
console.log(`🖼️ Total images in folder: ${allFiles.length}`);

if (newImages.length === 0) {
  console.log("✅ No new images found. galleryData.js is up to date.");
  process.exit(0);
}

console.log(`🔍 Found ${newImages.length} new images:`, newImages);

// יוצר את הפריטים החדשים באותו מבנה
const newGalleryEntries = newImages.map((file, i) => ({
  src: `/assets/images/gallery/${file}`,
  alt: file.replace(/\.[^/.]+$/, ""),
  categories: [`new${i + 1}`],
}));

// משרשר לרשימה הישנה
const finalGallery = galleryImages.concat(newGalleryEntries);

// מייצר קובץ חדש באותו פורמט
const output = `export const galleryImages = ${JSON.stringify(
  finalGallery,
  null,
  2
)};`;

// מפעיל prettier לשמירה על אותו סטייל
const formatted = await prettier.format(output, { parser: "babel" });

fs.writeFileSync(
  path.join(__dirname, "../src/data/galleryData.js"),
  formatted,
  "utf8"
);

console.log(`✅ galleryData.js updated. Added ${newImages.length} new images.`);
console.log(`📚 Total images in galleryData.js now: ${finalGallery.length}`);
