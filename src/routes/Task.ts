import express from "express";
import { TaskController } from "../controllers/TaskController";
import validateTask from "../middlewares/validate-task";

class TaskRouter {
  private readonly router: express.Router;
  private readonly taskController: TaskController;

  constructor() {
    this.router = express.Router();
    this.taskController = new TaskController();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get("/", this.taskController.getTasks);
    this.router.post("/", validateTask, this.taskController.createTask);
    this.router.put("/:id", validateTask, this.taskController.updateTask);
    this.router.delete("/:id", this.taskController.deleteTask);
  }

  getRouter() {
    return this.router;
  }
}

export default new TaskRouter().getRouter();