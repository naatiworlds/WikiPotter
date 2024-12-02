import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import "../css/index.css"; 
import CharactersList from "../components/CharactersList";

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
      {/* Usar el componente CharactersList */}
      <CharactersList className="item-list" characters={visibleCharacters} />

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
