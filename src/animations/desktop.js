import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const makeDraggable = target => Draggable.create(target.children);

export default makeDraggable;

export const signal = target => {
  const tl = gsap.timeline({ delay: 0.7, repeat: -1, defaults: { duration: 0.1, stagger: 0.3, delay: 0.7 } });
  const low = target.children[0];
  const medium = target.children[1];
  const high = target.children[2];

  tl
  .to([low, medium, high], { opacity: 1 })
  .to([high, medium], { opacity: 0.5 })
  .to([medium], { opacity: 1 })
  .to([medium], { opacity: 0.5 })
  .to([medium, high], { opacity: 1 })
  .to([high, medium, low], { opacity: 0.5 });
};
