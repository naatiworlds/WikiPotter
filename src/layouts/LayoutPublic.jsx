import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar"; // Correcto: NavBar en lugar de NabVar
import Footer from "../components/Footer";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Header from "../components/Header";

const LayoutPublic = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`app-container ${theme}`}>
      <div className={theme}>
        <main>
          <Header />
          <NavBar />
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default LayoutPublic;
