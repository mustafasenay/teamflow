import type { Request, Response } from "express";
import { createTask } from "./task.service.js";
import type { CreateTaskInput } from "./task.schema.js";
import { taskService } from "./task.dependencies.js";

export const createTaskController = (
  _req: Request,
  res: Response
): void => {
  const input = res.locals.validatedBody as CreateTaskInput;

  const task = createTask(input);

  res.status(201).json(task);
};

export const getTasksController = (
  _req: Request,
  res: Response
): void => {
  const tasks = taskService.getTasks();

  res.status(200).json(tasks);
};

export const getTaskByIdController = (
  req: Request<{ id: string }>,
  res: Response
): void => {
  const task = taskService.getTaskById(req.params.id);

  res.status(200).json(task);
};
