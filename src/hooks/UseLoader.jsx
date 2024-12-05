import { useState, useEffect } from "react";

// Hook personalizado
const UseLoader = () => {
  const [books, setBooks] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [booksResponse, charactersResponse, housesResponse] = await Promise.all([
          fetch("https://potterapi-fedeperin.vercel.app/es/books"),
          fetch("https://potterapi-fedeperin.vercel.app/es/characters"),
          fetch("https://potterapi-fedeperin.vercel.app/es/houses"),
        ]);

        if (!booksResponse.ok || !charactersResponse.ok || !housesResponse.ok) {
          throw new Error("Error al cargar los datos");
        }

        const booksData = await booksResponse.json();
        const charactersData = await charactersResponse.json();
        const housesData = await housesResponse.json();

        setBooks(booksData);
        setCharacters(charactersData);
        setHouses(housesData);
      } catch (error) {
        console.error(error);
        setError("Error al cargar los datos");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { books, characters, houses, loading, error };
};

export default UseLoader;
