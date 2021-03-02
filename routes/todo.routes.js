const { Router } = require("express");
const route = Router();
const {
  getTodo,
  getTodos,
  updateTodo,
  deleteTodo,
  createTodo,
} = require("../controllers/todo.controller");

route
  .get("/", getTodos)
  .get("/:todoId", getTodo)
  .post("/", createTodo)
  .patch("/:todoId", updateTodo)
  .delete("/:todoId", deleteTodo);

module.exports = route;
