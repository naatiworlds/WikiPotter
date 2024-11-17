import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Characters = () => {
  const { characters } = useLoaderData();

  return (
    <ul className="d-flex flex-wrap justify-content-center align-content-center list-unstyled">
      {characters.length > 0 ? (
        characters.map((character) => (
          <li className="m-2" key={character.index}>
            {/* Usa un identificador único */}
            <Link to={`/character/${character.nickname}`}>
              <img src={character.image} alt="portada del libro" />
            </Link>
            {/* Usa `_id` para la ruta */}
          </li>
        ))
      ) : (
        <li>No hay characters</li>
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
