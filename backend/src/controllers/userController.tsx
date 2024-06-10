const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { authenticateToken } = require("./middlewares/authenticateToken");
const usersData = require("../database/users");

const login = (req, res) => {
  const { email, password } = req.body;

  const user = usersData?.users?.find(function (user) {
    return user.email === email;
  });

  if (!user) {
    res.send("No user found, please sign up");
  }

  if (user) {
    bcrypt.compare(password, user.passwordHash, function (err, result) {
      if (result) {
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
  }
};
