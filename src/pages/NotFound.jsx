/**
 * @file NotFound.js
 * @description Este componente maneja la visualización de la página de error 404 (página no encontrada) en la aplicación.
 * La página muestra un mensaje personalizado con un efecto mágico y un enlace para redirigir al usuario a la página principal.
 * 
 * @dependencies
 * - `react-router-dom`: Usado para manejar la navegación y la obtención de errores de la ruta.
 * - `../css/NotFound.css`: Archivo de estilos específico para la página de error.
 * - `../effects/MagicEffect`: Componente para un efecto visual relacionado con magia.
 * 
 * @returns {JSX.Element} Un componente que muestra un mensaje de error y un enlace para volver a la página principal.
 * 
 * @version 1.0
 * @date 2024
 */

import { Link, useRouteError } from "react-router-dom"; // Importación de Link y useRouteError para manejo de rutas
import "../css/NotFound.css"; // Importación de estilos específicos para la página 404
import MagicEffect from "../effects/MagicEffect"; // Efecto visual mágico para la página de error

const NotFound = () => {
  const error = useRouteError(); // Obtiene el error de la ruta actual

  return (
    <div className="notfound-container">
      {/* Componente de efecto visual */}
      <MagicEffect /> 
      
      <div className="notfound-content">
        {/* Título de la página de error */}
        <h1 className="notfound-title">¡Revelio! Página no encontrada</h1>
        
        {/* Mensaje principal indicando el error */}
        <p className="notfound-message">
          Parece que te has perdido en los pasillos de Hogwarts.
        </p>

        {/* Detalles del error con el mensaje y el código de error */}
        <p className="notfound-error">
          <strong>Error:</strong>{" "}
          {error?.error?.message || "Página no encontrada"}(
          {error?.status || 404})
        </p>

        {/* Enlace de redirección al inicio */}
        <div className="redirection">
          <Link to="/" className="notfound-link">
            🏠 finite incantatem
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
