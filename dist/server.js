"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Task_1 = __importDefault(require("./routes/Task"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = (0, express_1.default)();
        this.port = +process.env.PORT || 3100;
        this.middlewares();
        this.routes();
    }
    Server.prototype.middlewares = function () {
        this.app.use(express_1.default.json());
    };
    Server.prototype.routes = function () {
        this.app.use("/tasks", Task_1.default);
    };
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("Server is running on port ".concat(_this.port));
        });
    };
    return Server;
}());
var server = new Server();
server.start();
