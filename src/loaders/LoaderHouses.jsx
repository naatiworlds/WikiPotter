/**
 * @file LoaderHouses.js
 * @description Este archivo contiene la función `LoaderHouses`, que es responsable de cargar una lista de 
 * casas de Hogwarts desde una API externa. La función realiza una solicitud HTTP a la API para obtener 
 * todas las casas disponibles y maneja cualquier error que ocurra durante el proceso de carga.
 * 
 * Esta función puede ser utilizada como un **loader** en **React Router** para obtener los datos de las casas 
 * antes de renderizar un componente que dependa de la lista de casas.
 * 
 * @dependencies
 * - `fetch`: Función nativa de JavaScript para realizar solicitudes HTTP.
 * 
 * @returns {Object} Un objeto que contiene la propiedad `houses`, que es un array con las casas encontradas 
 * o un array vacío en caso de error.
 * 
 * @version 1.0
 * @date 2024
 */

export const LoaderHouses = async () => {
  try {
    // Realiza una solicitud GET a la API de casas de Hogwarts
    const response = await fetch(
      "https://potterapi-fedeperin.vercel.app/es/houses"
    );

    // Verifica si la respuesta fue exitosa
    if (!response.ok) {
      throw new Error("Error al cargar las casas");
    }

    // Convierte la respuesta en formato JSON
    const houses = await response.json();

    // Retorna las casas encontradas
    return { houses };
  } catch (error) {
    // Captura cualquier error y lo muestra en la consola
    console.error(error);
    
    // Retorna un array vacío en caso de error
    return { houses: [] };
  }
};
