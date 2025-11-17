let TodoItem = ({ todo, onToggle, onDelete }) => {
  let isCompleted = todo.completed;

  let priorityClass = "todo-pill-normal";
  if (todo.priority === "low") {
    priorityClass = "todo-pill-low";
  } else if (todo.priority === "high") {
    priorityClass = "todo-pill-high";
  }

  return (
    <div className={`todo-item ${isCompleted ? "todo-item-completed" : ""}`}>
      <div className="todo-main">
        <div className={`todo-title ${isCompleted ? "completed" : ""}`}>
          {todo.title}
          <span className={`todo-pill ${priorityClass}`}>{todo.priority}</span>
          {isCompleted && (
            <span className="todo-pill todo-pill-done">Done</span>
          )}
        </div>

        {todo.description && (
          <div className="todo-desc">{todo.description}</div>
        )}

        <div className="todo-meta">
          {todo.deadline && (
            <span>
              <strong>Deadline:</strong> {todo.deadline.slice(0, 10)}
            </span>
          )}
        </div>

        {todo.tags && todo.tags.length > 0 && (
          <div className="todo-tags">
            <strong>Tags:</strong> {todo.tags.join(", ")}
          </div>
        )}
      </div>


      <div className="todo-actions">
        <button
          className={`btn-small ${
            isCompleted ? "btn-undo" : "btn-complete"
          }`}
          onClick={() => onToggle(todo._id, !isCompleted)}
        >
          {isCompleted ? "Mark pending" : "Mark done"}
        </button>

        <button
          className="btn-small btn-delete"
          onClick={() => onDelete(todo._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
