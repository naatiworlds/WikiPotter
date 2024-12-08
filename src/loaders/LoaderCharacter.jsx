/**
 * @file loaderCharacter.js
 * @description Este archivo contiene la función `loaderCharacter`, que es responsable de cargar 
 * información sobre un personaje de Harry Potter desde una API externa. La función realiza una solicitud HTTP 
 * a la API utilizando el nombre o apodo del personaje como parámetro de búsqueda.
 * 
 * La función puede ser utilizada como un **loader** en **React Router** para obtener los datos de un personaje 
 * antes de renderizar un componente que dependa de esa información.
 * 
 * @dependencies
 * - `fetch`: Función nativa de JavaScript para realizar solicitudes HTTP.
 * 
 * @param {Object} params - Parámetros de la ruta, en este caso el `nickname` del personaje que se buscará.
 * @returns {Object} Un objeto que contiene la propiedad `character`, que es el personaje encontrado o un objeto vacío 
 * si no se encuentra o si ocurre un error durante la carga.
 * 
 * @version 1.0
 * @date 2024
 */

export const loaderCharacter = async ({ params }) => {
  try {
    // Realiza una solicitud GET a la API de personajes de Harry Potter usando el apodo como parámetro de búsqueda
    const response = await fetch(
      `https://potterapi-fedeperin.vercel.app/es/characters?search=${params.nickname}`
    );

    // Verifica si la respuesta fue exitosa
    if (!response.ok) {
      throw new Error("Error al cargar el personaje");
    }

    // Convierte la respuesta en formato JSON
    const character = await response.json();

    // Retorna el primer personaje encontrado (suponiendo que la respuesta es un array con un solo objeto)
    return { character: character[0] };
  } catch (error) {
    // Captura cualquier error y lo muestra en la consola
    console.error(error);

    // Retorna un objeto vacío en caso de error
    return { character: {} };
  }
};
