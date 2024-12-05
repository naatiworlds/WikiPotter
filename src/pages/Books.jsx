import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import BooksList from "../components/BooksList";
import "../css/index.css";
import ShearchBooks from "../components/ShearchBooks";

const Books = () => {
  const { books } = useLoaderData();

  // Estados para el filtro
  const [searchTitle, setSearchTitle] = useState("");
  const [searchYear, setSearchYear] = useState("");

  // Obtener el rango de años basado en los libros
  const years = Array.from(
    new Set(books.map((book) => new Date(book.releaseDate).getFullYear()))
  ).sort((a, b) => a - b);

  // Estado para manejar la página actual
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Filtrar libros por título y año
  const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(searchTitle.toLowerCase());
    const matchesYear = searchYear
      ? new Date(book.releaseDate).getFullYear().toString() === searchYear
      : true;

    return matchesTitle && matchesYear;
  });

  // Calcular los índices para paginar
  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleBooks = filteredBooks.slice(startIndex, endIndex);

  // Función para cambiar de página
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="books-container">
      <ShearchBooks
        searchTitle={searchTitle}
        searchYear={searchYear}
        setSearchTitle={setSearchTitle}
        setSearchYear={setSearchYear}
        years={years} // Pasar el rango de años al componente
      />

      <BooksList className="item-list" books={visibleBooks} />

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
