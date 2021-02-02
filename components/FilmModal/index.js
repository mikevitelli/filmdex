import { Modal, Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

const FilmModal = (props) => {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Container className={styles.filmContainer}>
        <Row>
          <Col className={styles.filmCol}>
            <Image src="/film_guy512.png" width={200} height={200} />
            <h3>brand</h3>
            <h2>name</h2>
          </Col>
        </Row>
      </Container>
    </Modal>
  );
};

export default FilmModal;
