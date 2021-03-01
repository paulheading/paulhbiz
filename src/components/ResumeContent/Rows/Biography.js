import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function BiographyRow() {
  return (
    <Container className="page-row">
      <Row>
        <Col sm={8}>
          <h2 className="column__title">Biography</h2>
          <div className="column__copy">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut
            ultrices ante.
          </div>
        </Col>
        <Col sm={4}>
          <a className="link__social" href="https://github.com/paulheading">
            Github
          </a>
          <a className="link__social" href="https://paulheading.medium.com/">
            Medium
          </a>
          <a
            className="link__social"
            href="https://teamtreehouse.com/paulheading"
          >
            Treehouse
          </a>
        </Col>
      </Row>
    </Container>
  );
}
