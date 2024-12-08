/**
 * @file LayoutPrivate.js
 * @description Este componente es una **layout** que envuelve las rutas privadas de la aplicación.
 * Verifica si el usuario está autenticado y si tiene una sesión activa. Si es así, permite el acceso a las rutas privadas.
 * Si no, redirige al usuario a la página de inicio ("/").
 * Además, aplica el tema global al contenedor según la configuración del contexto de tema.
 * 
 * Utiliza los contextos `UserContext` y `ThemeContext` para acceder y administrar la información del usuario y del tema.
 * 
 * @dependencies
 * - React (`useContext`, `useState`, `useEffect`)
 * - React Router (`Navigate`, `Outlet`)
 * @version 1.0
 * @date 2024
 */

import { Navigate, Outlet } from "react-router-dom"; // Componente de redirección y espacio para las rutas hijas
import { useContext, useEffect, useState } from "react"; // Hooks de React
import { ThemeContext } from "../context/ThemeContext"; // Contexto de tema
import { UserContext } from "../context/UserContext"; // Contexto de usuario

/**
 * LayoutPrivate es un componente que se utiliza para proteger las rutas privadas de la aplicación.
 * Verifica si un usuario está autenticado y redirige si no lo está.
 * 
 * @returns {JSX.Element} Un layout que muestra las rutas hijas (`Outlet`) si el usuario está autenticado, 
 * o redirige al inicio si no lo está.
 */
const LayoutPrivate = () => {
  // Obtiene el usuario y la función `setUser` del contexto de usuario
  const { user, setUser } = useContext(UserContext);
  
  // Obtiene el tema actual del contexto de tema
  const { theme } = useContext(ThemeContext);
  
  // Estado para controlar el cargado de la verificación del usuario
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar si el usuario está almacenado en el localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    
    // Si el usuario existe en el localStorage y no está en el estado del contexto, se sincroniza
    if (storedUser && !user) {
      setUser(storedUser); // Configura el usuario en el contexto
    }
    
    setIsLoading(false); // Marcar como cargado
  }, [user, setUser]);

  // Mientras se verifica la carga del usuario, mostrar un mensaje de carga
  if (isLoading) {
    return <div className="loading">Cargando...</div>;
  }

  // Si el usuario está autenticado, mostrar las rutas hijas (Outlet)
  // Si no, redirigir al inicio ("/")
  return (
    <div className={theme}> {/* Aplica el tema actual */}
      {user ? <Outlet /> : <Navigate to="/" />} {/* Muestra el contenido o redirige */}
    </div>
  );
};

export default LayoutPrivate;
