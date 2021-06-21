import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TrelloPage } from "components/Trello";

export default function BiographyRow() {
  return (
    <Container className="page-row">
      <Row className="page-row">
        <Col className="resume-biography">
          <TrelloPage name="Biography" />
        </Col>
        <Col className="resume-social">
          <a className="link social" href="https://github.com/paulheading">Github</a>
          <a className="link social" href="https://teamtreehouse.com/paulheading">Treehouse</a>
        </Col>
      </Row>
    </Container>
  );
}
