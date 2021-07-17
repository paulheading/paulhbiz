import { Container, Row, Col } from "react-bootstrap";

export default function NameRow() {
  return (
    <Container className="page-row">
      <Row className="page-row">
        <Col className="resume-name">
          <h1 className="title resume-row">Paul Heading</h1>
        </Col>
        <Col className="resume-address">
          <div className="address resume-row">Hackney, London</div>
          <a className="link resume-row" href="mailto:hello@paulh.biz?subject=Hello!">hello@paulh.biz</a>
        </Col>
      </Row>
    </Container>
  );
}
