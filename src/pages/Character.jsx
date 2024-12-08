/**
 * @file Character.js
 * @description Este componente es responsable de mostrar los detalles de un personaje específico de Harry Potter, 
 * tales como su imagen, nombre completo, casa en Hogwarts y sus hijos (si los tiene). Utiliza `useLoaderData` 
 * de `react-router-dom` para obtener los datos del personaje cargados previamente a través de un loader.
 * 
 * @dependencies
 * - `react-router-dom`: Para manejar la carga de datos con `useLoaderData` y la navegación.
 * - `../css/index.css`: Archivo de estilos que aplica el diseño al componente.
 * 
 * @returns {JSX.Element} Un componente que muestra la información detallada de un personaje, 
 * incluyendo su imagen, nombre, casa y lista de hijos (si existe).
 * 
 * @version 1.0
 * @date 2024
 */

import { NavLink, useLoaderData } from "react-router-dom";  // Importa NavLink y useLoaderData de react-router-dom

const Character = () => {
  // Obtiene los datos del personaje cargados previamente a través del loader
  const { character } = useLoaderData();

  return (
    <div className="item-display">
      {/* Sección para mostrar la imagen del personaje */}
      <div className="item-portrait">
        <img src={character.image} alt="imagen" />
      </div>

      {/* Sección para mostrar la descripción del personaje */}
      <div className="item-description">
        <h1>{character.fullName}</h1> {/* Nombre completo del personaje */}
        <p>{character.hogwartsHouse}</p> {/* Casa en Hogwarts del personaje */}
        
        {/* Sección para mostrar los hijos del personaje */}
        <h3>Hijos</h3>
        {character.children && character.children.length > 0 ? (
          <ul className="childrens">
            {/* Muestra una lista de hijos si existen */}
            {character.children.map((child, index) => (
              <li key={index} className="item-child-list">
                {child}
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay personajes</p> // Mensaje alternativo si no hay hijos
        )}
        
        {/* Enlace para regresar a la lista de personajes */}
        <NavLink to="/characters">⬅️ Volver</NavLink>
      </div>
    </div>
  );
};

export default Character;
