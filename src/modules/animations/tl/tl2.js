import { hero } from "../hero";
import gsap from "gsap";

export function tl2() {
  const sidebarPath = ".hero-content__svg g#sidebar path";
  const mainPath = ".hero-content__svg path#main";

  hero.tl
    .clear()
    .set(sidebarPath, { opacity: 0 })
    .set(mainPath, { scale: 0.1, strokeWidth: 0 })
    .to(
      sidebarPath,
      {
        opacity: 1,
        stagger: 0.2,
        duration: 0.4,
      },
      "together"
    )
    .to(mainPath, { scaleX: 1, duration: 0.8 }, "together")
    .to(
      mainPath,
      {
        scaleY: 1,
        duration: 0.6,
        ease: "power1.in",
        onComplete: () => {
          gsap.set(mainPath, { strokeWidth: 2 });
        },
      },
      "together+=0.2"
    );
}
