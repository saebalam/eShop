"use client";

import { Grid } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCartApi } from "../../networking/products/getCartApi";

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

const Cart = () => {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
  const [products, setProducts] = useState<Product[]>([]);

  const getCartProducts = async () => {
    try {
      const response = await getCartApi();
      setProducts(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      getCartProducts();
    } else {
    }
  }, []);

  return (
    <Grid className="p-3">
      <p className="text-2xl underline">Cart</p>
      <Grid className="mt-4 flex ">
        {products && products?.length > 0 ? (
          <Grid className="flex gap-3 !flex-col">
            {products?.map((product) => {
              return (
                <Grid
                  key={product?.id}
                  className="flex gap-3 w-[550px] h-[130px]"
                >
                  <Grid className="w-1/3">
                    <Image
                      src={product.imageUrl}
                      alt="banner-image"
                      width={200}
                      height={230}
                      style={{ width: "100%", height: "130px" }}
                    />
                  </Grid>
                  <Grid className="flex !flex-col gap-2">
                    <p>{product?.name}</p>
                    <p>{product?.description}</p>
                    <p>{product?.price}</p>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <>no</>
        )}
      </Grid>
    </Grid>
  );
};

export default Cart;
