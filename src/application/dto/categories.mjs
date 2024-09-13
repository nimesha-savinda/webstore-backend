import { z } from "zod";

export const createCategoryDto = z.object({
  id: z.string(),
  name: z.string(),
});