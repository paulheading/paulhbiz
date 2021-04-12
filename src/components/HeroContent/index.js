import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { objectReady, parse } from "modules/helpers";
import temp from "modules/placeholder";

function HeroContent() {
  const store = {
    trello: useSelector(state => state.trelloData),
    countdown: useSelector(state => state.countdown),
  };
  const ready = objectReady(store.trello);
  const hero = {};

  hero.feed = ready ? store.trello.projects.cards : temp.trello.projects.cards;
  hero.feed = hero.feed.filter(({ name }) => name.startsWith("Hero: "));
  hero.card = hero.feed[store.countdown];

  useEffect(() => {
    hero.card.animation();
  }, [hero.card]);

  function ifHeroName(name, link) {
    name = name.startsWith("Hero: ") ? name.replace("Hero: ","") : name;
    
    return (
      <h1 className="hero-content__title">
        <Link to={link.url}>{parse(name)}</Link>
      </h1>
    );
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
            {ifHeroName(hero.card.name, hero.card.link)}
            {ifHeroSvg(hero.card.svg)}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(HeroContent);
