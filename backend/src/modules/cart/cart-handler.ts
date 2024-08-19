// const express = require("express");
// const { authenticateToken } = require("../../middlewares/authenticateToken");
// const { addToCart, getCartCount } = require("./cart-library");

// const router = express.Router();

// router.get("/getCart", authenticateToken, function (req, res) {
//   const { email } = req.user;

//   const user = cartData?.cart?.find((obj) => {
//     return obj.email == email;
//   });

//   res.send({
//     data: user?.products,
//   });
// });

// router.post("/addToCart", authenticateToken, function (req, res) {
//   const { email } = req.user;
//   let newProduct = {
//     id: 11,
//     name: "Wireless Mouse",
//     description: "Ergonomic wireless mouse with adjustable DPI.",
//     price: 25.99,
//     category: "Electronics",
//     stock: 50,
//     imageUrl:
//       "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     rating: 4.5,
//     reviews: 120,
//   };
//   addToCart({ email, newProduct });
//   res.send({ msg: "item added to cart successfully" });
// });

// // router.get("/getCartCount", authenticateToken, async function (req, res) {
// //   const { email } = req.user;
// //   const count = await getCartCount({ email });
// //   res.send({ count: count });
// // });

// export { router as CartRouter };
