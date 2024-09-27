import express  from "express";

import {
    getProducts,
    createProduct,
    getProductById,
    SortProducts
  } from "../application/products.mjs";
  
  const productsRouter = express.Router();
  
  productsRouter.route("/").get(getProducts).post(createProduct);
  productsRouter.route("/:id").get(getProductById);
  productsRouter.route("/sort").post(SortProducts);
  
  export default productsRouter;
  