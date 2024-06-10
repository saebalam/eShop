const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
const {
  writeWishlistsToFile,
  readWishlistsFromFile,
} = require("./wishlist-utils");

const wishlistsFilePath = path.join(
  __dirname,
  "../../../database/wishlists.js"
);

const addToWishlist = async ({ email, newProduct }) => {
  try {
    const wishlists = readWishlistsFromFile({
      wishlistsFilePath,
    });

    const wishlist = wishlists?.find((obj) => {
      return obj.email == email;
    });

    const filteredWishlists = wishlists?.filter((obj) => {
      return obj.email != email;
    });
    const updatedWishlist = [
      ...filteredWishlists,
      { ...wishlist, products: [...wishlist.products, newProduct] },
    ];

    const fileContent = `wishlists = ${JSON.stringify(
      updatedWishlist,
      null,
      2
    )};\n\nmodule.exports = { wishlists };`;
    writeWishlistsToFile({ wishlistsFilePath, fileContent });
  } catch (error) {
    console.log(error);
  }
};

const removeFromWishlist = async ({ email, toDelete }) => {
  try {
    const wishlists = readWishlistsFromFile({
      wishlistsFilePath,
    });

    const wishlist = wishlists?.find((obj) => {
      return obj.email == email;
    });

    console.log("nn-----------", wishlist);
    if (!wishlist) {
      const newWishlist = [
        ...wishlists,
        { email, products: updatedProductlist },
      ];
      const fileContent = `wishlists = ${JSON.stringify(
        newWishlist,
        null,
        2
      )};\n\nmodule.exports = { wishlists };`;
      writeWishlistsToFile({ wishlistsFilePath, fileContent });
    }

    const updatedProductlist = wishlist?.products?.filter((obj) => {
      return obj.id != toDelete?.id;
    });

    const filteredWishlists = wishlists?.filter((obj) => {
      return obj.email != email;
    });
    const updatedWishlists = [
      ...filteredWishlists,
      { ...wishlist, products: updatedProductlist },
    ];

    const fileContent = `wishlists = ${JSON.stringify(
      updatedWishlists,
      null,
      2
    )};\n\nmodule.exports = { wishlists };`;
    writeWishlistsToFile({ wishlistsFilePath, fileContent });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addToWishlist, removeFromWishlist };
