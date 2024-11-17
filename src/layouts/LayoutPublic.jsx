import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar"; // Correcto: NavBar en lugar de NabVar

const LayoutPublic = () => {
  return (
    <div>
      <h1 className="text-center">WikiPotter</h1>
      {/* <main>Main</main> */}
      <NavBar /> {/* Cambiado a NavBar */}
      <Outlet />
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        Natiworlds © 2024 WikiPotter
      </footer>
    </div>
  );
};

export default LayoutPublic;
