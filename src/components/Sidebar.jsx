import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">

      <h2 className="sidebar-logo">
        LifeOS
      </h2>

      <nav className="sidebar-menu">

        <NavLink to="/dashboard">
          📊 Dashboard
        </NavLink>

        <NavLink to="/tasks">
          📋 Tasks
        </NavLink>

        <NavLink to="/notes">
          📝 Notes
        </NavLink>

        <NavLink to="/habits">
          🔥 Habits
        </NavLink>

        <NavLink to="/expenses">
          💰 Expenses
        </NavLink>

        <NavLink to="/ai-planner">
          🤖 AI Planner
        </NavLink>

        <NavLink to="/receipt-scanner">
          📄 Receipt Scanner
        </NavLink>

        <NavLink to="/profile">
          👤 Profile
        </NavLink>

      </nav>

    </aside>
  );
}

export default Sidebar;