import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { marquee } from "./marquee";
import { hero } from "./hero";

gsap.registerPlugin(Draggable);

export function makeDraggable() {
  Draggable.create(".window__container", {
    bounds: document.querySelector(".desktop-content__container"),
  });
}

export { hero, marquee };
