"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
var Task = /** @class */ (function () {
    function Task(task) {
        this.id = task.id;
        this.title = task.title;
        this.completed = task.completed;
    }
    return Task;
}());
exports.Task = Task;
