import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
// import { menuState } from "actions";
import { MobileLogoSvg, DesktopLogoSvg } from "icons";
import { is } from "modules/helpers";

export default function DesktopNavigation() {
  const path = useLocation().pathname;
  const siteWidth = useSelector(state => state.siteWidth);
  // const write = useDispatch();

  return (
    <div className={`container site-nav ${is.home(path)}`}>
      <div className="wrap site-nav">
        <div className="wrap nav-logo">
          <Link to="/" className="link nav-logo">{ is.small(siteWidth) ? <MobileLogoSvg /> : <DesktopLogoSvg /> }</Link>
        </div>
        <div className="wrap nav-links">
          <Link to="/about" className="link nav-button">About</Link>
          <Link to="/resume" className="link site-nav">Resume</Link>
          {/* { !is.small(siteWidth) && <Link to="/blog" className="link site-nav">Blog</Link> } */}
          {/* { is.small(siteWidth)  && <Button className="nav-burger" variant="link" onClick={() => menuState(true)}><BurgerSvg /></Button> } */}
        </div>
      </div>
    </div>
  );
};