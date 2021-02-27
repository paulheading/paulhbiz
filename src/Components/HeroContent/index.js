import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { objectReady, parse } from "@/modules/helpers";
import { placeholder } from "@/modules/placeholder";

function HeroContent() {
  const store = {
    trelloData: useSelector((state) => state.trelloData),
    countdown: useSelector((state) => state.countdown),
  };
  const ready = objectReady(store.trelloData);
  const feed = ready
    ? store.trelloData.hero.cards[store.countdown]
    : placeholder;

  useEffect(() => {
    feed.animation();
  }, [feed, store.trelloData, store.countdown]);

  function ifHeroName(name, link) {
    if (name) {
      return (
        <h1 className="hero-content__title">
          <Link to={link.url}>{parse(name)}</Link>
        </h1>
      );
    }
  }

  function ifHeroSvg(svg) {
    if (svg) {
      return <div className="hero-content__svg">{parse(svg)}</div>;
    }
  }

  return (
    <div className="component-hero-content">
      <div className="hero-content__container">
        <div className="hero-content__wrap">
          <div>
            {ifHeroName(feed.name, feed.link)}
            {ifHeroSvg(feed.svg)}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(HeroContent);
