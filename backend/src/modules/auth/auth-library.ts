import { AuthenticationError } from "../../errors/authentication-error";
import { DatabaseConnectionError } from "../../errors/database-connection-error";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
const usersData = require("../../../database/users");
const { readUsersFromFile, writeUsersToFile } = require("./auth-utils");
const { findUser } = require("./user");

const usersFilePath = path.join(__dirname, "../../../database/users.js");

interface LoginParams {
  email: string;
  password: string;
}

interface SignupParams {
  username: string;
  email: string;
  password: string;
}

export const signupUser = async ({
  username,
  email,
  password,
}: SignupParams) => {
  try {



    const saltRound = 2;
    const hashedPassword = await bcrypt.hash(password, saltRound);
    const newUser = await prisma.users.create({
      data: {
        username: username,
        email: email,
        password: hashedPassword,
      },
    });
    console.log("signed uppppp");
  } catch (error) {
    console.log(error);
  }
};

export const verifyLogin = async ({ email, password }: LoginParams) => {
  console.log("11111111111");
  const user = await findUser({ email });

  console.log("ussssssssss", user);

  if (!user) {
    throw new DatabaseConnectionError("something went wrong", 404);
  }

  const doPasswordsMatch = await bcrypt.compare(password, user.hashedPassword);

  if (!doPasswordsMatch) {
    throw new AuthenticationError("Incorrect Email or Password", 401);
  }
};
