import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "focus-visible/dist/focus-visible.min.js";

import { HeroFeed, ScrollToTop, CalcWidth } from "hooks";
import { HeroSection, DesktopSection, TopbarSection, DesktopNavigation, MarqueeSection, FooterSection } from "sections";
import { AboutPage, ArticlePage, ResumePage, NotFound } from "pages";
import EmailForm from "components/EmailForm";
import { test } from "actions";

import "./App.scss";

export default function App() {
  const write = useDispatch();

  const store = {
    menu:  useSelector(state => state.menuState),
    test:  useSelector(state => state.test) 
  };
  
  const routes = [
    { path: "/", component: HeroSection, exact: true },
    { path: "/about", component: AboutPage, exact: true },
    { path: "/resume", component: ResumePage, exact: true },
    { path: "/article/projects/:route", component: ArticlePage },
    { path: "/article/roles/:route", component: ArticlePage },
    { path: "/article/education/:route", component: ArticlePage },
    { component: NotFound }
  ];

  write(test(false));

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
          { routes.map((route, index) => (<Route key={index} { ...route} />)) }
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
