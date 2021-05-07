import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const makeDraggable = target => Draggable.create(target.children);

export default makeDraggable;
