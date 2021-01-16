import { objectReady, linkBadges, handleDate, parse } from "../../helpers";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function resumeComponent(trello, list, title) {
  if (!objectReady(trello)) {
    return (
      <Container className="page-row">
        <Row>
          <Col sm={12}>
            <h2 className="column__title placeholder">.</h2>
          </Col>
          {placeholder()}
          {placeholder()}
          {placeholder()}
        </Row>
      </Container>
    );
  } else {
    return (
      <Container className="page-row">
        <Row>
          <Col sm={12}>
            <h2 className="column__title">{title}</h2>
          </Col>
          {cards(list)}
        </Row>
      </Container>
    );
  }
}

function placeholder() {
  return (
    <Col sm={4}>
      <div className="card__badge placeholder">.</div>
      <div className="card__name placeholder">.</div>
      <div className="card__description placeholder">.</div>
    </Col>
  );
}

function cards(trello) {
  return trello.cards.map((card, index) => {
    if (index < 3) {
      return (
        <Col sm={4} key={card.id}>
          {linkBadges(card)}
          <div className="card__name">
            <span className="card__title">{card.name}</span>
            <span className="card__due">{handleDate.short(card.due)}</span>
          </div>
          <div className="card__description">{parse(card.desc)}</div>
        </Col>
      );
    } else {
      return null;
    }
  });
}
