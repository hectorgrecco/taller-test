"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
var Task_1 = require("../models/Task");
var TaskService_1 = require("../services/TaskService");
var TaskController = /** @class */ (function () {
    function TaskController() {
        var _this = this;
        this.taskService = new TaskService_1.TaskService();
        this.createTask = function (req, res) {
            try {
                var task = new Task_1.Task({
                    title: req.body.title,
                    completed: req.body.completed
                });
                var createdTask = _this.taskService.createTask(task);
                res.status(201).json(createdTask);
            }
            catch (error) {
                var code = (error === null || error === void 0 ? void 0 : error.code) || 500;
                res.status(code).json({ error: "Error creating task" });
            }
        };
        this.getTasks = function (req, res) {
            try {
                var tasks = _this.taskService.getTasks();
                res.status(200).json(tasks);
            }
            catch (error) {
                var code = (error === null || error === void 0 ? void 0 : error.code) || 500;
                res.status(code).json({ error: "Error retrieving tasks" });
            }
        };
        this.updateTask = function (req, res) {
            try {
                var task = new Task_1.Task({
                    id: +req.params.id,
                    title: req.body.title,
                    completed: req.body.completed
                });
                var updatedTask = _this.taskService.updateTask(task);
                res.status(200).json(updatedTask);
            }
            catch (error) {
                var code = (error === null || error === void 0 ? void 0 : error.code) || 500;
                res.status(code).json({ error: "Error updating task" });
            }
        };
        this.deleteTask = function (req, res) {
            try {
                var taskId = +req.params.id;
                _this.taskService.deleteTask(taskId);
                res.status(204).send();
            }
            catch (error) {
                var code = (error === null || error === void 0 ? void 0 : error.code) || 500;
                res.status(code).json({ error: "Error deleting task" });
            }
        };
    }
    return TaskController;
}());
exports.TaskController = TaskController;
