"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("../controllers/todos");
// Old node way
// const express = require('express');
// const Router = express.Router;
const router = express_1.Router();
router.post('/', todos_1.createTodos);
router.get('/');
router.patch('/:id');
router.delete('/:id');
exports.default = router;
