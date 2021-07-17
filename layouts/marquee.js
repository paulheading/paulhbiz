import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { filter, remove } from 'scripts/helpers'
import { marquee } from 'scripts/animations'
import parse from 'html-react-parser'

export default function MarqueeLayout() {
  const store = {
    trello: useSelector(({ trello }) => trello),
    pause: useSelector(({ pause }) => pause),
    count: useSelector(({ count }) => count),
    hero: useSelector(({ hero }) => hero),
  };

  const ref = { 
    target: useRef(null),
    wrap: useRef(null),
  };

  const card = store.hero.card;

  useEffect(() => store.pause ? marquee.tl.pause() : marquee.scroll(ref.wrap.current), [store.pause, ref.wrap]);
  useEffect(() => store.pause ? marquee.tl.pause() : marquee.tl.restart(), [store.pause, store.trello, store.count]);

  const print = {
    title: more => {
      const name = remove.hero(card.name);
      let items = [];
      if (!card.marquee) { card.marquee = name; }
      card.marquee = parse(card.marquee);  
      for (let index = 0; index < 10; index++) {
        items.push(<span className="title marquee" key={index}>{card.marquee}</span>);
      }      
      return (
        <Link href={more.url}>
          <a className="link marquee">
            <div className="wrap marquee" ref={ref.wrap}>{items}</div>
          </a>
        </Link>
      );
    },
    tab: link => <Link href={link.url}><a className="link marquee-tab">{link.name}</a></Link>
  }

  const more = filter.in.more(card.attachments);

  return (
    <div className="layout marquee">
      <div className="container marquee-tab">{print.tab(more)}</div>
      <div className="container marquee">{print.title(more)}</div>
    </div>
  );
};
