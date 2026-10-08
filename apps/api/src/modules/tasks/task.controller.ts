import type { Request, Response } from "express";
import { createTask } from "./task.service.js";
import type { CreateTaskInput } from "./task.schema.js";

export const createTaskController = (
  _req: Request,
  res: Response
): void => {
  const input = res.locals.validatedBody as CreateTaskInput;

  const task = createTask(input);

  res.status(201).json(task);
};
