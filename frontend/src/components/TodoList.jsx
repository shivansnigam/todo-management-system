import TodoItem from "./TodoItem";

let TodoList = ({ todos, onToggle, onDelete }) => {
  if (!todos.length) {
    return (
      <div className="p-4 text-center">
        <i className="bi bi-inbox text-muted" style={{ fontSize: 32 }} />
        <p className="mt-2 mb-0 text-muted fs-6">
          No tasks yet. Add a task to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="card border-0 bg-transparent">
      <div className="card-body p-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className="d-flex align-items-center gap-2">
            <h6 className="card-title mb-0 fs-5">Tasks</h6>
            <span className="badge bg-dark border border-secondary-subtle fs-6">
              <i className="bi bi-list-task me-1" />
              {todos.length} item(s)
            </span>
          </div>
        </div>

        <div>
  {todos.map((todo) => (
    <TodoItem
      key={todo._id}
      todo={todo}
      onToggle={onToggle}
      onDelete={onDelete}
    />
  ))}
</div>

      </div>
    </div>
  );
};

export default TodoList;
