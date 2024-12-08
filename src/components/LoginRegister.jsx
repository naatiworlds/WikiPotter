/**
 * @file LoginRegister.jsx
 * @description Componente de React para gestionar el inicio de sesión y el registro de usuarios. Utiliza Firebase para la autenticación, `formik` para manejar los formularios y `yup` para la validación de entradas. El componente guarda la información del usuario en `localStorage` para persistencia entre recargas.
 * @dependencies
 * - `formik`: Para gestionar formularios con validación en tiempo real.
 * - `yup`: Para definir esquemas de validación.
 * - `sweetalert2`: Para mostrar alertas de éxito o error.
 * - `firebaseLogin` y `firebaseRegistro`: Funciones personalizadas para manejar la autenticación de Firebase.
 * @version 1.0
 * @date 2024
 */

import React, { useContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../css/LoginRegister.css";
import { UserContext } from "../context/UserContext";
import { firebaseLogin, firebaseRegistro } from "../config/FirebaseAuth";

/**
 * Componente que maneja el inicio de sesión y registro de un usuario.
 * Si el usuario ya está logueado, se muestra una alerta y el formulario se cierra.
 * Si el usuario no está logueado, permite el acceso a los formularios de login y registro.
 *
 * @param {Object} props
 * @param {function} props.onClose - Función para cerrar el componente.
 * @returns {JSX.Element|null} El formulario de login/registro o null si el usuario ya está logueado.
 */
const LoginRegister = ({ onClose }) => {
  const { user, setUser } = useContext(UserContext); // Obtener y establecer usuario desde contexto.
  const [isFlipped, setIsFlipped] = useState(false); // Control de si el formulario está volteado.

  // Recuperar el usuario guardado en LocalStorage al montar el componente.
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser); // Si hay un usuario guardado, lo establece en el estado.
    }
  }, [setUser]);

  // Si el usuario está logueado, se muestra una alerta y el formulario se cierra automáticamente.
  useEffect(() => {
    if (user) {
      Swal.fire({
        title: "Ya estás logueado",
        text: "No necesitas iniciar sesión de nuevo.",
        icon: "info",
        confirmButtonText: "Aceptar",
      });
      onClose(); // Cerrar el formulario.
    }
  }, [user, onClose]);

  /**
   * Hook de Formik para manejar el formulario de inicio de sesión.
   */
  const formikLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "Introduce un correo electrónico válido"
        )
        .required("El correo electrónico es obligatorio"),
      password: Yup.string()
        .matches(
          /^[a-zA-Z0-9]{8,}$/,
          "La contraseña debe tener al menos 8 caracteres"
        )
        .required("La contraseña es obligatoria"),
    }),
    onSubmit: async (values) => {
      try {
        await firebaseLogin(values.email, values.password);
        const userData = { email: values.email };
        setUser(userData); // Establecer el usuario en el estado global.
        localStorage.setItem("user", JSON.stringify(userData)); // Guardar el usuario en LocalStorage.

        Swal.fire({
          title: "Inicio de sesión exitoso",
          text: `Bienvenido!`,
          icon: "success",
        });
        onClose(); // Cerrar el formulario tras un login exitoso.
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: error.message,
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      }
    },
  });

  /**
   * Hook de Formik para manejar el formulario de registro.
   */
  const formikRegister = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "Introduce un correo electrónico válido"
        )
        .required("El correo electrónico es obligatorio"),
      password: Yup.string()
        .matches(
          /^[a-zA-Z0-9]{8,}$/,
          "La contraseña debe tener al menos 8 caracteres"
        )
        .required("La contraseña es obligatoria"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await firebaseRegistro(values.email, values.password);
        const userData = { email: values.email };
        setUser(userData); // Establecer el usuario en el estado global.
        localStorage.setItem("user", JSON.stringify(userData)); // Guardar el usuario en LocalStorage.

        Swal.fire({
          title: "Registro exitoso",
          text: `¡Bienvenido, ${values.email}!`,
          icon: "success",
        });
        onClose(); // Cerrar el formulario tras un registro exitoso.
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: error.message,
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      }
      resetForm(); // Limpiar el formulario después del registro.
    },
  });

  return (
    !user && ( // Renderiza solo si no hay usuario logueado.
      <div
        className="backdrop"
        onClick={(e) => e.target.classList.contains("backdrop") && onClose()}
      >
        <div className={`card ${isFlipped ? "flipped" : ""}`}>
          {/* Botón de cierre */}
          <button className="close-button" onClick={onClose}>
            &times;
          </button>

          {/* Formulario de Login */}
          <div className="card-front">
            <h2>Login</h2>
            <form onSubmit={formikLogin.handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                className="form-control mb-2"
                value={formikLogin.values.email}
                onChange={formikLogin.handleChange}
                onBlur={formikLogin.handleBlur}
              />
              {formikLogin.touched.email && formikLogin.errors.email && (
                <div className="error">{formikLogin.errors.email}</div>
              )}

              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                className="form-control mb-2"
                value={formikLogin.values.password}
                onChange={formikLogin.handleChange}
                onBlur={formikLogin.handleBlur}
              />
              {formikLogin.touched.password && formikLogin.errors.password && (
                <div className="error">{formikLogin.errors.password}</div>
              )}

              <button type="submit" className="btn btn-primary mt-2">
                Iniciar Sesión
              </button>
            </form>
            <p>
              ¿No tienes cuenta?{" "}
              <span onClick={() => setIsFlipped(true)}>Regístrate</span>
            </p>
          </div>

          {/* Formulario de Registro */}
          <div className="card-back">
            <h2>Registro</h2>
            <form onSubmit={formikRegister.handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                className="form-control mb-2"
                value={formikRegister.values.email}
                onChange={formikRegister.handleChange}
                onBlur={formikRegister.handleBlur}
              />
              {formikRegister.touched.email && formikRegister.errors.email && (
                <div className="error">{formikRegister.errors.email}</div>
              )}

              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                className="form-control mb-2"
                value={formikRegister.values.password}
                onChange={formikRegister.handleChange}
                onBlur={formikRegister.handleBlur}
              />
              {formikRegister.touched.password && formikRegister.errors.password && (
                <div className="error">{formikRegister.errors.password}</div>
              )}

              <button type="submit" className="btn btn-primary mt-2">
                Registrarse
              </button>
            </form>
            <p>
              ¿Ya tienes una cuenta?{" "}
              <span onClick={() => setIsFlipped(false)}>Inicia Sesión</span>
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default LoginRegister;
