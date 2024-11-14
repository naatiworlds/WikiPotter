import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar"; // Correcto: NavBar en lugar de NabVar

const LayoutPublic = () => {
  return (
    <div>
      <h1>LayoutPublic</h1>
      <NavBar /> {/* Cambiado a NavBar */}
      {/* <main>Main</main> */}
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
};

export default LayoutPublic;
