import React from "react";
import { connect, useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { menuState } from "actions";
import { MobileLogoSvg, DesktopLogoSvg, BurgerSvg } from "components/SvgIcons";
import { is } from "modules/helpers";

function Navigation({ menuState }) {
  const path = useLocation().pathname;
  const siteWidth = useSelector(state => state.siteWidth);

  return (
    <div className={`container site-nav ${is.home(path)}`}>
      <div className="wrap site-nav">
        <div className="wrap nav-logo">
          <Link to="/" className="link nav-logo">{ is.small(siteWidth) ? <MobileLogoSvg /> : <DesktopLogoSvg /> }</Link>
        </div>
        <div className="wrap nav-links">
          <Link to="/about" className="link nav-button">About</Link>
          { !is.small(siteWidth) && <Link to="/resume" className="link site-nav">Resume</Link> }
          { !is.small(siteWidth) && <Link to="/blog" className="link site-nav">Blog</Link> }
          { is.small(siteWidth)  && <Button className="nav-burger" variant="link" onClick={() => menuState(true)}><BurgerSvg /></Button> }
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { menuState })(Navigation);