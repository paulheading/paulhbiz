import React from "react";
import { connect } from "react-redux";

function NotFound() {
  return (
    <div className="component-not-found">
      <div className="feed-content__container">
        <div className="feed-content__wrap">
          <h1 className="feed-content__title">Page Not Found 🤬</h1>
          <h5 className="feed-content__subtitle">uh oh! where da page gone?</h5>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(NotFound);
