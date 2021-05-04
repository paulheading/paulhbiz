import { gsap } from "gsap";

// 60px per second

export const marquee = {
  tl: gsap.timeline({ defaults: { ease: "none", duration: 8 } }),
  scroll: target => marquee.tl.to(target, { x: -480 }),
};
