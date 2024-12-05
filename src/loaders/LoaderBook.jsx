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
  