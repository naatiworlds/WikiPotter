/**
 * @file HousesList.jsx
 * @description Componente para mostrar una lista de casas de Hogwarts.
 * @author Natalia
 * @date 
 * @version 1.0
 */

import { Link } from "react-router-dom";

/**
 * @component HousesList
 * @description Componente que renderiza una lista de casas, mostrando un emoji y el nombre de cada casa.
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.className - Clase CSS para personalizar el estilo del contenedor de la lista.
 * @param {Array} props.houses - Array de objetos que representan las casas.
 * @returns {JSX.Element} Lista de casas o un mensaje indicando que no hay casas disponibles.
 */
const HousesList = ({ className, houses }) => {
  return (
    <ul className={className}>
      {houses.length > 0 ? (
        houses.map((house) => (
          <li className="item-child-list scroller-up" key={house.index}>
            <p>
              <span>{house.emoji}</span>
              {house.house}
            </p>
          </li>
        ))
      ) : (
        <li className="no-houses">No hay casas disponibles</li>
      )}
    </ul>
  );
};

export default HousesList;
