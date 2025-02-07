export class Task {
    id?: number;
    title: string;
    completed: boolean;

    constructor(task: {
        id?: number;
        title: string;
        completed: boolean;
    }) {
        this.id = task.id;
        this.title = task.title;
        this.completed = task.completed;
    }
}