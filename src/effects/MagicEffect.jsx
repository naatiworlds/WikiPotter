/**
 * @file MagicEffect.js
 * @description Este archivo contiene el componente `MagicEffect`, que agrega un efecto visual interactivo en la interfaz de usuario.
 * El componente permite que un elemento de "magia" siga el movimiento del ratón, creando un efecto visual que reacciona a la interacción del usuario.
 * 
 * Utiliza `useEffect` de React para manejar el evento `mousemove` y ajustar la posición de un elemento con clase `.magic-effect` en la página en función de la posición del ratón.
 * 
 * @dependencies
 * - React (`useEffect`)
 * - CSS personalizado (`MagicEffect.css`)
 * @version 1.0
 * @date 2024
 */

import { useEffect } from "react";
import "../css/MagicEffect.css"; // Se importa la hoja de estilos para el efecto de magia

/**
 * Componente MagicEffect
 * Este componente agrega un efecto visual que sigue el movimiento del ratón con un "elemento mágico" en la pantalla.
 * 
 * @returns {JSX.Element} Un `div` con la clase `magic-effect` que se mueve según la posición del ratón.
 */
const MagicEffect = () => {
  useEffect(() => {
    /**
     * Función que se ejecuta cada vez que el ratón se mueve.
     * Ajusta la posición del elemento mágico con base en las coordenadas X y Y del ratón.
     * 
     * @param {MouseEvent} event - El evento de movimiento del ratón.
     */
    const handleMouseMove = (event) => {
      const magicElement = document.querySelector(".magic-effect"); // Se selecciona el elemento mágico
      const mouseX = event.clientX; // Se obtiene la posición horizontal del ratón
      const mouseY = event.clientY; // Se obtiene la posición vertical del ratón

      // Ajustar la posición del hechizo con base en la posición del ratón, centrando el elemento
      magicElement.style.left = `${mouseX - 30}px`;
      magicElement.style.top = `${mouseY - 30}px`;
    };

    // Se agrega un escuchador de eventos para el movimiento del ratón
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup: eliminar el escuchador de eventos cuando el componente se desmonte
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // El efecto solo se ejecuta una vez al montarse el componente

  return <div className="magic-effect"></div>; // Renderiza un div con la clase magic-effect
};

export default MagicEffect;
