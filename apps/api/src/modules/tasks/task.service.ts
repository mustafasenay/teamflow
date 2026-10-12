import { randomUUID } from "node:crypto";
import { AppError } from "../../errors/app-error.js";
import type { CreateTaskInput } from "./task.schema.ts";
import type { Task } from "./task.types.ts";
import type { TaskRepository } from "./task.repository.types.js";

export class TaskService {
  constructor(
    private readonly taskRepository: TaskRepository
  ) {}

  createTask(input: CreateTaskInput): Task {
    const existingTask = this.taskRepository.findByTitle(input.title);

    if (existingTask) {
      throw new AppError(
        409,
        "TASK_ALREADY_EXISTS",
        "A task with this title already exists"
      );
    }

    const task: Task = {
      id: randomUUID(),
      title: input.title,
      description: input.description,
      status: "TODO"
    };
    
    return this.taskRepository.create(task);
  }

  getTasks(): Task[] {
    return this.taskRepository.findAll();
  }

  getTaskById(id: string): Task {
    const task = this.taskRepository.findById(id);

    if (!task) {
      throw new AppError(
        404,
        "TASK_NOT_FOUND",
        "Task could not be found"
      );
    }
    return task;
  }
}

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
