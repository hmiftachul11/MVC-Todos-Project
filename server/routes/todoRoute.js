const express = require('express');
const router = express.Router();

const { getTodos, createTodo, deleteTodo, toggleTodoStatus } = require('../controller/todoController');

router.get("/todos", getTodos);
router.post("/todo/new", createTodo);
router.delete("/todo/delete/:id", deleteTodo);
router.get("/todo/status/:id", toggleTodoStatus);

module.exports = router;