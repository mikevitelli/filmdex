import { Modal, Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

const FilmModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Container className={styles.filmContainer}>
        <Row>
          <Col className={styles.filmCol}>
            <Image src={props.staticImageUrl} width={200} height={200} />
            <h4>{props.brand}</h4>
            <h1>{props.name}</h1>
            <p>ISO: {props.iso}</p>
            <p>{props.description}</p>
          </Col>
        </Row>
      </Container>
    </Modal>
  );
};

export default FilmModal;
