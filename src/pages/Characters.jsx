import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import "../css/index.css"; 
import CharactersList from "../components/CharactersList";
import SearchCharacters from "../components/SearchCharacters"; // Nuevo componente para el filtro

const Characters = () => {
  const { characters } = useLoaderData();

  // Estados para filtros y paginación
  const [searchName, setSearchName] = useState("");
  const [searchHouse, setSearchHouse] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Filtrar personajes por nombre y casa
  const filteredCharacters = characters.filter((character) => {
    const matchesName = character.fullName
      .toLowerCase()
      .includes(searchName.toLowerCase());
    const matchesHouse =
      searchHouse === "" || character.hogwartsHouse === searchHouse;

    return matchesName && matchesHouse;
  });

  // Calcular índices para paginar después del filtro
  const totalPages = Math.ceil(filteredCharacters.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleCharacters = filteredCharacters.slice(startIndex, endIndex);

  // Función para cambiar de página
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="characters-container">
      {/* Componente para búsqueda y filtros */}
      <SearchCharacters
        searchName={searchName}
        setSearchName={setSearchName}
        searchHouse={searchHouse}
        setSearchHouse={setSearchHouse}
        houses={[...new Set(characters.map((c) => c.hogwartsHouse))]} // Obtener casas únicas
      />

      {/* Lista de personajes filtrados */}
      <CharactersList className="item-list" characters={visibleCharacters} />

      {/* Controles de paginación */}
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
