const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const imagePath = path.join(__dirname, "public", "profile1.webp");
const tempPath = path.join(__dirname, "public", "profile1-temp.webp");
const outputPath = path.join(__dirname, "public", "profile1.webp");

sharp(imagePath)
  .resize(600, 750, {
    fit: "cover",
    withoutEnlargement: true,
  })
  .webp({ quality: 75, effort: 6 })
  .toFile(tempPath)
  .then((info) => {
    fs.renameSync(tempPath, outputPath);
    console.log("Image compressed successfully!");
    console.log("Output info:", info);
  })
  .catch((err) => {
    console.error("Error compressing image:", err);
  });
