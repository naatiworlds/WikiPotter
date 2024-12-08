/**
 * @file Welcome.jsx
 * @description Componente funcional de bienvenida que muestra dos secciones destacadas en la página principal:
 * - Una invitación a explorar el mundo de Hogwarts.
 * - Un recordatorio de las funcionalidades disponibles al iniciar sesión o registrarse.
 * Este componente está diseñado para ser una introducción interactiva al sitio o aplicación.
 * @dependencies
 * - React (para usar JSX).
 * @version 1.0
 * @date 2024
 */

import React from "react"; // Importa React

/**
 * Componente funcional que renderiza dos secciones de bienvenida:
 * 1. Un mensaje que invita a explorar los reinos encantados de Hogwarts.
 * 2. Una sección que informa sobre las funcionalidades disponibles al registrarse o iniciar sesión.
 * 
 * Este componente está diseñado para ser una pantalla de bienvenida o introducción.
 * 
 * @returns {JSX.Element} El contenido de bienvenida y las funciones del perfil para el usuario.
 */
const Welcome = () => {
  return (
    <>
      {/* Sección de bienvenida con un mensaje de exploración */}
      <div className="welcome scroller-up">
        <h2>Explora los reinos encantados de Hogwarts</h2>
        <p>Descubre poderosos hechizos y conoce personajes fascinantes.</p>
      </div>

      {/* Sección de funcionalidades del perfil */}
      <div className="features scroller-up">
        <h2>Explora las funciones del perfil</h2>
        <p>
          Inicia sesión o regístrate para disfrutar de las características
          implementadas que mejoran la experiencia de usuario.
        </p>
      </div>
    </>
  );
};

export default Welcome;
