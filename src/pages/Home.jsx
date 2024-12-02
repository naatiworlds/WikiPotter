import { useEffect, useState } from "react";
import CharactersList from "../components/CharactersList";
import Welcome from "../components/Welcome";
import "../css/index.css";
import BooksList from "../components/BooksList";
import HousesList from "../components/HousesList";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [books, setBooks] = useState([]);
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          "https://potterapi-fedeperin.vercel.app/es/characters"
        );
        if (!response.ok) {
          throw new Error("Error al cargar los personajes");
        }
        const data = await response.json();
        setCharacters(data.slice(0, 3)); // Tomar solo los primeros 3
      } catch (error) {
        console.error(error);
        setCharacters([]);
      }
    };

    fetchCharacters();
  }, []);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          "https://potterapi-fedeperin.vercel.app/es/books"
        );
        if (!response.ok) {
          throw new Error("Error al cargar los libros");
        }
        const data = await response.json();
        setBooks(data.slice(0, 3)); // Tomar solo los primeros 3
      } catch (error) {
        console.error(error);
        setBooks([]);
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await fetch(
          "https://potterapi-fedeperin.vercel.app/es/houses"
        );
        if (!response.ok) {
          throw new Error("Error al cargar los libros");
        }
        const data = await response.json();
        setHouses(data); // Tomar solo los primeros 3
      } catch (error) {
        console.error(error);
        setHouses([]);
      }
    };

    fetchHouses();
  }, []);

  return (
    <>
      <div className="welcome">
        <Welcome />
      </div>
      <div className="content">
        <h2>Libros destacados</h2>
        <BooksList className="featured-books" books={books} />
        <h2>Personajes destacados</h2>
        <CharactersList
          className="featured-characters"
          characters={characters}
        />
        <div className="hogwarts-houses">
          <h2>Casas de HogWarts</h2>
          <HousesList className="featured-houses" houses={houses} />
        </div>
      </div>
    </>
  );
};

export default Home;
