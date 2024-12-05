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

