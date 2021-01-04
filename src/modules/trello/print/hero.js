import { objectReady, parse } from "../../helpers";
import { placeholder } from "../../placeholder";
import { Link } from "react-router-dom";

export const printHero = {
  feed: (feed, index) => {
    return objectReady(feed) ? feed.hero.cards[index] : placeholder;
  },
  card: (feed, index) => {
    feed = printHero.feed(feed, index);

    return (
      <div key={feed.id}>
        {ifHeroName(feed.name, feed.link)}
        {ifHeroSvg(feed.svg)}
      </div>
    );
  },
  class: (feed, index) => {
    feed = printHero.feed(feed, index);
    return feed.className;
  },
};

function ifHeroName(name, link) {
  if (name) {
    return (
      <h1 className="hero-content__title">
        <Link to={link.url}>{parse(name)}</Link>
      </h1>
    );
  }
}

function ifHeroSvg(svg) {
  if (svg) {
    return <div className="hero-content__svg">{parse(svg)}</div>;
  }
}
