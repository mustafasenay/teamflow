import type {Task} from "./task.types.js";
import type { TaskRepository } from "./task.repository.types.js";

export class InMemoryTaskRepository implements TaskRepository {
  private readonly tasks: Task[] = [];

  findByTitle(title: string): Task | undefined {
      return this.tasks.find(
      (task) => task.title === title
    );
  }

  findById(id: string): Task | undefined {
      return this.tasks.find(
      (task) => task.id === id
    );
  }

  findAll(): Task[] {
      return [...this.tasks];
  }

  create(task: Task): Task {
    this.tasks.push(task);

    return task;
  }
}
