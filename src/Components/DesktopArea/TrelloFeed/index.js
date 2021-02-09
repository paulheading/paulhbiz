import React from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { objectReady, parse } from "../../../modules/helpers";
import { DotsSvg, AddCardSvg } from "../../../Components/SvgIcons";

function TrelloFeed() {
  const trello = useSelector((state) => state.trelloData);
  const ready = objectReady(trello);

  function placeholder() {
    return (
      <div className="trello__card placeholder">
        <div>.</div>
      </div>
    );
  }

  function cardsPlaceholder() {
    return (
      <div>
        {placeholder()}
        {placeholder()}
        {placeholder()}
      </div>
    );
  }

  function cardsContent() {
    return trello.projects.cards.map((card, index) => {
      return index < 3 ? (
        <Link to="/" className="trello__card" key={card.id}>
          {parse(card.name)}
        </Link>
      ) : null;
    });
  }

  return (
    <div className="window__container">
      <div className="window__wrap trello">
        <div className="trello__header">
          <div className={`trello__title ${ready ? "" : "placeholder"}`}>
            {ready ? trello.projects.info.name : "."}
          </div>
          <DotsSvg />
        </div>
        {ready ? cardsContent() : cardsPlaceholder()}
        <div className="trello__footer">
          <div className={`trello__add-another ${ready ? "" : "placeholder"}`}>
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