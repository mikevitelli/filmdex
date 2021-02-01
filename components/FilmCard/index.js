import styles from "../../styles/Home.module.css";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import FilmModal from "../FilmModal";

const FilmCard = (props) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <FilmModal
        {...props}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <a className={styles.card}>
        <Image src="/film_guy512.png" width={200} height={200} />
        <h3>name</h3>
        <h2>description</h2>
        <br></br>
        <Button variant="outline-secondary" onClick={() => setModalShow(true)}>
          View Film
        </Button>
      </a>
    </>
  );
};

export default FilmCard;
