import { z } from "zod";

export const createTaskSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(200, "Title cannot exceed 200 chareacters"),
  
  description: z
    .string()
    .max(2000, "Description cannot exceed 2000 chareacters")
    .optional(),
});

export type CreateTaskInput = z.infer<typeof createTaskSchema>;
