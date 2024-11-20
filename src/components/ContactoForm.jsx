import { useState } from "react";
import "../css/contact-form.css"
import Swal from "sweetalert2";

const ContactoForm = () => {
    const [contactoData, setContactoData] = useState({
      username: "",
      email: "",
      asunto: "",
    });
  
    const [errors, setErrors] = useState({
      username: "",
      email: "",
      asunto: "",
    });
  
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
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setContactoData({ ...contactoData, [name]: value });
  
      // Validar en tiempo real
      setErrors({ ...errors, [name]: validateField(name, value) });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newErrors = {
        username: validateField("username", contactoData.username),
        email: validateField("email", contactoData.email),
        asunto: validateField("asunto", contactoData.asunto),
      };
  
      setErrors(newErrors);
  
      // Si no hay errores, proceder
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
          <input
            type="text"
            name="username"
            placeholder="Usuario"
            className="form-control mb-2"
            value={contactoData.username}
            onChange={handleChange}
          />
          {errors.username && <small className="text-danger">{errors.username}</small>}
  
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control mb-2"
            value={contactoData.email}
            onChange={handleChange}
          />
          {errors.email && <small className="text-danger">{errors.email}</small>}
  
          <textarea
            name="asunto"
            placeholder="Escribe tu petición"
            className="form-control mb-2"
            value={contactoData.asunto}
            onChange={handleChange}
          />
          {errors.asunto && <small className="text-danger">{errors.asunto}</small>}
  
          <button type="submit" className="btn btn-primary mt-2">
            Enviar
          </button>
        </form>
      </div>
    );
  };
  
  export default ContactoForm;
  