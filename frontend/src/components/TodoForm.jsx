import { useState } from "react";

let initialState = {
  title: "",
  description: "",
  priority: "normal",
  deadline: "",
  tags: ""
};

let TodoForm = ({ onAdd }) => {
  let [form, setForm] = useState(initialState);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;

    let payload = {
      title: form.title.trim(),
      description: form.description.trim(),
      priority: form.priority,
      deadline: form.deadline || null,
      tags: form.tags
        ? form.tags
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean)
        : []
    };

    onAdd(payload);
    setForm(initialState);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h6 className="card-title mb-1 fs-5">New task</h6>
          <span className="text-muted fs-6">
            Capture what you want to get done next.
          </span>
        </div>
        <span className="badge bg-dark border border-secondary-subtle fs-6">
          <i className="bi bi-plus-circle me-1" />
          Quick add
        </span>
      </div>

      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-12">
          <label className="form-label mb-1 fs-6">
            Task title <span className="text-danger">*</span>
          </label>
          <input
            className="form-control form-control-sm fs-6"
            name="title"
            placeholder="Ship API for todo dashboard"
            value={form.title}
            onChange={handleChange}
          />
        </div>

        <div className="col-12">
          <label className="form-label mb-1 fs-6">Short description</label>
          <textarea
            className="form-control form-control-sm fs-6"
            rows={2}
            name="description"
            placeholder="Optional context, links or notes"
            value={form.description}
            onChange={handleChange}
          />
        </div>

        <div className="col-sm-4">
          <label className="form-label mb-1 fs-6">Priority</label>
          <select
            className="form-select form-select-sm fs-6"
            name="priority"
            value={form.priority}
            onChange={handleChange}
          >
            <option value="low">Low</option>
            <option value="normal">Normal</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="col-sm-4">
          <label className="form-label mb-1 fs-6">Deadline</label>
          <input
            type="date"
            className="form-control form-control-sm fs-6"
            name="deadline"
            value={form.deadline}
            onChange={handleChange}
          />
        </div>

        <div className="col-sm-4">
          <label className="form-label mb-1 fs-6">
            Tags
          </label>
          <input
            className="form-control form-control-sm fs-6"
            name="tags"
            placeholder="ui, api, backlog"
            value={form.tags}
            onChange={handleChange}
          />
        </div>

        <div className="col-12 d-flex justify-content-end">
          <button type="submit" className="btn btn-primary btn-sm px-4 fs-6">
            <i className="bi bi-plus-lg" />
            Add task
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
