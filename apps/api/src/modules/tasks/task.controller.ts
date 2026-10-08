import type { Request, Response } from "express";
import { createTask } from "./task.service.js";
import { createTaskSchema } from "./task.schema.js";

export const createTaskController = (
  req: Request,
  res: Response
): void => {
  const result = createTaskSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({
      error: {
        code: "VALIDATION_ERROR",
        message: "Invalid request data",
        details: result.error.flatten().fieldErrors,
      },
    });

    return;
  }

  const task = createTask(result.data);

  res.status(201).json(task);
};
