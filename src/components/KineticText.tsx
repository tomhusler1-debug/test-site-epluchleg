"use client";

import { motion } from "framer-motion";

type KineticTextProps = {
  text: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
  as?: "span" | "div";
};

export function KineticText({
  text,
  className = "",
  delay = 0,
  wordDelay = 0.055,
  as = "span",
}: KineticTextProps) {
  const words = text.split(" ");
  const Wrapper = as;

  return (
    <Wrapper className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "115%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.85,
              delay: delay + i * wordDelay,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Wrapper>
  );
}
