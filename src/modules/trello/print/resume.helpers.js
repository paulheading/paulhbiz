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
            <h3 className="column__title placeholder">.</h3>
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
            <h3 className="column__title">{title}</h3>
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
            {card.name}&nbsp;
            {certificateDate(card.due)}
          </div>
          <div className="card__description">{parse(card.desc)}</div>
        </Col>
      );
    } else {
      return null;
    }
  });
}

function certificateDate(date) {
  date = handleDate(date);

  if (date === "Coming Soon") {
    return <span className="card__due">{`(${date})`}</span>;
  } else {
    date = date.split(" ");
    return (
      <span className="card__due">{`(${parse(date[1])} ${parse(
        date[3]
      )})`}</span>
    );
  }
}
