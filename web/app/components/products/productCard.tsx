import { Grid } from "@mui/material";
import Image from "next/image";
import WishlistButton from "../atoms/wishlistButton";

const ProductCard: React.FC<{
  product: any;
  refreshCartCount: any;
  wishlist: any;
  refreshWishlist: any;
}> = ({ product, refreshCartCount, wishlist, refreshWishlist }) => {
  const handleAddToCart = async () => {
    try {
      const response = await fetch("http://localhost:3002/api/cart/addToCart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const responseData = await response.json();

      if (responseData) {
        refreshCartCount();
      }
    } catch (error) {}
  };

  return (
    <Grid key={product?.id} className="bg-zinc-200 p-1 w-[300px] h-auto">
      <Grid className="w-full">
        <Image
          src={product.imageUrl}
          alt="banner-image"
          width={200}
          height={400}
          style={{ width: "100%", height: "230px" }}
        />
      </Grid>
      <Grid className="flex !flex-col gap-[2px]">
        <Grid className="flex justify-between font-medium text-gray-800">
          <p>{product?.name}</p>
          <p>${product?.price}</p>
        </Grid>
        <p className="text-sm text-gray-800">{product?.description}</p>
        <Grid className="flex gap-2 mt-2">
          <WishlistButton
            key={product?.id}
            product={product}
            wishlist={wishlist}
            refreshWishlist={refreshWishlist}
          />
          <Grid
            className="w-full flex justify-center items-center h-8 border border-gray-900 cursor-pointer"
            onClick={handleAddToCart}
          >
            <p className="text-sm">Add to Cart</p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductCard;
