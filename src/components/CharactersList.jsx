/**
 * @file CharactersList.jsx
 * @description Componente que renderiza una lista de personajes con su imagen, nombre completo y fecha de nacimiento. Se puede limitar el número de personajes mostrados mediante la propiedad `limit`.
 * @author [Natalia]
 * @date [Fecha de creación]
 * @version 1.0
 */

import { Link } from "react-router-dom";

/**
 * @component CharactersList
 * @description Renderiza una lista de personajes. Cada personaje incluye una imagen, su nombre completo y su fecha de nacimiento. Permite personalizar el número de personajes mostrados.
 * @param {Object} props - Props del componente.
 * @param {string} props.className - Clase CSS para personalizar los estilos del contenedor.
 * @param {Array} props.characters - Array de objetos que representan a los personajes. Cada objeto debe contener las propiedades: `index`, `fullName`, `nickname`, `image`, y `birthdate`.
 * @param {number} [props.limit] - (Opcional) Límite del número de personajes mostrados.
 * @returns {JSX.Element} Una lista de personajes renderizada.
 */
const CharactersList = ({ className, characters, limit }) => {
  // Aplica el límite si se proporciona
  const limitedCharacters = limit ? characters.slice(0, limit) : characters;

  return (
    <ul className={className}>
      {limitedCharacters.length > 0 ? (
        // Mapeo de los personajes para renderizar la lista
        limitedCharacters.map((character) => (
          <li className="item-child-list scroller-up" key={character.index}>
            {/* Contenedor de la imagen del personaje */}
            <div className="image">
              <Link to={`/character/${character.nickname}`}>
                <img src={character.image} alt={character.nickname} />
              </Link>
            </div>
            {/* Contenedor de los detalles del personaje */}
            <div className="dates">
              <h2>{character.fullName}</h2>
              <p>{character.birthdate}</p>
            </div>
          </li>
        ))
      ) : (
        // Mensaje cuando no hay personajes disponibles
        <li className="no-characters">No hay personajes disponibles</li>
      )}
    </ul>
  );
};

export default CharactersList;
