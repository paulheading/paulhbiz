import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const tl = gsap.timeline({ defaults: { duration: 2 } });
const svgHeroContent = ".svg.hero-content";

export function tl0() {
  tl.clear().from(`${svgHeroContent} path`, { drawSVG: "0%" });
}

export function tl2() {
  const sidePath = `${svgHeroContent} g#sidebar path`;
  const mainPath = `${svgHeroContent} path#main`;

  tl.clear()
    .set(sidePath,{ opacity: 0 })
    .set(mainPath,{ scale: 0.1, strokeWidth: 0 })
    .to(sidePath,{ opacity: 1, stagger: 0.2, duration: 0.4 }, "together")
    .to(mainPath, { scaleX: 1, duration: 0.8 }, "together")
    .to(mainPath, { scaleY: 1, duration: 0.6, ease: "power1.in", onComplete: () => gsap.set(mainPath, { strokeWidth: 2 })}, "together+=0.2");
}