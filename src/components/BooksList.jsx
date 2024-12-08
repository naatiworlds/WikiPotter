/**
 * @file BooksList.jsx
 * @description Componente que renderiza una lista de libros con la posibilidad de limitar el número de elementos mostrados. Cada libro se muestra con su imagen de portada, título y fecha de lanzamiento.
 * @author [Natalia]
 * @date [Fecha de creación]
 * @version 1.0
 */

import { Link } from "react-router-dom";
import "../css/index.css";

/**
 * @component BooksList
 * @description Renderiza una lista de libros. Cada libro es representado por su portada, título y fecha de lanzamiento. Permite aplicar un límite opcional al número de libros mostrados.
 * @param {Object} props - Props del componente.
 * @param {string} props.className - Clase CSS adicional para personalizar el estilo del contenedor de la lista.
 * @param {Array} props.books - Array de objetos que representan los libros. Cada objeto debe tener las propiedades: `index`, `title`, `cover` y `releaseDate`.
 * @param {number} [props.limit] - (Opcional) Límite de libros a mostrar en la lista.
 * @returns {JSX.Element} Lista de libros renderizada.
 */
const BooksList = ({ className, books, limit }) => {
  // Aplica el límite si se proporciona
  const limitedBooks = limit ? books.slice(0, limit) : books;

  return (
    <ul className={className}>
      {limitedBooks.length > 0 ? (
        limitedBooks.map((book) => (
          <li key={book.index} className="item-child-list scroller-up">
            {/* Enlace al detalle del libro */}
            <Link to={`/book/${book.title}`}>
              <img src={book.cover} alt="portada" />
            </Link>
            {/* Detalles del libro */}
            <figcaption>{book.title}</figcaption>
            <span>{book.releaseDate}</span>
          </li>
        ))
      ) : (
        // Mensaje cuando no hay libros disponibles
        <li className="no-books">No hay libros disponibles</li>
      )}
    </ul>
  );
};

export default BooksList;
