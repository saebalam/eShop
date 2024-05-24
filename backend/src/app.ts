const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3002;

app.post("/signup", (req, res) => {
  res.send("Signed up successfully");
  console.log(req.body);
});

app.get("/login", (req, res) => {
  res.send("login");
});

app.listen(PORT, (error: any) => {
  if (!error) {
    console.log("App started successfully on port", PORT);
  } else {
    console.log(error);
  }
});
