import fs from "fs";

const filePath = "./src/pages/Home.jsx";
let content = fs.readFileSync(filePath, "utf-8");

// מחפש כל תג <img ... /> שלא מכיל loading
content = content.replace(
  /<img(?![^>]*loading=)([^>]*)\/>/g,
  (match, attrs) => {
    return `<img${attrs} loading="lazy" />`;
  }
);

fs.writeFileSync(filePath, content);
console.log(`✅ Added loading="lazy" to all <img /> tags in ${filePath}`);
