import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";
import { UserContext } from "../context/UserContext";
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
      timer: 2000, // Duración de 2 segundos
      showConfirmButton: false, // Sin botón de confirmación
    });
  };

  return (
    <header>
      <h1>
        <NavLink to="/">WikiPotter</NavLink>
      </h1>
      <div>
        <select name="themes" className="theme-selector">
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
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </button>
        {!user ? (
          <button className="login" onClick={() => setShowLogin(true)}>
            <UserNotLoginIcon />
          </button>
        ) : (
          <>
            <button className="login" onClick={logout}>
              <UserLoginIcon />
            </button>
            <NavLink to="/profile">
              <button className="profile-link">Perfil</button>
            </NavLink>
          </>
        )}
        {showLogin && <LoginRegister onClose={() => setShowLogin(false)} />}
      </div>
    </header>
  );
};

export default Header;
