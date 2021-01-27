// import ActiveLink from "../components/ActiveLink";
// import Wrapper from "../components/Bootstrap/Wrapper.js";
import styles from "../styles/Home.module.css";
import FilmCard from "../components/FilmCard";

const filmCards = [0, 1, 2, 3, 4, 5];
let newFilmCards = [];

function renderFilms(film) {
  for (let i = 0; i <= film.length; i++) {
    newFilmCards = filmCards.map(FilmCard);
    console.log(newFilmCards);
  }
  return newFilmCards;
}
const Films = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <a href="https://filmdex.app">Films</a>
      </h1>
      <div className={styles.grid}>{renderFilms(filmCards)}</div>
    </div>
  );
};

// helperfunctions

// map out film card

export default Films;
