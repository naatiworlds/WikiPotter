/**
 * @file Home.js
 * @description Este componente representa la página de inicio (Home) de la aplicación. En la página de inicio,
 * se muestran varios bloques de contenido destacados, incluyendo libros, personajes y casas de Hogwarts. Los 
 * datos de estos bloques son cargados a través de un hook personalizado `UseLoader`.
 * 
 * @dependencies
 * - `../components/CharactersList`: Componente que maneja la visualización de la lista de personajes.
 * - `../components/Welcome`: Componente que muestra un mensaje de bienvenida.
 * - `../components/BooksList`: Componente que maneja la visualización de la lista de libros.
 * - `../components/HousesList`: Componente que maneja la visualización de las casas de Hogwarts.
 * - `../hooks/UseLoader`: Hook personalizado para cargar los datos necesarios (libros, personajes, casas).
 * - `../css/index.css`: Archivo de estilos que aplica el diseño global a la página.
 * 
 * @returns {JSX.Element} Un componente que muestra la interfaz de inicio con bloques destacados.
 * 
 * @version 1.0
 * @date 2024
 */

import CharactersList from "../components/CharactersList"; // Componente para mostrar los personajes
import Welcome from "../components/Welcome"; // Componente de bienvenida
import "../css/index.css"; // Estilos globales
import BooksList from "../components/BooksList"; // Componente para mostrar los libros
import HousesList from "../components/HousesList"; // Componente para mostrar las casas de Hogwarts
import UseLoader from "../hooks/UseLoader"; // Hook personalizado para cargar los datos

const Home = () => {
  // Usamos el hook UseLoader para cargar los datos de libros, personajes y casas
  const { books, characters, houses } = UseLoader();

  return (
    <>
      {/* Título de bienvenida */}
      <h2 className="welcome-text scroller-right">
        Bienvenido al Mundo Mágico de Harry Potter
      </h2>

      {/* Sección de bienvenida con el componente Welcome */}
      <div className="presentation">
        <Welcome />
      </div>

      {/* Contenido destacado */}
      <div className="content">
        {/* Sección de libros destacados */}
        <h2 className="scroller-right">Libros destacados</h2>
        <BooksList className="featured-books" books={books} limit={3} />

        {/* Sección de personajes destacados */}
        <h2 className="scroller-right">Personajes destacados</h2>
        <CharactersList
          className="featured-characters"
          characters={characters}
          limit={3}
        />

        {/* Sección de casas de Hogwarts */}
        <div className="hogwarts-houses">
          <h2 className="scroller-up">Casas de HogWarts</h2>
          <HousesList className="featured-houses" houses={houses} />
        </div>
      </div>
    </>
  );
};

export default Home;
