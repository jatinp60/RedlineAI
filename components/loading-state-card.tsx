"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export function LoadingStateCard() {
  return (
    <Card className="overflow-hidden rounded-[32px] border border-slate-200 bg-white/90 p-0">
      <div className="relative p-6">
        <div className="text-xs uppercase tracking-[0.32em] text-slate-500">Inference pipeline</div>
        <div className="mt-4 text-2xl font-semibold text-slate-950">Synthesizing consumer signals</div>
        <div className="mt-2 text-sm text-slate-500">
          Mapping audience segmentation, purchase intent, and conversion friction across the current project context.
        </div>
        <div className="mt-6 space-y-3">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="h-12 rounded-2xl bg-slate-100"
              animate={{ opacity: [0.35, 0.85, 0.35] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.15 }}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}
