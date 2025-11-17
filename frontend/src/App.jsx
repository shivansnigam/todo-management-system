import { useEffect, useState } from "react";
import Header from "./components/Header";
import StatsPanel from "./components/StatsPanel";
import FilterBar from "./components/FilterBar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import {
  fetchTodos,
  fetchStats,
  createTodo,
  updateTodo,
  deleteTodo
} from "./api/todoApi";

import Toaster, { notifySuccess, notifyError } from "./components/Toaster";

let App = () => {
  let [todos, setTodos] = useState([]);
  let [stats, setStats] = useState({ total: 0, completed: 0, pending: 0 });
  let [loading, setLoading] = useState(true);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [priority, setPriority] = useState("");

  let loadData = async (filters = {}) => {
    setLoading(true);
    try {
      let [todosRes, statsRes] = await Promise.all([
        fetchTodos(filters),
        fetchStats()
      ]);

      setTodos(todosRes.data);
      setStats(statsRes.data);
    } catch (err) {
      notifyError("Failed to load data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  let handleApplyFilters = () => {
    let params = {};
    if (search.trim()) params.search = search.trim();
    if (status) params.completed = status;
    if (priority) params.priority = priority;
    loadData(params);
  };

  let handleClearFilters = () => {
    setSearch("");
    setStatus("");
    setPriority("");
    loadData();
  };

  let handleAddTodo = async (data) => {
    try {
      await createTodo(data);
      notifySuccess("Task added successfully.");
      handleClearFilters();
    } catch (err) {
      notifyError("Failed to add task.");
    }
  };

  let handleToggleStatus = async (id, nextStatus) => {
    try {
      await updateTodo(id, { completed: nextStatus });
      notifySuccess(
        nextStatus ? "Task marked completed." : "Task marked pending."
      );
      handleApplyFilters();
    } catch (err) {
      notifyError("Failed to update task.");
    }
  };

  let handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      notifySuccess("Task deleted.");
      handleApplyFilters();
    } catch (err) {
      notifyError("Failed to delete task.");
    }
  };

  return (
    <div className="app-root">
      <Header />
      <Toaster />

      <main className="app-container">
        {loading ? (
          <p className="text-muted">Loading data...</p>
        ) : (
          <div className="dashboard-grid">
            <div className="left-panel">
              <StatsPanel stats={stats} />
              <FilterBar
                search={search}
                setSearch={setSearch}
                status={status}
                setStatus={setStatus}
                priority={priority}
                setPriority={setPriority}
                onApply={handleApplyFilters}
                onClear={handleClearFilters}
              />
              <p className="text-muted" style={{ marginTop: 8 }}>
                Showing {todos.length} task(s).
              </p>
            </div>

            <div className="right-panel">
              <TodoForm onAdd={handleAddTodo} />
              <div style={{ height: 14 }} />
              <TodoList
                todos={todos}
                onToggle={handleToggleStatus}
                onDelete={handleDelete}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
