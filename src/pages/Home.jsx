import CharactersList from "../components/CharactersList";
import Welcome from "../components/Welcome";
import "../css/index.css";
import BooksList from "../components/BooksList";
import HousesList from "../components/HousesList";
import UseLoader from "../hooks/UseLoader";

const Home = () => {
  const { books, characters, houses } = UseLoader();

  return (
    <>
      <h2 className="welcome-text scroller-right">Bienvenido al Mundo Mágico de Harry Potter</h2>
      <div className="presentation">
        <Welcome />
      </div>
      <div className="content">
        <h2 className="scroller-right">Libros destacados</h2>
        <BooksList className="featured-books " books={books} limit={3} />
        <h2 className="scroller-right">Personajes destacados</h2>
        <CharactersList
          className="featured-characters "
          characters={characters}
          limit={3}
        />
        <div className="hogwarts-houses ">
          <h2 className="scroller-up">Casas de HogWarts</h2>
          <HousesList className="featured-houses" houses={houses} />
        </div>
      </div>
    </>
  );
};

export default Home;
