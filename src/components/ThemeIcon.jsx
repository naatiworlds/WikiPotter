/**
 * @file ThemeIcon.jsx
 * @description Componente que muestra un ícono representativo del tema actual (luz u oscuro) en función del estado de `ThemeContext`. Cambia dinámicamente entre un ícono de sol (tema claro) y una luna (tema oscuro).
 * @dependencies
 * - React (para usar `useContext` y JSX).
 * - `ThemeContext` (para obtener el tema actual y cambiarlo).
 * @version 1.0
 * @date 2024
 */

import React, { useContext } from "react"; // Importa React y useContext
import { ThemeContext } from "../context/ThemeContext"; // Importa el contexto del tema

/**
 * Componente que muestra un ícono representativo del tema actual (luz u oscuro).
 * El ícono cambia dinámicamente según el tema actual, mostrando un sol en el tema claro
 * y una luna en el tema oscuro. También permite cambiar el tema al hacer clic en el ícono.
 * 
 * @param {number} size - El tamaño del ícono, se establece en el componente padre.
 * @param {string} color - El color del ícono, también proporcionado por el componente padre.
 * 
 * @returns {JSX.Element} Un ícono SVG que representa el tema actual.
 */
const ThemeIcon = ({ size, color }) => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Obtiene el estado actual del tema y la función para alternarlo

  // Si el tema es claro, renderiza el ícono de sol
  return theme === "light" ? (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={toggleTheme} // Cambia el tema al hacer clic en el ícono
    >
      <circle cx="12" cy="12" r="5" fill={color} />
      <path
        d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M17.36 17.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M17.36 6.64l1.42-1.42"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ) : (
    // Si el tema es oscuro, renderiza el ícono de luna
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={toggleTheme} // Cambia el tema al hacer clic en el ícono
    >
      <path
        d="M21 12.79A9 9 0 0112.21 3 7.5 7.5 0 1018 18.5 9 9 0 0021 12.79z"
        fill={color}
      />
    </svg>
  );
};

export default ThemeIcon;
