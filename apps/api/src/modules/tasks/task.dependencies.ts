import { InMemoryTaskRepository } from "./task.repository.js";
import { TaskService } from "./task.service.js";

const taskRepository = new InMemoryTaskRepository();

export const taskService = new TaskService(taskRepository);
