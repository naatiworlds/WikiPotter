/* eslint-disable react-refresh/only-export-components */
import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import "../css/index.css";

const Books = () => {
  const { books } = useLoaderData();

  // Estado para la página actual y configuración de paginación
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Libros por página

  // Calcular los índices para cortar los libros
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
      <ul className="item-list">
        {visibleBooks.length > 0 ? (
          visibleBooks.map((book) => (
            <li className="item-child-list" key={book.index}>
              <Link to={`/book/${book.index}`}>
                <img src={book.cover} alt="portada del libro" />
              </Link>
              <figcaption>{book.title}</figcaption>
              <span>{book.releaseDate}</span>
            </li>
          ))
        ) : (
          <li>No hay books</li>
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

export default Books;

export const loaderBooks = async () => {
  try {
    const response = await fetch(
      "https://potterapi-fedeperin.vercel.app/es/books"
    );

    if (!response.ok) {
      throw new Error("Error al cargar los blogs");
    }

    const books = await response.json();
    return { books };
  } catch (error) {
    console.error(error);
    return { books: [] }; // Retorna un array vacío en caso de error
  }
};
