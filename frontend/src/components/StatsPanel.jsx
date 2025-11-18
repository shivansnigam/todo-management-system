let StatsPanel = ({ stats }) => {
  let { total, completed, pending } = stats;
  let completionRate = total ? Math.round((completed / total) * 100) : 0;

  return (
    <div>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="card-title mb-0 fs-6">OVERVIEW</h6>

        <span className="badge bg-dark border border-secondary-subtle rounded-pill px-3 py-2 fs-6 d-flex align-items-center gap-2">
          <i className="bi bi-graph-up-arrow" />
          <span>{completionRate}% done</span>
        </span>
      </div>

      {/* Stats list */}
      <div className="d-flex flex-column gap-2">
        {/* Total */}
        <div className="d-flex justify-content-between align-items-center py-2 px-3 rounded-3 border border-secondary-subtle bg-dark bg-opacity-25">
          <div className="d-flex align-items-center gap-2">
            <span className="badge rounded-circle bg-info d-flex align-items-center justify-content-center">
              <i className="bi bi-list-task" />
            </span>
            <div>
              <div className="fw-semibold">Total</div>
              <div className="text-muted">All tasks</div>
            </div>
          </div>
          <div className="fs-4 fw-semibold">{total}</div>
        </div>

        {/* Done */}
        <div className="d-flex justify-content-between align-items-center py-2 px-3 rounded-3 border border-secondary-subtle bg-dark bg-opacity-25">
          <div className="d-flex align-items-center gap-2">
            <span className="badge rounded-circle bg-success d-flex align-items-center justify-content-center">
              <i className="bi bi-check2" />
            </span>
            <div>
              <div className="fw-semibold">Done</div>
              <div className="text-muted">Completed</div>
            </div>
          </div>
          <div className="fs-4 fw-semibold">{completed}</div>
        </div>

        {/* Pending */}
        <div className="d-flex justify-content-between align-items-center py-2 px-3 rounded-3 border border-secondary-subtle bg-dark bg-opacity-25">
          <div className="d-flex align-items-center gap-2">
            <span className="badge rounded-circle bg-warning d-flex align-items-center justify-content-center">
              <i className="bi bi-hourglass-split" />
            </span>
            <div>
              <div className="fw-semibold">Pending</div>
              <div className="text-muted">In queue</div>
            </div>
          </div>
          <div className="fs-4 fw-semibold">{pending}</div>
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;
