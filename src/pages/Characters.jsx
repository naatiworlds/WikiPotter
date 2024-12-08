/**
 * @file Characters.js
 * @description Este componente muestra una lista de personajes de la saga de Harry Potter. Los usuarios 
 * pueden filtrar los personajes por nombre y casa de Hogwarts, además de navegar entre las páginas de resultados 
 * utilizando un sistema de paginación. El componente utiliza `useLoaderData` de `react-router-dom` para obtener 
 * los datos de los personajes previamente cargados desde un loader.
 * 
 * @dependencies
 * - `react-router-dom`: Para manejar la carga de datos con `useLoaderData` y la navegación.
 * - `useState`: Para gestionar el estado de los filtros, la página actual y otros datos.
 * - `CharactersList`: Un componente que muestra la lista de personajes.
 * - `SearchCharacters`: Un componente para manejar los filtros de búsqueda por nombre y casa.
 * - `../css/index.css`: Archivo de estilos que aplica el diseño al componente.
 * 
 * @returns {JSX.Element} Un componente que muestra la lista de personajes filtrados y paginados, junto con los 
 * controles para realizar búsquedas y cambiar de página.
 * 
 * @version 1.0
 * @date 2024
 */

import { useLoaderData } from "react-router-dom";  // Importa useLoaderData de react-router-dom
import { useState } from "react";  // Importa useState para manejar el estado de filtros y paginación
import CharactersList from "../components/CharactersList";  // Importa el componente que muestra la lista de personajes
import "../css/index.css";  // Importa los estilos CSS del componente
import SearchCharacters from "../components/SearchCharacters";  // Importa el componente para filtrar personajes por nombre y casa

const Characters = () => {
  // Obtiene los datos de los personajes cargados previamente
  const { characters } = useLoaderData();

  // Estados para manejar los filtros y la página actual
  const [searchName, setSearchName] = useState("");  // Filtro para el nombre
  const [searchHouse, setSearchHouse] = useState("");  // Filtro para la casa de Hogwarts
  const [currentPage, setCurrentPage] = useState(1);  // Página actual de resultados
  const itemsPerPage = 8;  // Número de personajes por página

  // Filtrar personajes por nombre y casa
  const filteredCharacters = characters.filter((character) => {
    const matchesName = character.fullName
      .toLowerCase()
      .includes(searchName.toLowerCase());  // Filtrar por nombre
    const matchesHouse =
      searchHouse === "" || character.hogwartsHouse === searchHouse;  // Filtrar por casa

    return matchesName && matchesHouse;  // Retorna los personajes que coinciden con ambos filtros
  });

  // Calcular los índices para la paginación
  const totalPages = Math.ceil(filteredCharacters.length / itemsPerPage);  // Total de páginas
  const startIndex = (currentPage - 1) * itemsPerPage;  // Índice de inicio para la página actual
  const endIndex = startIndex + itemsPerPage;  // Índice de fin para la página actual
  const visibleCharacters = filteredCharacters.slice(startIndex, endIndex);  // Los personajes que se mostrarán en la página actual

  // Función para cambiar de página
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);  // Actualiza la página actual
    }
  };

  return (
    <div className="characters-container">
      {/* Componente de búsqueda y filtros */}
      <SearchCharacters
        searchName={searchName}
        setSearchName={setSearchName}
        searchHouse={searchHouse}
        setSearchHouse={setSearchHouse}
        houses={[...new Set(characters.map((c) => c.hogwartsHouse))]}  // Obtener casas únicas de los personajes
      />

      {/* Componente que muestra la lista de personajes filtrados */}
      <CharactersList className="item-list" characters={visibleCharacters} />

      {/* Controles de paginación */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}  // Cambia a la página anterior
          disabled={currentPage === 1}  // Deshabilita si estamos en la primera página
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}  // Cambia a la página seleccionada
            className={currentPage === index + 1 ? "active" : ""}  // Marca la página activa
          >
            {index + 1}  {/* Muestra el número de la página */}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}  // Cambia a la página siguiente
          disabled={currentPage === totalPages}  // Deshabilita si estamos en la última página
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Characters;
