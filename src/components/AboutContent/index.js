import React from "react";
import { connect } from "react-redux";
import { TrelloPage, DesktopCards } from "components/Trello";

function AboutContent() {
  return (
    <div className="component-about-content">
      <div className="container feed-content">
        <div className="wrap feed-content">
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

const mapStateToProps = state => state;

export default connect(mapStateToProps)(AboutContent);
