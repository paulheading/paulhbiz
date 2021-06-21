import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filter, print } from "modules/helpers";
import { Card } from "react-bootstrap";

export default function DesktopCards() {
  const trello = useSelector(state => state.trello);
  const subtitle = <span className="title card-subtitle placeholder">.</span>;

  return filter.out.hero(trello.projects.cards).map((card, index) => {
    const placeholder = card.placeholder ? "placeholder" : "";
    const link = filter.in.more(card.attachments);
    
    return (
      <Card className="trello-desktop" key={`trello-desktop-${index}`}>
        <Link className="link card-name" to={link.url}>
          <span className={`title card-name ${placeholder}`}>{ filter.string(card.name,40) }</span>
        </Link>
        { !trello.ready && subtitle }
        { card.labels && print.labels(card) }
      </Card>
    );
  });  
};
