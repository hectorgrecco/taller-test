"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validateTask = function (req, res, next) {
    var _a = req.body, title = _a.title, completed = _a.completed;
    if (typeof title !== "string" || title.trim() === "") {
        return res.status(400).json({ message: "Title is required and must be a string" });
    }
    if (typeof completed !== "boolean") {
        return res.status(400).json({ message: "Completed must be a boolean" });
    }
    next();
};
exports.default = validateTask;
