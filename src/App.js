import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeroContent from "./Components/HeroContent";
import AboutContent from "./Components/AboutContent";
import BlogContent from "./Components/BlogContent";
import MarqueeScroll from "./Components/MarqueeScroll";
import DesktopArea from "./Components/DesktopArea";
import EmailForm from "./Components/EmailForm";
import FooterArea from "./Components/FooterArea";
import OverlayMenu from "./Components/OverlayMenu";
import SiteNav from "./Components/SiteNav";
import NotFound from "./Components/NotFound";
import ResumeContent from "./Components/ResumeContent";
import { getMediumData } from "./modules/medium";
import { getTimezoneData } from "./modules/timezone";
import { getSpotifyData } from "./modules/spotify";
import { getTrelloData } from "./modules/trello";
import { getTreehouseData } from "./modules/treehouse";
import { getGithubData } from "./modules/github";
import {
  treehouseData,
  timezoneData,
  spotifyData,
  mediumData,
  trelloData,
  githubData,
  siteWidth,
} from "./actions";
import { objectReady } from "./modules/helpers";
import { placeholder } from "./modules/placeholder";

import "focus-visible/dist/focus-visible.min.js";
import "./App.scss";

function App({
  treehouseData,
  timezoneData,
  spotifyData,
  mediumData,
  trelloData,
  githubData,
  siteWidth,
}) {
  useEffect(() => {
    (async () => {
      treehouseData(await getTreehouseData());
      timezoneData(await getTimezoneData());
      spotifyData(await getSpotifyData());
      mediumData(await getMediumData());
      trelloData(await getTrelloData());
      githubData(await getGithubData());
    })();
  }, [
    treehouseData,
    timezoneData,
    spotifyData,
    mediumData,
    trelloData,
    githubData,
  ]);

  useEffect(() => {
    setInterval(async () => {
      timezoneData(await getTimezoneData());
    }, 60000);
  }, [timezoneData]);

  useEffect(() => {
    let resize;
    siteWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      clearTimeout(resize);
      resize = setTimeout(() => {
        siteWidth(window.innerWidth);
      }, 100);
    });
  }, [siteWidth]);

  const store = {
    trelloData: useSelector((state) => state.trelloData),
    menuState: useSelector((state) => state.menuState),
    countdown: useSelector((state) => state.countdown),
  };

  const ready = objectReady(store.trelloData);
  const hero = ready
    ? store.trelloData.hero.cards[store.countdown]
    : placeholder;

  function menuState() {
    return store.menuState ? "menu-open" : "menu-closed";
  }

  return (
    <BrowserRouter>
      <OverlayMenu />
      <div className={`component-site-wrap ${menuState()} ${hero.className}`}>
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

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  treehouseData,
  timezoneData,
  spotifyData,
  mediumData,
  trelloData,
  githubData,
  siteWidth,
})(App);
