import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { menuState } from "actions";
import { ExitSvg } from "icons";

export default function MobileDesktopNavigation() {
  const store = { menuState: useSelector(state => state.menuState) };
  const write = useDispatch();

  return (
    store.menuState && (
      <div className="component overlay-content">
        <div className="wrap overlay-content" onClick={() => write(menuState(false))}>
          <Button variant="link"><ExitSvg /></Button>
          <Link to="/resume">Resume</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </div>
    )
  );
};
