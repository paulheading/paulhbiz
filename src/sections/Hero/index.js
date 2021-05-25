import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { filter, remove } from "modules/helpers";
import parse from "html-react-parser";

export default function HeroSection() {
  const store = {
    seo: useSelector(state => state.seo),
    pause: useSelector(state => state.pause),
    hero: useSelector(state => state.hero),
  };

  const ref = {
    svg: useRef(null)
  };

  const print = {
    link: name => {
      const link = filter.in.more(card.attachments);
      return <Link to={link.url}>{remove.hero(name)}</Link>;
    },
    name: name => name && <h1 className="title hero-content">{print.link(name)}</h1>,
    svg: svg => svg && <div className="svg hero-content" ref={ref.svg}>{parse(svg)}</div>
  }

  // can't do this => console.log(`${anyRef}`);
  // can do this => console.log(anyRef);
  
  const seo = store.seo.home;
  const card = store.hero.card;

  useEffect(() => card.animation(store.pause, ref.svg.current), [card, store.pause, ref.svg]);

  return (
    <div className={`component hero-content ${card.className}`}>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
      </Helmet>
      <div className="container hero-content">
        <div className="wrap hero-content">
          {print.name(card.name)}
          {print.svg(card.svg)}
        </div>
      </div>
    </div>
  );
};
