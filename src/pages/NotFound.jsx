import { Link, useRouteError } from "react-router-dom";
import "../css/NotFound.css";
import MagicEffect from "../effects/MagicEffect";

const NotFound = () => {
  const error = useRouteError();

  return (
    <div className="notfound-container">
      <MagicEffect /> 
      <div className="notfound-content">
        <h1 className="notfound-title">¡Revelio! Página no encontrada</h1>
        <p className="notfound-message">
          Parece que te has perdido en los pasillos de Hogwarts.
        </p>
        <p className="notfound-error">
          <strong>Error:</strong>{" "}
          {error?.error?.message || "Página no encontrada"}(
          {error?.status || 404})
        </p>
        <div className="redirection">
          
          <Link to="/" className="notfound-link">
            🏠 finite incantatem
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
