let StatsPanel = ({ stats }) => {
  return (
    <div className="card">
      <div className="card-title">Overview</div>

      <div className="stats-grid">
        <div className="stats-card stats-total">
          <div className="stats-title">Total tasks</div>
          <div className="stats-value">{stats.total}</div>
        </div>

        <div className="stats-card stats-completed">
          <div className="stats-title">Completed</div>
          <div className="stats-value">{stats.completed}</div>
        </div>

        <div className="stats-card stats-pending">
          <div className="stats-title">Pending</div>
          <div className="stats-value">{stats.pending}</div>
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;
