import React from "react";
import { connect } from "react-redux";
import { TrelloPage, DesktopCards } from "components/Trello";

function AboutContent() {
  return (
    <div className="component-about-content">
      <div className="feed-content__container">
        <div className="feed-content__wrap">
          <TrelloPage name="About" />
          <div className="container trello-feed">
            <div className="wrap trello-feed">
              <DesktopCards date />
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
