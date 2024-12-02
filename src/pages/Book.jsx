import { NavLink, useLoaderData } from "react-router-dom";
import "../css/index.css";

const Book = () => {
  const { book } = useLoaderData(); // Este debe ser un objeto libro

  return (
    <div className="item-display">
      <div className="item-portrait">
        <img src={book.cover} alt="imagen" />
      </div>
      <div className="item-description">
        <h1>{book.title}</h1>
        <p>{book.description}</p> {/* Ajusta según los datos reales */}
        <NavLink to="/books">⬅️ Volver</NavLink>
      </div>
    </div>
  );
};

export default Book;

export const loaderBook = async ({ params }) => {
  try {
    const response = await fetch(
      `https://potterapi-fedeperin.vercel.app/es/books?search=${params.title}`
    );

    if (!response.ok) {
      throw new Error("Error al cargar el libro");
    }

    const books = await response.json();
    // Si no se encuentra el libro, retornamos un objeto vacío
    return { book: books.length > 0 ? books[0] : {} };
  } catch (error) {
    console.error(error);
    return { book: {} }; // Retorna un objeto vacío en caso de error
  }
};
