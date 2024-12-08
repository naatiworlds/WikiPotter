/**
 * @file LoaderCharacters.js
 * @description Este archivo contiene la función `LoaderCharacters`, que es responsable de cargar una lista de 
 * personajes de Harry Potter desde una API externa. La función realiza una solicitud HTTP a la API para obtener 
 * todos los personajes disponibles y maneja cualquier error que ocurra durante el proceso de carga.
 * 
 * Esta función puede ser utilizada como un **loader** en **React Router** para obtener los datos de los personajes 
 * antes de renderizar un componente que dependa de la lista de personajes.
 * 
 * @dependencies
 * - `fetch`: Función nativa de JavaScript para realizar solicitudes HTTP.
 * 
 * @returns {Object} Un objeto que contiene la propiedad `characters`, que es un array con los personajes encontrados 
 * o un array vacío en caso de error.
 * 
 * @version 1.0
 * @date 2024
 */

export const LoaderCharacters = async () => {
  try {
    // Realiza una solicitud GET a la API de personajes de Harry Potter
    const response = await fetch(
      "https://potterapi-fedeperin.vercel.app/es/characters"
    );

    // Verifica si la respuesta fue exitosa
    if (!response.ok) {
      throw new Error("Error al cargar los personajes");
    }

    // Convierte la respuesta en formato JSON
    const characters = await response.json();

    // Retorna los personajes encontrados
    return { characters };
  } catch (error) {
    // Captura cualquier error y lo muestra en la consola
    console.error(error);
    
    // Retorna un array vacío en caso de error
    return { characters: [] };
  }
};
