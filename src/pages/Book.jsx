import { NavLink, useLoaderData } from "react-router-dom";
import "../css/index.css"
const Book = () => {
  const { post } = useLoaderData();

  return (
    <div className="item-display">
      <div className="item-portrait">
        <img src={post.cover} alt="imagen" />
      </div>
      <div className="item-description">
        <h1>{post.title}</h1>
        <p>{post.description}</p> {/* Ajusta según los datos reales */}
        <NavLink to="/books">⬅️ Volver</NavLink>
      </div>
    </div>
  );
};

export default Book;

export const loaderBook = async ({ params }) => {
  try {
    const response = await fetch(
      `https://potterapi-fedeperin.vercel.app/es/books?search${params.id}`
    );

    if (!response.ok) {
      throw new Error("Error al cargar el libro");
    }

    const post = await response.json();
    return { post: post[0] }; // Suponiendo que `post` es un array con un solo objeto
  } catch (error) {
    console.error(error);
    return { post: {} }; // Retorna un objeto vacío en caso de error
  }
};
