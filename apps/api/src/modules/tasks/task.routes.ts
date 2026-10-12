import { Router } from "express";
import { validate } from "../../middlewares/validate.middleware.js";
import { createTaskController, getTasksController ,getTaskByIdController } from "./task.controller.js";
import { createTaskSchema } from "./task.schema.js";

const taskRouter = Router();

taskRouter.post(
  "/",
  validate(createTaskSchema),
  createTaskController
);

taskRouter.get("/", getTasksController);

taskRouter.get("/:id", getTaskByIdController);

export default taskRouter;
