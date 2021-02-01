// import ActiveLink from "../components/ActiveLink";
// import Wrapper from "../components/Bootstrap/Wrapper.js";
import styles from "../styles/Home.module.css";
import FilmCard from "../components/FilmCard/index.js";

const filmCards = [0, 1, 2, 3, 4, 5];

// need to have an array of films from the db to pass to renderFilms()
let newFilmCards = [];

function renderFilms(film) {
  for (let i = 0; i <= film.length; i++) {
    newFilmCards = film.map(FilmCard);
  }

  return newFilmCards;
}

const Films = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <a href="https://filmdex.app">Films</a>
        </h1>
        <div className={styles.grid}>
          {/* need a films grid or something component here */}
          {renderFilms(filmCards)}
        </div>
      </div>
    </>
  );
};

export default Films;
