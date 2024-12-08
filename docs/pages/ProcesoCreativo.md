[![Imagen de botón](../assets/BotonInicio.png)](../README.md)
# 📞 Páginas y Componentes

Este documento explica el proceso paso a paso para crear páginas funcionales en un proyecto de React, con validaciones.

---

## 🎯 **Objetivo**
Crear una web completamente funcional, donde se ponga en uso los conocimientos adquiridos, como por ejemplo el uso de react, 

Crear un formulario de contacto que:
1. Permita a los usuarios enviar su nombre, correo electrónico y mensaje.
2. Valide los datos proporcionados (formato del correo, longitud del mensaje, etc.).

---

## 🛠️ **Herramientas Utilizadas**
- **React**: Framework principal.
- **SweetAlert2**: Para mostrar alertas de éxito o error.
- **Joyride**: Para crear mini tutoriales paso a paso de uso.
- **CSS**: Estilos básicos para el formulario.

---

## **📋 Estructura del Proyecto**
### **Componentes**
1. `ContactoForm`: Componente principal para el formulario.

---

## 🚀 **Pasos para Crear el Componente**

### **1. Crear el Componente `ContactoForm`**
El componente incluye:
- **Inputs controlados:** Para capturar el nombre de usuario, correo electrónico y mensaje.
- **Validaciones dinámicas:** Uso de expresiones regulares para verificar que los datos sean correctos.
- **Alertas:** Con `SweetAlert2` para dar retroalimentación visual.

```javascript
/* eslint-disable no-unused-vars */
import { useState } from "react";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import "../css/contact-form.css";

const ContactoForm = () => {
  const { t } = useTranslation();

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
          return t("errors.username");
        }
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return t("errors.email");
        }
        break;
      case "asunto":
        if (value.length < 10 || value.length > 300) {
          return t("errors.asunto");
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

    if (!Object.values(newErrors).some((error) => error)) {
      Swal.fire({
        title: t("alerts.success.title"),
        text: t("alerts.success.message", { name: contactoData.username }),
        icon: "success",
      });
      setContactoData({ username: "", email: "", asunto: "" });
    }
  };

  return (
    <div className="contact-form">
      <h2>{t("form.title")}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder={t("form.usernamePlaceholder")}
          className="form-control mb-2"
          value={contactoData.username}
          onChange={handleChange}
        />
        {errors.username && <small className="text-danger">{errors.username}</small>}

        <input
          type="email"
          name="email"
          placeholder={t("form.emailPlaceholder")}
          className="form-control mb-2"
          value={contactoData.email}
          onChange={handleChange}
        />
        {errors.email && <small className="text-danger">{errors.email}</small>}

        <textarea
          name="asunto"
          placeholder={t("form.asuntoPlaceholder")}
          className="form-control mb-2"
          value={contactoData.asunto}
          onChange={handleChange}
        />
        {errors.asunto && <small className="text-danger">{errors.asunto}</small>}

        <button type="submit" className="btn btn-primary mt-2">
          {t("form.submitButton")}
        </button>
      </form>
    </div>
  );
};

export default ContactoForm;
```
