import { Link } from "react-router-dom";

const HousesList = ({ className, houses }) => {
  return (
    <ul className={className}>
      {houses.length > 0 ? (
        houses.map((house) => (
          <li className="item-child-list" key={house.index}>
            <p><span>{house.emoji}</span>{house.house}</p>
          </li>
        ))
      ) : (
        <li className="no-houses">No hay casas disponibles</li>
      )}
    </ul>
  );
};

export default HousesList;
