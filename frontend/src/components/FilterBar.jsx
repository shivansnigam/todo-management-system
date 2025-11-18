let FilterBar = ({
  search,
  setSearch,
  status,
  setStatus,
  priority,
  setPriority,
  onApply,
  onClear
}) => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h6 className="card-title mb-0 fs-5">Filters</h6>
        <span className="badge bg-dark border border-secondary-subtle fs-6">
          <i className="bi bi-funnel me-1" />
          Refine view
        </span>
      </div>

      <div className="mb-3">
        <label className="form-label mb-1 fs-6">Search by title</label>
        <div className="input-group input-group-sm">
          <span className="input-group-text bg-transparent border-secondary-subtle">
            <i className="bi bi-search text-muted" />
          </span>
          <input
            className="form-control fs-6"
            placeholder="Search tasks"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="row g-2">
        <div className="col-6">
          <label className="form-label mb-1 fs-6">Status</label>
          <select
            className="form-select form-select-sm fs-6"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">All</option>
            <option value="true">Completed</option>
            <option value="false">Pending</option>
          </select>
        </div>

        <div className="col-6">
          <label className="form-label mb-1 fs-6">Priority</label>
          <select
            className="form-select form-select-sm fs-6"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="">All</option>
            <option value="low">Low</option>
            <option value="normal">Normal</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>

      {/* <div className="filter-chip-row">
        <span className="filter-chip fs-6">
          <i className="bi bi-lightning-charge me-1" />
          High urgency
        </span>
        <span className="filter-chip fs-6">
          <i className="bi bi-calendar3 me-1" />
          Has deadline
        </span>
      </div> */}

      <div className="d-flex gap-2 mt-3">
        <button
          type="button"
          className="btn btn-primary btn-sm flex-grow-1 fs-6"
          onClick={onApply}
        >
          <i className="bi bi-play-circle" />
          Apply
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary btn-sm fs-6"
          onClick={onClear}
        >
          <i className="bi bi-x-circle" />
          Reset
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
