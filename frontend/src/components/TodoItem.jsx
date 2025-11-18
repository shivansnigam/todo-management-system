let formatDate = (dateStr) => {
  if (!dateStr) return "No deadline";
  let d = new Date(dateStr);
  if (isNaN(d)) return dateStr;
  return d.toLocaleDateString();
};

let getPriorityBadgeClass = (priority) => {
  switch (priority) {
    case "high":
      return "badge badge-priority-high fs-6";
    case "low":
      return "badge badge-priority-low fs-6";
    default:
      return "badge badge-priority-normal fs-6";
  }
};

let TodoItem = ({ todo, onToggle, onDelete }) => {
  let {
    _id,
    title,
    description,
    completed,
    priority,
    deadline,
    tags = []
  } = todo;

  return (
    <div
      className={
        "todo-item mb-2 " + (completed ? "todo-item-completed" : "shadow-sm")
      }
    >
      <div className="card-body p-3 d-flex gap-3 align-items-start">
        <div className="flex-grow-1">
          <div className="d-flex align-items-center flex-wrap gap-2 mb-1">
            <h6
              className={
                "mb-0 todo-item-title fs-6 " +
                (completed ? "text-decoration-line-through text-muted" : "")
              }
            >
              {title}
            </h6>

            <span className={getPriorityBadgeClass(priority)}>
              <i className="bi bi-flag-fill me-1" />
              {priority ? priority.toUpperCase() : "NORMAL"}
            </span>

            {completed && (
              <span className="badge badge-done fs-6">
                <i className="bi bi-check2-circle me-1" />
                DONE
              </span>
            )}
          </div>

          {description && (
            <p className="mb-1 text-muted fs-6">{description}</p>
          )}

          <div className="mb-1 d-flex align-items-center gap-2 text-muted fs-6">
            <i className="bi bi-calendar-week" />
            <span>
              <strong>Deadline</strong> {formatDate(deadline)}
            </span>
          </div>

          {tags.length > 0 && (
            <div className="d-flex flex-wrap gap-1 mt-1">
              {tags.map((tag) => (
                <span key={tag} className="tag-pill fs-6">
                  <i className="bi bi-hash me-1" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="d-flex flex-column gap-2">
          <button
            type="button"
            className={
              "btn btn-sm px-3 fs-6 " +
              (completed ? "btn-outline-warning" : "btn-outline-success")
            }
            onClick={() => onToggle(_id, !completed)}
          >
            <i
              className={
                completed ? "bi bi-arrow-counterclockwise" : "bi bi-check2"
              }
            />
            {completed ? "pending" : "done"}
          </button>
          <button
            type="button"
            className="btn btn-sm btn-outline-danger px-3 fs-6"
            onClick={() => onDelete(_id)}
          >
            <i className="bi bi-trash3" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
