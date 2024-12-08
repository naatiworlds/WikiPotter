import { useEffect } from "react";
import "../css/MagicEffect.css";

const MagicEffect = () => {
  useEffect(() => {
    // Evento para seguir al ratón
    const handleMouseMove = (event) => {
      const magicElement = document.querySelector(".magic-effect");
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      // Ajustar la posición del hechizo con base en la posición del ratón
      magicElement.style.left = `${mouseX - 30}px`; // Ajustamos para centrarlo
      magicElement.style.top = `${mouseY - 30}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className="magic-effect"></div>;
};

export default MagicEffect;
