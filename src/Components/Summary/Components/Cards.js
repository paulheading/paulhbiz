import React from "react";
import { Badge } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { handleDate } from "../../../modules/helpers";
import { RightArrowSvg } from "../../SvgIcons";

export default function SummaryCards({ card, type }) {
  type = card.placeholder ? "placeholder" : type;

  function ifLink() {
    if (card.link) {
      return (
        <a href={card.link} className="summary-link">
          {body}
        </a>
      );
    } else {
      return body;
    }
  }

  function printLabels(labels) {
    if (labels.length > 0) {
      return labels.map((label) => {
        return (
          <Badge key={label.id} className={label.color}>
            {label.name}
          </Badge>
        );
      });
    } else {
      return <Badge>Personal</Badge>;
    }
  }

  const body = (
    <Card.Body className={type}>
      {card.labels ? (
        <span className="summary__column labels">
          {printLabels(card.labels)}
        </span>
      ) : null}
      <div className={`summary-name ${type}`}>
        <div className={`summary-title ${type}`}>{card.title}</div>
        {card.date ? (
          <div className="summary-date">{handleDate.short(card.date)}</div>
        ) : null}
      </div>
      {card.link ? <RightArrowSvg /> : null}
    </Card.Body>
  );

  return <Card className={`summary ${type}`}>{ifLink()}</Card>;
}
