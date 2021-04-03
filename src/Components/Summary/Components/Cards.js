import React from "react";
import { Badge } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { handleDate } from "modules/helpers";
import { RightArrowSvg } from "components/SvgIcons";

export default function SummaryCards({ card, type }) {
  type = card.placeholder ? "placeholder" : type;

  console.log("card: ", card);

  function ifLink() {
    let liveUrl = false;
    // check attachments for a live link
    if (card.attachments) {
      card.attachments.map(item => {
        if (item.name === "Live") {
          // set live link if "Live" name found
          liveUrl = item.url;
        }
      });
    }
    // if live link is available
    if (liveUrl) {
      return (
        <a href={liveUrl} className="summary-link">
          {body}
        </a>
      );
    }
    // else don't wrap the body in a link
    return body;
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
      {card.labels && (
        <span className="summary__column labels">
          {printLabels(card.labels)}
        </span>
      )}
      <div className={`summary-name ${type}`}>
        <div className={`summary-title ${type}`}>{card.title}</div>
        {card.attachments && card.attachments.map(({ name }) => name)}
        {card.date && (
          <div className="summary-date">{handleDate.short(card.date)}</div>
        )}
      </div>
      {card.link && <RightArrowSvg />}
    </Card.Body>
  );

  return <Card className={`summary ${type}`}>{ifLink()}</Card>;
}
