// var express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const cookieParser = require("cookie-parser");
// const { ProductRouter } = require("./modules/product/product-handler");
// const { AuthRouter } = require("./modules/auth/auth-handlers");
// const { CartRouter } = require("./modules/cart/cart-handler");
// const { WishlistRouter } = require("./modules/wishlist/wishlist-handler");
// const { errorHandler } = require("./middlewares/errorHandler");

// dotenv.config();
// var app = express();
// var PORT = process.env.PORT || 3002;
// app.use(
//   cors({
//     origin: "https://localhost:3000", // Replace with your frontend origin
//     credentials: true,
//   })
// );
// app.use(express.json());
// app.use(cookieParser());
// app.use(errorHandler);

// app.use("/api/product", ProductRouter);
// app.use("/api/auth", AuthRouter);
// app.use("/api/cart", CartRouter);
// app.use("/api/wishlist", WishlistRouter);

// app.listen(PORT, function (error) {
//   if (!error) {
//     console.log("App started successfully on port", PORT);
//   } else {
//     console.log(error);
//   }
// });
