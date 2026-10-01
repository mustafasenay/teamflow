import { Router } from "express";
import { CreateTaskController } from "./task.controller.js";

const taskRouter = Router();

taskRouter.post("/", CreateTaskController);

export default taskRouter;
