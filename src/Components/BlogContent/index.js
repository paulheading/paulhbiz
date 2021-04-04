import React from "react";
import { connect, useSelector } from "react-redux";
import Summary from "components/Summary";
import { TrelloPage } from "components/Trello";

function BlogContent() {
  const medium = useSelector((state) => state.mediumData);

  return (
    <div className="component-about-content">
      <div className="feed-content__container">
        <div className="feed-content__wrap">
          <TrelloPage name="Blog" />
          <Summary feed={medium} type="blog" />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(BlogContent);
