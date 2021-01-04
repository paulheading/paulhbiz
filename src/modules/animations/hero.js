import { gsap } from "gsap";
import { printHero } from "../trello/print";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { tl0, tl1, tl2 } from "./tl";

gsap.registerPlugin(DrawSVGPlugin);

export const hero = {
  target: ".component-hero-content",
  feed: (feed, index) => {
    feed = printHero.feed(feed, index);
    return feed.animation();
  },
  tl: gsap.timeline({
    defaults: { duration: 2 },
  }),
  tl0,
  tl1,
  tl2,
};
