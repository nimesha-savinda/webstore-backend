import express from "express";
import {
  getCategories,
  getCategoryById,
  createCategory,
} from "../application/categories.mjs";

const categoriesRouter = express.Router();

categoriesRouter.route("/").get(getCategories).post(createCategory);

categoriesRouter.route("/:id").get(getCategoryById);

export default categoriesRouter;
