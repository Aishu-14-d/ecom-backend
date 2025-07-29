const express = require("express");
const {
  updateQuantity,
  getCart,
  removeFromCart,
  clearCart,
  addToCart,
} = require("../controllers/cartController");
const { isAuth } = require("../middlewares/authMiddlewares");

const cartRoutes = express.Router();

cartRoutes.get("/cart", isAuth, getCart);
cartRoutes.post("/cart/add", isAuth, addToCart);
cartRoutes.put("/cart", isAuth, updateQuantity);
cartRoutes.delete("/cart/product", isAuth, removeFromCart);
cartRoutes.delete("/cart", isAuth, clearCart);
0;

module.exports = cartRoutes;
