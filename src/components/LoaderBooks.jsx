export const LoaderBooks = async () => {
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
