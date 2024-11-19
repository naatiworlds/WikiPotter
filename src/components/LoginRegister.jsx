/* eslint-disable react/prop-types */
// LoginRegister.js
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import "../css/LoginRegister.css";
import { UserContext } from "../context/UserContext";

const LoginRegister = ({ onClose }) => {
  const { setUser } = useContext(UserContext);
  
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isFlipped, setIsFlipped] = useState(false);

  // Actualiza los datos de login o registro dependiendo del formulario actual
  const handleChange = (e, isLogin) => {
    const { name, value } = e.target;
    if (isLogin) {
      setLoginData({ ...loginData, [name]: value });
    } else {
      setRegisterData({ ...registerData, [name]: value });
    }
  };

  // Maneja el cierre cuando se hace clic fuera de la tarjeta
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      onClose();
    }
  };

  // Función para manejar el inicio de sesión con validación
  const handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = loginData;

    if (!username.trim() || !password.trim()) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, completa todos los campos de inicio de sesión.",
      });
      return;
    }

    // Crear el objeto user con los datos de login y actualizar el contexto
    setUser({ name: username });
    Swal.fire({
      title: "Inicio de sesión exitoso",
      text: `Bienvenido, ${username}!`,
      icon: "success",
    });
    onClose(); // Cierra el modal al iniciar sesión
  };

  // Función para manejar el registro con validación
  const handleRegister = (e) => {
    e.preventDefault();
    const { username, email, password } = registerData;

    if (!username.trim() || !email.trim() || !password.trim()) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, completa todos los campos de registro.",
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Introduce un correo electrónico válido.",
      });
      return;
    }

    // Crear el objeto user con los datos de registro y actualizar el contexto
    setUser({ name: username, email });
    Swal.fire({
      title: "Registro exitoso",
      text: `¡Bienvenido a la app, ${username}!`,
      icon: "success",
    });
    onClose(); // Cierra el modal al completar el registro
  };

  return (
    <div className="backdrop" onClick={handleBackdropClick}>
      <div className={`card ${isFlipped ? "flipped" : ""}`}>
        
        {/* Frente: Login */}
        <div className="card-front">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              name="username"
              placeholder="Usuario"
              className="form-control mb-2"
              value={loginData.username}
              onChange={(e) => handleChange(e, true)}
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              className="form-control mb-2"
              value={loginData.password}
              onChange={(e) => handleChange(e, true)}
            />
            <button type="submit" className="btn btn-primary mt-2">Iniciar Sesión</button>
          </form>
          <p>
            ¿No tienes cuenta?{" "}
            <span onClick={() => setIsFlipped(true)}>Regístrate</span>
          </p>
        </div>

        {/* Parte Trasera: Registro */}
        <div className="card-back">
          <h2>Registro</h2>
          <form onSubmit={handleRegister}>
            <input
              type="text"
              name="username"
              placeholder="Nombre de usuario"
              className="form-control mb-2"
              value={registerData.username}
              onChange={(e) => handleChange(e, false)}
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              className="form-control mb-2"
              value={registerData.email}
              onChange={(e) => handleChange(e, false)}
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              className="form-control mb-2"
              value={registerData.password}
              onChange={(e) => handleChange(e, false)}
            />
            <button type="submit" className="btn btn-primary mt-2">Registrarse</button>
          </form>
          <p>
            ¿Ya tienes una cuenta?{" "}
            <span onClick={() => setIsFlipped(false)}>Inicia Sesión</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
