import { NavLink } from "react-router-dom";
import "../css/footer.css"

const Footer = () => {
  return (
    <footer className="footer-custom">
      <p>Natiworlds © 2024 WikiPotter</p>
      <ul>
        <NavLink>Contacto</NavLink>
      </ul>
    </footer>
  );
};

export default Footer;
