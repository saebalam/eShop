"use client";

import { Grid } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const WishlistButton: React.FC<{
  product: any;
  wishlist: any;
  refreshWishlist: any;
}> = ({ product, wishlist, refreshWishlist }) => {
  const router = useRouter();
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [copyWishlist, setCopyWishlist] = useState([]);
  console.log("bb", wishlist);

  const handleWishlist = async () => {
    if (!isInWishlist) {
      try {
        const response = await fetch(
          "http://localhost:3002/api/wishlist/addToWishlist",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
            credentials: "include",
          }
        );
        const responseData = await response.json();
      } catch (error) {}
    } else {
      try {
        const response = await fetch(
          "http://localhost:3002/api/wishlist/removeFromWishlist",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
            credentials: "include",
          }
        );
        const responseData = await response.json();
      } catch (error) {}
    }
    refreshWishlist();
  };

  useEffect(() => {
    const isInWishlist = wishlist?.find((eachItem:any) => {
      console.log("bb1", eachItem, product.id);
      return eachItem.id == product.id;
    });
    if (isInWishlist) {
      setIsInWishlist(true);
    }
  }, [wishlist, product]);

  return (
    <Grid
      className="w-9 h-8 p-1 border border-gray-500 flex justify-center items-center"
      onClick={handleWishlist}
    >
      {!isInWishlist && (
        <FavoriteBorderIcon sx={{ color: "gray", cursor: "pointer" }} />
      )}
      {isInWishlist && (
        <FavoriteIcon sx={{ color: "red", cursor: "pointer" }} />
      )}
    </Grid>
  );
};

export default WishlistButton;
