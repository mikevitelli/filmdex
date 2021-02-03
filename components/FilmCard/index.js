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
      <a className={styles.card} key={props._id}>
        <Image src={props.staticImageUrl} width={200} height={200} />
        <h3>{props.brand}</h3>

        <h2>{props.name}</h2>
        <br></br>
        <Button variant="outline-secondary" onClick={() => setModalShow(true)}>
          View Film
        </Button>
      </a>
    </>
  );
};

export default FilmCard;
