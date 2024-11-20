/* eslint-disable react-refresh/only-export-components */
import { Link, useLoaderData } from "react-router-dom";
import "../css/index.css"; // Importa el archivo CSS donde has añadido las clases personalizadas

const Characters = () => {
  const { characters } = useLoaderData();

  return (
    <ul className="item-list">
      {characters.length > 0 ? (
        characters.map((character) => (
          <li className="item-child-list m-2" key={character.index}>
            <Link to={`/character/${character.nickname}`}>
              <img src={character.image} alt={character.nickname} />
            </Link>
          </li>
        ))
      ) : (
        <li className="no-characters">No hay personajes disponibles</li>
      )}
    </ul>
  );
};

export default Characters;

export const loaderCharacters = async () => {
  try {
    const response = await fetch(
      "https://potterapi-fedeperin.vercel.app/es/characters"
    );

    if (!response.ok) {
      throw new Error("Error al cargar los blogs");
    }

    const characters = await response.json();
    return { characters: characters };
  } catch (error) {
    console.error(error);
    return { characters: [] }; // Retorna un array vacío en caso de error
  }
};
