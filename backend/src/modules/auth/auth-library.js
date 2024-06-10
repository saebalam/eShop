const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
const usersData = require("../../../database/users");
const { readUsersFromFile, writeUsersToFile } = require("./auth-utils");

const usersFilePath = path.join(__dirname, "../../../database/users.js");

const signupUser = async ({ username, email, password }) => {
  try {
    const saltRound = 2;
    const hashedPassword = await bcrypt.hash(password, saltRound);
    const users = readUsersFromFile({
      usersFilePath,
    });
    const newUsersArray = [...users, { username, email, hashedPassword }];

    const fileContent = `users = ${JSON.stringify(
      newUsersArray,
      null,
      2
    )};\n\nmodule.exports = { users };`;
    writeUsersToFile({ usersFilePath, fileContent });
  } catch (error) {
    console.log(error);
  }
};

const verifyLogin = async ({ email, password }) => {
  try {
    const users = readUsersFromFile({ usersFilePath });
    const user = users.find((user) => user.email === email);

    if (!user) {
      console.log("User not found");
      return false;
    }

    const doPasswordsMatch = await bcrypt.compare(
      password,
      user.hashedPassword
    );

    return doPasswordsMatch;
  } catch (error) {
    console.error("Error during login verification:", error);
    return false;
  }
};

module.exports = { signupUser, verifyLogin };
