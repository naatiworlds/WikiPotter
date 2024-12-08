/**
 * @file UseLoader.js
 * @description Hook personalizado para cargar datos desde tres fuentes externas: libros, personajes y casas de Harry Potter.
 * Este hook maneja los estados de carga, error y los datos obtenidos de las API.
 * 
 * Utiliza el hook `useState` para almacenar los datos y el hook `useEffect` para realizar la carga de los datos de manera asíncrona.
 * 
 * @dependencies
 * - React (`useState`, `useEffect`)
 * @version 1.0
 * @date 2024
 */

// Importa los hooks necesarios de React
import { useState, useEffect } from "react";

/**
 * Hook personalizado que gestiona la carga de datos desde las API externas relacionadas con libros, personajes y casas de Harry Potter.
 * 
 * @returns {Object} - Un objeto con los siguientes valores:
 *  - `books`: Un array con los libros obtenidos de la API.
 *  - `characters`: Un array con los personajes obtenidos de la API.
 *  - `houses`: Un array con las casas obtenidas de la API.
 *  - `loading`: Un valor booleano que indica si los datos aún están siendo cargados.
 *  - `error`: Un mensaje de error si ocurre algún problema durante la carga de los datos.
 */
const UseLoader = () => {
  // Estados locales para almacenar los datos y gestionar los estados de carga y error
  const [books, setBooks] = useState([]);         // Libros
  const [characters, setCharacters] = useState([]); // Personajes
  const [houses, setHouses] = useState([]);        // Casas
  const [loading, setLoading] = useState(true);    // Estado de carga
  const [error, setError] = useState(null);        // Estado de error

  // useEffect para realizar la carga de datos una vez que el componente se monta
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Inicia el estado de carga

        // Realiza las peticiones paralelas utilizando Promise.all
        const [booksResponse, charactersResponse, housesResponse] = await Promise.all([
          fetch("https://potterapi-fedeperin.vercel.app/es/books"),       // API de libros
          fetch("https://potterapi-fedeperin.vercel.app/es/characters"),   // API de personajes
          fetch("https://potterapi-fedeperin.vercel.app/es/houses"),       // API de casas
        ]);

        // Verifica si alguna de las respuestas fue incorrecta
        if (!booksResponse.ok || !charactersResponse.ok || !housesResponse.ok) {
          throw new Error("Error al cargar los datos");
        }

        // Convierte las respuestas en formato JSON
        const booksData = await booksResponse.json();
        const charactersData = await charactersResponse.json();
        const housesData = await housesResponse.json();

        // Actualiza el estado con los datos obtenidos
        setBooks(booksData);
        setCharacters(charactersData);
        setHouses(housesData);
      } catch (error) {
        console.error(error);
        setError("Error al cargar los datos");  // En caso de error, actualiza el estado de error
      } finally {
        setLoading(false); // Finaliza el estado de carga
      }
    };

    fetchData();  // Llama a la función que realiza la carga de datos
  }, []);  // El array vacío asegura que el efecto solo se ejecute una vez al montar el componente

  // Retorna los valores que serán utilizados en el componente que consuma este hook
  return { books, characters, houses, loading, error };
};

export default UseLoader;
