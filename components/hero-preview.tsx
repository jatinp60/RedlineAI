"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck, Layers3, Sparkles, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const rails = [
  { label: "Best-fit niche", value: "Skincare-aware sensitive skin buyers" },
  { label: "Audience segmentation", value: "Problem-aware Gen Z + Millennial shoppers" },
  { label: "Positioning", value: "Clinical clarity without harsh tradeoffs" },
];

export function HeroPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-5xl"
    >
      <motion.div
        className="absolute -left-8 top-12 hidden rounded-[28px] border border-white/80 bg-white/70 p-4 shadow-card backdrop-blur-xl lg:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-3 text-sm text-slate-600">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
            <BadgeCheck className="h-4 w-4" />
          </div>
          <div>
            <div className="font-semibold text-slate-900">Purchase intent: high</div>
            <div>Friction lowered with proof-led messaging</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -right-6 bottom-10 hidden rounded-[28px] border border-white/80 bg-white/[0.75] p-4 shadow-card backdrop-blur-xl xl:block"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-3 text-sm text-slate-600">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
            <Target className="h-4 w-4" />
          </div>
          <div>
            <div className="font-semibold text-slate-900">Meta conversion plan ready</div>
            <div>Cold, warm, and retargeting budget split</div>
          </div>
        </div>
      </motion.div>

      <div className="relative rounded-[40px] border border-white/70 bg-white/[0.75] p-3 shadow-card backdrop-blur-xl">
        <div className="absolute inset-x-24 top-0 h-16 rounded-b-full bg-gradient-to-r from-sky-200/50 via-white to-emerald-200/50 blur-2xl" />
        <Card className="relative overflow-hidden rounded-[34px] border border-slate-200/80 bg-[#fcfcfa]/95 p-0">
          <div className="flex items-center justify-between border-b border-slate-200/80 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
              </div>
              <span className="text-sm text-slate-500">Consumer Behavior Decoder workspace</span>
            </div>
            <Badge className="border-emerald-200 bg-emerald-50 text-emerald-700">Live insight sync</Badge>
          </div>

          <div className="grid gap-4 p-5 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-soft">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.28em] text-slate-400">Project view</div>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-slate-950">LumaBiome Serum</h3>
                  <p className="mt-2 max-w-lg text-sm leading-7 text-slate-600">
                    Premium barrier-repair serum with audience segmentation, conversion friction analysis, and channel
                    planning aligned for a growth launch.
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-slate-400" />
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {rails.map((rail) => (
                  <div key={rail.label} className="rounded-[24px] border border-slate-200/80 bg-slate-50/80 p-4">
                    <div className="text-xs text-slate-400">{rail.label}</div>
                    <div className="mt-2 text-sm font-semibold text-slate-900">{rail.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-[28px] border border-slate-200 bg-gradient-to-br from-sky-50 to-emerald-50 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Messaging angles</div>
                    <div className="text-sm text-slate-500">Value proposition and objections surfaced automatically</div>
                  </div>
                  <Sparkles className="h-4 w-4 text-sky-500" />
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {[
                    "Barrier-first clarity for breakout-prone routines",
                    "Proof-led serum positioning with low-irritation confidence",
                    "Derm-inspired trust cues for high-intent shoppers",
                    "Retargeting copy that resolves regimen compatibility doubts",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl bg-white/80 px-4 py-3 text-sm text-slate-700 shadow-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                    <Layers3 className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Campaign recommendations</div>
                    <div className="text-sm text-slate-500">Objective: conversions</div>
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  {[
                    "Audience mix: broad cold + skin-concern warm retargeting",
                    "Creative: clinical closeups, texture proof, creator testimonials",
                    "KPI focus: CTR, CVR, CPA, blended ROAS",
                    "Testing: landing-page proof order and offer framing",
                  ].map((line) => (
                    <div key={line} className="rounded-2xl border border-slate-200/80 bg-slate-50/70 px-4 py-3 text-sm text-slate-700">
                      {line}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-soft">
                <div className="text-sm font-semibold text-slate-900">Live readiness</div>
                <div className="mt-4 space-y-4">
                  {[
                    { label: "Psychographic fit", value: "92%" },
                    { label: "Purchase intent", value: "88%" },
                    { label: "Conversion friction", value: "Low" },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-b-0 last:pb-0">
                      <span className="text-sm text-slate-500">{stat.label}</span>
                      <span className="text-sm font-semibold text-slate-950">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </motion.div>
  );
}
