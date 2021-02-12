import { Container, Row, Col } from "react-bootstrap";
import FilmCard from "../FilmCard";

import styles from "../../styles/Home.module.css";

const FilmCards = ({ films }) => {
  return (
    <>
      {films.map((film) => (
        <FilmCard {...film} />
      ))}
    </>
  );
};

export default FilmCards;
