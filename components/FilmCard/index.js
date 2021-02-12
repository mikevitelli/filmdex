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
      <a key={props._id} className={styles.card}>
        <Image
          src={props.staticImageUrl}
          alt={props.name}
          width={200}
          height={200}
        />
        <h2>{props.brand}</h2>

        <h3>{props.name}</h3>
        <br></br>
        <Button variant="outline-secondary" onClick={() => setModalShow(true)}>
          View Film
        </Button>
      </a>
    </>
  );
};

export default FilmCard;
