const fs = require("fs");

const readUsersFromFile = ({ usersFilePath }) => {
  const rawData = fs.readFileSync(usersFilePath, "utf-8");
  const usersModule = eval(rawData);
  return usersModule.users;
};

const writeUsersToFile = ({ usersFilePath, fileContent }) => {
  fs.writeFileSync(usersFilePath, fileContent, "utf-8");
};

module.exports = { readUsersFromFile, writeUsersToFile };
