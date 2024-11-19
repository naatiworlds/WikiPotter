import { NavLink } from "react-router-dom";
import "../css/footer.css"

const Footer = () => {
  return (
    <footer className="footer-custom">
      <p>Natiworlds © 2024 WikiPotter</p>
      <ul>
        <NavLink to="/contacto">Contacto</NavLink>
        <NavLink>Sobre Nosotros</NavLink>
        <NavLink>Políticas de privacidad</NavLink>
      </ul>
    </footer>
  );
};

export default Footer;
