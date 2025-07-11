/**
 * This script does the following:
 * 1. Scans the gallery folder for any new images (jpg, jpeg, png, webp).
 * 2. Automatically converts any new images to .webp format (high quality).
 * 3. Deletes the original uncompressed files after conversion.
 * 4. Updates galleryData.js with the new image entries in webp format.
 *
 * So you can simply drop any image into the gallery folder,
 * and run this script - it will compress, convert and update the data automatically.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import prettier from "prettier";
import sharp from "sharp";
import { galleryImages } from "../src/data/galleryData.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const galleryFolder = path.join(__dirname, "../public/assets/images/gallery");

// Get all files in gallery folder
const allFiles = fs
  .readdirSync(galleryFolder)
  .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file));

// Build a set of existing file names in galleryData.js
const existingFiles = new Set(
  galleryImages.map((img) => path.basename(img.src))
);

// Detect new images
const newImages = allFiles.filter((file) => !existingFiles.has(file));

console.log(`📸 Existing images in galleryData.js: ${galleryImages.length}`);
console.log(`🖼️ Total images in folder: ${allFiles.length}`);

if (newImages.length === 0) {
  console.log("✅ No new images found. galleryData.js is up to date.");
  process.exit(0);
}

// Process new images: convert to .webp
for (const file of newImages) {
  const ext = path.extname(file).toLowerCase();
  const basename = path.basename(file, ext);
  const inputPath = path.join(galleryFolder, file);
  const outputWebp = path.join(galleryFolder, `${basename}.webp`);

  // Only convert if not already webp
  if (ext !== ".webp") {
    console.log(`🛠️ Converting ${file} -> ${basename}.webp`);
    await sharp(inputPath).webp({ quality: 80 }).toFile(outputWebp);

    // Delete original file
    fs.unlinkSync(inputPath);
  } else {
    console.log(`✅ ${file} is already webp`);
  }
}

// After conversion, reload the folder
const updatedFiles = fs
  .readdirSync(galleryFolder)
  .filter((file) => /\.webp$/i.test(file));

// Build new entries
const newGalleryEntries = updatedFiles
  .filter((file) => !existingFiles.has(file))
  .map((file, i) => ({
    src: `/assets/images/gallery/${file}`,
    alt: file.replace(/\.[^/.]+$/, ""),
    categories: [`new${i + 1}`],
  }));

// Merge with existing gallery
const finalGallery = galleryImages.concat(newGalleryEntries);

// Format and write
const output = `export const galleryImages = ${JSON.stringify(
  finalGallery,
  null,
  2
)};`;

const formatted = await prettier.format(output, { parser: "babel" });

fs.writeFileSync(
  path.join(__dirname, "../src/data/galleryData.js"),
  formatted,
  "utf8"
);

console.log(
  `✅ galleryData.js updated. Added ${newGalleryEntries.length} new images.`
);
console.log(`📚 Total images in galleryData.js now: ${finalGallery.length}`);
