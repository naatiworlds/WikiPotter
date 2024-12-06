import { Link } from "react-router-dom";
import "../css/index.css";

const BooksList = ({ className, books, limit }) => {
  // Aplica el límite si se proporciona
  const limitedBooks = limit ? books.slice(0, limit) : books;

  return (
    <ul className={className}>
      {limitedBooks.length > 0 ? (
        limitedBooks.map((book) => (
          <li key={book.index} className="item-child-list scroller-up">
            <Link to={`/book/${book.title}`}>
              <img src={book.cover} alt="portada" />
            </Link>
            <figcaption>{book.title}</figcaption>
            <span>{book.releaseDate}</span>
          </li>
        ))
      ) : (
        <li className="no-books">No hay libros disponibles</li>
      )}
    </ul>
  );
};

export default BooksList;