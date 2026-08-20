import Link from "next/link";
import type { ReactNode } from "react";
import { IconArrowRight } from "./icons";
import { Magnetic } from "./Magnetic";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  showArrow?: boolean;
};

const variants = {
  primary:
    "bg-clay-400 text-cream-100 hover:bg-clay-500 shadow-soft hover:shadow-card",
  secondary:
    "bg-forest-700 text-cream-100 hover:bg-forest-800 shadow-soft hover:shadow-card",
  ghost:
    "bg-transparent text-forest-700 border border-forest-700/25 hover:border-forest-700 hover:bg-forest-700/5",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  showArrow = true,
}: ButtonProps) {
  return (
    <Magnetic strength={0.25}>
      <Link
        href={href}
        className={`group inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-[0.95rem] font-medium tracking-tight transition-all duration-300 ease-premium active:scale-[0.97] ${variants[variant]} ${className}`}
      >
        {children}
        {showArrow && (
          <IconArrowRight className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-1" />
        )}
      </Link>
    </Magnetic>
  );
}
