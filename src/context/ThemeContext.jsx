// ThemeContext.js
import { createContext, useState } from "react";

// Creamos el contexto
export const ThemeContext = createContext();

// Creamos el proveedor del contexto
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  // Cambiar tema entre "light" y "dark"
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
