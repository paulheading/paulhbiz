import React from "react";
import { connect, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "focus-visible/dist/focus-visible.min.js";

import { test } from "actions";
import { HeroFeed, ScrollToTop, CalcWidth } from "hooks";
import { HeroSection, DesktopSection, TopbarSection, DesktopNavigation, MarqueeSection, FooterSection } from "sections";
import { AboutPage, ArticlePage, ResumePage, NotFound } from "pages";
import EmailForm from "components/EmailForm";

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
          <Route path="/" exact component={HeroSection} />
          <Route path="/about" exact component={AboutPage} />
          {/* <Route path="/blog" exact component={BlogPage} /> */}
          <Route path="/article/:route" exact component={ArticlePage} />
          <Route path="/resume" exact component={ResumePage} />
          <Route component={NotFound} />
        </Switch>
        <MarqueeSection />
        <TopbarSection />
        <DesktopSection />
        <EmailForm />
        <FooterSection />
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { test })(App);
