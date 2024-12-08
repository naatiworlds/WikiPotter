/**
 * @file ContactoForm.jsx
 * @description Componente de formulario de contacto que permite a los usuarios enviar información, incluyendo validación en tiempo real y alertas al completar correctamente el formulario.
 * @author [Natalia]
 * @date [Fecha de creación]
 * @version 1.0
 */

import { useState } from "react";
import "../css/Contact-form.css";
import Swal from "sweetalert2";

/**
 * @component ContactoForm
 * @description Formulario de contacto con validación en tiempo real. Recoge el nombre de usuario, correo electrónico y un mensaje (asunto). Utiliza validaciones estrictas para asegurar la entrada correcta del usuario.
 * @returns {JSX.Element} El formulario de contacto con campos validados.
 */
const ContactoForm = () => {
  // Estado para los datos del formulario
  const [contactoData, setContactoData] = useState({
    username: "",
    email: "",
    asunto: "",
  });

  // Estado para los errores de validación
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    asunto: "",
  });

  /**
   * Valida un campo individual del formulario.
   * @param {string} name - Nombre del campo (username, email, asunto).
   * @param {string} value - Valor actual del campo.
   * @returns {string} Mensaje de error si hay validación fallida; vacío si es válido.
   */
  const validateField = (name, value) => {
    switch (name) {
      case "username":
        if (!/^[a-zA-Z0-9_]{3,15}$/.test(value)) {
          return "Debe tener entre 3 y 15 caracteres alfanuméricos o guiones bajos.";
        }
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return "Introduce un correo electrónico válido.";
        }
        break;
      case "asunto":
        if (value.length < 10 || value.length > 300) {
          return "Debe tener entre 10 y 300 caracteres.";
        }
        break;
      default:
        break;
    }
    return "";
  };

  /**
   * Maneja los cambios en los campos del formulario.
   * @param {Object} e - Evento del input.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactoData({ ...contactoData, [name]: value });

    // Validar en tiempo real
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  /**
   * Maneja el envío del formulario, valida todos los campos y muestra un mensaje de éxito.
   * @param {Object} e - Evento del formulario.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      username: validateField("username", contactoData.username),
      email: validateField("email", contactoData.email),
      asunto: validateField("asunto", contactoData.asunto),
    };

    setErrors(newErrors);

    // Si no hay errores, procesar el envío
    if (!Object.values(newErrors).some((error) => error)) {
      Swal.fire({
        title: "Enviado con éxito",
        text: `Tu mensaje, ${contactoData.username}, ha sido enviado con éxito!`,
        icon: "success",
      });
      setContactoData({ username: "", email: "", asunto: "" });
    }
  };

  return (
    <div className="contact-form">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        {/* Campo de nombre de usuario */}
        <input
          type="text"
          name="username"
          placeholder="Usuario"
          className="form-control mb-2"
          value={contactoData.username}
          onChange={handleChange}
        />
        {errors.username && <small className="text-danger">{errors.username}</small>}

        {/* Campo de correo electrónico */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mb-2"
          value={contactoData.email}
          onChange={handleChange}
        />
        {errors.email && <small className="text-danger">{errors.email}</small>}

        {/* Campo de asunto */}
        <textarea
          name="asunto"
          placeholder="Escribe tu petición"
          className="form-control mb-2"
          value={contactoData.asunto}
          onChange={handleChange}
        />
        {errors.asunto && <small className="text-danger">{errors.asunto}</small>}

        {/* Botón de envío */}
        <button type="submit" className="btn btn-primary mt-2">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactoForm;
