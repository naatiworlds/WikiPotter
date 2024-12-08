/**
 * @file LoaderBooks.js
 * @description Este archivo contiene la función `LoaderBooks`, que es responsable de cargar una lista de 
 * libros desde la API externa de Harry Potter. Esta función realiza una solicitud HTTP a la API para obtener 
 * todos los libros disponibles y maneja cualquier error que ocurra durante el proceso de carga.
 * 
 * La función se utiliza típicamente como un **loader** en **React Router** para obtener datos antes de renderizar 
 * un componente que dependa de la lista de libros.
 * 
 * @dependencies
 * - `fetch`: Función nativa de JavaScript para realizar solicitudes HTTP.
 * 
 * @returns {Object} Un objeto que contiene una propiedad `books`, que es un array con los libros encontrados 
 * o un array vacío en caso de error.
 * 
 * @version 1.0
 * @date 2024
 */

export const LoaderBooks = async () => {
  try {
    // Realiza una solicitud GET a la API de libros de Harry Potter
    const response = await fetch(
      "https://potterapi-fedeperin.vercel.app/es/books"
    );

    // Verifica si la respuesta fue exitosa
    if (!response.ok) {
      throw new Error("Error al cargar los libros");
    }

    // Convierte la respuesta en formato JSON
    const books = await response.json();

    // Retorna los libros encontrados
    return { books };
  } catch (error) {
    // Captura cualquier error y lo muestra en la consola
    console.error(error);
    
    // Retorna un array vacío en caso de error
    return { books: [] };
  }
};
