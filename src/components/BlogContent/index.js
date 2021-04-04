import React from "react";
import { connect } from "react-redux";
import { TrelloPage } from "components/Trello";

function BlogContent() {
  return (
    <div className="component-about-content">
      <div className="feed-content__container">
        <div className="feed-content__wrap">
          <TrelloPage name="Blog" />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(BlogContent);
