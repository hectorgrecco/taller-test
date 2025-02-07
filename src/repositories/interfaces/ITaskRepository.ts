import { Task } from "../../models/Task";

export interface ITaskRepository {
    find(): Task[];
    findById(id: number): Task | null;
    create(task: Task): Task;
    delete(id: number): void;
    update(task: Task): Task;
}