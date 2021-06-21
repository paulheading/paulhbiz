import React from "react";
import { useSelector } from "react-redux";
import { DotsSvg, AddCardSvg } from "icons";
import { Card } from "react-bootstrap";
import { DesktopCards } from '../index';

export default function TrelloFeed({ context }) {
  const trello = useSelector((state) => state.trello);
  const placeholder = !trello.ready ? "placeholder" : "";

  return (
    <div className={`container trello-feed ${ context }`}>
      <Card className="trello-wrap">
        <div className="trello-feed header">
          <div className={`title feed-name ${placeholder}`}>Projects</div>
          <DotsSvg />
        </div>
        <DesktopCards />
        <div className="trello-feed footer">
          <div className={`title add-another ${placeholder}`}>+ Add another card</div>
          <AddCardSvg />
        </div>
      </Card>
    </div>
  );
};
