import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { objectReady, calcRepeat, parse } from "modules/helpers";
import { countdown, repeat } from "actions";
import { marquee } from "modules/animations";
import { placeholder } from "modules/placeholder";

function MarqueeScroll({ countdown, repeat }) {
  const store = {
    trelloData: useSelector((state) => state.trelloData),
    countdown: useSelector((state) => state.countdown),
    repeat: useSelector((state) => state.repeat),
  };
  const ready = objectReady(store.trelloData);
  const feed = ready ? store.trelloData.hero.cards[store.countdown] : placeholder;

  useEffect(() => marquee.scroll(), []);
  useEffect(() => marquee.tl.restart(), [store.trelloData, store.countdown]);
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
        return setTimeout(() => countdown(store.trelloData.hero.cards.length - 1), speed);
      }
    }
  }, [ready, store.trelloData, store.countdown, countdown]);

  function printTitle() {
    let items = [];

    if (!feed.marquee) {
      feed.marquee = feed.name;
    }

    for (let index = 0; index < store.repeat; index++) {
      items.push(
        <div key={index} className="marquee-scroll__target">
          {parse(feed.marquee)}
        </div>
      );
    }

    return items;
  }

  return (
    <div className="component-marquee-scroll">
      <div className="marquee-link__container">
        <Link to={feed.link.url} className="marquee-link__wrap">
          {feed.link.name}
        </Link>
      </div>
      <div className="marquee-scroll__container">
        <div className="marquee-scroll__wrap">{printTitle()}</div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  countdown,
  repeat,
})(MarqueeScroll);
