import React from "react";
import { connect, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "focus-visible/dist/focus-visible.min.js";

import { test } from "actions";
import { HeroFeed, ScrollToTop, CalcWidth } from "hooks";
import HeroContent from "components/HeroContent";
import AboutContent from "components/AboutContent";
import BlogContent from "components/BlogContent";
import ArticleContent from "components/ArticleContent";
import MarqueeScroll from "components/MarqueeScroll";
import DesktopTopbar from "components/DesktopTopbar";
import DesktopArea from "components/DesktopArea";
import EmailForm from "components/EmailForm";
import FooterArea from "components/FooterArea";
import OverlayMenu from "components/OverlayMenu";
import Navigation from "components/Navigation";
import NotFound from "components/NotFound";
import ResumeContent from "components/ResumeContent";

import "./App.scss";

function App({ test }) {
  const store = {
    menu:  useSelector(state => state.menuState),
    test:  useSelector(state => state.test) 
  };

  test(false);

  const menuState = store.menu ? "menu-open" : "menu-closed";
  const testMode = store.test ? "test-mode" : "";

  return (
    <BrowserRouter>
      <CalcWidth />
      <ScrollToTop />
      <OverlayMenu />
      <div className={`component site-wrap ${menuState} ${testMode}`}>
        <Navigation />
        <HeroFeed />
        <Switch>
          <Route path="/" exact component={HeroContent} />
          {/* <Route path="/about" exact component={AboutContent} />
          <Route path="/blog" exact component={BlogContent} />
          <Route path="/blog/:route" exact component={ArticleContent} />
          <Route path="/resume" exact component={ResumeContent} />
          <Route component={NotFound} /> */}
        </Switch>
        <MarqueeScroll />
        <DesktopTopbar />
        <DesktopArea />
        <EmailForm />
        <FooterArea />
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { test })(App);
