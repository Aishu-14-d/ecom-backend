const express = require("express");
const {
  getAllProducts,
  getAllProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productcontrollers");

const productRoutes = express.Router();

productRoutes.get("/products", getAllProducts);

productRoutes.get("/products/:id", getAllProductsById);
productRoutes.post("/products", createProduct);
productRoutes.put("/products/:id", updateProduct);
productRoutes.delete("/products/:id", deleteProduct);

module.exports = productRoutes;
