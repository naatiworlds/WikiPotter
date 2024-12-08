/**
 * @file LayoutPublic.js
 * @description Este componente es un **layout** utilizado para las rutas públicas de la aplicación.
 * Contiene la estructura básica que incluye el encabezado (Header), la barra de navegación (NavBar), 
 * y el pie de página (Footer). Además, gestiona la aplicación del tema global (ya sea claro o oscuro) 
 * utilizando el contexto de tema (`ThemeContext`).
 * 
 * Este layout está diseñado para envolver las rutas públicas, proporcionando una estructura consistente 
 * para todas las páginas accesibles sin autenticación.
 * 
 * @dependencies
 * - React (`useContext`)
 * - React Router (`Outlet`)
 * @version 1.0
 * @date 2024
 */

import { Outlet } from "react-router-dom"; // Componente de React Router para renderizar rutas hijas
import NavBar from "../components/NavBar"; // Barra de navegación
import Footer from "../components/Footer"; // Pie de página
import { useContext } from "react"; // Hook para usar el contexto
import { ThemeContext } from "../context/ThemeContext"; // Contexto para manejar el tema global
import Header from "../components/Header"; // Encabezado

/**
 * LayoutPublic es un componente que envuelve las rutas públicas de la aplicación. 
 * Aplica la estructura de navegación y pie de página y maneja la aplicación del tema.
 * 
 * @returns {JSX.Element} Un layout con el encabezado, la barra de navegación, el contenido de las rutas hijas 
 * (Outlet) y el pie de página. Además, el tema se aplica a toda la estructura.
 */
const LayoutPublic = () => {
  // Obtiene el tema global del contexto de tema
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app-container ${theme}`}> {/* Aplica el tema global a la clase del contenedor principal */}
      <div className={theme}> {/* Aplica el tema global a todo el contenido de la página */}
        <main>
          <Header /> {/* Muestra el encabezado */}
          <NavBar /> {/* Muestra la barra de navegación */}
          <Outlet /> {/* Renderiza las rutas hijas dentro de este componente */}
        </main>
        <Footer /> {/* Muestra el pie de página */}
      </div>
    </div>
  );
};

export default LayoutPublic;
