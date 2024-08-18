const express = require("express");
const productsData = require("../../../database/products");
const { authenticateToken } = require("../../middlewares/authenticateToken");

const router = express.Router();

router.get("/getAllProducts", function (req, res) {
  res.send({
    data: productsData.products,
  });
});

router.get("/getCart", authenticateToken, function (req, res) {
  const { email } = req.user;

  const user = cartData?.cart?.find((obj) => {
    return obj.email == email;
  });
  console.log(email, cartData);

  res.send({
    data: user?.products,
  });
});

router.post("/");

export { router as ProductRouter };
