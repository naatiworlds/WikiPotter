/**
 * @file SearchCharacters.jsx
 * @description Componente que permite realizar búsquedas de personajes por nombre y filtrar por casa. Los usuarios pueden buscar personajes mediante su nombre y también aplicar un filtro para seleccionar la casa de cada personaje.
 * @dependencies
 * - Ninguna en particular (usa componentes estándar de React).
 * @version 1.0
 * @date 2024
 */

import React from "react"; // Importa React para crear el componente funcional

/**
 * Componente para la búsqueda de personajes.
 * Permite buscar personajes por nombre y filtrar por casa.
 * 
 * @param {string} searchName - Nombre de búsqueda para filtrar los personajes.
 * @param {string} searchHouse - Casa seleccionada para filtrar los personajes.
 * @param {function} setSearchName - Función para actualizar el nombre de búsqueda.
 * @param {function} setSearchHouse - Función para actualizar la casa seleccionada.
 * @param {Array} houses - Lista de casas disponibles para filtrar.
 * 
 * @returns {JSX.Element} Componente con un campo de texto para el nombre y un menú desplegable para la casa.
 */
const SearchCharacters = ({
  searchName,
  setSearchName,
  searchHouse,
  setSearchHouse,
  houses,
}) => {
  return (
    <div className="search-container">
      {/* Campo de texto para buscar por nombre */}
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)} // Actualiza el valor del nombre en el estado
      />

      {/* Menú desplegable para seleccionar la casa */}
      <select
        value={searchHouse}
        onChange={(e) => setSearchHouse(e.target.value)} // Actualiza el valor de la casa en el estado
      >
        <option value="">Todas las casas</option> {/* Opción por defecto para mostrar todas las casas */}
        {houses.map((house) => (
          <option key={house} value={house}>
            {house} {/* Opción para cada casa disponible en la lista */}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchCharacters;
