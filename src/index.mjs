"use strict";

import express from "express";
import productsRouter from "./api/products.mjs";
//import categoriesRouter from "./api/categories.js";

const app = express();
app.use(express.json());

app.use("/api/products", productsRouter);
//app.use("/api/categories", categoriesRouter);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
