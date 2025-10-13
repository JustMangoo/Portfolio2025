import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

export default function ScrambleText() {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const roles = ["Developer", "Designer"];
    let index = 0;
    const changeText = () => {
      gsap.to(textRef.current, {
        duration: 1,
        scrambleText: {
          text: roles[index],
          chars: "upperCase",
          speed: 0.3,
        },
        ease: "none",
      });
      index = (index + 1) % roles.length;
    };

    changeText();
    const interval = setInterval(changeText, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <p
      ref={textRef}
      id="scramble-text"
      className="block text-4xl md:text-7xl -mt-2 md:-mt-3"
    >
      Developer
    </p>
  );
}
