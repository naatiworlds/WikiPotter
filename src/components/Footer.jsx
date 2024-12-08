/**
 * @file Footer.jsx
 * @description Componente de pie de página para el sitio web, incluye enlaces de navegación y derechos de autor.
 * @author Natalia
 * @date 
 * @version 1.0
 */

import { NavLink } from "react-router-dom";
import "../css/footer.css";

/**
 * @component Footer
 * @description Componente que muestra el pie de página con información básica de derechos de autor y enlaces de navegación para Contacto, Sobre Nosotros y Políticas de privacidad.
 * @returns {JSX.Element} Pie de página del sitio web.
 */
const Footer = () => {
  return (
    <footer className="footer-custom">
      {/* Texto de derechos de autor */}
      <p>Natiworlds © 2024 WikiPotter</p>

      {/* Lista de enlaces de navegación */}
      <ul>
        <NavLink to="/contacto">Contacto</NavLink>
        <NavLink>Sobre Nosotros</NavLink>
        <NavLink>Políticas de privacidad</NavLink>
      </ul>
    </footer>
  );
};

export default Footer;
