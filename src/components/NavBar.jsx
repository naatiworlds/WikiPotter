import React from "react";
import { Link, NavLink } from "react-router-dom"; // Importación de Link

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-secondary">
      <div className="container">
        <NavLink to="/" className="btn btn-outline-dark">
          Spells
        </NavLink>
        <NavLink to="/books" className="btn btn-outline-dark">
          Books
        </NavLink>
        <NavLink to="/characters" className="btn btn-outline-dark">
          Characters
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
