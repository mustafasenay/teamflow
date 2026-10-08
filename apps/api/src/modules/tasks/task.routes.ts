import { Router } from "express";
import { createTaskController } from "./task.controller.js";

const taskRouter = Router();

taskRouter.post("/", createTaskController);

export default taskRouter;
