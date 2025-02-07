import { Task } from "../models/Task";
import { ITaskRepository } from "./interfaces/ITaskRepository";
import { db } from "../db/tasks";

export class TaskRepository implements ITaskRepository {
    private tasks: Task[];

    constructor() {
        this.tasks = db;
    }

    find(): Task[] {
        return this.tasks.map(task => new Task({
            id: task.id,
            title: task.title,
            completed: task.completed
        }));
    }

    findById(id: number): Task | null {
        const task = this.tasks.find(task => task.id === id);
        if (!task) return null;
        
        return new Task({
            id: task.id,
            title: task.title,
            completed: task.completed
        });
    }

    create(task: Task): Task {
        this.tasks = [...this.tasks, {
            id: this.tasks.length + 1,
            title: task.title,
            completed: task.completed
        }];
        return task;
    }

    delete(id: number): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    update(task: Task): Task {
        this.tasks = this.tasks.map(t => {
            if (t.id === task.id) {
                return { ...t, ...task };
            }
            return t;
        });

        return new Task(task);
    }

}