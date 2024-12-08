import { Navigate, Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

const LayoutPrivate = () => {
  const { user, setUser } = useContext(UserContext); // Obtener y configurar el usuario desde el contexto
  const { theme } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar si el usuario está en el localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && !user) {
      setUser(storedUser); // Sincronizar el usuario con el contexto si no está ya configurado
    }
    setIsLoading(false); // Marcar como cargado
  }, [user, setUser]);

  if (isLoading) {
    return <div className="loading">Cargando...</div>; // Mostrar un spinner o mensaje de carga
  }

  return (
    <div className={theme}>
      {user ? <Outlet /> : <Navigate to="/" />}
    </div>
  );
};

export default LayoutPrivate;
