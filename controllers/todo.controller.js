const Todo = require("../model/todo.model");

exports.getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.status(200).json(todos);
};

exports.getTodo = async (req, res) => {
  const { todoId } = req.params;
  const todo = await Todo.findById(todoId);
  res.status(200).json(todo);
};

exports.createTodo = async (req, res) => {
  const todo = await Todo.create(req.body);
  res.status(200).json(todo);
};

exports.updateTodo = async (req, res) => {
  const { todoId } = req.params;
  const todo = await Todo.findByIdAndUpdate(todoId, req.body);
  res.status(200).json(todo);
};

exports.deleteTodo = async (req, res) => {
  const { todoId } = req.params;
  await Todo.findOneAndDelete(todoId);
  res.status(200).json({ message: "todo removed", todoId });
};
