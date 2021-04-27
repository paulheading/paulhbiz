import React from "react";
import { connect, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { useLocation, Link } from "react-router-dom";
import { menuState } from "actions";
import { MobileLogoSvg, DesktopLogoSvg, BurgerSvg } from "components/SvgIcons";
import { is } from "modules/helpers";

function SiteNav({ menuState }) {
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
          { !is.small(siteWidth) && <Link to="/resume" className="link site-nav" variant="link">Resume</Link> }
          { !is.small(siteWidth) && <Link to="/blog" className="link site-nav" variant="link">Blog</Link> }
          { is.small(siteWidth) && <Button className="nav-burger" variant="link" onClick={() => menuState(true)}><BurgerSvg /></Button> }
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { menuState })(SiteNav);
