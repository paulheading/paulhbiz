import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactGA from 'react-ga';
import "focus-visible/dist/focus-visible.min.js";

import HeroContent from "components/HeroContent";
import AboutContent from "components/AboutContent";
import BlogContent from "components/BlogContent";
import ArticleContent from "components/ArticleContent";
import MarqueeScroll from "components/MarqueeScroll";
import DesktopArea from "components/DesktopArea";
import EmailForm from "components/EmailForm";
import FooterArea from "components/FooterArea";
import OverlayMenu from "components/OverlayMenu";
import SiteNav from "components/SiteNav";
import NotFound from "components/NotFound";
import ResumeContent from "components/ResumeContent";
import { siteWidth } from "actions";

import "./App.scss";

ReactGA.initialize('UA-57002736-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App({ siteWidth }) {
  const menuState = useSelector(state => state.menuState) ? "menu-open" : "menu-closed";

  useEffect(() => {
    let resize;
    siteWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      clearTimeout(resize);
      resize = setTimeout(() => siteWidth(window.innerWidth), 100);
    });
  }, [siteWidth]);

  return (
    <BrowserRouter>
      <OverlayMenu />
      <div className={`component-site-wrap ${menuState}`}>
        <SiteNav />
        <Switch>
          <Route path="/" exact component={HeroContent} />
          <Route path="/about" exact component={AboutContent} />
          <Route path="/blog" exact component={BlogContent} />
          <Route path="/blog/:route" exact component={ArticleContent} />
          <Route path="/resume" exact component={ResumeContent} />
          <Route component={NotFound} />
        </Switch>
        <MarqueeScroll />
        <DesktopArea />
        <EmailForm />
        <FooterArea />
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { siteWidth })(App);
