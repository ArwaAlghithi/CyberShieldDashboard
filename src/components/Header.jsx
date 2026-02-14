import ThemeToggle from "./ThemeToggle";

function Header({ onToggleSideBar }) {
  return (
    <header className="header">
      <button
        className="btn-menu"
        onClick={onToggleSideBar}
        title="Toggle Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      <div className="header-actions">
        <div className="user-profile">
          <div className="user-text">
            <span className="user-name">Admin</span>
            <span className="user-role">Security Lead ✦</span>
          </div>
          <div className="user-avatar">A</div>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
