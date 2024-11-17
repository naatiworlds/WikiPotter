import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Blog = () => {
  const { books } = useLoaderData();

  return (
    <ul className="d-flex flex-wrap justify-content-center align-content-center list-unstyled">
      {books.length > 0 ? (
        books.map((book) => (
          <li className="m-2" key={book._id}>
            {/* Usa un identificador único */}
            <Link to={`/book/${book.index}`}>
              <img src={book.cover} alt="portada del libro" />
            </Link>
            {/* Usa `_id` para la ruta */}
          </li>
        ))
      ) : (
        <li>No hay books</li>
      )}
    </ul>
  );
};

export default Blog;

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
