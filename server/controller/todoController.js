const Todo = require('../models/todoModel');

const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error - Get Todos' });
    }
};


const createTodo = async (req, res) => {
    try {
        const todo = new Todo({
            title: req.body.title,
        });

        await todo.save();

        res.json(todo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deleteTodo = async (req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);

        if (!deletedTodo) {
            return res.status(404).json({ error: 'Todo not found' });
        }

        res.json(deletedTodo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error - Delete Method' });
    }
};

const toggleTodoStatus = async (req, res) => { 
    const todo = await Todo.findById(req.params.id);
    todo.complete = !todo.complete;
    todo.save();
    res.json(todo);
};


exports.getTodos = getTodos;
exports.createTodo = createTodo;
exports.deleteTodo = deleteTodo;
exports.toggleTodoStatus = toggleTodoStatus;