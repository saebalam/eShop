"use client";

import Navbar from "./components/navbar";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import HomePageBanner from "./components/homePageBanner";
import Products from "./components/products";
import { useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";

export default function Home() {
  const count = useSelector((state: RootState) => state.cart.cartCount);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  console.log("ccc", count, isLoggedIn);
  const [cartCount, setCartCount] = useState();

  // const getAllProducts = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3002/api/getAllProducts", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       credentials: "include",
  //     });
  //     const responseData = await response.json();
  //     console.log(responseData);
  //   } catch (error) {}
  // };

  const getCartCount = async () => {
    try {
      const response = await fetch(
        "http://localhost:3002/api/cart/getCartCount",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      const responseData = await response.json();
      console.log("111", responseData);
      setCartCount(responseData?.count);
    } catch (error) {}
  };

  const refreshCartCount = () => {
    getCartCount();
  };

  useEffect(() => {
    // getAllProducts();
    getCartCount();
  }, []);

  return (
    <Grid>
      {/* <Navbar cartCount={cartCount} /> */}
      <HomePageBanner />
      <Products refreshCartCount={refreshCartCount} />
    </Grid>
  );
}
