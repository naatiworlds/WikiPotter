/**
 * @file Books.js
 * @description Este componente muestra una lista de libros con opciones de búsqueda, filtrado y paginación. 
 * Utiliza `useLoaderData` de `react-router-dom` para obtener la lista completa de libros desde un loader 
 * previamente cargado. Además, permite filtrar los libros por título y año, y navegar entre las páginas de 
 * los resultados utilizando paginación.
 * 
 * @dependencies
 * - `react-router-dom`: Para manejar la carga de datos con `useLoaderData` y la navegación.
 * - `useState`: Para gestionar el estado de los filtros, la página actual y otros datos.
 * - `BooksList`: Un componente que muestra la lista de libros.
 * - `ShearchBooks`: Un componente para manejar los filtros de búsqueda.
 * - `../css/index.css`: Archivo de estilos que aplica el diseño al componente.
 * 
 * @returns {JSX.Element} Un componente que muestra la lista de libros filtrados y paginados, junto con los 
 * controles para realizar búsquedas y cambiar de página.
 * 
 * @version 1.0
 * @date 2024
 */

import { useLoaderData } from "react-router-dom";  // Importa useLoaderData de react-router-dom
import { useState } from "react";  // Importa useState para manejar el estado de filtros y paginación
import BooksList from "../components/BooksList";  // Importa el componente que muestra la lista de libros
import "../css/index.css";  // Importa los estilos CSS del componente
import ShearchBooks from "../components/SearchBooks";  // Importa el componente para filtrar por título y año

const Books = () => {
  // Obtiene los datos de los libros cargados previamente
  const { books } = useLoaderData();

  // Estados para el filtro
  const [searchTitle, setSearchTitle] = useState("");  // Estado para almacenar el título buscado
  const [searchYear, setSearchYear] = useState("");  // Estado para almacenar el año buscado

  // Obtener el rango de años basado en los libros
  const years = Array.from(
    new Set(books.map((book) => new Date(book.releaseDate).getFullYear()))
  ).sort((a, b) => a - b);  // Extrae los años y los ordena

  // Estado para manejar la página actual
  const [currentPage, setCurrentPage] = useState(1);  // Página actual
  const itemsPerPage = 4;  // Número de libros por página

  // Filtrar libros por título y año
  const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(searchTitle.toLowerCase());  // Filtra por título
    const matchesYear = searchYear
      ? new Date(book.releaseDate).getFullYear().toString() === searchYear  // Filtra por año
      : true;

    return matchesTitle && matchesYear;
  });

  // Calcular los índices para paginar
  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);  // Calcula el total de páginas
  const startIndex = (currentPage - 1) * itemsPerPage;  // Calcula el índice de inicio
  const endIndex = startIndex + itemsPerPage;  // Calcula el índice de fin
  const visibleBooks = filteredBooks.slice(startIndex, endIndex);  // Libros visibles según la página actual

  // Función para cambiar de página
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);  // Cambia la página actual
    }
  };

  return (
    <div className="books-container">
      {/* Componente de búsqueda y filtros */}
      <ShearchBooks
        searchTitle={searchTitle}
        searchYear={searchYear}
        setSearchTitle={setSearchTitle}
        setSearchYear={setSearchYear}
        years={years}  // Pasa el rango de años al componente de búsqueda
      />

      {/* Componente que muestra la lista de libros filtrados */}
      <BooksList className="item-list" books={visibleBooks} />

      {/* Paginación */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}  // Página anterior
          disabled={currentPage === 1}  // Deshabilita si ya estamos en la primera página
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
          onClick={() => handlePageChange(currentPage + 1)}  // Página siguiente
          disabled={currentPage === totalPages}  // Deshabilita si ya estamos en la última página
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Books;
