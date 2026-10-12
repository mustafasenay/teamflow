import type { Task } from "./task.types.js";

export interface TaskRepository {
  findByTitle(title: string): Task | undefined;

  findById(id: string): Task | undefined;

  findAll(): Task[];

  create(task: Task): Task;
}
