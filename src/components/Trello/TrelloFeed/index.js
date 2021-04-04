import React from "react";
import { connect, useSelector } from "react-redux";
import { objectReady } from "modules/helpers";
import { DotsSvg, AddCardSvg } from "components/SvgIcons";
import { Card } from "react-bootstrap";
import { TrelloCards } from '../index';

function TrelloFeed() {
  const trello = useSelector((state) => state.trelloData);
  const ready = objectReady(trello);

  return (
    <div className="container trello-feed">
      <Card className="trello-wrap">
        <div className="trello-feed header">
          <div className={`trello-feed header-title ${!ready && "placeholder"}`}>
            {ready ? trello.projects.info.name : "."}
          </div>
          <DotsSvg />
        </div>
        <TrelloCards />
        <div className="trello-feed footer">
          <div className={`trello-feed add-another ${!ready && "placeholder"}`}>
            {ready ? "+ Add another card" : "."}
          </div>
          <AddCardSvg />
        </div>
      </Card>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(TrelloFeed);
