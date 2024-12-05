import { NavLink, useLoaderData } from "react-router-dom";

const Character = () => {
  const { character } = useLoaderData();

  return (
    <div className="item-display">
      <div className="item-portrait">
        <img src={character.image} alt="imagen" />
      </div>
      <div className="item-description">
        <h1>{character.fullName}</h1>
        <p>{character.hogwartsHouse}</p> {/* Ajusta según los datos reales */}
        <h3>Hijos</h3>
        {/* Verificar si 'children' existe y es un array con elementos */}
        {character.children && character.children.length > 0 ? (
          <ul className="childrens">
            {character.children.map((child, index) => (
              <li key={index} className="item-child-list">
                {child}
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay personajes</p> // Mensaje alternativo si no hay hijos
        )}
        <NavLink to="/characters">⬅️ Volver</NavLink>
      </div>
      <div></div>
    </div>
  );
};
export default Character;
