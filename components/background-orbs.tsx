"use client";

import { motion } from "framer-motion";

export function BackgroundOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute left-[-10%] top-[-5%] h-[22rem] w-[22rem] rounded-full bg-sky-200/55 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-5%] top-[10%] h-[18rem] w-[18rem] rounded-full bg-emerald-200/60 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[25%] h-[20rem] w-[20rem] rounded-full bg-cyan-100/80 blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, -35, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-hero-grid bg-[size:72px_72px] opacity-[0.55] [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />
    </div>
  );
}
