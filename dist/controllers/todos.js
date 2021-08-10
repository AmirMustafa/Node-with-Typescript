"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodos = void 0;
const todos_1 = require("../models/todos");
const TODOS = [];
const createTodos = (req, res, next) => {
    const text = req.body.text; // making it string type
    // const text = req.body.text; //typeScript is not allowing any type
    const id = Math.random().toString();
    const newTodo = new todos_1.Todo(id, text);
    TODOS.push(newTodo);
    res.json({ message: 'Todo created successfully', createdTodo: newTodo });
};
exports.createTodos = createTodos;
