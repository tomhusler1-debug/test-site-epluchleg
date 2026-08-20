import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconPotato(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M12 20c-3-4-1-10 5-11 3-4 10-4 13 0 6-1 10 4 8 9 4 3 4 10-1 13-1 5-7 8-12 6-5 3-11 0-12-5-5-1-7-7-4-11 1-1 2-1 3-1z" />
      <circle cx="18" cy="22" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="27" cy="18" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="24" cy="28" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="16" cy="30" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconCarrot(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M31 17c4-5 8-7 10-6-1 2-3 6-6 10" />
      <path d="M27 13c-1-4-4-7-8-8 0 3 1 7 3 9" />
      <path d="M14 34 30 18c3-3 3-7 0-10-3-3-7-3-10 0L4 24c-2 2-2 5 0 7l3 3c2 2 5 2 7 0z" />
      <path d="M17 31l-4-4" />
    </svg>
  );
}

export function IconCelery(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M18 44V22" />
      <path d="M24 44V16" />
      <path d="M30 44V22" />
      <path d="M14 22c2-6 2-12-2-16 6 0 10 4 10 10" />
      <path d="M34 22c-2-6-2-12 2-16-6 0-10 4-10 10" />
    </svg>
  );
}

export function IconCabbage(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M24 8c9 0 16 7 16 16s-7 16-16 16S8 33 8 24 15 8 24 8z" />
      <path d="M24 14c6 0 10 4.5 10 10s-4 10-10 10-10-4.5-10-10 4-10 10-10z" />
      <path d="M24 20c3 0 5 2 5 4s-2 4-5 4-5-2-5-4 2-4 5-4z" />
    </svg>
  );
}

export function IconLeek(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M20 44V20c0-6 1.8-10 4-14 2.2 4 4 8 4 14v24" />
      <path d="M20 44h8" />
      <path d="M16 18c2 2 5 3 8 3s6-1 8-3" />
      <path d="M17 12c2 1.5 4.5 2.5 7 2.5s5-1 7-2.5" />
    </svg>
  );
}

export function IconSweetPotato(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M10 30c-2-6 2-14 10-17 9-3 18 1 22 9 3 7-1 14-9 16-3 5-11 6-16 2-6 1-10-4-7-10z" />
      <path d="M16 16c3-3 7-4 10-3" />
    </svg>
  );
}

export function IconAsparagus(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M18 44 20 14" />
      <path d="M24 44 24 10" />
      <path d="M30 44 28 14" />
      <path d="M18.5 20c1-1 3-1 4 0" />
      <path d="M24 16c1-1 3-1 4 0" />
      <path d="M28.5 20c1-1 2.5-1 3.5 0" />
    </svg>
  );
}

export function IconCollective(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <rect x="7" y="18" width="34" height="22" rx="2" />
      <path d="M7 26h34" />
      <path d="M16 18v-4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v4" />
      <path d="M14 32h6M28 32h6" />
    </svg>
  );
}

export function IconSchool(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M24 8 44 17 24 26 4 17z" />
      <path d="M13 21v10c0 3 5 6 11 6s11-3 11-6V21" />
      <path d="M44 17v12" />
    </svg>
  );
}

export function IconRestaurant(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M14 6v16c0 3-2 5-5 5" />
      <path d="M9 6v12M14 6v12M19 6v12" />
      <path d="M9 27v15" />
      <path d="M36 6c-4 0-6 4-6 9s2 9 6 9" />
      <path d="M36 6v36" />
    </svg>
  );
}

export function IconCatering(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M6 30h36" />
      <path d="M9 30c0-9 7-16 15-16s15 7 15 16" />
      <path d="M24 14V8" />
      <path d="M20 8h8" />
      <path d="M9 36h30" />
    </svg>
  );
}

export function IconIndustry(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M6 40V22l10 7V22l10 7V22l10 7v11z" />
      <path d="M6 40h30" />
      <path d="M36 27v-6h6v6" />
      <path d="M38 21v-6" />
    </svg>
  );
}

export function IconWholesale(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M6 16 24 8l18 8-18 8z" />
      <path d="M6 16v16l18 8 18-8V16" />
      <path d="M24 24v16" />
    </svg>
  );
}

export function IconTruck(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <rect x="4" y="16" width="22" height="16" rx="1.5" />
      <path d="M26 21h9l7 6v5h-16z" />
      <circle cx="14" cy="35" r="3.4" />
      <circle cx="35" cy="35" r="3.4" />
    </svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M24 6 40 12v12c0 11-7 18-16 20-9-2-16-9-16-20V12z" />
      <path d="M17 24l5 5 10-11" />
    </svg>
  );
}

export function IconSnowflake(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M24 4v40M8 14l32 20M8 34l32-20" />
      <path d="M17 8l7 6 7-6M17 40l7-6 7 6M9 20l-4 4 4 4M39 20l4 4-4 4" />
    </svg>
  );
}

export function IconClock(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <circle cx="24" cy="24" r="18" />
      <path d="M24 14v10l7 5" />
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} strokeWidth={2} {...props}>
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

export function IconPin(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} strokeWidth={2} {...props}>
      <path d="M12 22s7-7.6 7-13a7 7 0 1 0-14 0c0 5.4 7 13 7 13z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} strokeWidth={2.2} {...props}>
      <path d="m5 12 5 5 9-11" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} strokeWidth={2} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} strokeWidth={2} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function IconKnife(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M6 40 30 16c5-5 12-5 12 2 0 5-4 8-8 8L10 42" />
      <path d="M6 40l4 4" />
      <path d="M18 28l8 8" />
    </svg>
  );
}

export function IconBox(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <rect x="8" y="14" width="32" height="26" rx="2" />
      <path d="M8 22h32" />
      <path d="M20 14v8M28 14v8" />
      <path d="M18 30h12" />
    </svg>
  );
}

export const vegIconMap = {
  carrot: IconCarrot,
  celery: IconCelery,
  cabbage: IconCabbage,
  leek: IconLeek,
  sweetpotato: IconSweetPotato,
  asparagus: IconAsparagus,
};

export const sectorIconMap = {
  collective: IconCollective,
  school: IconSchool,
  restaurant: IconRestaurant,
  catering: IconCatering,
  industry: IconIndustry,
  wholesale: IconWholesale,
};
