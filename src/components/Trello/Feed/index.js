import React from "react";
import { useSelector } from "react-redux";
import { DotsSvg, AddCardSvg } from "icons";
import { Card } from "react-bootstrap";
import { DesktopCards } from '../index';

export default function TrelloFeed({ context, dates }) {
  const trello = useSelector((state) => state.trello);
  const ready = trello.ready;

  return (
    <div className={`container trello-feed ${ context }`}>
      <Card className="trello-wrap">
        <div className="trello-feed header">
          <div className={`trello-feed header-title ${!ready && "placeholder"}`}>
            {ready ? trello.projects.info.name : "."}
          </div>
          <DotsSvg />
        </div>
        <DesktopCards dates={dates} />
        <div className="trello-feed footer">
          <div className={`trello-feed add-another ${!ready && "placeholder"}`}>
            {ready ? "+ Add another card" : "."}
          </div>
          <AddCardSvg />
        </div>
      </Card>
    </div>
  );
};
