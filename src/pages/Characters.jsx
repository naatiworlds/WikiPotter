/* eslint-disable react-refresh/only-export-components */
import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import "../css/index.css"; 
const Characters = () => {
  const { characters } = useLoaderData();

  // Estado para manejar la página actual y personajes por página
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Número de personajes por página

  // Calcular los índices para mostrar los personajes actuales
  const totalPages = Math.ceil(characters.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleCharacters = characters.slice(startIndex, endIndex);

  // Función para cambiar de página
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="characters-container">
      <ul className="item-list">
        {visibleCharacters.length > 0 ? (
          visibleCharacters.map((character) => (
            <li className="item-child-list" key={character.index}>
              <Link to={`/character/${character.nickname}`}>
                <img src={character.image} alt={character.nickname} />
              </Link>
            </li>
          ))
        ) : (
          <li className="no-characters">No hay personajes disponibles</li>
        )}
      </ul>

      {/* Controles de Paginación */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Characters;

export const loaderCharacters = async () => {
  try {
    const response = await fetch(
      "https://potterapi-fedeperin.vercel.app/es/characters"
    );

    if (!response.ok) {
      throw new Error("Error al cargar los personajes");
    }

    const characters = await response.json();
    return { characters };
  } catch (error) {
    console.error(error);
    return { characters: [] }; // Retorna un array vacío en caso de error
  }
};
