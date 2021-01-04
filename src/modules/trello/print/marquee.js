import { Link } from "react-router-dom";
import { parse } from "../../helpers";
import { printHero } from "./hero";

export const printMarquee = {
  title: (feed, index, repeat) => {
    feed = printHero.feed(feed, index);
    feed = feed.marquee ? feed.marquee : feed.name;
    let items = [];
    for (let i = 0; i < repeat; i++) {
      items.push(
        <div key={i} className="marquee-scroll__target">
          {parse(feed)}
        </div>
      );
    }
    return items;
  },
  link: (feed, index) => {
    feed = printHero.feed(feed, index);
    return (
      <Link to={feed.link.url} className="marquee-link__wrap">
        {feed.link.name}
      </Link>
    );
  },
};
