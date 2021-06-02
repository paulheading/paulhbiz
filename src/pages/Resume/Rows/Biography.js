import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TrelloPage } from "components/Trello";

export default function BiographyRow() {
  return (
    <Container className="page-row">
      <Row>
        <Col sm={8}>
          <TrelloPage name="Biography" />
        </Col>
        <Col sm={4}>
          <a className="link social" href="https://github.com/paulheading">Github</a>
          {/* <a className="link social" href="https://paulheading.medium.com/">Medium</a> */}
          <a className="link social" href="https://teamtreehouse.com/paulheading">Treehouse</a>
        </Col>
      </Row>
    </Container>
  );
}
