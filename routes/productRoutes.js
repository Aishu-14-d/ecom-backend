const express = require("express");
const {
  getAllProducts,
  getAllProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productcontrollers");
const { isAuth, isAdmin } = require("../middlewares/authMiddlewares");

const productRoutes = express.Router();

productRoutes.get("/products", isAuth, getAllProducts);
productRoutes.get("/products/:id", getAllProductsById);
productRoutes.post("/products", isAuth, isAdmin, createProduct);
productRoutes.put("/products/:id", isAuth, isAdmin, updateProduct);
productRoutes.delete("/products/:id", isAuth, isAdmin, deleteProduct);

module.exports = productRoutes;
