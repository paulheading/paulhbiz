import React from "react";
import { connect, useSelector } from "react-redux";
import { objectReady, parse } from "modules/helpers";
import { DotsSvg, AddCardSvg } from "components/SvgIcons";
import { Badge, Card } from "react-bootstrap";

function TrelloFeed() {
  const trello = useSelector((state) => state.trelloData);
  const ready = objectReady(trello);

  function cardPlaceholders(length) {
    let cards = [];
    for (let index = 0; index < length; index++) {
      cards.push(<div className="trello-feed card placeholder" key={`placeholder-${index}`}><div>.</div></div>);
    }
    return cards;
  }

  function cardContents() {
    return trello.projects.cards.map((card, index) => {
      const liveUrl = card.attachments.map(item => item.name === "Live" && item.url)[0];

      return (
        index < 3 && (
          <Card className="trello-feed" key={card.id}>
            <a href={liveUrl ? liveUrl : '#'}>
              {parse(card.name)}
            </a>
            {card.attachments.map((item,index) => {
              return item.name === "Code" && <Badge key={`repo-${index}`}><a href={item.url}>code</a></Badge>;
            })}
          </Card>
        )
      );
    });
  }

  return (
    <div className="trello-container">
      <Card className="trello-wrap">
        <div className="trello-feed header">
          <div className={`trello-feed header-title ${!ready && "placeholder"}`}>
            {ready ? trello.projects.info.name : "."}
          </div>
          <DotsSvg />
        </div>
        {ready ? cardContents() : cardPlaceholders(3)}
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
