import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeroContent from "./Components/HeroContent/HeroContent";
import AboutContent from "./Components/AboutContent/AboutContent";
import BlogContent from "./Components/BlogContent/BlogContent";
import ArticleContent from "./Components/ArticleContent/ArticleContent";
import MarqueeScroll from "./Components/MarqueeScroll/MarqueeScroll";
import DesktopArea from "./Components/DesktopArea/DesktopArea";
import EmailForm from "./Components/EmailForm/EmailForm";
import FooterArea from "./Components/FooterArea/FooterArea";
import OverlayMenu from "./Components/OverlayMenu/OverlayMenu";
import SiteNav from "./Components/SiteNav/SiteNav";
import NotFound from "./Components/NotFound/NotFound";
import ResumeContent from "./Components/ResumeContent/ResumeContent";
import { getMediumData } from "./modules/medium";
import { getTimezoneData } from "./modules/timezone";
import { getSpotifyData } from "./modules/spotify";
import { getTrelloData } from "./modules/trello/get";
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
import { printHero } from "./modules/trello/print";
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

  function menuState() {
    return store.menuState ? "menu-open" : "menu-closed";
  }

  return (
    <BrowserRouter>
      <OverlayMenu />
      <div
        className={`component-site-wrap ${menuState()} ${printHero.class(
          store.trelloData,
          store.countdown
        )}`}
      >
        <SiteNav />
        <Switch>
          <Route path="/" exact component={HeroContent} />
          <Route path="/about" exact component={AboutContent} />
          <Route path="/blog" exact component={BlogContent} />
          <Route path="/resume" exact component={ResumeContent} />
          <Route path="/blog/:articleId" component={ArticleContent} />
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
