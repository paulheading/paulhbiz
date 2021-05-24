import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function WifiSignal() {
  const wifi = useRef(null);
  const signal = target => {
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
  }

  useEffect(() => signal(wifi.current), []);
  
  return (
    <svg ref={wifi} xmlns="http://www.w3.org/2000/svg" className="wifi-svg" viewBox="0 0 40 40" height="40" width="40">
      <path className="low" d="M15,28.3l5,5l5-5C22.2,25.6,17.8,25.6,15,28.3z" />
      <path className="medium" d="M8.3,21.7l3.3,3.3c4.6-4.6,12.1-4.6,16.7,0l3.3-3.3C25.2,15.2,14.8,15.2,8.3,21.7z" />
      <path className="high" d="M1.7,15L5,18.3c8.3-8.3,21.7-8.3,30,0l3.3-3.3C28.2,4.9,11.8,4.9,1.7,15z" />
    </svg>
  );
};