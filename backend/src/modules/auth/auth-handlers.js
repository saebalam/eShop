const express = require("express");
const usersData = require("../../../database/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { signupUser, verifyLogin } = require("./auth-library");
const router = express.Router();

router.post("/signup", function (req, res) {
  const { username, email, password } = req.body;
  if (!email || !password) {
    res.send("Email and password required");
    return;
  } else {
    signupUser({ username, email, password });
    const token = jwt.sign({ email, password }, "secretKey");
    res.cookie("eShopToken", token, { httpOnly: true });
    res.setHeader("Authorization", `Bearer ${token}`);
    res.send({
      data: {
        message: "logged in successfully",
        loggedin: 1,
        token,
      },
    });
  }
});

router.post("/login", async function (req, res) {
  const { email, password } = req.body;

  const isVerifiedUser = await verifyLogin({ email, password });

  if (!isVerifiedUser) {
    res.send("No user found, please sign up");
  }

  if (isVerifiedUser) {
    const token = jwt.sign({ email, password }, "secretkey");
    res.cookie("eShopToken", token, { httpOnly: true });
    res.send({
      data: {
        message: "logged in successfully",
        loggedin: 1,
        token,
      },
    });
  }
});

router.post("/logout", function (req, res) {
  res.clearCookie("eShopToken", { httpOnly: true });
  res.send({ msg: "Logged out successfully", isLoggedOut: true });
});

module.exports = { AuthRouter: router };
