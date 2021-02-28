import React from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { objectReady, parse } from "@/modules/helpers";
import { DotsSvg, AddCardSvg } from "@/components/SvgIcons";

function TrelloFeed() {
  const trello = useSelector((state) => state.trelloData);
  const ready = objectReady(trello);

  function cardPlaceholders(length) {
    let cards = [];
    for (let index = 0; index < length; index++) {
      cards.push(
        <div
          className="trello-feed__card placeholder"
          key={`placeholder-${index}`}
        >
          <div>.</div>
        </div>
      );
    }
    return cards;
  }

  function cardsContent() {
    return trello.projects.cards.map((card, index) => {
      return (
        index < 3 && (
          <Link to="/" className="trello-feed__card" key={card.id}>
            {parse(card.name)}
            {card.attachments.map((item) => {
              return item.name === "Repo" && item.url;
            })}
          </Link>
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
