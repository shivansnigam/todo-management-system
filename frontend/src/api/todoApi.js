import axios from "axios";

let api = axios.create({
  baseURL: "http://localhost:5000/api/v1/todos"
});

// GET todos with optional filters/search
export let fetchTodos = (params = {}) => api.get("/", { params });

// GET stats
export let fetchStats = () => api.get("/stats");

// CREATE
export let createTodo = (data) => api.post("/", data);

// UPDATE
export let updateTodo = (id, data) => api.put(`/${id}`, data);

// DELETE
export let deleteTodo = (id) => api.delete(`/${id}`);
