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
    <div className="card" style={{ marginTop: 14 }}>
      <div className="card-title">Filters</div>

      <div className="filter-bar">
        <input
          className="filter-input"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="filter-select"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All status</option>
          <option value="true">Completed</option>
          <option value="false">Pending</option>
        </select>

        <select
          className="filter-select"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="">All priority</option>
          <option value="low">Low</option>
          <option value="normal">Normal</option>
          <option value="high">High</option>
        </select>

        <button
          onClick={onApply}
          className="button-primary"
          style={{ paddingInline: 18 }}
        >
          Apply
        </button>

        <button onClick={onClear} className="filter-clear-btn">
          Clear
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
