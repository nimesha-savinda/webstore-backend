import { z } from "zod";

export const createOrderDto = z.object({
  userId: z.string(),
  orderProducts: z
    .object({
      productId: z.string(),
      quantity: z.number(),
    })
    .array(),
});