import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { errorHandler } from "./middlewares/errorHandler";
import { AuthRouter } from "./modules/auth/auth-handlers";
// import { ProductRouter } from "./modules/product/product-handler";
import { json } from "body-parser";
import { WishlistRouter } from "./modules/wishlist/wishlist-handler";
// import { CartRouter } from "./modules/cart/cart-handler";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3002;
dotenv.config({ path: "../.env" });

app.use(
  cors({
    origin: "http://localhost:3002", // Replace with your frontend origin
    credentials: true,
  })
);
app.use(json());
// app.use(cookieParser());

app.use("/api/auth", AuthRouter);
// app.use("/api/products", ProductRouter);
// app.use("/api/cart", CartRouter);
app.use("/api/wishlist", WishlistRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!!!!!!!!`);
  console.log("Database URL ", process.env.DATABASE_URL);
});
