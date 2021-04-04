import React from "react";
import { connect, useSelector } from "react-redux";
import { objectReady, parse } from "modules/helpers";
import Summary from "components/Summary";

function BlogContent() {
  const feed = useSelector((state) => state.mediumData);
  const trello = useSelector((state) => state.trelloData);
  const ready = objectReady(trello);
  let content = "placeholder";

  if (ready) {
    trello.pages.cards.map(({ name, desc }) => {
      return name === "Blog" ? content = desc : null;
    });
  }

  return (
    <div className="component-about-content">
      <div className="feed-content__container">
        <div className="feed-content__wrap">
          {parse(content)}
          <Summary feed={feed} type="blog" />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(BlogContent);
