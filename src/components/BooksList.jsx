import { Link, NavLink } from "react-router-dom";
import "../css/index.css";

const BooksList = ({ className,books }) => {
  return (
    <ul className={className}>
      {books.length > 0 ? (
        books.map((book) => (
          <li key={book.index} className="item-child-list">
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
