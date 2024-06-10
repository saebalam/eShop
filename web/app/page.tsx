"use client";

import Navbar from "./components/navbar";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import HomePageBanner from "./components/homePageBanner";
import Products from "./components/products";

export default function Home() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  console.log("isLoggedIn", isLoggedIn);
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
      <Navbar cartCount={cartCount} />
      <HomePageBanner />
      <Products refreshCartCount={refreshCartCount} />
    </Grid>
  );
}
