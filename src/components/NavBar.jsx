import { NavLink } from "react-router-dom"; 
import "../css/index.css"

const NavBar = () => {
  return (
    <nav className="navbar-custom">
      <div className="container">
        <NavLink to="/" className="nav-link">
          Inicio
        </NavLink>
        <NavLink to="/books" className="nav-link">
          Libros
        </NavLink>
        <NavLink to="/characters" className="nav-link">
          Personajes
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
