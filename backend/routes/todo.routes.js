import express from "express";
import {
  createTodo,
  getTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
  getTodoStats
} from "../controllers/todo.controller.js";

let router = express.Router();

router.get("/stats", getTodoStats);

// /api/v1/todos
router
  .route("/")
  .post(createTodo)
  .get(getTodos);

// /api/v1/todos/:id
router
  .route("/:id")
  .get(getTodoById)
  .put(updateTodo)
  .delete(deleteTodo);

export default router;
