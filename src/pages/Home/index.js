import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Head from "components/Head";
import { filter, remove } from "modules/_helpers";
import parse from "html-react-parser";
import { seo } from "modules";

export default function HomePage() {
  const store = {
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
    name: name => name && <h1 className="title home-page">{print.link(name)}</h1>,
    svg: svg => svg && <div className="svg home-page" ref={ref.svg}>{parse(svg)}</div>
  }

  // can't do this => console.log(`${anyRef}`);
  // can do this => console.log(anyRef);
  
  const card = store.hero.card;

  useEffect(() => card.animation(store.pause, ref.svg.current), [card, store.pause, ref.svg]);

  return (
    <div className={`component home-page ${card.className}`}>
      <Head { ...seo.home } />
      <div className="container home-page">
        <div className="wrap home-page">
          {print.name(card.name)}
          {print.svg(card.svg)}
        </div>
      </div>
    </div>
  );
};
