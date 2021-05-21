import React from "react";
import { connect, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "focus-visible/dist/focus-visible.min.js";

import { test } from "actions";
import { HeroFeed, ScrollToTop, CalcWidth } from "hooks";
import { DesktopNavigation } from "components/Navigation";
import { HeroArea, DesktopArea, TopbarArea } from "components/areas";
import { AboutPage, ArticlePage, ResumePage, NotFound } from "components/pages";
import MarqueeScroll from "components/MarqueeScroll";
import EmailForm from "components/EmailForm";
import FooterArea from "components/FooterArea";

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
      <div className={`component site-wrap ${menuState} ${testMode}`}>
        <DesktopNavigation />
        <HeroFeed />
        <Switch>
          <Route path="/" exact component={HeroArea} />
          <Route path="/about" exact component={AboutPage} />
          {/* <Route path="/blog" exact component={BlogPage} /> */}
          <Route path="/article/:route" exact component={ArticlePage} />
          <Route path="/resume" exact component={ResumePage} />
          <Route component={NotFound} />
        </Switch>
        <MarqueeScroll />
        <TopbarArea />
        <DesktopArea />
        <EmailForm />
        <FooterArea />
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { test })(App);
