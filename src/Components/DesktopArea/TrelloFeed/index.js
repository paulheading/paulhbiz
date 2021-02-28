import React from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { objectReady, parse } from "modules/helpers";
import { DotsSvg, AddCardSvg } from "components/SvgIcons";
import { Badge, Card } from "react-bootstrap";

function TrelloFeed() {
  const trello = useSelector((state) => state.trelloData);
  const ready = objectReady(trello);

  function cardPlaceholders(length) {
    let cards = [];
    for (let index = 0; index < length; index++) {
      cards.push(<div className="trello-feed__card placeholder" key={`placeholder-${index}`}><div>.</div></div>);
    }
    return cards;
  }

  function cardsContent() {
    return trello.projects.cards.map((card, index) => {
      return (
        index < 3 && (
          <Card className="trello-feed__card" key={card.id}>
            <Link to="/">{parse(card.name)}</Link>
            {card.attachments.map((item,index) => {
              return item.name === "Repo" && <Badge key={`repo-${index}`}><a href={item.url}>code</a></Badge>;
            })}
          </Card>
        )
      );
    });
  }

  return (
    <div className="window__container trello">
      <div className="window__wrap trello">
        <div className="trello-feed__header">
          <div className={`trello-feed__title ${!ready && "placeholder"}`}>
            {ready ? trello.projects.info.name : "."}
          </div>
          <DotsSvg />
        </div>
        {ready ? cardsContent() : cardPlaceholders(3)}
        <div className="trello-feed__footer">
          <div
            className={`trello-feed__add-another ${!ready && "placeholder"}`}
          >
            {ready ? "+ Add another card" : "."}
          </div>
          <AddCardSvg />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(TrelloFeed);
