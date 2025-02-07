import { Request, Response } from "express";
import { Task } from "../models/Task";
import { ITaskService } from "../services/interfaces/ITaskService";
import { TaskService } from "../services/TaskService";

export class TaskController {
    private readonly taskService: ITaskService = new TaskService();

    public createTask = (req: Request, res: Response) => {
        try {
            const task = new Task({
                title: req.body.title,
                completed: req.body.completed
            });
            const createdTask = this.taskService.createTask(task);
            res.status(201).json(createdTask);
        } catch (error) {
            const code = error?.code || 500;
            res.status(code).json({ error: error?.message || "Error creating task" });
        }
    };

    public getTasks = (req: Request, res: Response) => {
        try {
            const tasks = this.taskService.getTasks();
            res.status(200).json(tasks);
        } catch (error) {
            const code = error?.code || 500;
            res.status(code).json({ error: error?.message || "Error retrieving tasks" });
        }
    };

    public updateTask = (req: Request, res: Response) => {
        try {
            const task = new Task({
                id: +req.params.id,
                title: req.body.title,
                completed: req.body.completed
            });
            const updatedTask = this.taskService.updateTask(task);
            res.status(200).json(updatedTask);
        } catch (error) {
            const code = error?.code || 500;
            res.status(code).json({ error: error?.message || "Error updating task" });
        }
    };

    public deleteTask = (req: Request, res: Response) => {
        try {
            const taskId = +req.params.id;
            this.taskService.deleteTask(taskId);
            res.status(204).send();
        } catch (error) {
            const code = error?.code || 500;
            res.status(code).json({ error: error?.message || "Error deleting task" });
        }
    };
}
