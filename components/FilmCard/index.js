import styles from "../../styles/Home.module.css";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import FilmModal from "../FilmModal";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const FilmCard = (props) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
        <div className={styles.card}>
          <FilmModal
            {...props}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          <a key={props._id}>
            <Image
              src={props.staticImageUrl}
              alt={props.name}
              width={200}
              height={200}
            />
            <div className={styles.filmDesc}>
              <h2>{props.brand}</h2>

              <h3>{props.name}</h3>
            </div>
            <br></br>
            <Button
              variant="outline-secondary"
              onClick={() => setModalShow(true)}
            >
              View Film
            </Button>
          </a>
        </div>
      </Grid>
    </>
  );
};

export default FilmCard;
