import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function NameRow() {
  return (
    <Container className="page-row">
      <Row>
        <Col sm={8}>
          <h1 className="title resume-row">Paul Heading</h1>
        </Col>
        <Col sm={4}>
          <div className="address resume-row">Hackney, London</div>
          <a className="link resume-row" href="mailto:hello@paulh.biz?subject=Hello!">hello@paulh.biz</a>
        </Col>
      </Row>
    </Container>
  );
}