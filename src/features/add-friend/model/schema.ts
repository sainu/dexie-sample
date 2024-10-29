import { z } from "zod";

export const addFriendFormSchema = z.object({
  name: z.string().min(0),
  age: z.coerce.number().min(0),
})
