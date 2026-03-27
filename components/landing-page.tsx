"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, FileDiff, Files, Highlighter, Layers3, Sparkles } from "lucide-react";
import { HowItWorksDemo } from "@/components/how-it-works-demo";
import { RedlineLogo } from "@/components/redline-logo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const features = [
  {
    title: "Readable diffing",
    description: "See additions, removals, and rewrites with calm visual emphasis instead of a noisy developer diff.",
    icon: Highlighter,
  },
  {
    title: "Built for writing workflows",
    description: "Compare essays, resumes, marketing copy, AI rewrites, and revision-heavy documents in seconds.",
    icon: FileDiff,
  },
  {
    title: "Three review modes",
    description: "Use side-by-side, inline, or changes-only views depending on whether you need context or focus.",
    icon: Layers3,
  },
];

export function LandingPage() {
  return (
    <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(246,241,236,0.95),transparent_28%),radial-gradient(circle_at_top_right,rgba(241,244,250,0.9),transparent_34%),linear-gradient(180deg,#f9f8f6_0%,#f6f5f3_46%,#fcfcfb_100%)] text-slate-950">
      <div className="absolute inset-x-0 top-0 h-[620px] bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,rgba(255,255,255,1),rgba(255,255,255,0))]" />
      <div className="relative mx-auto max-w-[1240px] px-4 pb-20 pt-5 sm:px-6 lg:px-8">
        <header className="sticky top-0 z-20 rounded-[28px] border border-white/80 bg-white/92 px-4 py-4 shadow-[0_20px_70px_rgba(15,23,42,0.05)] backdrop-blur-xl sm:px-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <RedlineLogo subtitle="Premium text comparison" imageClassName="h-11 w-11 rounded-2xl" />

            <nav className="flex flex-wrap items-center gap-2 sm:gap-3">
              <a href="#features" className="rounded-full px-4 py-2 text-sm text-slate-600 transition hover:bg-white hover:text-slate-950">
                Features
              </a>
              <a href="#how-it-works" className="rounded-full px-4 py-2 text-sm text-slate-600 transition hover:bg-white hover:text-slate-950">
                How it works
              </a>
              <Link href="/features" className="rounded-full px-4 py-2 text-sm text-slate-600 transition hover:bg-white hover:text-slate-950">
                Details
              </Link>
              <a
                href="https://www.linkedin.com/in/jatinpatel06/?skipRedirect=true"
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-4 py-2 text-sm text-slate-600 transition hover:bg-white hover:text-slate-950"
              >
                LinkedIn
              </a>
              <Link href="/compare">
                <Button>Try It Free</Button>
              </Link>
            </nav>
          </div>
        </header>

        <section className="grid min-h-[calc(100vh-120px)] items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <Badge className="border-slate-200 bg-white/90 text-slate-700 shadow-sm">See exactly what changed.</Badge>
            <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-6xl lg:text-7xl">
              Understand revisions without guessing.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Redline AI helps you compare two versions of text and instantly identify additions, deletions, and
              rewrites in a clean, product-grade interface built for modern writing workflows.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/compare">
                <Button size="lg" className="gap-2">
                  Try It Free
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/compare">
                <Button size="lg" variant="secondary" className="gap-2">
                  View Demo
                  <Sparkles className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {["Fast browser-based compare", "Clean summary counts", "Designed for students, teams, and writers", "GPTZero shortcut for external checking"].map(
                (item) => (
                  <div key={item} className="rounded-[22px] border border-white/70 bg-white/70 px-4 py-3 text-sm text-slate-600 shadow-soft">
                    {item}
                  </div>
                ),
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -left-6 top-10 hidden h-32 w-32 rounded-full bg-amber-100/60 blur-3xl lg:block" />
            <div className="absolute -right-6 bottom-10 hidden h-40 w-40 rounded-full bg-sky-100/70 blur-3xl lg:block" />
            <HeroPreview />
          </motion.div>
        </section>

        <section id="features" className="py-10 sm:py-16">
          <div className="max-w-2xl">
            <div className="text-sm uppercase tracking-[0.3em] text-slate-400">Features</div>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
              A premium revision tool, not a generic AI app.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Every part of the experience is tuned for clarity: spacious layout, crisp typography, polished state
              transitions, and fast comparison without backend complexity.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <Card className="h-full rounded-[30px] border border-white/70 bg-white/85 p-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-soft">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="grid gap-6 py-10 sm:py-16 lg:grid-cols-[0.88fr_1.12fr]">
          <HowItWorksDemo />

          <Card id="how-it-works" className="rounded-[32px] border border-white/70 bg-white/88 p-8">
            <div className="text-sm uppercase tracking-[0.28em] text-slate-400">How it works</div>
            <div className="mt-6 space-y-5">
              {[
                ["Paste or upload two versions", "Drop in an original draft and a revised draft, or upload plain text files."],
                ["Run the comparison instantly", "Redline AI groups additions, deletions, and rewrites into readable visual segments."],
                ["Review in the format you prefer", "Move between side-by-side, inline, and changes-only views without losing context."],
              ].map(([title, copy], index) => (
                <div key={title} className="grid gap-4 rounded-[24px] border border-slate-200 bg-slate-50/70 p-5 sm:grid-cols-[auto_1fr] sm:items-start">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-slate-950 shadow-soft">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-slate-950">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section className="py-10 sm:py-16">
          <Card className="rounded-[36px] border border-white/70 bg-white/88 p-8 sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="text-sm uppercase tracking-[0.28em] text-slate-400">Ready to review faster?</div>
                <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
                  Instantly spot edits, removals, and rewrites.
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Try the live compare workspace and explore a polished first version of Redline AI.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/compare">
                  <Button size="lg" className="gap-2">
                    Try It Free
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <a
                  href="https://gptzero.me/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 shadow-soft transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950"
                >
                  External AI Detection
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Card>
        </section>

        <footer className="border-t border-white/70 px-1 pt-8 text-sm text-slate-500">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>Made by Jatin Patel</div>
            <a
              href="https://www.linkedin.com/in/jatinpatel06/?skipRedirect=true"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-medium text-slate-700 transition hover:text-slate-950"
            >
              Connect on LinkedIn
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

function HeroPreview() {
  return (
    <Card className="rounded-[36px] border border-white/70 bg-white/88 p-5 shadow-[0_30px_100px_rgba(15,23,42,0.08)] sm:p-6">
      <div className="rounded-[28px] border border-slate-200 bg-slate-50/80 p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white">
              <Files className="h-4 w-4" />
            </div>
            <div>
              <div className="font-display text-lg font-semibold tracking-[-0.03em] text-slate-950">Live compare preview</div>
              <div className="text-sm text-slate-500">Original vs revised marketing copy</div>
            </div>
          </div>
          <Badge className="border-slate-200 bg-white text-slate-700">Changes Only</Badge>
        </div>

        <div className="mt-5 grid gap-4 xl:grid-cols-2">
          <div className="rounded-[24px] border border-slate-200 bg-white p-4">
            <div className="text-xs uppercase tracking-[0.24em] text-slate-400">Original</div>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Our platform helps teams review writing changes quickly. Users can compare drafts, see edits, and save
              time when checking revisions.
            </p>
          </div>
          <div className="rounded-[24px] border border-slate-200 bg-white p-4">
            <div className="text-xs uppercase tracking-[0.24em] text-slate-400">Revised</div>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              <span className="rounded-md bg-amber-100 px-1.5 py-0.5 text-amber-950">Redline AI gives teams a faster, clearer way</span>{" "}
              to review writing changes. Compare two drafts{" "}
              <span className="rounded-md bg-emerald-100 px-1.5 py-0.5 text-emerald-900">instantly</span>, surface rewrites in
              context, and understand revisions without{" "}
              <span className="rounded-md bg-rose-100 px-1.5 py-0.5 text-rose-900 line-through">save time when checking</span>{" "}
              slowing down your workflow.
            </p>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[
            ["7", "Total changes"],
            ["3", "Additions"],
            ["1", "Deletion"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-[22px] border border-slate-200 bg-white p-4">
              <div className="font-display text-2xl font-semibold tracking-[-0.04em] text-slate-950">{value}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-400">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
