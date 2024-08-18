"use client";

import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/authSlice";
import { logoutApi } from "@/networking/auth/logoutApi";
import { getCartCountApi } from "../../../networking/products/getCartCountApi";
import { incrementByAmount, setCartCount } from "@/redux/cartSlice";

const Navbar = ({  }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
  const cartCount = useSelector((state: any) => state.cart.cartCount);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState<Boolean>(false);


  console.log("logggg", isLoggedIn);

  const handleLogout = async () => {
    try {
      await logoutApi();
      dispatch(logout());
    } catch (error) {
      console.log(error);
    }
  };

  const handleCartClick = () => {
    if (isLoggedIn) {
      router.push("/cart");
    } else {
      router.push(`/login?redirectTo=/cart`);
    }
  };

  const getCartCount = async () => {
    try {
      const response = await getCartCountApi()
      dispatch(setCartCount(response?.data?.count))
      // const responseData = await response.json();
      console.log("111", response);
      // setCartCount(responseD?.count);
    } catch (error) {}
  };

  useEffect(() => {
    if (isLoggedIn) {
      getCartCount();
    }
  }, [isLoggedIn]);

  return (
    <Grid className="bg-rose-100 flex justify-around gap-20 items-center p-4">
      <Grid onClick={() => router.push("/")} className="cursor-pointer">
        eSHOP
      </Grid>
      <Grid className="flex gap-4">
        <p className="cursor-pointer" onClick={() => router.push("/")}>
          Home
        </p>
        <p className="cursor-pointer">Men</p>
        <p className="cursor-pointer">Women</p>
        <p className="cursor-pointer">Kids</p>
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
        {console.log("lll", isLoggedIn)}
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
