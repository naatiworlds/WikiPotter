/**
 * @file Header.jsx
 * @description Componente principal de la cabecera que incluye navegación, gestión de usuario y selección de tema.
 * @author Natalia
 * @date 
 * @version 1.0
 */

import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

import ThemeIcon from "./ThemeIcon";
import UserLoginIcon from "./UserLoginIcon";
import UserNotLoginIcon from "./UserNotLoginIcon";
import LoginRegister from "./LoginRegister";

import "../css/header.css";

/**
 * @component Header
 * @description Componente que representa la cabecera de la aplicación. Gestiona el tema, el estado del usuario y la navegación.
 * @returns {JSX.Element} Cabecera de la aplicación.
 */
const Header = () => {
  // Contextos para acceder a información global
  const { user, setUser } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Estados locales
  const [showLogin, setShowLogin] = useState(false);

  /**
   * @description Recupera el usuario del `localStorage` al montar el componente.
   */
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Restaura el estado del usuario
    }
  }, [setUser]);

  /**
   * @description Sincroniza el usuario con `localStorage` al cambiar.
   */
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user"); // Limpia el almacenamiento al cerrar sesión
    }
  }, [user]);

  /**
   * @description Maneja el cierre de sesión del usuario, incluyendo una alerta de confirmación.
   */
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

  /**
   * @description Determina el color del icono basado en el estado del usuario y el tema actual.
   */
  const iconColor = user
    ? "#1E90FF" // Azul si el usuario está logueado
    : theme === "dark"
    ? "#FFF" // Blanco en tema oscuro
    : "#333"; // Negro en tema claro

  /**
   * @description Oculta el formulario de login si el usuario ya está logueado.
   */
  useEffect(() => {
    if (user) {
      setShowLogin(false);
    }
  }, [user]);

  return (
    <header className="header-custom">
      <h1>
        <NavLink to="/">WikiPotter</NavLink>
      </h1>
      <div className="header-inputs">
        {/* Selector de temas */}
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

        {/* Botón para alternar entre temas */}
        <button className="login" onClick={toggleTheme}>
          <ThemeIcon size={50} color={"#FFA500"} />
        </button>

        {/* Gestión del usuario: login o perfil */}
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

        {/* Formulario de login */}
        {showLogin && <LoginRegister onClose={() => setShowLogin(false)} />}
      </div>
    </header>
  );
};

export default Header;
