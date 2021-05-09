import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { filter, remove } from "modules/helpers";
import marquee from "modules/animations/marquee";
import parse from "html-react-parser";
import { Countdown } from "hooks";

function MarqueeScroll() {
  const store = {
    trello: useSelector(state => state.trello),
    pause: useSelector(state => state.pause),
    count: useSelector(state => state.count),
    hero: useSelector(state => state.hero),
  };

  const ref = { 
    target: useRef(null),
    wrap: useRef(null),
  };

  const card = store.hero.card;

  useEffect(() => store.pause ? marquee.tl.pause() : marquee.scroll(ref.wrap.current), [store.pause, ref.wrap]);
  useEffect(() => store.pause ? marquee.tl.pause() : marquee.tl.restart(), [store.pause, store.trello, store.count]);

  function printTitle(readmore) {
    const name = remove.hero(card.name);
    let items = [];
    if (!card.marquee) { card.marquee = name; }

    for (let index = 0; index < 10; index++) {
      items.push(<Link key={index} ref={ref.target} to={readmore.url} className="target marquee-scroll">{parse(card.marquee)}</Link>);
    }
    return items;
  }

  const readmore = filter.in.more(card.attachments);
  const printLink = link => <Link to={link.url}>{link.name}</Link>;

  return (
    <div className="component marquee-scroll">
      <Countdown />
      <div className="container marquee-link">{printLink(readmore)}</div>
      <div className="container marquee-scroll">
        <div className="wrap marquee-scroll" ref={ref.wrap}>{printTitle(readmore)}</div>
      </div>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(MarqueeScroll);
