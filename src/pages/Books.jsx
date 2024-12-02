import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import BooksList from "../components/BooksList";
import "../css/index.css";

const Books = () => {
  const { books } = useLoaderData(); // Asegúrate de que este sea un array de libros

  // Estado para manejar la página actual
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Libros por página

  // Calcular los índices para paginar
  const totalPages = Math.ceil(books.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleBooks = books.slice(startIndex, endIndex);

  // Función para cambiar de página
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="books-container">
      <BooksList className="item-list" books={visibleBooks} />

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

export default Books;
