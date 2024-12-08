/**
 * @file Profile.js
 * @description Este componente representa la página de perfil del usuario, donde pueden elegir su personaje, libro y casa favoritos de la saga de Harry Potter. 
 * También incluye un tutorial interactivo usando el paquete `react-joyride` para guiar al usuario a través del proceso de selección de favoritos.
 * 
 * @dependencies
 * - `react`: Para crear el componente React.
 * - `react-router-dom`: Para manejar la navegación y el acceso a rutas.
 * - `react-joyride`: Para mostrar un tutorial interactivo.
 * - `UseLoader`: Un hook personalizado que carga los datos de libros, personajes y casas.
 * - `UserContext`: Contexto para acceder y gestionar los datos del usuario.
 * - `ThemeContext`: Contexto para gestionar el tema de la interfaz.
 * - `localStorage`: Para guardar los favoritos del usuario.
 * 
 * @returns {JSX.Element} El componente que muestra el perfil del usuario, con la opción de seleccionar favoritos y un tutorial interactivo.
 * 
 * @version 1.0
 * @date 2024
 */

import { useContext, useEffect, useState } from "react"; // Importación de React hooks
import UseLoader from "../hooks/UseLoader"; // Hook personalizado para cargar datos
import { UserContext } from "../context/UserContext"; // Contexto del usuario
import Joyride from "react-joyride"; // Paquete para el tutorial interactivo
import { ThemeContext } from "../context/ThemeContext"; // Contexto del tema visual

const Profile = () => {
  const { books, characters, houses, loading, error } = UseLoader(); // Obtener los datos desde el hook UseLoader
  const { theme } = useContext(ThemeContext); // Obtener el tema actual
  const { user } = useContext(UserContext); // Obtener el usuario desde el contexto

  // Función para obtener los favoritos desde el localStorage
  const getInitialFavorites = () => {
    try {
      const savedFavorites = JSON.parse(localStorage.getItem("favorites"));
      return savedFavorites || { character: null, book: null, house: null };
    } catch (err) {
      console.error("Error reading favorites from localStorage:", err);
      return { character: null, book: null, house: null };
    }
  };

  const [favorites, setFavorites] = useState(getInitialFavorites); // Estado para gestionar los favoritos
  const [runTutorial, setRunTutorial] = useState(false); // Estado para controlar la ejecución del tutorial

  // Sincronizar los favoritos con el localStorage cuando cambian
  useEffect(() => {
    if (user) {
      const hasCompleteFavorites =
        favorites.character && favorites.book && favorites.house;

      // Guardar los favoritos solo si son completos
      if (hasCompleteFavorites) {
        localStorage.setItem("favorites", JSON.stringify(favorites));
      }
    }
  }, [favorites, user]);

  // Configuración del tutorial, basado en si los favoritos están completos
  useEffect(() => {
    if (user) {
      const hasCompleteFavorites =
        favorites.character && favorites.book && favorites.house;
      setRunTutorial(!hasCompleteFavorites); // Si no se han seleccionado todos los favoritos, iniciar tutorial
    }
  }, [user, favorites]);

  // Pasos para el tutorial interactivo
  const steps = [
    {
      target: ".character-select",
      content: "Elige tu personaje favorito de Harry Potter.",
    },
    {
      target: ".book-select",
      content: "Elige tu libro favorito de la saga.",
    },
    {
      target: ".house-select",
      content: "Selecciona la casa que más te representa.",
    },
    {
      target: ".profile-summary",
      content: "¡Aquí están tus elecciones! Bienvenido al mundo mágico.",
    },
  ];

  // Función para manejar la selección de los favoritos
  const handleSelectFavorite = (type, value) => {
    setFavorites((prev) => ({ ...prev, [type]: value }));
  };

  // Mostrar mensaje si no hay usuario
  if (!user) {
    return <p>Inicia sesión para acceder a tu perfil.</p>;
  }

  // Mostrar mensaje si los datos están cargando
  if (loading) {
    return <p>Cargando datos...</p>;
  }

  // Mostrar mensaje de error si hay algún problema con los datos
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="profile-container">
      <h2>Bienvenido, {user.email}</h2>

      {/* Tutorial interactivo */}
      <Joyride
        steps={steps} // Pasos del tutorial
        continuous
        showSkipButton
        run={runTutorial} // Controla si el tutorial se debe ejecutar
        styles={{
          options: {
            arrowColor: "#fff",
            backgroundColor: "#1f2937",
            overlayColor: "rgba(0, 0, 0, 0.5)",
            primaryColor: "#10b981",
            textColor: "#fff",
            zIndex: 1000,
          },
        }}
        callback={(data) => {
          if (data.status === "finished") setRunTutorial(false); // Detener tutorial cuando se termine
        }}
      />

      {/* Sección para seleccionar favoritos */}
      <div className="favorites">
        <div className="character-select">
          <h3>Personaje Favorito</h3>
          <select
            className={`select-theme ${theme}`}
            value={favorites.character || ""}
            onChange={(e) => handleSelectFavorite("character", e.target.value)}
          >
            <option value="">Selecciona</option>
            {characters.map((character) => (
              <option key={character.index} value={character.fullName}>
                {character.fullName}
              </option>
            ))}
          </select>
        </div>

        <div className="book-select">
          <h3>Libro Favorito</h3>
          <select
            className={`select-theme ${theme}`}
            value={favorites.book || ""}
            onChange={(e) => handleSelectFavorite("book", e.target.value)}
          >
            <option value="">Selecciona</option>
            {books.map((book) => (
              <option key={book.id} value={book.title}>
                {book.title}
              </option>
            ))}
          </select>
        </div>

        <div className="house-select">
          <h3>Casa Favorita</h3>
          <select
            className={`select-theme ${theme}`}
            value={favorites.house || ""}
            onChange={(e) => handleSelectFavorite("house", e.target.value)}
          >
            <option value="">Selecciona</option>
            {houses.map((house) => (
              <option key={house.index} value={house.house}>
                {house.house}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Resumen del perfil */}
      <div className="profile-summary">
        <h2>Tu Perfil</h2>
        <p>🎭 Personaje Favorito: {favorites.character || "No seleccionado"}</p>
        <p>📚 Libro Favorito: {favorites.book || "No seleccionado"}</p>
        <p>🏰 Casa Favorita: {favorites.house || "No seleccionado"}</p>
      </div>
    </div>
  );
};

export default Profile;
