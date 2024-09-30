import { createOrderDto } from "./dto/ordersdto.mjs";
import Order from "../infrastructure/schema/ordersschema.mjs";

export const createOrder = async (req, res) => {
  const order = createOrderDto.safeParse(req.body);

  if (!order.success) {
    return res
      .status(400)
      .json({ message: `${order.error.message}` })
      .send();
  }

  await Order.create({
    userId: order.data.userId,
    orderProducts: order.data.orderProducts,
  });
  console.log('testing')
  return res.status(201).send();
};

export const getOrderById = async (req, res) => {
  const orderId = req.params.id;
  const order = await Order.findById(orderId).populate({
    path: "orderProducts.productId",
    model: "Product",
  });

  if (!order) {
    return res.status(404).json({ message: "Order not found" }).send();
  }

  return res.status(200).json(order).send();
};

export const getOrdersByUser = async (req, res) => {
  const userId = req.params.userId;
  console.log('working on ')

  const order = await Order.find({ userId: userId }).populate({
    path: "orderProducts.productId",
    model: "Product",
  });

  return res.status(200).json(order).send();
};