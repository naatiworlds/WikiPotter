/**
 * @file NavBar.jsx
 * @description Componente que renderiza una barra de navegación personalizada para la aplicación. Utiliza `NavLink` de `react-router-dom` para la navegación entre diferentes rutas de la aplicación. El componente permite acceder a las secciones de "Inicio", "Libros" y "Personajes" de la aplicación.
 * @dependencies
 * - `react-router-dom`: Para manejar la navegación entre rutas de la aplicación.
 * @version 1.0
 * @date 2024
 */

import { NavLink } from "react-router-dom"; // Importa NavLink para gestionar enlaces de navegación
import "../css/index.css"; // Importa el archivo CSS para los estilos

/**
 * Componente de la barra de navegación.
 * Renderiza enlaces de navegación a las rutas principales de la aplicación.
 * 
 * @returns {JSX.Element} Componente de barra de navegación con enlaces a las rutas "Inicio", "Libros" y "Personajes".
 */
const NavBar = () => {
  return (
    <nav className="navbar-custom">
      <div className="container">
        {/* Enlace a la página de Inicio */}
        <NavLink to="/" className="nav-link">
          Inicio
        </NavLink>

        {/* Enlace a la página de Libros */}
        <NavLink to="/books" className="nav-link">
          Libros
        </NavLink>

        {/* Enlace a la página de Personajes */}
        <NavLink to="/characters" className="nav-link">
          Personajes
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
