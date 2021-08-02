import React from "react";
import { useSelector } from "react-redux";
import { DotsIcon, AddCardIcon } from "icons";
import { Card } from "react-bootstrap";
import { DesktopCards } from 'components';

export default function TrelloFeed() {
  const trello = useSelector(({ trello }) => trello);
  const placeholder = !trello.ready ? "placeholder" : "";

  return (
    <div className="component trello-feed" id="trello-feed">
      <Card className="trello-wrap">
        <div className="header trello-feed">
          <div className={`title feed-name ${placeholder}`}>Projects</div>
          <DotsIcon />
        </div>
        <DesktopCards />
        <div className="trello-feed footer">
          <div className={`title add-another ${placeholder}`}>+ Add another card</div>
          <AddCardIcon />
        </div>
      </Card>
    </div>
  );
};
