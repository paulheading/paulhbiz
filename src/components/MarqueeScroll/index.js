import React, { useEffect, useRef } from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { object, filter, remove } from "modules/helpers";
import { marquee } from "modules/animations";
import temp from "modules/placeholder";
import parse from "html-react-parser";
import { Countdown, CalcRepeat } from "hooks";

function MarqueeScroll() {
  const store = {
    trello: useSelector(state => state.trelloData),
    countdown: useSelector(state => state.countdown),
    repeat: useSelector(state => state.repeat),
  };

  const ref = { 
    wrap: useRef(null), 
    target: useRef(null) 
  };

  const ready = object.ready(store.trello);
  const hero = {};

  hero.feed = ready ? store.trello.projects.cards : temp.trello.projects.cards;
  hero.feed = filter.in.hero(hero.feed);
  hero.card = hero.feed[store.countdown];

  useEffect(() => marquee.scroll(ref.wrap.current), [ref.wrap]);
  useEffect(() => marquee.tl.restart(), [store.trello, store.countdown]);

  function printLink() {
    const link = filter.in.more(hero.card.attachments);
    return <Link to={link.url}>{link.name}</Link>
  }

  function printTitle() {
    const name = remove.hero(hero.card.name);
    let items = [];
    if (!hero.marquee) { hero.marquee = name; }
    for (let index = 0; index < store.repeat; index++) { items.push(<div key={index} ref={ref.target} className="marquee-scroll__target">{parse(hero.marquee)}</div>); }
    return items;
  }

  return (
    <div className="component marquee-scroll">
      <Countdown feed={hero.feed} />
      <CalcRepeat target={ref.target.current} />
      <div className="marquee-link__container">{printLink()}</div>
      <div className="marquee-scroll__container">
        <div className="marquee-scroll__wrap" ref={ref.wrap}>{printTitle()}</div>
      </div>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(MarqueeScroll);
