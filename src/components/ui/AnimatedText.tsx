"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  tag?: keyof JSX.IntrinsicElements;
}

export default function AnimatedText({
  text,
  className = "",
  delay = 0,
  tag: Tag = "span",
}: AnimatedTextProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const chars = ref.current.querySelectorAll(".char");
    gsap.fromTo(
      chars,
      { opacity: 0, y: 20, rotationX: -40 },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.6,
        stagger: 0.03,
        delay,
        ease: "back.out(1.4)",
      }
    );
  }, [delay]);

  const words = text.split(" ");

  return (
    <Tag ref={ref as React.RefObject<HTMLElement>} className={`${className} inline`} style={{ perspective: "400px" }}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block mr-[0.25em]">
          {word.split("").map((char, ci) => (
            <span
              key={ci}
              className="char inline-block"
              style={{ opacity: 0 }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
}