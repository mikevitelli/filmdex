import FilmCard from "../FilmCard";

// need to have an array of films from the db to pass to renderFilms()
let newFilmCards = [];

function renderFilms(film) {
  for (let i = 0; i <= film.length; i++) {
    newFilmCards = film.map(FilmCard);
  }
  return newFilmCards;
}

const FilmGrid = (props) => {
  return <>{renderFilms(props.films)}</>;
};

export default FilmGrid;
