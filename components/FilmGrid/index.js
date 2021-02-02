import FilmCard from "../FilmCard";

const FilmGrid = ({ films }) => {
  // films is equal to an array of film objects
  // empty array to map into
  // const { name, description, brand, iso } = films[0];
  // console.log(name);
  // console.log(description);
  // console.log(brand);
  // console.log(iso);

  let mappedFilmCards = [];

  // helper function
  function renderFilmCards(film) {
    // map through array of films into new array of cards
    for (let i = 0; i <= film.length; i++) {
      mappedFilmCards = film.map(FilmCard);
    }
    return mappedFilmCards;
  }

  return <>{renderFilmCards(films)}</>;
};

export default FilmGrid;
