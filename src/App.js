import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeroContent from "components/HeroContent";
import AboutContent from "components/AboutContent";
import BlogContent from "components/BlogContent";
import MarqueeScroll from "components/MarqueeScroll";
import DesktopArea from "components/DesktopArea";
import EmailForm from "components/EmailForm";
import FooterArea from "components/FooterArea";
import OverlayMenu from "components/OverlayMenu";
import SiteNav from "components/SiteNav";
import NotFound from "components/NotFound";
import ResumeContent from "components/ResumeContent";
import { siteWidth } from "actions";
import { objectReady } from "modules/helpers";
import temp from "modules/placeholder";

import "focus-visible/dist/focus-visible.min.js";
import "./App.scss";

function App({ siteWidth }) {
  const store = { 
    trello: useSelector(state => state.trelloData),
    countdown: useSelector(state => state.countdown),
    menuState: useSelector(state => state.menuState),
  };

  const menuState = store.menuState ? "menu-open" : "menu-closed";
  const ready = objectReady(store.trello);
  const hero = {};

  hero.feed = ready ? store.trello.projects.cards : temp.trello.projects.cards;
  hero.feed = hero.feed.filter(({ name }) => name.startsWith("Hero: "));
  hero.card = hero.feed[store.countdown];

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
      <div className={`component-site-wrap ${menuState} ${hero.card.className}`}>
        <SiteNav />
        <Switch>
          <Route path="/" exact component={HeroContent} />
          <Route path="/about" exact component={AboutContent} />
          <Route path="/blog" exact component={BlogContent} />
          <Route path="/resume" exact component={ResumeContent} />
          <Route path="/404" component={NotFound} />
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
