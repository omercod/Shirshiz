import fs from "fs";
import { glob } from "glob";

(async () => {
  const files = await glob("./public/assets/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}");

  for (const file of files) {
    fs.unlinkSync(file);
    console.log(`🗑️ Deleted: ${file}`);
  }

  console.log(`✅ Done deleting old image files.`);
})();
