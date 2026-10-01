import  type { Request, Response } from "express";
import { createTask } from "./task.service.js";
import type { CreateTaskInput } from "./task.types.js";

export const CreateTaskController = (
  req: Request,
  res: Response
): void => {
  const input: CreateTaskInput = req.body;

  const task = createTask(input);

  res.status(201).json(task);
}
