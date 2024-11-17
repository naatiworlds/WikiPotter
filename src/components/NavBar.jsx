import { NavLink } from "react-router-dom"; 
import "../css/index.css"

const NavBar = () => {
  return (
    <nav className="navbar-custom">
      <div className="container">
        <NavLink to="/" className="nav-link">
          Spells
        </NavLink>
        <NavLink to="/books" className="nav-link">
          Books
        </NavLink>
        <NavLink to="/characters" className="nav-link">
          Characters
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
