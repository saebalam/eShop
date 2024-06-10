const fs = require("fs");

const readWishlistsFromFile = ({ wishlistsFilePath }) => {
  const rawData = fs.readFileSync(wishlistsFilePath, "utf-8");
  const wishlistsModule = eval(rawData);
  return wishlistsModule.wishlists;
};

const writeWishlistsToFile = ({ wishlistsFilePath, fileContent }) => {
  fs.writeFileSync(wishlistsFilePath, fileContent, "utf-8");
};

module.exports = { readWishlistsFromFile, writeWishlistsToFile };
