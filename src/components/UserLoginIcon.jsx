/**
 * @file UserLoginIcon.jsx
 * @description Componente que muestra un ícono representativo de un usuario logueado. Este ícono se compone de un círculo que simboliza el rostro de un usuario y una línea debajo que representa el cuerpo o la conexión al sistema.
 * @dependencies
 * - React (para usar JSX).
 * @version 1.0
 * @date 2024
 */

import React from "react"; // Importa React

/**
 * Componente funcional que muestra un ícono SVG representando un usuario logueado.
 * El ícono consta de un círculo (representando la cabeza del usuario) y una línea curva
 * debajo que simboliza el cuerpo o la conexión a un sistema.
 * 
 * @param {number} size - El tamaño del ícono, se establece en el componente padre.
 * @param {string} color - El color del ícono, también proporcionado por el componente padre.
 * 
 * @returns {JSX.Element} Un ícono SVG representando un usuario logueado.
 */
const UserLoginIcon = ({ size, color }) => (
  <svg
    width={size} // Establece el ancho del ícono en función del valor de `size`
    height={size} // Establece la altura del ícono en función del valor de `size`
    viewBox="0 0 24 24" // Define la caja de visualización del ícono
    fill="none" // El ícono no tiene relleno por defecto
    xmlns="http://www.w3.org/2000/svg" // Definición del espacio de nombres XML para SVG
  >
    <circle cx="12" cy="8" r="4" fill={color} /> {/* Representa la cabeza del usuario (círculo) */}
    <path
      d="M4 20c0-4 4-7 8-7s8 3 8 7" // Define la curva que representa el cuerpo o la conexión
      stroke={color} // Establece el color del trazo
      strokeWidth="2" // Establece el grosor del trazo
      strokeLinecap="round" // Hace que los extremos del trazo sean redondeados
      strokeLinejoin="round" // Hace que los bordes de las intersecciones del trazo sean redondeados
    />
  </svg>
);

export default UserLoginIcon;
