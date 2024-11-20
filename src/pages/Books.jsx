/* eslint-disable react-refresh/only-export-components */
import { Link, useLoaderData } from "react-router-dom";
import "../css/Books.css"

const Books = () => {
  const { books } = useLoaderData();

  return (
    <ul className="item-list">
      {books.length > 0 ? (
        books.map((book) => (
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
  );
};

export default Books;

export const loaderBlogs = async () => {
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
