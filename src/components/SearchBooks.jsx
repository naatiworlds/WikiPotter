/**
 * @file SearchBooks.jsx
 * @description Componente que permite realizar búsquedas de libros por título y año de publicación. Los usuarios pueden filtrar los libros mostrando solo los que coincidan con el título introducido y el año seleccionado.
 * @dependencies
 * - Ninguna en particular (usa componentes estándar de React).
 * @version 1.0
 * @date 2024
 */

import React from "react"; // Importa React para crear el componente funcional

/**
 * Componente para la búsqueda de libros.
 * Permite buscar libros por título y filtrar por año de publicación.
 * 
 * @param {string} searchTitle - Título de búsqueda para filtrar los libros.
 * @param {string} searchYear - Año seleccionado para filtrar los libros.
 * @param {function} setSearchTitle - Función para actualizar el título de búsqueda.
 * @param {function} setSearchYear - Función para actualizar el año de búsqueda.
 * @param {Array} years - Lista de años disponibles para filtrar.
 * 
 * @returns {JSX.Element} Componente con un campo de texto para el título y un menú desplegable para el año.
 */
const SearchBooks = ({
  searchTitle,
  searchYear,
  setSearchTitle,
  setSearchYear,
  years,
}) => {
  return (
    <div className="search-container">
      {/* Campo de texto para buscar por título */}
      <input
        type="text"
        placeholder="Buscar por título..."
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)} // Actualiza el valor del título en el estado
      />

      {/* Menú desplegable para seleccionar el año de publicación */}
      <select
        value={searchYear}
        onChange={(e) => setSearchYear(e.target.value)} // Actualiza el valor del año en el estado
      >
        <option value="">Todos los años</option> {/* Opción por defecto para mostrar todos los años */}
        {years.map((year) => (
          <option key={year} value={year}>
            {year} {/* Opción para cada año disponible en la lista */}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchBooks;
