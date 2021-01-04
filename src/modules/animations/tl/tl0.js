import { hero } from "../hero";

export function tl0() {
  hero.tl.clear().from(
    ".hero-content__svg path",
    {
      drawSVG: "0%",
    },
    "together"
  );
}
