import Todo from "../models/todo.model.js";

let parseTags = (tags) => {
  if (!tags) {
    return [];
  }

  if (Array.isArray(tags)) {
    return tags
      .map((t) => String(t).trim())
      .filter((t) => t.length > 0);
  }

  if (typeof tags === "string") {
    return tags
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t.length > 0);
  }

  return [];
};

let createTodo = async (req, res, next) => {
  try {
    let { title, description, completed, priority, deadline, tags } = req.body;

    if (!title || title.trim() === "") {
      return res.status(400).json({ message: "Title is required" });
    }

    let todoData = {
      title: title.trim(),
      description: description ? description.trim() : "",
      completed: completed || false,
      priority: priority || "normal",
      tags: parseTags(tags)
    };

    if (deadline) {
      todoData.deadline = new Date(deadline);
    }

    let todo = await Todo.create(todoData);

    return res.status(201).json(todo);
  } catch (error) {
    next(error);
  }
};

// @desc    Get all todos (with filters & search)
// @route   GET /api/v1/todos
// Query params:
//   completed=true/false
//   priority=low|normal|high
//   search=some text
let getTodos = async (req, res, next) => {
  try {
    let { completed, priority, search } = req.query;

    let filter = {};

    // completed filter
    if (completed === "true") {
      filter.completed = true;
    } else if (completed === "false") {
      filter.completed = false;
    }

    // priority filter
    if (priority) {
      filter.priority = priority;
    }

    // search by title (case-insensitive)
    if (search && search.trim() !== "") {
      filter.title = {
        $regex: search.trim(),
        $options: "i"
      };
    }

    let todos = await Todo.find(filter).sort({ createdAt: -1 });

    return res.json(todos);
  } catch (error) {
    next(error);
  }
};


// @route   GET /api/v1/todos/:id
let getTodoById = async (req, res, next) => {
  try {
    let { id } = req.params;
    let todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    return res.json(todo);
  } catch (error) {
    next(error);
  }
};


let updateTodo = async (req, res, next) => {
  try {
    let { id } = req.params;
    let { title, description, completed, priority, deadline, tags } = req.body;

    let todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    if (title !== undefined) {
      todo.title = title.trim();
    }

    if (description !== undefined) {
      todo.description = description.trim();
    }

    if (completed !== undefined) {
      todo.completed = completed;
    }

    if (priority !== undefined) {
      todo.priority = priority;
    }

    if (deadline !== undefined) {
      todo.deadline = deadline ? new Date(deadline) : null;
    }

    if (tags !== undefined) {
      todo.tags = parseTags(tags);
    }

    let updatedTodo = await todo.save();
    return res.json(updatedTodo);
  } catch (error) {
    next(error);
  }
};

// @route   DELETE /api/v1/todos/:id
let deleteTodo = async (req, res, next) => {
  try {
    let { id } = req.params;

    let todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    await todo.deleteOne();
    return res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    next(error);
  }
};

// @route   GET /api/v1/todos/stats
// returns: { total, completed, pending }
let getTodoStats = async (req, res, next) => {
  try {
    let total = await Todo.countDocuments();
    let completed = await Todo.countDocuments({ completed: true });
    let pending = await Todo.countDocuments({ completed: false });

    return res.json({
      total,
      completed,
      pending
    });
  } catch (error) {
    next(error);
  }
};

export {
  createTodo,
  getTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
  getTodoStats
};
