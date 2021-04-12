import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const tl = gsap.timeline({ defaults: { duration: 2 } });

export function tl0() {
  tl.clear()
    .from(".hero-content__svg path", { drawSVG: "0%" }, "together");
}

export function tl2() {
  const sidePath = ".hero-content__svg g#sidebar path";
  const mainPath = ".hero-content__svg path#main";

  tl.clear()
    .set(sidePath,{ opacity: 0 })
    .set(mainPath,{ scale: 0.1, strokeWidth: 0 })
    .to(sidePath,{ opacity: 1, stagger: 0.2, duration: 0.4 }, "together")
    .to(mainPath, { scaleX: 1, duration: 0.8 }, "together")
    .to(mainPath, { scaleY: 1, duration: 0.6, ease: "power1.in", onComplete: () => gsap.set(mainPath, { strokeWidth: 2 })}, "together+=0.2");
}