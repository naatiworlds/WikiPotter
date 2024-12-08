/**
 * @file loaderBook.js
 * @description Este archivo contiene una función `loaderBook` que es responsable de cargar un libro 
 * desde una API externa utilizando un parámetro de búsqueda basado en el título del libro. La función 
 * se encarga de hacer una solicitud HTTP a la API y manejar cualquier error en el proceso de carga.
 * 
 * Esta función puede ser utilizada como un **loader** en **React Router** para obtener los datos 
 * antes de renderizar un componente que dependa de la información del libro.
 * 
 * @dependencies
 * - `fetch`: Función nativa de JavaScript para realizar solicitudes HTTP.
 * 
 * @param {Object} params - Parámetros de la ruta, en este caso el `title` del libro que se buscará.
 * @returns {Object} Un objeto que contiene el libro encontrado o un objeto vacío si no se encuentra 
 * o si ocurre un error durante la carga.
 * 
 * @version 1.0
 * @date 2024
 */

export const loaderBook = async ({ params }) => {
  try {
    // Realiza una solicitud GET a la API de libros de Harry Potter
    const response = await fetch(
      `https://potterapi-fedeperin.vercel.app/es/books?search=${params.title}`
    );

    // Verifica si la respuesta fue exitosa
    if (!response.ok) {
      throw new Error("Error al cargar el libro");
    }

    // Convierte la respuesta en formato JSON
    const books = await response.json();

    // Si no se encuentra el libro, retornamos un objeto vacío
    return { book: books.length > 0 ? books[0] : {} };
  } catch (error) {
    // Captura cualquier error y lo muestra en la consola
    console.error(error);
    
    // Retorna un objeto vacío en caso de error
    return { book: {} };
  }
};
