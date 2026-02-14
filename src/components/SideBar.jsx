import { navItems } from "../data/mockData";

function SideBar({ activePage, onPageChange, onLogout }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-logo">Shield Admin</h2>
      </div>
      <ul className="nav-list">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={activePage === item.id ? "nav-item active" : "nav-item"}
            onClick={() => onPageChange(item.id)}
          >
            {item.lable}
          </li>
        ))}
      </ul>
      <div className="sidebar-footer">
        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </div>
    </aside>
  );
}

export default SideBar;
