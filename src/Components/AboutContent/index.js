import React from "react";
import { connect, useSelector } from "react-redux";
import { objectReady, parse } from "modules/helpers";
import { TrelloCards } from "components/Trello";

function AboutContent() {
  const trello = useSelector((state) => state.trelloData);
  const ready = objectReady(trello);
  let content = "placeholder";

  if (ready) {
    trello.pages.cards.map(({ name, desc }) => {
      return name === "About" ? content = desc : null;
    });
  }

  return (
    <div className="component-about-content">
      <div className="feed-content__container">
        <div className="feed-content__wrap">
          {parse(content)}
          <div className="container trello-feed">
            <div className="wrap trello-feed">
              <TrelloCards date />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(AboutContent);
