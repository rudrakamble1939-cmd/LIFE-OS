import { Link } from "react-router-dom";
import "../styles/Home.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        LifeOS
      </div>

      <nav className="nav-links">

        <a href="#features">Features</a>

        <Link to="/login">
          Login
        </Link>

        <Link
          to="/signup"
          className="primary-btn"
        >
          Sign Up
        </Link>

      </nav>

    </header>
  );
}

export default Navbar;