const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
const { readCartsFromFile, writeCartsToFile } = require("./cart-utils");

const cartsFilePath = path.join(__dirname, "../../../database/cart.js");

const addToCart = async ({ email, newProduct }) => {
  try {
    const carts = readCartsFromFile({
      cartsFilePath,
    });

    const cart = carts?.find((obj) => {
      return obj.email == email;
    });

    const filteredCart = carts?.filter((obj) => {
      return obj.email != email;
    });
    const updatedCart = [
      ...filteredCart,
      { ...cart, products: [...cart.products, newProduct] },
    ];
    // const newCartsArray = [...carts, { username, email, hashedPassword }];

    const fileContent = `carts = ${JSON.stringify(
      updatedCart,
      null,
      2
    )};\n\nmodule.exports = { carts };`;
    writeCartsToFile({ cartsFilePath, fileContent });
  } catch (error) {
    console.log(error);
  }
};

const getCartCount = async ({ email }) => {
  try {
    const carts = readCartsFromFile({
      cartsFilePath,
    });

    const cart = carts?.find((obj) => {
      return obj.email == email;
    });

    return cart?.products?.length;
  } catch (error) {}
};

module.exports = { addToCart, getCartCount };
