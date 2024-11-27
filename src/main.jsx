import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Suspense } from "react"; // Asegúrate de importar Suspense

import { ThemeProvider } from "./context/ThemeContext.jsx";
import UserProvider from "./context/UserContext.jsx";
import { router } from "./router/index.jsx"; // Importa el enrutador con lazy loading

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <UserProvider>
        <Suspense fallback={<div>Cargando...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </UserProvider>
    </ThemeProvider>
  </StrictMode>
);
