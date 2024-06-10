const fs = require("fs");

const readCartsFromFile = ({ cartsFilePath }) => {
  const rawData = fs.readFileSync(cartsFilePath, "utf-8");
  const cartsModule = eval(rawData);
  return cartsModule.carts;
};

const writeCartsToFile = ({ cartsFilePath, fileContent }) => {
  fs.writeFileSync(cartsFilePath, fileContent, "utf-8");
};

module.exports = { readCartsFromFile, writeCartsToFile };
