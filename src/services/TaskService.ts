import { Task } from "../models/Task";
import { ITaskRepository } from "../repositories/interfaces/ITaskRepository";
import { TaskRepository } from "../repositories/TaskRepository";

export class TaskService {
    private readonly taskRepository: ITaskRepository;

    constructor() {
        this.taskRepository = new TaskRepository();
    }

    public getTasks(): Task[] {
        return this.taskRepository.find();
    }
    
    public createTask(task: Task): Task {
        return this.taskRepository.create(task);
    }

    public deleteTask(id: number): void {
        const task = this.taskRepository.findById(id);
        if(!task) throw ({
            code: 404,
            message: 'Task not found.'
        });
        return this.taskRepository.delete(id);
    }

    public updateTask(task: Task): Task {
        const taskExists = this.taskRepository.findById(task.id!);
        if(!taskExists) throw ({
            code: 404,
            message: 'Task not found.'
        });
        return this.taskRepository.update(task);
    }
}