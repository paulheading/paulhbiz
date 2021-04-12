import React from "react";
import { connect } from "react-redux";
import { TrelloPage } from "components/Trello";

function BlogContent() {
  return (
    <div className="component-about-content">
      <div className="container feed-content">
        <div className="wrap feed-content">
          <TrelloPage name="Blog" />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(BlogContent);
