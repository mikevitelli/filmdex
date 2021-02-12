import FilmCard from "../FilmCard";
import Grid from "@material-ui/core/Grid";

const FilmCards = ({ films }) => {
  return (
    <>
      <Grid container spacing={1}>
        {films.map((film) => (
          <FilmCard {...film} />
        ))}
      </Grid>
    </>
  );
};

export default FilmCards;
