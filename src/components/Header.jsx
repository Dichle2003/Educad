import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ padding: "10px 20px", background: "#007bff", color: "#fff" }}>
      <h1>My Website</h1>
      <nav>
        <Link to="/" style={{ marginRight: "10px", color: "#fff", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>
          About
        </Link>
      </nav>
    </header>
  );
}

export default Header;