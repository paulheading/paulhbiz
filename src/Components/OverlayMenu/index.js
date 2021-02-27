import React from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { menuState } from "@/actions";
import { ExitSvg } from "@/components/SvgIcons";
import { marquee } from "@/modules/animations";

function OverlayMenu({ menuState }) {
  const store = {
    trelloData: useSelector((state) => state.trelloData),
    countdown: useSelector((state) => state.countdown),
    menuState: useSelector((state) => state.menuState),
  };
  return store.menuState ? (
    <div className="overlay-content__container">
      <div
        className="overlay-content__wrap"
        onClick={() => {
          menuState(false);
        }}
      >
        <div className="overlay-content__row">
          <Button variant="link">
            <ExitSvg />
          </Button>
        </div>
        <div className="overlay-content__row">
          <Link
            onClick={() => {
              marquee.scroll();
            }}
            to="/resume"
          >
            Resume
          </Link>
        </div>
        <div className="overlay-content__row">
          <Link to="/blog">Blog</Link>
        </div>
      </div>
    </div>
  ) : null;
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  menuState,
})(OverlayMenu);
