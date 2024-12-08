import { useContext, useEffect, useState } from "react";
import UseLoader from "../hooks/UseLoader";
import { UserContext } from "../context/UserContext";
import Joyride from "react-joyride";
import { ThemeContext } from "../context/ThemeContext";

const Profile = () => {
  const { books, characters, houses, loading, error } = UseLoader();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const { user } = useContext(UserContext);

  // Recuperar favoritos del localStorage al cargar el componente
  const getInitialFavorites = () => {
    try {
      const savedFavorites = JSON.parse(localStorage.getItem("favorites"));
      return savedFavorites || { character: null, book: null, house: null };
    } catch (err) {
      console.error("Error reading favorites from localStorage:", err);
      return { character: null, book: null, house: null };
    }
  };

  const [favorites, setFavorites] = useState(getInitialFavorites);
  const [runTutorial, setRunTutorial] = useState(false);

  // Sincronizar favoritos con el localStorage al cambiar
  useEffect(() => {
    if (user) {
      const hasCompleteFavorites =
        favorites.character && favorites.book && favorites.house;

      // Guardar favoritos solo si son válidos
      if (hasCompleteFavorites) {
        localStorage.setItem("favorites", JSON.stringify(favorites));
      }
    }
  }, [favorites, user]);

  // Configurar el tutorial basado en favoritos iniciales
  useEffect(() => {
    if (user) {
      const hasCompleteFavorites =
        favorites.character && favorites.book && favorites.house;
      setRunTutorial(!hasCompleteFavorites);
    }
  }, [user, favorites]);

  // Pasos del tutorial
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

  // Maneja la selección de los favoritos
  const handleSelectFavorite = (type, value) => {
    setFavorites((prev) => ({ ...prev, [type]: value }));
  };

  // Si no hay usuario, muestra un mensaje
  if (!user) {
    return <p>Inicia sesión para acceder a tu perfil.</p>;
  }

  // Si los datos están cargando, muestra un mensaje
  if (loading) {
    return <p>Cargando datos...</p>;
  }

  // Si hay un error, muestra el mensaje de error
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="profile-container">
      <h2>Bienvenido, {user.email}</h2>

      {/* Tutorial de React Joyride */}
      <Joyride
        steps={steps}
        continuous
        showSkipButton
        run={runTutorial}
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
          if (data.status === "finished") setRunTutorial(false);
        }}
      />

      {/* Sección para elegir favoritos */}
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

        <div className="character-select">
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

        <div className="character-select">
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
