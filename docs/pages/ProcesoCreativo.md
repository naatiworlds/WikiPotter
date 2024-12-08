[![Imagen de botón](../assets/BotonInicio.png)](../README.md)

Aquí se detalla brevemente el proceso de creación y evolución del proyecto para obtener más información [Documentación oficial](../main/index.html)

# 📞 Páginas y Componentes

Este documento explica el proceso paso a paso para crear páginas funcionales en un proyecto de React, con validaciones.

---

## 🎯 **Objetivo**

Crear una web completamente funcional, donde se ponga en uso los conocimientos adquiridos, como por ejemplo el uso de react, una api y todos los conocimientos adquiridos en clase. Para este proyecto el principal objetivo ha sido la interpolación de datos usando una api y sus diferentes endpoints a continuación se describiran los requerimientos:

## Requisitos mínimos de la aplicación

Los siguientes requisitos son totalmente obligatorios para la realización del proyecto. Estos requisitos abarcan tanto las páginas específicas como las funcionalidades mínimas que deben ser integradas en cada sección de la aplicación, asegurando una experiencia de usuario completa y coherente.

### Páginas

1. Login/Registro: Página de inicio de sesión y registro de usuarios con validación completa de datos.
1. Perfil de usuario: Sección que almacene y muestre información del usuario (e.g., favoritos, foto de perfil).
1. Búsqueda y visualización: Página de búsqueda que realice llamadas a una API externa, incluyendo al menos una llamada anidada. La página debe mostrar los datos en forma paginada y permitir aplicar un filtro de búsqueda avanzado con al menos cuatro opciones de filtrado.
1. Página de contacto: Página de contacto que incluya un formulario con validación.

### Funcionalidades mínimas a implementar

Estos son los requisitos mínimos de funcionalidades que debe incluir la aplicación, tanto en las páginas listadas como en otras secciones que puedas desarrollar:

1. Almacenamiento en el navegador: Uso de LocalStorage o IndexedDB para guardar datos relevantes (e.g., favoritos).
1. Validación avanzada de formularios: Implementación de validaciones en formularios que incluya una variedad de tipos de inputs (al menos cinco diferentes), como fecha, número, checkbox, email, radio button, entre otros.
1. Llamadas a la API: Implementación de llamadas asíncronas a la API externa, asegurando que se realice al menos una llamada anidada para obtener datos adicionales.
1. Filtros de búsqueda avanzados: Configuración de filtros de búsqueda con al menos cuatro opciones de filtrado, aplicables a los datos recibidos de la API.
1. Paginación de resultados: Paginación de los datos mostrados en la página de búsqueda para facilitar la navegación por grandes volúmenes de datos.
1. Eventos: Uso de eventos variados, incluyendo:
   - Eventos dependientes del tiempo.
   - Validación en tiempo real en formularios.
   - Eventos de desplazamiento (scroll).
   - Eventos condicionados por la entrada del usuario.
1. Despliegue de la aplicación: La aplicación debe estar desplegada en GitHub Pages, Netlify, o una plataforma similar. Si se elige una opción distinta, debe justificarse.

---

#@ 🪄 **Documentación de Componentes y Páginas de la Aplicación**

## 🧩 **Componentes**

Los componentes están diseñados para ser reutilizables y encapsulan diversas funcionalidades clave de la aplicación:

### 📚 **Lista de Componentes**

1. **BooksList.jsx**  
   ➡️ Muestra una lista de libros con opciones para interactuar con ellos.

2. **CharactersList.jsx**  
   ➡️ Muestra una lista de personajes y permite buscar o seleccionar.

3. **ContactoForm.jsx**  
   ➡️ Un formulario de contacto para que los usuarios envíen preguntas o comentarios.

4. **Footer.jsx**  
   ➡️ El pie de página de la aplicación, contiene enlaces e información adicional.

5. **Header.jsx**  
   ➡️ El encabezado principal, incluye navegación y control de temas.

6. **HousesList.jsx**  
   ➡️ Lista de casas mágicas, permitiendo seleccionar y explorar información sobre cada una.

7. **LoginRegister.jsx**  
   ➡️ Maneja las funciones de inicio de sesión y registro en la aplicación.

8. **NavBar.jsx**  
   ➡️ Barra de navegación principal que conecta las diferentes secciones de la aplicación.

9. **SearchCharacters.jsx**  
   ➡️ Componente para buscar personajes en una API.

10. **ShearchBooks.jsx** _(¿Posible typo?)_  
    ➡️ Similar a **SearchCharacters**, pero enfocado en buscar libros.

11. **ThemeIcon.jsx**  
    ➡️ Cambia el tema de la aplicación (claro/oscuro) con un diseño intuitivo.

12. **UserLoginIcon.jsx**  
    ➡️ Icono que muestra el estado del usuario cuando está autenticado.

13. **UserNotLoginIcon.jsx**  
    ➡️ Icono que muestra el estado del usuario cuando no ha iniciado sesión.

14. **Welcome.jsx**  
    ➡️ Mensaje de bienvenida para los usuarios al ingresar a la aplicación.

---

## 📄 **Páginas**

Las páginas son los contenedores principales que estructuran las diferentes secciones de la aplicación.

### 🌟 **Lista de Páginas**

1. **Book.jsx**  
   ➡️ Página dedicada a la vista detallada de un libro en específico.

2. **Books.jsx**  
   ➡️ Muestra un catálogo de libros disponibles en la aplicación.

3. **Character.jsx**  
   ➡️ Detalles específicos sobre un personaje seleccionado.

4. **Characters.jsx**  
   ➡️ Página que muestra una lista completa de personajes para explorar.

5. **Contacto.jsx**  
   ➡️ Página de contacto con un formulario para que los usuarios envíen consultas.

6. **Home.jsx**  
   ➡️ Página principal que da la bienvenida a los usuarios.

7. **NotFound.jsx**  
   ➡️ Página de error personalizada (404) para rutas no encontradas.

8. **Profile.jsx**  
   ➡️ Página de perfil de usuario, incluye información.

---

## 📁 **Estructura de Carpetas**

1. **components**  
   ➡️ Contiene todos los componentes reutilizables descritos anteriormente.

2. **pages**  
   ➡️ Contiene las vistas principales de la aplicación.

3. **css**  
   ➡️ Archivos de estilos para personalizar la apariencia de la aplicación.

4. **context**  
   ➡️ Contextos de React para el manejo global de estados como usuario y tema.

5. **config**  
   ➡️ Configuración global del proyecto (si aplica).

6. **hooks**  
   ➡️ Custom hooks para encapsular lógica compleja reutilizable.

7. **layouts**  
   ➡️ Contenedores principales para estructurar las vistas y los componentes.

8. **loaders**  
   ➡️ Funciones para cargar datos necesarios para las páginas.

9. **effects**  
   ➡️ Efectos especiales o decorativos, como animaciones mágicas.

## 🚀 **Pasos para Crear el Componente**

### **1. Crear un `Componente`**

En primer lugar deberemos analizar que funcionalidad cumple ese componente, posteriormente habrá que desarrollar la funcionad que debe complir dicho componente, especificar si va a ser un **componente padre** o un **componente hijo** en caso de ser un componente padre, deberá incluir un componente hijo en su esctructura, y pasarle los datos por props si fuera necesario. a continuación describiré brevemente el desarrollo de cada uno de los componentes.

1. `BoockList`: Es componente fue uno de los primero ya que lo primero que hice en este desarrollo fue la conexión directamente con la API y sus llamadas anidadas, ya que pensé que sería lo más complejo de realizar, luego me daría cuenta de que habrían componentes bastante más complejos que este.

```js
import { Link } from "react-router-dom";
import "../css/index.css";

const BooksList = ({ className, books, limit }) => {
  // Aplica el límite si se proporciona
  const limitedBooks = limit ? books.slice(0, limit) : books;

  return (
    <ul className={className}>
      {limitedBooks.length > 0 ? (
        limitedBooks.map((book) => (
          <li key={book.index} className="item-child-list scroller-up">
            <Link to={`/book/${book.title}`}>
              <img src={book.cover} alt="portada" />
            </Link>
            <figcaption>{book.title}</figcaption>
            <span>{book.releaseDate}</span>
          </li>
        ))
      ) : (
        <li className="no-books">No hay libros disponibles</li>
      )}
    </ul>
  );
};

export default BooksList;
```

2. `CharcterList`: Este fue el segundo y esq desde el principio del desarrollo tenía claro que quería listar los libros y los personajes de esta saga tan maravillosa.

```js
import { Link } from "react-router-dom";

const CharactersList = ({ className, characters, limit }) => {
  const limitedCharacters = limit ? characters.slice(0, limit) : characters;

  return (
    <ul className={className}>
      {limitedCharacters.length > 0 ? (
        limitedCharacters.map((character) => (
          <li className="item-child-list scroller-up" key={character.index}>
            <div className="image">
              <Link to={`/character/${character.nickname}`}>
                <img src={character.image} alt={character.nickname} />
              </Link>
            </div>
            <div className="dates">
              <h2>{character.fullName}</h2>
              <p>{character.birthdate}</p>
            </div>
          </li>
        ))
      ) : (
        <li className="no-characters">No hay personajes disponibles</li>
      )}
    </ul>
  );
};

export default CharactersList;
```

3. `ContactoForm`: Este componente llegaría en la 3ª parte de la entrega donde se cumplía dicho requisito exigido en la misma, no he usado formik porque pensé que aquí no sería necesario ya que es un simple formulario de contacto/support. Igualmente podría resaltar como fallo el no uso de dicha libreria. Igualmente a favor diré que se valida cada campo gracias al uso de regex.

```js
import { useState } from "react";
import "../css/Contact-form.css";
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
        {errors.username && (
          <small className="text-danger">{errors.username}</small>
        )}

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
        {errors.asunto && (
          <small className="text-danger">{errors.asunto}</small>
        )}

        <button type="submit" className="btn btn-primary mt-2">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactoForm;
```

4. `Footer`: Es un simple componente de footer que muestra las opciones de contacto las políticas de privacidad y el sobre nosotros ( un componente sin más genérico ).

```js
import { NavLink } from "react-router-dom";
import "../css/footer.css"

const Footer = () => {
  return (
    <footer className="footer-custom">
      <p>Natiworlds © 2024 WikiPotter</p>
      <ul>
        <NavLink to="/contacto">Contacto</NavLink>
        <NavLink>Sobre Nosotros</NavLink>
        <NavLink>Políticas de privacidad</NavLink>
      </ul>
    </footer>
  );
};

export default Footer;
```

5. `Header`: Sobre el header a me llevó y me costó bastante trabajo el tema de implementar los iconos cambiantes condicionalmente de los clicks del usuario ya que debían cambiar dependiendo de las acciones que el usuario realizara, así como mostrar el link al perfil si el usuario estuviera logueado, fue una de las cosas que más tiempo me han llevado porque durante todo el desarrollo ha ido recibiendo cambios.

```js
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

import ThemeIcon from "./ThemeIcon";
import UserLoginIcon from "./UserLoginIcon";
import UserNotLoginIcon from "./UserNotLoginIcon";
import LoginRegister from "./LoginRegister";

import "../css/header.css";

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [showLogin, setShowLogin] = useState(false);

  // Al montar el componente, recuperar el usuario del localStorage si existe
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Establece el usuario desde localStorage
    }
  }, [setUser]);

  // Guardar la información del usuario en localStorage al cambiar
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user"); // Elimina el usuario del localStorage al cerrar sesión
    }
  }, [user]);

  // Función para cerrar sesión con alerta de confirmación
  const logout = () => {
    setUser(null);
    Swal.fire({
      icon: "warning",
      title: "Cierre de sesión",
      text: "Has cerrado sesión correctamente.",
      timer: 2000,
      showConfirmButton: false,
    });
  };

  // Determina el color del icono basado en el tema y si el usuario está logueado
  const iconColor = user
    ? "#1E90FF" // Azul si el usuario está logueado
    : theme === "dark"
    ? "#FFF" // Blanco en tema oscuro cuando no está logueado
    : "#333"; // Negro en tema claro cuando no está logueado

  // Asegurarse de que el login no se muestre al iniciar si ya está logueado
  useEffect(() => {
    if (user) {
      setShowLogin(false); // Cierra el formulario de login si el usuario ya está logueado
    }
  }, [user]);

  return (
    <header className="header-custom">
      <h1>
        <NavLink to="/">WikiPotter</NavLink>
      </h1>
      <div className="header-inputs">
        <select name="themes" className={`select-theme ${theme}`}>
          <optgroup>
            <option value="" disabled={true}>
              Temas
            </option>
          </optgroup>
          <optgroup>
            <option value="griffindor">Griffindor</option>
            <option value="hufflepuff">Hufflepuff</option>
            <option value="ravenclaw">Ravenclaw</option>
            <option value="slytherin">Slytherin</option>
          </optgroup>
        </select>
        <button className="login" onClick={toggleTheme}>
          <ThemeIcon size={50} color={"#FFA500"} />
        </button>
        {!user ? (
          <button className="login" onClick={() => setShowLogin(true)}>
            <UserNotLoginIcon size={50} color={iconColor} />
          </button>
        ) : (
          <>
            <button className="login" onClick={logout}>
              <UserLoginIcon size={50} color={iconColor} />
            </button>
            <NavLink to="/profile">
              <button className="login">Perfil</button>
            </NavLink>
          </>
        )}
        {showLogin && <LoginRegister onClose={() => setShowLogin(false)} />}
      </div>
    </header>
  );
};

export default Header;
```

6. `LoginRegister`: Un formulario de inicio de sesión y registro bastante sencillo, aquí si he usado `formik` una libreria que nos ayuda con las validaciones de los campos y en la interacción con el usuario a la hora de indicarle como debe rellenar dicho formulario. Tiene un backdrop por lo que al clickar en registrarse la tarjeta ésta se dará la vuelta y mostrará el formulario correspondiente.

```js
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
```

7. `NavBar`: Un componente simple que nos permite ver las diferentes caracteristicas de la aplicación, así como el home con un pequeño resumen de las entregas a destacar, un apartado para ver todos los libros publicados y por último un apartado para ver los personajes de los libros, si bien faltan muchos es cosa de la api.

```js
import { NavLink } from "react-router-dom"; 
import "../css/index.css"

const NavBar = () => {
  return (
    <nav className="navbar-custom">
      <div className="container">
        <NavLink to="/" className="nav-link">
          Inicio
        </NavLink>
        <NavLink to="/books" className="nav-link">
          Libros
        </NavLink>
        <NavLink to="/characters" className="nav-link">
          Personajes
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
```

8. `SearchBooks`: Este componente, cumpliendo con el requisito de filtros avanzados, nos permite buscar en la página de libros un libro tanto por su nombre como por su año de publicación, dado que los libros están escritos todos por la misma persona, eso me dejó con pocas posibilidades de filtrar.

```js 
const SearchBooks = ({
  searchTitle,
  searchYear,
  setSearchTitle,
  setSearchYear,
  years,
}) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar por título..."
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <select
        value={searchYear}
        onChange={(e) => setSearchYear(e.target.value)}
      >
        <option value="">Todos los años</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchBooks;
```

9. `SearchCharacters`: Este componente cumple exactamente la misma finalidad que el anterior. No conllevó mucha complicación.

```js
const SearchCharacters = ({
    searchName,
    setSearchName,
    searchHouse,
    setSearchHouse,
    houses,
  }) => {
    return (
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
  
        <select
          value={searchHouse}
          onChange={(e) => setSearchHouse(e.target.value)}
        >
          <option value="">Todas las casas</option>
          {houses.map((house) => (
            <option key={house} value={house}>
              {house}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default SearchCharacters;
  ```

10. `ThemeIcon`: Este componente vino a la par de el `Header` en una primera instancia compuesto de 2 sub componentes, uno para el sol y otro para la luna, viendo que el componente podría verse funsionados en uno solo, así que así lo hice. Conseguí esto leyendo un useContext de [theme](../../src/context/ThemeContext.jsx)

```js
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeIcon = ({ size, color }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return theme === "light" ? (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="5" fill={color} />
      <path
        d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M17.36 17.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M17.36 6.64l1.42-1.42"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ) : (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 12.79A9 9 0 0112.21 3 7.5 7.5 0 1018 18.5 9 9 0 0021 12.79z"
        fill={color}
      />
    </svg>
  );
};

export default ThemeIcon;
```

11. `UserLoginIcon/UserNotLoginIcon`: Iconos como los anteriores para el inicio de sesión. Los dejo así a posta para remarcar que es un posible error y que deberían estar fusionados en uno como el anterior.

```js
const UserLoginIcon = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="8" r="4" fill={color} />
    <path
      d="M4 20c0-4 4-7 8-7s8 3 8 7"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default UserLoginIcon;
// ---------------------------------------
/* eslint-disable react/prop-types */
const UserNotLoginIcon = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="8" r="4" fill={color} />
    <path
      d="M4 20c0-4 4-7 8-7s8 3 8 7"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default UserNotLoginIcon;
```

12. `Welcome`: Un simple componente que se usa en el home para dar la bienvenida a los usuarios a nuestra aplicación.

```js
const Welcome = () => {
  return (
    <>
      <div className="welcome scroller-up">
        <h2>Explora los reinos encantados de Hogwarts</h2>
        <p>descubre poderosos hechizos y conoce personajes fascinantes.</p>
      </div>
      <div className="features scroller-up">
        <h2>Explora las funciones del perfil</h2>
        <p>
          Inicia sesión o registrate para disfrutar de las caracteristicas
          implementadas que mejoran la experiencia de usuario
        </p>
      </div>
    </>
  );
};

export default Welcome;
```

