import { NextFunction } from "express";
import { DatabaseConnectionError } from "../../errors/database-connection-error";
import { AuthenticationError } from "../../errors/authentication-error";
import { verifyLogin } from "./auth-library";
import { PrismaClient } from "@prisma/client";
import z from "zod";
import { MalformedRequestFormat } from "../../errors/malformedRequestFormat";

const express = require("express");

const usersData = require("../../../database/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { signupUser } = require("./auth-library");
const router = express.Router();
const prisma = new PrismaClient();

type TypedRequestBody<T> = Request & { body: T };

interface SignupRequestBody {
  username: string;
  email: string;
  password: string;
}

interface LoginRequestBody {
  email: string;
  password: string;
}

function parseSchema(data: any, schema: any) {
  try {
    schema.parse(data);
  } catch (e: any) {
    console.log("eeeerrrr", JSON.parse(e.message), typeof e.message);

    console.log(
      "eeeerrrr",
      JSON.parse(e.message).map((e) => `${e.path[0]}: ${e.message}`)
    );
    throw new MalformedRequestFormat(
      JSON.parse(e.message).map((e) => `${e.path[0]}: ${e.message}`)
    );
  }
}

router.post(
  "/signup",
  async function (
    req: TypedRequestBody<SignupRequestBody>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { username, email, password } = req.body;

      parseSchema(
        req.body,
        z.object({
          username: z.string(),
          email: z.string().email("Invalid email"),
          password: z
            .string()
            .min(5, "Password must be at least 8 characters long"),
        })
      );

      console.log("passed");

      // z.object({
      //   username: z.string(),
      //   email: z.string().email("Invalid email"),
      //   password: z
      //     .string()
      //     .min(5, "Password must be at least 8 characters long"),
      // }).parse({
      //   email: email,
      //   password: password,
      // });

      if (!email || !password || !username) {
        throw new Error("username, Email and Password Required");
      }

      const doesUserExists = await prisma.users.findUnique({
        where: {
          email: email,
        },
      });
      console.log("uuu", doesUserExists);

      if (doesUserExists) {
        throw new AuthenticationError("User already exists");
      }

      signupUser({ username, email, password });
      const token = jwt.sign({ email, password }, "secretKey");
      res.cookie("eShopToken", token, { httpOnly: true });
      res.setHeader("Authorization", `Bearer ${token}`);
      res.send({
        data: {
          message: "Signed up successfully",
          loggedin: 1,
          token,
        },
      });
    } catch (error) {
      console.log("next error", error);
      next(error);
    }
  }
);

router.post(
  "/login",
  async function (
    req: TypedRequestBody<LoginRequestBody>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw new AuthenticationError("Email and Password Required", 404);
      }

      await verifyLogin({ email, password });

      const token = jwt.sign({ email, password }, "secretkey");
      res.cookie("eShopToken", token, { httpOnly: true });
      res.send({
        data: {
          message: "logged in successfully",
          loggedin: 1,
          token,
        },
      });
    } catch (error) {
      next(error);
    }
  }
);

router.post("/logout", function (req, res) {
  res.clearCookie("eShopToken", { httpOnly: true });
  res.send({ msg: "Logged out successfully", isLoggedOut: true });
});

export { router as AuthRouter };
