import { NavLink, useLoaderData } from "react-router-dom";

const Book = () => {
  const { post } = useLoaderData();

  return (
    <div className="d-flex flex-row">
      <div className="m-3">
        <img src={post.cover} alt="imagen" />
      </div>
      <div className="m-5">
        <h1>{post.title}</h1>
        <p>{post.description}</p> {/* Ajusta según los datos reales */}
        <NavLink to="/books">⬅️ Volver</NavLink>
      </div>
    </div>
  );
};

export default Book;

export const loaderPosts = async ({ params }) => {
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
