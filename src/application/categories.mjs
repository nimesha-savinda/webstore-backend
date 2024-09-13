import { createCategoryDto } from "./dto/categories.mjs";
import Category from "../infrastructure/schema/categoryschema.mjs";

const categories = [
  { id: "1", name: "Headphones" },
  { id: "2", name: "Earbuds" },
  { id: "3", name: "Speakers" },
  { id: "4", name: "Mobile Phones" },
  { id: "5", name: "Smart Watches" },
];

export const getCategories = (req, res) => {
  return res.status(200).json(categories).send();
};

export const createCategory = async (req, res) => {
  //! We need to make sure that the data is always in the correct format
  const category = createCategoryDto.safeParse(req.body);

  if (!category.success) {
    return res.status(400).json({ message: "Invalid data" }).send();
  }

  await Category.create({ id: category.data.id, name: category.data.name });
  return res.status(201).send();
};

export const getCategoryById = (req, res) => {
  const id = req.params.id;
  const category = categories.find((category) => category.id === id);
  if (!category) {
    return res.status(404).json({ message: "Category not found" }).send();
  }

  return res.status(200).json(category).send();
};
