import React, { useEffect } from "react";
import { connect } from "react-redux";
import { TrelloPage } from "components/Trello";
import getMediumData from "modules/medium";
import { mediumData } from "actions";

function BlogContent({mediumData}) {
  useEffect(() => {
    (async () => mediumData(await getMediumData()))();
  }, [mediumData]);

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

export default connect(mapStateToProps,{mediumData})(BlogContent);
