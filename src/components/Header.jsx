import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

import ThemeIcon from "./ThemeIcon";
import UserLoginIcon from "./UserLoginIcon";
import UserNotLoginIcon from "./UserNotLoginIcon";
import LoginRegister from "./LoginRegister";

import "../css/header.css";

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [showLogin, setShowLogin] = useState(false);

  // Función para cerrar sesión con alerta de confirmación
  const logout = () => {
    setUser(null);
    Swal.fire({
      icon: "warning",
      title: "Cierre de sesión",
      text: "Has cerrado sesión correctamente.",
      timer: 2000,
      showConfirmButton: false,
    });
  };

  // Determina el color del icono basado en el tema y si el usuario está logueado
  const iconColor = user
    ? "#1E90FF" // Azul si el usuario está logueado
    : theme === "dark"
    ? "#FFF" // Blanco en tema oscuro cuando no está logueado
    : "#333"; // Negro en tema claro cuando no está logueado

  return (
      <header className="header-custom">
        <h1>
          <NavLink to="/">WikiPotter</NavLink>
        </h1>
        <div className="header-inputs">
          <select name="themes" className={`select-theme ${theme}`}>
            <optgroup>
              <option value="" disabled={true}>
                Temas
              </option>
            </optgroup>
            <optgroup>
              <option value="griffindor">Griffindor</option>
              <option value="hufflepuff">Hufflepuff</option>
              <option value="ravenclaw">Ravenclaw</option>
              <option value="slytherin">Slytherin</option>
            </optgroup>
          </select>
          <button className="login" onClick={toggleTheme}>
            <ThemeIcon size={50} color={"#FFA500"} />
          </button>
          {!user ? (
            <button className="login" onClick={() => setShowLogin(true)}>
              <UserNotLoginIcon size={50} color={iconColor} />
            </button>
          ) : (
            <>
              <button className="login" onClick={logout}>
                <UserLoginIcon size={50} color={iconColor} />
              </button>
              <NavLink to="/profile">
                <button className="login">Perfil</button>
              </NavLink>
            </>
          )}
          {showLogin && <LoginRegister onClose={() => setShowLogin(false)} />}
        </div>
      </header>
  );
};

export default Header;
