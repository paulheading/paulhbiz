import React, { useEffect, useRef } from "react";
import { connect, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { remove } from "modules/helpers";
import marquee from "modules/animations/marquee";
import parse from "html-react-parser";
import { Countdown } from "hooks";
import { pause } from "actions";

function MarqueeScroll({ pause }) {
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

  const toggleMotion = store.pause ? "Play" : "Pause";
  const card = store.hero.card;

  useEffect(() => store.pause ? marquee.tl.pause() : marquee.scroll(ref.wrap.current), [store.pause, ref.wrap]);
  useEffect(() => store.pause ? marquee.tl.pause() : marquee.tl.restart(), [store.pause, store.trello, store.count]);

  function printTitle() {
    const name = remove.hero(card.name);
    let items = [];
    if (!card.marquee) { card.marquee = name; }
    for (let index = 0; index < 10; index++) { items.push(<div key={index} ref={ref.target} className="marquee-scroll__target">{parse(card.marquee)}</div>); }
    return items;
  }

  return (
    <div className="component marquee-scroll">
      <Countdown />
      <div className="marquee-link__container">
        <Button className="toggle-motion" onClick={() => pause(!store.pause)}>{toggleMotion}</Button>
      </div>
      <div className="marquee-scroll__container">
        <div className="marquee-scroll__wrap" ref={ref.wrap}>{printTitle()}</div>
      </div>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { pause })(MarqueeScroll);
