let Header = () => {
  return (
    <header className="app-header">
      <nav className="navbar navbar-dark main-wrapper">
        <div className="d-flex align-items-center gap-3">
          <div className="brand-pill">T</div>
          <div>
            <h1 className="app-title mb-0">Todo Control Room</h1>
            <p className="app-subtitle mb-0">
              One place for tasks, focus and deadlines.
            </p>
          </div>
        </div>

        <div className="header-meta ms-auto">
          <span className="header-pill d-none d-md-inline-flex">
            <i className="bi bi-bullseye me-1" />
            Focus first on high priority tasks.
          </span>
          <span className="header-pill">
            <i className="bi bi-check2-square me-1" />
            Today&apos;s board
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
