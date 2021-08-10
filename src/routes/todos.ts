import { Router } from 'express';
import { createTodos } from '../controllers/todos';

// Old node way
// const express = require('express');
// const Router = express.Router;

const router = Router();


router.post('/', createTodos);

router.get('/');

router.patch('/:id');

router.delete('/:id');

export default router;