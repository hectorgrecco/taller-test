"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRepository = void 0;
var Task_1 = require("../models/Task");
var tasks_1 = require("../db/tasks");
var TaskRepository = /** @class */ (function () {
    function TaskRepository() {
        this.tasks = tasks_1.db;
    }
    TaskRepository.prototype.find = function () {
        return this.tasks.map(function (task) { return new Task_1.Task({
            id: task.id,
            title: task.title,
            completed: task.completed
        }); });
    };
    TaskRepository.prototype.findById = function (id) {
        var task = this.tasks.find(function (task) { return task.id === id; });
        if (!task)
            return null;
        return new Task_1.Task({
            id: task.id,
            title: task.title,
            completed: task.completed
        });
    };
    TaskRepository.prototype.create = function (task) {
        this.tasks = __spreadArray(__spreadArray([], this.tasks, true), [{
                id: this.tasks.length + 1,
                title: task.title,
                completed: task.completed
            }], false);
        return task;
    };
    TaskRepository.prototype.delete = function (id) {
        this.tasks = this.tasks.filter(function (task) { return task.id !== id; });
    };
    TaskRepository.prototype.update = function (task) {
        this.tasks = this.tasks.map(function (t) {
            if (t.id === task.id) {
                return __assign(__assign({}, t), task);
            }
            return t;
        });
        return new Task_1.Task(task);
    };
    return TaskRepository;
}());
exports.TaskRepository = TaskRepository;
