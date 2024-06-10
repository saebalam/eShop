"use client";

import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useRouter } from "next/navigation";
import axios from "axios";

const Navbar = ({ cartCount }) => {
  const router = useRouter();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState<Boolean>(false);

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3002/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const responseData = await response.json();

      if (responseData) {
        localStorage.removeItem("isLoggedIn");
        router.refresh();
      }
    } catch (error) {}
  };

  const handleCartClick = () => {
    if (isLoggedIn) {
      router.push("/cart");
    } else {
      router.push(`/login?redirectTo=/cart`);
    }
  };

  // const getCartCount = async () => {
  //   try {
  //     const response = await fetch(
  //       "http://localhost:3002/api/cart/getCartCount",
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         credentials: "include",
  //       }
  //     );
  //     const responseData = await response.json();
  //     console.log("111", responseData);
  //     setCartCount(responseData?.count);
  //   } catch (error) {}
  // };

  useEffect(() => {
    if (isLoggedIn) {
      // getCartCount();
    }
  }, [isLoggedIn]);

  return (
    <Grid className="bg-rose-100 flex justify-around gap-20 items-center p-4">
      <Grid>eSHOP</Grid>
      <Grid className="flex gap-4">
        <p>Home</p>
        <p>Men</p>
        <p>Women</p>
        <p>Kids</p>
      </Grid>
      <Grid className="flex gap-2">
        <FavoriteBorderIcon className="cursor-pointer" />
        <Grid className="relative">
          <ShoppingCartOutlinedIcon
            className="cursor-pointer"
            onClick={handleCartClick}
          />
          <Grid className="absolute -top-3 -right-3 bg-gray-600 rounded-full p-1 w-6 h-6 flex justify-center items-center">
            <p className="text-white text-xs">{cartCount || "0"}</p>
          </Grid>
        </Grid>
        {isLoggedIn && (
          <Grid className="relative">
            <PersonOutlineOutlinedIcon
              className="cursor-pointer"
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            />
            {isProfileMenuOpen && (
              <Grid className="bg-white absolute z-50 top-8 right-1 px-4 py-2">
                <p className="text-sm my-1 cursor-pointer text-gray-700 hover:text-black">
                  Profile
                </p>
                <p className="text-sm my-1 cursor-pointer text-gray-700 hover:text-black">
                  Setting
                </p>
                <p
                  className="text-sm my-1 cursor-pointer text-gray-700 hover:text-black"
                  onClick={handleLogout}
                >
                  Logout
                </p>
              </Grid>
            )}
          </Grid>
        )}
        {!isLoggedIn && (
          <button className="ml-2" onClick={() => router.push("/login")}>
            Login
          </button>
        )}
      </Grid>
    </Grid>
  );
};

export default Navbar;
