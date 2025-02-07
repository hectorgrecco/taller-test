"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var TaskController_1 = require("../controllers/TaskController");
var validate_task_1 = __importDefault(require("../middlewares/validate-task"));
var TaskRouter = /** @class */ (function () {
    function TaskRouter() {
        this.router = express_1.default.Router();
        this.taskController = new TaskController_1.TaskController();
        this.initializeRoutes();
    }
    TaskRouter.prototype.initializeRoutes = function () {
        this.router.get("/", this.taskController.getTasks);
        this.router.post("/", validate_task_1.default, this.taskController.createTask);
        this.router.put("/:id", validate_task_1.default, this.taskController.updateTask);
        this.router.delete("/:id", this.taskController.deleteTask);
    };
    TaskRouter.prototype.getRouter = function () {
        return this.router;
    };
    return TaskRouter;
}());
exports.default = new TaskRouter().getRouter();
