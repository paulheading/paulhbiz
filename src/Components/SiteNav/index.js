import React from "react";
import { connect, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { useLocation, Link } from "react-router-dom";
import { menuState } from "actions";
import {
  MobileLogoSvg,
  DesktopLogoSvg,
  BurgerSvg,
} from "components/SvgIcons";
import { is } from "modules/helpers";

function SiteNav({ menuState }) {
  const path = useLocation().pathname;

  const store = {
    siteWidth: useSelector((state) => state.siteWidth),
  };

  return (
    <div className={`container site-nav ${is.home(path)}`}>
      <div className="wrap site-nav">
        <div className="logo site-nav">
          <Link to="/" className="link site-nav home btn btn-link">
            {is.small(store.siteWidth) ? <MobileLogoSvg /> : <DesktopLogoSvg />}
          </Link>
        </div>
        <div className="block site-nav">
          <div className="about site-nav">
            <Link to="/about" className="link site-nav btn btn-dark">
              About
            </Link>
          </div>
          <Button
            className="link site-nav"
            variant="link"
            onClick={() => {
              menuState(true);
            }}
          >
            {is.small(store.siteWidth) ? <BurgerSvg /> : "Menu"}
          </Button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {
  menuState,
})(SiteNav);
