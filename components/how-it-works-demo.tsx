"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type DemoPiece =
  | {
      kind: "static";
      text: string;
    }
  | {
      kind: "change";
      threshold: number;
      before: string;
      after?: string;
      changeType: "add" | "remove" | "modify";
    };

const pieces: DemoPiece[] = [
  { kind: "static", text: "Our campus event helps " },
  { kind: "change", threshold: 0.2, before: "students", after: "new students", changeType: "modify" },
  { kind: "static", text: " connect " },
  { kind: "change", threshold: 0.48, before: "and learn more about", after: "earlier and discover", changeType: "modify" },
  { kind: "static", text: " " },
  {
    kind: "change",
    threshold: 0.72,
    before: "opportunities",
    after: "academic, social, and career opportunities",
    changeType: "add",
  },
  { kind: "static", text: " available " },
  { kind: "change", threshold: 0.9, before: "during", after: "throughout", changeType: "modify" },
  { kind: "static", text: " the semester." },
];

export function HowItWorksDemo() {
  const [progress, setProgress] = useState(0.42);

  const activeCount = useMemo(
    () => pieces.filter((piece) => piece.kind === "change" && progress >= piece.threshold).length,
    [progress],
  );

  return (
    <Card className="rounded-[32px] border border-white/80 bg-white/92 p-6 shadow-[0_28px_90px_rgba(15,23,42,0.08)] sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-sm uppercase tracking-[0.26em] text-slate-400">Live comparison preview</div>
          <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em] text-slate-950">
            Drag to reveal what changed.
          </h3>
        </div>
        <Badge className="border-slate-200 bg-slate-50 text-slate-700">{Math.round(progress * 100)}% revealed</Badge>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <LegendChip label="Added" tone="add" />
        <LegendChip label="Removed" tone="remove" />
        <LegendChip label="Changed" tone="modify" />
      </div>

      <div className="mt-6 rounded-[28px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#fafaf8_100%)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
        <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-slate-400">
          <span>Student event draft</span>
          <span>{activeCount} updates visible</span>
        </div>

        <div className="min-h-[190px] rounded-[24px] border border-slate-200 bg-white p-5 text-[17px] leading-9 text-slate-700 shadow-soft">
          {pieces.map((piece, index) => {
            if (piece.kind === "static") {
              return <span key={`static-${index}`}>{piece.text}</span>;
            }

            const revealed = progress >= piece.threshold;

            if (!revealed) {
              return (
                <motion.span key={`base-${index}`} layout className="text-slate-700">
                  {piece.before}
                </motion.span>
              );
            }

            if (piece.changeType === "remove") {
              return (
                <motion.span
                  key={`remove-${index}`}
                  layout
                  initial={{ opacity: 0.35 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-lg bg-rose-100 px-1.5 py-0.5 text-rose-900 line-through"
                >
                  {piece.before}
                </motion.span>
              );
            }

            if (piece.changeType === "add") {
              return (
                <motion.span
                  key={`add-${index}`}
                  layout
                  initial={{ opacity: 0.35 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-lg bg-emerald-100 px-1.5 py-0.5 text-emerald-900"
                >
                  {piece.after}
                </motion.span>
              );
            }

            return (
              <motion.span
                key={`modify-${index}`}
                layout
                initial={{ opacity: 0.35 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                className="inline-flex flex-wrap items-center gap-1.5"
              >
                <span className="rounded-lg bg-rose-50 px-1.5 py-0.5 text-rose-700 line-through">{piece.before}</span>
                <span className="rounded-lg bg-amber-100 px-1.5 py-0.5 text-amber-950">{piece.after}</span>
              </motion.span>
            );
          })}
        </div>

        <div className="mt-6">
          <div className="mb-3 flex items-center justify-between">
            <label htmlFor="comparison-progress" className="text-sm font-medium text-slate-700">
              Reveal Changes
            </label>
            <div className="text-sm text-slate-500">Draft comparison</div>
          </div>
          <input
            id="comparison-progress"
            type="range"
            min={0}
            max={100}
            value={Math.round(progress * 100)}
            onChange={(event) => setProgress(Number(event.target.value) / 100)}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-slate-950"
          />
          <div className="mt-3 flex justify-between text-xs uppercase tracking-[0.22em] text-slate-400">
            <span>Original</span>
            <span>Compared</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

function LegendChip({
  label,
  tone,
}: {
  label: string;
  tone: "add" | "remove" | "modify";
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        tone === "add" && "bg-emerald-50 text-emerald-700",
        tone === "remove" && "bg-rose-50 text-rose-700",
        tone === "modify" && "bg-amber-50 text-amber-800",
      )}
    >
      {label}
    </div>
  );
}
