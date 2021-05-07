import React, { useEffect, useRef } from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { object, filter, remove } from "modules/helpers";
import parse from "html-react-parser";

function HeroContent() {
  const store = {
    manifest: useSelector(state => state.manifest),
    trello: useSelector(state => state.trello),
    pause: useSelector(state => state.pause),
    count: useSelector(state => state.count),
    hero: useSelector(state => state.hero),
  };

  const ref = {
    svg: useRef(null)
  };

  // can't do this => console.log(`${anyRef}`);
  // can do this => console.log(anyRef);
  
  // Get SEO information from store
  const manifest = object.ready(store.manifest) && store.manifest;
  const card = store.hero.card;

  useEffect(() => card.animation(store.pause, ref.svg.current), [card, store.pause, ref.svg]);

  function printLink(name) {
    const link = filter.in.more(card.attachments);
    return <Link to={link.url}>{remove.hero(name)}</Link>;
  }

  const hero = {
    name: name => name && <h1 className="title hero-content">{printLink(name)}</h1>,
    svg: svg => svg && <div className="svg hero-content" ref={ref.svg}>{parse(svg)}</div>
  }

  return (
    <div className={`component hero-content ${card.className}`}>
      <Helmet>
        <title>{manifest.title}</title>
        <meta name="description" content={manifest.description} />
      </Helmet>
      <div className="container hero-content">
        <div className="wrap hero-content">
          {hero.name(card.name)}
          {hero.svg(card.svg)}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(HeroContent);
