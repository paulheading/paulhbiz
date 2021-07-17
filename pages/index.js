import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { Head } from 'layouts'
import { filter, remove } from 'scripts/helpers'
import parse from 'html-react-parser'
import seo from 'scripts/seo'

export default function Home() {
  const store = {
    pause: useSelector(({ pause }) => pause),
    hero: useSelector(({ hero }) => hero),
  };

  const ref = {
    svg: useRef(null)
  };

  const print = {
    link: name => {
      const link = filter.in.more(card.attachments);
      return <Link href={link.url}>{remove.hero(name)}</Link>;
    },
    name: name => name && <h1 className="title home-page">{print.link(name)}</h1>,
    svg: svg => svg && <div className="svg home-page" ref={ref.svg}>{parse(svg)}</div>
  };

  print.link.displayName = 'PrintLink'; 

  const card = store.hero.card;

  useEffect(() => card.animation(store.pause, ref.svg.current), [card, store.pause, ref.svg]);

  return (
    <div className={`component home-page ${card.class}`}>
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