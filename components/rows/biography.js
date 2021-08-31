import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TrelloPage, SocialRow } from "components";

export default function BiographyRow() {
  return (
    <Container className="page-row">
      <Row className="page-row">
        <Col className="resume-biography">
          <TrelloPage name="Biography" />
        </Col>
        <Col className="resume-social">
          <SocialRow url="https://github.com/paulheading" title="Github" />
          <SocialRow url="https://blog.paulh.biz/" title="Medium" />
          <SocialRow url="https://teamtreehouse.com/paulheading" title="Treehouse" />
        </Col>
      </Row>
    </Container>
  );
}
