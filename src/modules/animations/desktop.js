import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const makeDraggable = bounds => {
  let targets = bounds.children[0].children[0].children;
  Draggable.create(targets, { bounds });
};

export default makeDraggable;
