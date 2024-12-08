/**
 * @file Book.js
 * @description Este componente es responsable de mostrar la información detallada de un libro específico 
 * obtenido desde una API. Utiliza `useLoaderData` de `react-router-dom` para obtener los datos del libro 
 * previamente cargados (a través del loader) y los muestra en un formato adecuado.
 * 
 * @dependencies
 * - `react-router-dom`: Para manejar la navegación con `NavLink` y cargar datos usando `useLoaderData`.
 * - `../css/index.css`: Archivo de estilos que aplica el diseño al componente.
 * 
 * @returns {JSX.Element} Un componente que muestra la portada, título, descripción y un enlace para volver a 
 * la lista de libros.
 * 
 * @version 1.0
 * @date 2024
 */

import { NavLink, useLoaderData } from "react-router-dom";  // Importa NavLink y useLoaderData de react-router-dom
import "../css/index.css";  // Importa los estilos CSS del componente

const Book = () => {
  // Obtiene los datos del libro cargados previamente a través del loader
  const { book } = useLoaderData();

  return (
    <div className="item-display">
      {/* Sección para mostrar la portada del libro */}
      <div className="item-portrait">
        <img src={book.cover} alt="imagen" />
      </div>
      
      {/* Sección para mostrar la descripción del libro */}
      <div className="item-description">
        <h1>{book.title}</h1> {/* Título del libro */}
        <p>{book.description}</p> {/* Descripción del libro */}
        
        {/* Enlace para regresar a la lista de libros */}
        <NavLink to="/books">⬅️ Volver</NavLink>
      </div>
    </div>
  );
};

export default Book;
