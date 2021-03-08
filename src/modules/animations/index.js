import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { marquee } from "./marquee";
import { hero } from "./hero";

gsap.registerPlugin(Draggable);

export function wifiSignal() {
  const tl = gsap.timeline({
    delay: 0.7,
    repeat: -1,
    defaults: { duration: 0.1, stagger: 0.3, delay: 0.7 },
  });
  const wifi = ".wifi-svg";
  const low = `${wifi} .low`;
  const medium = `${wifi} .medium`;
  const high = `${wifi} .high`;

  tl.to([low, medium, high], {
    opacity: 1,
  })
    .to([high, medium], {
      opacity: 0.5,
    })
    .to([medium], {
      opacity: 1,
    })
    .to([medium], {
      opacity: 0.5,
    })
    .to([medium, high], {
      opacity: 1,
    })
    .to([high, medium, low], {
      opacity: 0.5,
    });
}

export function makeDraggable() {
  Draggable.create(".windows.desktop-area .container");
}

export { hero, marquee };
