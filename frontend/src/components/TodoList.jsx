import TodoItem from "./TodoItem";

let TodoList = ({ todos, onToggle, onDelete }) => {
  if (!todos.length) {
    return (
      <div className="card">
        <div className="card-title">Tasks</div>
        <p className="text-muted">No tasks yet. Add your first task.</p>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-title">Tasks</div>

      <div className="todo-list">
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
  );
};

export default TodoList;
