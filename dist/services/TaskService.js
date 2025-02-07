"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
var TaskRepository_1 = require("../repositories/TaskRepository");
var TaskService = /** @class */ (function () {
    function TaskService() {
        this.taskRepository = new TaskRepository_1.TaskRepository();
    }
    TaskService.prototype.getTasks = function () {
        return this.taskRepository.find();
    };
    TaskService.prototype.createTask = function (task) {
        return this.taskRepository.create(task);
    };
    TaskService.prototype.deleteTask = function (id) {
        var task = this.taskRepository.findById(id);
        if (!task)
            throw ({
                code: 404,
                message: 'Task not found.'
            });
        return this.taskRepository.delete(id);
    };
    TaskService.prototype.updateTask = function (task) {
        var taskExists = this.taskRepository.findById(task.id);
        if (!taskExists)
            throw ({
                code: 404,
                message: 'Task not found.'
            });
        return this.taskRepository.update(task);
    };
    return TaskService;
}());
exports.TaskService = TaskService;
