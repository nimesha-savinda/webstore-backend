import Product from '../infrastructure/schema/productschema.mjs';
import { createProductDto } from './dto/productsdto.mjs';


export const getProducts = async(req,res)=>{
  const Products =  await Product.find();
  res.status(200).json(Products);
};

export const getProductById = async(req,res)=>{
    const id = req.params.id;
    const product =  await Product.findById(id).populate('categoryId');
    // const product = Products.find((product)=>
    //     product.id === id
    // );
    if(!product){
        return res.status(404).json("The product is not available..!").send();
    }
    return res.status(200).json(product);
    
};

export const SortProducts = async(req,res)=>{
  
  const {value} = req.body;
  let sortedProducts;
  if (value==="asc"){
    sortedProducts = await Product.find().sort({ price: 1 });
  }else{
    sortedProducts = await Product.find().sort({ price: -1 });};
  res.status(200).json(sortedProducts);
};


export const createProduct = async (req, res) => {

  //! We need to make sure that the data is always in the correct format
  const product = createProductDto.safeParse(req.body); 

  if (!product.success) {
    return res.status(400).json({ message: `${product.error.message}`}).send();
  }

  await Product.create({
    categoryId:product.data.categoryId,
    image: product.data.image,
    name: product.data.name,
    price: product.data.price,
    description: product.data.description,
    id: (_products.length + 1).toString()
  });
  return res.status(201).send();
};