// import express from 'express';
import Product from '../infrastructure/schema/productschema.mjs';
import { createProductDto } from './dto/productsdto.mjs';

const _products = [
    {
      categoryId: "1",
      image: "/assets/_products/airpods-max.png",
      id: "1",
      name: "AirPods Max",
      price: "549.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "3",
      image: "/assets/_products/echo-dot.png",
      id: "2",
      name: "Echo Dot",
      price: "99.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "2",
      image: "/assets/_products/pixel-buds.png",
      id: "3",
      name: "Galaxy Pixel Buds",
      price: "99.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "1",
      image: "/assets/_products/quietcomfort.png",
      id: "4",
      name: "Bose QuiteComfort",
      price: "249.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "3",
      image: "/assets/_products/soundlink.png",
      id: "5",
      name: "Bose SoundLink",
      price: "119.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "5",
      image: "/assets/_products/apple-watch.png",
      id: "6",
      name: "Apple Watch 9",
      price: "699.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "4",
      image: "/assets/_products/iphone-15.png",
      id: "7",
      name: "Apple Iphone 15",
      price: "1299.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "4",
      image: "/assets/_products/pixel-8.png",
      id: "8",
      name: "Galaxy Pixel 8",
      price: "549.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
  ];

export const getProducts = async(req,res)=>{
  const Products =  await Product.find();
  res.status(200).json(Products).send();
};

export const getProductById = (req,res)=>{
    const id = req.params.id;
    const product = _products.find((product)=>
        product.id === id
    );
    if(!product){
        return res.status(404).json("The product is not available..!").send();
    }
    return res.status(200).json(product).send();
    
};


export const createProduct = async (req, res) => {

  //! We need to make sure that the data is always in the correct format
  const product = createProductDto.safeParse(req.body); 

  if (!product.success) {
    return res.status(400).json({ message: `${product.error.message}`}).send();
  }

  await Product.push({
    categoryId:product.data.categoryId,
    image: product.data.image,
    name: product.data.name,
    price: product.data.price,
    description: product.data.description,
    id: (_products.length + 1).toString()
  });
  return res.status(201).send();
};