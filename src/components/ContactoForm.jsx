/* eslint-disable no-unused-vars */
import { useState } from "react";
import Swal from "sweetalert2";
import "../css/contact-form.css";

const ContactoForm = () => {
  const [contactoData, setContactoData] = useState({
    username: "",
    email: "",
    asunto: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactoData({ ...contactoData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, asunto } = contactoData;

    // Regex validations
    const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/; // Alphanumeric, underscores, 3-15 chars
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
    const asuntoRegex = /^.{10,300}$/; // Minimum 10 chars, max 300 chars

    // Validate username
    if (!username.trim() || !usernameRegex.test(username)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "El nombre de usuario debe tener entre 3 y 15 caracteres alfanuméricos o guiones bajos.",
      });
      return;
    }

    // Validate email
    if (!email.trim() || !emailRegex.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, introduce un correo electrónico válido.",
      });
      return;
    }

    // Validate asunto
    if (!asunto.trim() || !asuntoRegex.test(asunto)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "El asunto debe tener entre 10 y 300 caracteres.",
      });
      return;
    }

    // Success message
    Swal.fire({
      title: "Enviado con éxito",
      text: `Tu mensaje, ${username}, ha sido enviado con éxito!`,
      icon: "success",
    });

    // Reset form
    setContactoData({ username: "", email: "", asunto: "" });
  };

  return (
    <div className="contact-form">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Usuario"
          className="form-control mb-2"
          value={contactoData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mb-2"
          value={contactoData.email}
          onChange={handleChange}
        />
        <textarea
          name="asunto"
          placeholder="Escribe tu petición"
          className="form-control mb-2"
          value={contactoData.asunto}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary mt-2">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactoForm;
