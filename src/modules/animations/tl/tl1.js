import { hero } from "../hero";

export function tl1() {
  hero.tl.clear().from(
    ".hero-content__svg path",
    {
      drawSVG: "0%",
    },
    "together"
  );
}
