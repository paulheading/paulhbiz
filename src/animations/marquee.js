import { gsap } from "gsap";

// 60px per second

const marquee = {
  tl: gsap.timeline({ defaults: { ease: "none", duration: 8, repeat: 5 } }),
  scroll: target => marquee.tl.to(target, { x: -480 })
};

export default marquee;