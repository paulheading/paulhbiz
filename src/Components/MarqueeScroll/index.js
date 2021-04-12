import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { objectReady, calcRepeat, parse } from "modules/helpers";
import { countdown, repeat } from "actions";
import { marquee } from "modules/animations";
import temp from "modules/placeholder";

function MarqueeScroll({ countdown, repeat }) {
  const store = {
    trello: useSelector(state => state.trelloData),
    countdown: useSelector(state => state.countdown),
    repeat: useSelector(state => state.repeat),
  };
  const ready = objectReady(store.trello);
  const hero = {};

  hero.feed = ready ? store.trello.projects.cards : temp.trello.projects.cards;
  hero.feed = hero.feed.filter(({ name }) => name.startsWith("Hero: "));
  hero.card = hero.feed[store.countdown];

  useEffect(() => marquee.scroll(), []);
  useEffect(() => marquee.tl.restart(), [store.trello, store.countdown]);
  useEffect(() => {
    let resize;
    repeat(calcRepeat());
    window.addEventListener("resize", () => {
      clearTimeout(resize);
      resize = setTimeout(() => {
        repeat(calcRepeat());
      }, 100);
    });
  }, [repeat]);

  useEffect(() => {
    const speed = 3000;
    if (ready) {
      if (store.countdown > 0) {
        const count = setInterval(() => countdown(store.countdown - 1), speed);
        return () => clearInterval(count);
      } else {
        return setTimeout(() => countdown(hero.feed.length - 1), speed);
      }      
    }
  }, [ready, hero.feed, store.countdown, countdown]);

  function printTitle() {
    const name = hero.card.name.startsWith("Hero: ") ? hero.card.name.replace("Hero: ","") : hero.card.name;
    let items = [];
    
    if (!hero.marquee) {
      hero.marquee = name;
    }

    for (let index = 0; index < store.repeat; index++) {
      items.push(
        <div key={index} className="marquee-scroll__target">
          {parse(hero.marquee)}
        </div>
      );
    }

    return items;
  }

  return (
    <div className="component-marquee-scroll">
      <div className="marquee-link__container">
        { hero.card.link.name === "Read more" ? 
        <Link to={hero.card.link.url} className="marquee-link__wrap">
          {hero.card.link.name}
        </Link> : 
        <a href={hero.card.link.url} className="marquee-link__wrap">
          {hero.card.link.name}
        </a> }
      </div>
      <div className="marquee-scroll__container">
        <div className="marquee-scroll__wrap">{printTitle()}</div>
      </div>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {
  countdown,
  repeat,
})(MarqueeScroll);
