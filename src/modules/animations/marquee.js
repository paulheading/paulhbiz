import { gsap } from "gsap";

export const marquee = {
  tl: gsap.timeline({
    defaults: { ease: "none", duration: 5 },
  }),
  wrap: ".marquee-scroll__wrap",
  target: ".marquee-scroll__target",
  scroll: () => {
    marquee.tl.to(marquee.wrap, { x: -300 });
  },
  restart: () => {
    marquee.tl.restart();
  },
};
