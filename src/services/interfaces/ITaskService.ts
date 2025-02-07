import { Task } from "../../models/Task";

export interface ITaskService {
    getTasks(): Task[];
    createTask(task: Task): Task;
    updateTask(task: Task): Task;
    deleteTask(id: number): void;
}