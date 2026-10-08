import { randomUUID } from "node:crypto";
import { AppError } from "../../errors/app-error.js";
import type { CreateTaskInput } from "./task.schema.ts";
import type { Task } from "./task.types.ts";

const tasks: Task[] = [];

export const createTask = (input: CreateTaskInput): Task => {
  const existingTask = tasks.find(
    (task) => task.title === input.title
  );

  if (existingTask) {
    throw new AppError(
      409,
      "TASK_ALREADY_EXISTS",
      "A task with this title already exists."
    );
  }

  const task: Task = {
    id: randomUUID(),
    title: input.title,
    description: input.description,
    status: "TODO",
  };

  tasks.push(task);

  return task;
}
