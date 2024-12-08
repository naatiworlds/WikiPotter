/* eslint-disable react/prop-types */
import React, { useContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import * as Yup from "yup";
import Joyride from "react-joyride";
import "../css/LoginRegister.css";
import UseLoader from "../hooks/UseLoader";
import { UserContext } from "../context/UserContext";
import { firebaseLogin, firebaseRegistro } from "../config/FirebaseAuth";

const LoginRegister = ({ onClose }) => {
  const { user, setUser } = useContext(UserContext);
  const [isFlipped, setIsFlipped] = useState(false);

  // Recuperar sesión persistente de LocalStorage
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
    }
  }, [setUser]);

  // Evitar abrir el formulario si el usuario ya está logueado
  useEffect(() => {
    if (user) {
      Swal.fire({
        title: "Ya estás logueado",
        text: "No necesitas iniciar sesión de nuevo.",
        icon: "info",
        confirmButtonText: "Aceptar",
      });
      onClose(); // Cerramos la ventana automáticamente
    }
  }, [user, onClose]);

  // Formik para Login
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
        setUser(userData);

        // Guardar sesión en LocalStorage
        localStorage.setItem("user", JSON.stringify(userData));

        Swal.fire({
          title: "Inicio de sesión exitoso",
          text: `Bienvenido!`,
          icon: "success",
        });
        onClose();
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

  // Formik para Registro
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
        setUser(userData);

        // Guardar sesión en LocalStorage
        localStorage.setItem("user", JSON.stringify(userData));

        Swal.fire({
          title: "Registro exitoso",
          text: `¡Bienvenido, ${values.email}!`,
          icon: "success",
        });
        onClose();
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: error.message,
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      }
      resetForm();
    },
  });

  return (
    !user && ( // Renderizamos solo si el usuario no está logueado
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
