/**
 * @file UserContext.js
 * @description Este archivo define el contexto `UserContext` que maneja el estado global del usuario en la aplicación.
 * Permite que cualquier componente que lo consuma pueda acceder y modificar la información del usuario.
 * 
 * Utiliza el hook `useState` de React para mantener el estado del usuario y proporciona un método `setUser` para actualizar la información del usuario.
 * 
 * @dependencies
 * - React (`createContext`, `useState`)
 * @version 1.0
 * @date 2024
 */

// Importa las funciones necesarias de React
import { createContext, useState } from "react";

// Creamos el contexto para la información del usuario
export const UserContext = createContext();

/**
 * UserProvider es el componente que proporciona el contexto a toda la aplicación.
 * Permite que los componentes hijos puedan acceder y modificar la información del usuario.
 * 
 * @param {Object} props - Las propiedades del componente.
 * @param {ReactNode} props.children - Los componentes hijos que consumirán el contexto.
 * 
 * @returns {JSX.Element} Un proveedor del contexto `UserContext` que envuelve a los componentes hijos.
 */
const UserProvider = ({ children }) => {
  // Estado para almacenar la información del usuario, predeterminado es `null` (sin usuario autenticado)
  const [user, setUser] = useState(null);

  return (
    // Proveedor del contexto que ofrece el valor del usuario y la función para modificarlo a los componentes hijos
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
