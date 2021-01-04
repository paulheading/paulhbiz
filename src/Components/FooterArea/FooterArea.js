import React from "react";
import { connect } from "react-redux";

function FooterArea() {
  return (
    <div className="component-footer-area">
      <div className="footer-area__container">
        <span>Say hello :)</span>
        <a className="footer-area__anchor" href="mailto:hello@paulh.biz">
          hello@paulh.biz
        </a>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(FooterArea);
