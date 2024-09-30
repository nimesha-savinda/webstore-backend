import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  orderProducts: {
    type: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],
  },
});

const Order = mongoose.model("Order", OrderSchema);
export default Order;