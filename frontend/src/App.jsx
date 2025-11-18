import { useEffect, useState } from "react";
import Header from "./components/Header";
import StatsPanel from "./components/StatsPanel";
import FilterBar from "./components/FilterBar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Toaster, { notifySuccess, notifyError } from "./components/Toaster";

import {
  fetchTodos,
  fetchStats,
  createTodo,
  updateTodo,
  deleteTodo
} from "./api/todoApi";

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
      notifyError("Failed to load data");
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
      notifySuccess("Task added");
      handleClearFilters();
    } catch (err) {
      notifyError("Failed to add task");
    }
  };

  let handleToggleStatus = async (id, nextStatus) => {
    try {
      await updateTodo(id, { completed: nextStatus });
      notifySuccess(nextStatus ? "Marked as completed" : "Marked as pending");
      handleApplyFilters();
    } catch (err) {
      notifyError("Failed to update task");
    }
  };

  let handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      notifySuccess("Task deleted");
      handleApplyFilters();
    } catch (err) {
      notifyError("Failed to delete task");
    }
  };

  return (
    <div className="app-shell">
      <Header />
      <Toaster />

      <main className="py-4">
        <div className="main-wrapper">
          {loading ? (
            <div className="loading-shell d-flex flex-column align-items-center gap-2">
              <div className="spinner-border spinner-border-sm text-info" />
              <span className="small text-muted">Syncing your workspace</span>
            </div>
          ) : (
            <div className="row g-4">
              {/* LEFT: OVERVIEW */}
              <div className="col-lg-3 col-md-4">
                {/* h-100 HATA DIYA */}
                <div className="glass-card p-3">
                  <StatsPanel stats={stats} />
                </div>
              </div>

              {/* CENTER: NEW TASK + TASKS (middle column) */}
              <div className="col-lg-6 col-md-8">
                {/* New task form on top */}
                <div className="glass-card p-3 mb-3">
                  <TodoForm onAdd={handleAddTodo} />
                </div>

                {/* Tasks list below */}
                <div className="glass-card p-0">
                  <TodoList
                    todos={todos}
                    onToggle={handleToggleStatus}
                    onDelete={handleDelete}
                  />
                </div>

                <p className="mt-3 mb-0 footer-note text-center">
                  Tip short tasks, clear priorities and realistic deadlines keep
                  this board useful.
                </p>
              </div>

              {/* RIGHT: FILTERS */}
              <div className="col-lg-3">
                {/* yahan bhi h-100 HATA DIYA */}
                <div className="glass-card p-3">
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
                  
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
