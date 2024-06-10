import { Grid } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import ProductCard from "./productCard";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  imageUrl: string;
  rating: number;
  reviews: number;
}

const Products = ({ refreshCartCount }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);

  const getAllProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3002/api/product/getAllProducts"
      );
      setProducts(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getWishlist = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3002/api/wishlist/getWishlist",
        {
          headers: {
            Authorization: "Bearer YOUR_TOKEN_HERE", // Replace with your token
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log("dd111", response?.data);
      setWishlist(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const refreshWishlist = () => {
    setTimeout(() => {
      getWishlist();
    }),
      1000;
  };

  useEffect(() => {
    getAllProducts();
    getWishlist();
  }, []);

  return (
    <Grid className="p-3">
      <p className="text-2xl font-semibold">Products</p>
      {products && products?.length > 0 ? (
        <Grid className="flex gap-3 flex-wrap justify-around">
          {products?.map((product) => {
            return (
              <ProductCard
                key={`${product?.id}+${wishlist?.length}`}
                product={product}
                refreshCartCount={refreshCartCount}
                wishlist={wishlist}
                refreshWishlist={refreshWishlist}
              />
            );
          })}
        </Grid>
      ) : (
        <>no</>
      )}
    </Grid>
  );
};

export default Products;
