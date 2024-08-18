const express = require("express");
const { authenticateToken } = require("../../middlewares/authenticateToken");
const { addToWishlist, removeFromWishlist } = require("./wishlist-library");
// const wishlistsData = require("../../../database/wishlists");
const { json } = require("body-parser");
const { readWishlistsFromFile } = require("./wishlist-utils");
const path = require("path");

const router = express.Router();
const wishlistsFilePath = path.join(
  __dirname,
  "../../../database/wishlists.js"
);

router.get("/getWishlist", authenticateToken, function (req, res) {
  const { email } = req.user;

  const wishlists = readWishlistsFromFile({ wishlistsFilePath });

  const wishlist = wishlists?.find((obj) => {
    return obj.email == email;
  });

  res.send({
    data: wishlist?.products,
  });
});

router.post("/addToWishlist", authenticateToken, function (req, res) {
  const { email } = req.user;

  let newProduct = req.body;
  addToWishlist({ email, newProduct });
  res.send({ msg: "item added to wishlist successfully" });
});

router.post("/removeFromWishlist", authenticateToken, function (req, res) {
  const { email } = req.user;

  let toDelete = req.body;
  removeFromWishlist({ email, toDelete });
  res.send({ msg: "item removed from wishlist successfully" });
});

export {router as WishlistRouter}
