import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar"; // Correcto: NavBar en lugar de NabVar
import Footer from "../components/Footer";

const LayoutPublic = () => {
  return (
    <div>
      <h1 className="text-center">WikiPotter</h1>
      {/* <main>Main</main> */}
      <NavBar /> {/* Cambiado a NavBar */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutPublic;
