import React from "react";
import { connect, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { useLocation, Link } from "react-router-dom";
import { menuState } from "../../actions";
import { MobileLogoSvg, LogoSvg, BurgerSvg } from "../SvgIcons";
import { isHome, isSmall } from "../../modules/helpers";

function SiteNav({ menuState }) {
  const path = useLocation().pathname;

  const store = {
    siteWidth: useSelector((state) => state.siteWidth),
  };

  return (
    <div className={`site-nav__container ${isHome(path)}`}>
      <div className="site-nav__wrap">
        <div className="site-nav__logo">
          <Link to="/" className="site-nav__anchor home btn btn-link">
            {isSmall(store.siteWidth) ? <MobileLogoSvg /> : <LogoSvg />}
          </Link>
        </div>
        <div className="site-nav__block">
          <div className="site-nav__about">
            <Link to="/about" className="site-nav__anchor btn btn-dark">
              About
            </Link>
          </div>
          <Button
            className="site-nav__anchor"
            variant="link"
            onClick={() => {
              menuState(true);
            }}
          >
            {isSmall(store.siteWidth) ? <BurgerSvg /> : "Menu"}
          </Button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  menuState,
})(SiteNav);
