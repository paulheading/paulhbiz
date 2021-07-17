import gsap from 'gsap'
import { DrawSVGPlugin } from 'gsap/dist/DrawSVGPlugin';

gsap.registerPlugin(DrawSVGPlugin);

const tl = gsap.timeline({ defaults: { duration: 2 } });

const tl0 = (pause, target) => {
  if (pause) {
    tl.pause();
  } else {
    target = target.children[0];
    tl.clear()
      .from(target.children[0], { drawSVG: "0%", repeat: -1, repeatDelay: 1 });
  }
}

const tl1 = (pause, target) => {
  if (pause) {
    tl.pause();
  } else {
    target = target.children[0];
    tl.clear()
      .set(target.children[0], { drawSVG: "0%" })
      .to(target.children[0],  { drawSVG: "100%" });
  }
}

const tl2 = (pause, target) => {
  if (pause) {
    tl.pause();
  } else {
    target = target.children[0];

    const path = {
      main: target.children[0],
      side: target.children[1]
    }
  
    tl.clear()
      .set(path.side, { opacity: 0 })
      .set(path.main, { scale: 0.1, strokeWidth: 0 })
      .to(path.side,  { opacity: 1, stagger: 0.2, duration: 0.4 }, "together")
      .to(path.main,  { scaleX: 1, duration: 0.8 }, "together")
      .to(path.main,  { scaleY: 1, duration: 0.6, ease: "power1.in", onComplete: () => gsap.set(path.main, { strokeWidth: 2 })}, "together+=0.2");
  }
}

export default {
  tl0,
  tl1,
  tl2
}