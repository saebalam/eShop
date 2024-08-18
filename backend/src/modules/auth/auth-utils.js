const fs = require("fs");

const readUsers = ({ usersFilePath }) => {
  const rawData = fs.readFileSync(usersFilePath, "utf-8");
  const usersModule = eval(rawData);
  return usersModule.users;
};

const writeUsers = ({ usersFilePath, fileContent }) => {
  fs.writeFileSync(usersFilePath, fileContent, "utf-8");
};

module.exports = { readUsers, writeUsers };
