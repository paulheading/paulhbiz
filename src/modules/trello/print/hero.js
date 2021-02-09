import { objectReady } from "../../helpers";
import { placeholder } from "../../placeholder";

export const printHero = {
  feed: (feed, index) => {
    return objectReady(feed) ? feed.hero.cards[index] : placeholder;
  },
  class: (feed, index) => {
    feed = printHero.feed(feed, index);
    return feed.className;
  },
};
