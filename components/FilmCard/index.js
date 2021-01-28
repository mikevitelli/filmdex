import styles from "../../styles/Home.module.css";
import Image from "next/image";
import React, { useState } from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";

// MODAL
function FilmModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Container>
        <Row>
          <Col style={{ paddingTop: "15px", paddingBottom: "15px" }}>
            <p>Hello</p>
          </Col>
        </Row>
      </Container>
    </Modal>
  );
}

// CARD
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
        <h3>Title</h3>
        <h2>Description</h2>
        <Button variant="outline-secondary" onClick={() => setModalShow(true)}>
          View Film
        </Button>
      </a>
    </>
  );
};

export default FilmCard;
