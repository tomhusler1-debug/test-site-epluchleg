"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IconCarrot, IconLeek, IconShield, IconSnowflake, IconTruck } from "./icons";

export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px]">
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-[6%] rounded-[42%_58%_65%_35%/45%_38%_62%_55%] bg-gradient-to-br from-beige-400 via-beige-700 to-ink shadow-lifted"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[6%] rounded-[42%_58%_65%_35%/45%_38%_62%_55%] opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(247,244,236,0.9) 1.5px, transparent 1.5px)",
          backgroundSize: "16px 16px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
        animate={{ opacity: 1, scale: 1, rotate: -6 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2"
      >
        <Image
          src="/images/potato-hero.png"
          alt="Pomme de terre EPLUCH'LEG"
          fill
          sizes="(max-width: 640px) 280px, 400px"
          className="object-contain drop-shadow-[0_30px_40px_rgba(36,28,20,0.35)]"
          priority
        />
      </motion.div>

      <motion.span
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[8%] top-[14%] flex h-16 w-16 items-center justify-center rounded-full bg-cream-50 text-orange-500 shadow-card sm:h-20 sm:w-20"
      >
        <IconShield className="h-9 w-9 sm:h-11 sm:w-11" />
      </motion.span>

      <motion.span
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="absolute right-[6%] top-[30%] flex h-14 w-14 items-center justify-center rounded-full bg-cream-50 text-orange-500 shadow-card sm:h-16 sm:w-16"
      >
        <IconCarrot className="h-7 w-7 sm:h-8 sm:w-8" />
      </motion.span>

      <motion.span
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute bottom-[16%] left-[4%] flex h-14 w-14 items-center justify-center rounded-full bg-cream-50 text-ink shadow-card sm:h-16 sm:w-16"
      >
        <IconLeek className="h-7 w-7 sm:h-8 sm:w-8" />
      </motion.span>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -bottom-2 right-[8%] flex items-center gap-3 rounded-2xl bg-cream-50/95 px-4 py-3.5 shadow-lifted backdrop-blur"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500/12 text-orange-500">
          <IconSnowflake className="h-4.5 w-4.5" />
        </span>
        <div>
          <p className="text-xs font-medium leading-none text-ink-muted">Fraîcheur</p>
          <p className="mt-1 text-sm font-semibold leading-none text-ink">Sous vide</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -top-2 left-[2%] flex items-center gap-3 rounded-2xl bg-cream-50/95 px-4 py-3.5 shadow-lifted backdrop-blur sm:left-[-4%]"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500/12 text-orange-500">
          <IconTruck className="h-4.5 w-4.5" />
        </span>
        <div>
          <p className="text-xs font-medium leading-none text-ink-muted">Livraison</p>
          <p className="mt-1 text-sm font-semibold leading-none text-ink">Grand Est</p>
        </div>
      </motion.div>
    </div>
  );
}
