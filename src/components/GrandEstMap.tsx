"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cities } from "@/lib/data";
import { IconPin } from "./icons";

export function GrandEstMap() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-xl">
      <svg
        viewBox="0 0 100 75"
        className="absolute inset-0 h-full w-full drop-shadow-[0_20px_45px_rgba(27,33,24,0.18)]"
        aria-hidden="true"
      >
        <path
          d="M8 22 C4 15, 10 6, 20 5 C28 1, 40 3, 48 8 C58 4, 72 6, 80 12 C90 14, 96 24, 92 34 C96 42, 90 52, 80 56 C76 66, 62 72, 50 68 C40 74, 24 72, 16 62 C6 60, 2 48, 8 40 C2 34, 3 26, 8 22 Z"
          fill="#25402a"
          fillOpacity={0.08}
          stroke="#25402a"
          strokeOpacity={0.35}
          strokeWidth={0.5}
        />
        <path
          d="M8 22 C4 15, 10 6, 20 5 C28 1, 40 3, 48 8 C58 4, 72 6, 80 12 C90 14, 96 24, 92 34 C96 42, 90 52, 80 56 C76 66, 62 72, 50 68 C40 74, 24 72, 16 62 C6 60, 2 48, 8 40 C2 34, 3 26, 8 22 Z"
          fill="none"
          stroke="#C4622D"
          strokeOpacity={0.25}
          strokeWidth={0.35}
          strokeDasharray="0.6 1.6"
        />
      </svg>

      {cities.map((city, i) => (
        <button
          key={city.name}
          type="button"
          onMouseEnter={() => setActive(city.name)}
          onFocus={() => setActive(city.name)}
          onMouseLeave={() => setActive(null)}
          onBlur={() => setActive(null)}
          className="group absolute -translate-x-1/2 -translate-y-full cursor-default"
          style={{ left: `${city.x}%`, top: `${city.y}%` }}
          aria-label={city.name}
        >
          <motion.span
            initial={{ opacity: 0, y: -10, scale: 0.6 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center"
          >
            <span
              className={`mb-1 whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium tracking-tight shadow-soft transition-all duration-200 ${
                active === city.name
                  ? "bg-forest-700 text-cream-100 opacity-100"
                  : "bg-cream-50 text-ink opacity-90"
              }`}
            >
              {city.name}
            </span>
            <span className="relative flex h-3 w-3 items-center justify-center">
              <span className="absolute h-3 w-3 animate-ping rounded-full bg-clay-400/60" />
              <IconPin className="h-5 w-5 -translate-y-1 text-clay-400 drop-shadow-sm" />
            </span>
          </motion.span>
        </button>
      ))}
    </div>
  );
}
