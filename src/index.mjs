"use strict";

import express from "express";
import productsRouter from "./api/products.mjs";
import ordersRouter from "./api/orders.mjs";
import categoriesRouter from "./api/categories.mjs";
import { connectDB } from "./infrastructure/db.mjs";

import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({origin:"http://localhost:5173"}))

app.use("/api/products", productsRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/orders", ordersRouter);

const PORT = 8000;


connectDB();

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
