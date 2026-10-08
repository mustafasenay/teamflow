import type { CreateTaskInput } from "./task.schema.ts";
import type { Task } from "./task.types.ts";

const tasks: Task[] = [];

export const createTask = (input: CreateTaskInput): Task => {
  const task: Task = {
    id: crypto.randomUUID(),
    title: input.title,
    description: input.description,
    status: "TODO",
  };

  tasks.push(task);

  return task;
}
