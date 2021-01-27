import { Container, Row, Col } from "react-bootstrap";

const Wrapper = (props) => {
  return (
    <>
      <Container>
        <Row>
          <Col>{props.children}</Col>
        </Row>
      </Container>
    </>
  );
};

export default Wrapper;
