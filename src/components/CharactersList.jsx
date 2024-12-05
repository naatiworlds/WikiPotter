import { Link } from "react-router-dom";

const CharactersList = ({ className, characters, limit }) => {
  const limitedCharacters = limit ? characters.slice(0, limit) : characters;

  return (
    <ul className={className}>
      {limitedCharacters.length > 0 ? (
        limitedCharacters.map((character) => (
          <li className="item-child-list" key={character.index}>
            <div className="image">
              <Link to={`/character/${character.nickname}`}>
                <img src={character.image} alt={character.nickname} />
              </Link>
            </div>
            <div className="dates">
              <h2>{character.fullName}</h2>
              <p>{character.birthdate}</p>
            </div>
          </li>
        ))
      ) : (
        <li className="no-characters">No hay personajes disponibles</li>
      )}
    </ul>
  );
};

export default CharactersList;
