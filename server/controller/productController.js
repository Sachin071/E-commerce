const express = require("express");
const Product = require("../models/productModel");
const productRouter = express.Router();

// Get All Products
productRouter.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    return res.status(200).json(products);
  } catch (err) {
    console.log("Error in getting all the products", err);
    return res.status(404).json({ message: "Product Not Found", err });
  }
});

// Get one Product all details
productRouter.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req?.params?.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.log("Error in getting the product by given Id", err);
    return res.status(404).json({ message: "Product Not Found", err });
  }
});

module.exports = productRouter;
