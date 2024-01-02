import Product from "../models/productModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const Products = await Product.find({});
  return res.json(Products);
});

// @desc Fetch a single product
// @route GET /api/products
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    return res.json(product);
  }
  res.status(404);
  throw new Error("Product not found");
});

export { getProducts, getProductById };
