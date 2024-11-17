import React from "react";
import { useLoaderData } from "react-router-dom";

const Character = () => {
  const { character } = useLoaderData();

  return (
    <div className="d-flex flex-row">
      <div className="m-3">
        <img src={character.image} alt="imagen" />
      </div>
      <div className="m-5">
        <h1>{character.fullName}</h1>
        <p>{character.hogwartsHouse}</p> {/* Ajusta según los datos reales */}
      </div>
    </div>
  );
};

export default Character;

export const loaderCharacter = async ({ params }) => {
  try {
    const response = await fetch(
      `https://potterapi-fedeperin.vercel.app/es/characters?search=${params.nickname}`
    );

    if (!response.ok) {
      throw new Error("Error al cargar el libro");
    }

    const character = await response.json();
    return { character: character[0] }; // Suponiendo que `character` es un array con un solo objeto
  } catch (error) {
    console.error(error);
    return { character: {} }; // Retorna un objeto vacío en caso de error
  }
};
