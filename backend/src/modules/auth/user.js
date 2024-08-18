import { InternalServerError } from "../../../errors/custom-errors";
import { readUsers } from "./auth-utils";
import path from "path";

const usersFilePath = path.join(__dirname, "../../../database/users.js");

export const findUser = async ({ email }) => {
  try {
    console.log("222222222222");
    const users = readUsers({ usersFilePath });
    console.log("33333333");
    const user = users.find((user) => user.email === email);
    if (user) {
      return user;
    }
    return null;
    // const user = await Mongodborm.findUser({ email });
  } catch (e) {
    throw new InternalServerError({ message: "Something went wrong" });
  }
};

// class Mongodborm {
//   async findUser({ email }) {
//     try {
//       const user = await db("select * from users where email = ?", [email]);
//       console.log("findUser 1");
//       if (!user) {
//         throw new Error("Error: no such user");
//       }
//     } catch (error) {
//       throw new InternalServerError({ message: 'jvioqejvoerjvoi'});
//     }
//   }
// }

// db internal impl
// const db = (query, ...args) => {
//   throw new Error("connection could not be established");
// };

// error abstraction:

// class InternalServerError extends BaseErrorClass {
//   constructor({ message } = {}) {
//     super();
//     throw new Error({ httpCode: 500, msg: message || "something went wrong" });
//   }
// }

// class BaseErrorClass extends Error {
//   constructor({ message } = {}) {
//     super();
//     throw new Error({ httpCode: 500, msg: message || "something went wrong" });
//   }
// }
