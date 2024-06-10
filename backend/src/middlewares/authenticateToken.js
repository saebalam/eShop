var jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const token = req.cookies.eShopToken;
  // console.log("token", token);
  if (!token) return res.sendStatus(403);

  jwt.verify(token, "secretkey", (err, user) => {
    console.log("user", user, err);
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

module.exports = { authenticateToken };
