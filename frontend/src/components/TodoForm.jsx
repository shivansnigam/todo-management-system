import { useState } from "react";

let TodoForm = ({ onAdd }) => {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [priority, setPriority] = useState("normal");
  let [deadline, setDeadline] = useState("");
  let [tags, setTags] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAdd({
      title,
      description,
      priority,
      deadline,
      tags
    });

    setTitle("");
    setDescription("");
    setPriority("normal");
    setDeadline("");
    setTags("");
  };

  return (
    <div className="card">
      <div className="card-title">Add new task</div>

      <form onSubmit={handleSubmit} className="todo-form">
        <input
          className="input"
          placeholder="Task title (required)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="textarea"
          placeholder="Short description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="todo-form-row">
          <select
            className="select"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low priority</option>
            <option value="normal">Normal priority</option>
            <option value="high">High priority</option>
          </select>

          <input
            type="date"
            className="input"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>

        <input
          className="input"
          placeholder="Tags (comma separated, e.g. work, urgent)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />

        <button type="submit" className="button-primary">
          Add task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
