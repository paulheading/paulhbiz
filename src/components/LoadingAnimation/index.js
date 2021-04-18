import React from "react";
import { connect } from "react-redux";

function LoadingAnimation() {
  return (
    <div className="component-loading-animation">
      <div className="loading-wrap">
        <div className="loading-icon"></div>
        <div className="loading-icon"></div>
        <div className="loading-icon"></div>
        <div className="loading-icon"></div>
        <div className="loading-icon"></div>
        <div className="loading-icon"></div>
      </div>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(LoadingAnimation);
