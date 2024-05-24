var express = require("express");
const cors = require("cors");
var dotenv = require("dotenv");
dotenv.config();

var app = express();
var PORT = process.env.PORT || 3002;
app.use(express.json());
app.use(cors());

app.post("/api/auth/signup", function (req, res) {
  res.send("Signed up successfully");
  console.log(req.body);
});

app.post("/api/auth/login", function (req, res) {
  res.send("logged in successfully");
});

app.listen(PORT, function (error) {
  if (!error) {
    console.log("App started successfully on port", PORT);
  } else {
    console.log(error);
  }
});
