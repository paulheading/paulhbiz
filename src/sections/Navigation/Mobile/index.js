import React from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { menuState } from "actions";
import { ExitSvg } from "icons";

function MobileDesktopNavigation({ menuState }) {
  const store = { menuState: useSelector(state => state.menuState) };

  return (
    store.menuState && (
      <div className="component overlay-content">
        <div className="wrap overlay-content" onClick={() => menuState(false)}>
          <Button variant="link"><ExitSvg /></Button>
          <Link to="/resume">Resume</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </div>
    )
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { menuState })(MobileDesktopNavigation);
