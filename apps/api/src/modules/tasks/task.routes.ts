import { Router } from "express";
import { validate } from "../../middlewares/validate.middleware.js";
import { createTaskController } from "./task.controller.js";
import { createTaskSchema } from "./task.schema.js";

const taskRouter = Router();

taskRouter.post(
  "/",
  validate(createTaskSchema),
  createTaskController
);

export default taskRouter;
