import express from "express";
import taskRouter from "./modules/tasks/task.routes.js";


const app = express();

app.use(express.json());

app.get("/api/health", (req, res) => {
    res.status(200).json({
        status: "ok",
    });
});

app.use("/api/tasks", taskRouter);

export default app;
