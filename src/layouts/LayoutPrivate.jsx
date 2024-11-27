import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

const LayoutPrivate = () => {
  const { user } = useContext(UserContext);

  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      {user ? <Outlet /> : <Navigate to="/" />}
    </div>
  );
};

export default LayoutPrivate;
