import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Swal from "sweetalert2";

import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";

import "../css/header.css";
import { UserContext } from "../context/UserContext";
import UserLoginIcon from "./UserLoginIcon";
import UserNotLoginIcon from "./userNotLoginIcon";
import LoginRegister from "../pages/LoginRegister";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [showLogin, setShowLogin] = useState(false);

  // Función para cerrar sesión con alerta de confirmación
  const logout = () => {
    setUser(null);
    Swal.fire({
      icon: "info",
      title: "Cierre de sesión",
      text: "Has cerrado sesión correctamente.",
      timer: 2000,  // Duración de 2 segundos
      showConfirmButton: false,  // Sin botón de confirmación
    });
  };

  return (
    <header>
      <h1 className="text-center">
        <NavLink to="/">WikiPotter</NavLink>
      </h1>
      <div></div>
      <div>
        <button
          onClick={toggleTheme}
          style={{ background: "none", border: "none" }}
        >
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </button>
        {!user ? (
          <button className="login" onClick={() => setShowLogin(true)}>
            <UserNotLoginIcon />
          </button>
        ) : (
          <button className="login" onClick={() => logout()}>
            {<UserLoginIcon />}
          </button>
        )}
        {showLogin && <LoginRegister onClose={() => setShowLogin(false)} />}
      </div>
    </header>
  );
};

export default Header;
