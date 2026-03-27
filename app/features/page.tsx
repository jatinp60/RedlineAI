import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { RedlineLogo } from "@/components/redline-logo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const sections = [
  {
    title: "Fast local comparison",
    copy: "Redline AI runs entirely in the browser for this first version, making the experience instant, lightweight, and easy to trust.",
  },
  {
    title: "Review-friendly outputs",
    copy: "Instead of code-style diff noise, changes are grouped into readable revision blocks across side-by-side, inline, and changes-only views.",
  },
  {
    title: "Built for real writing workflows",
    copy: "Use it for essays, resumes, revisions after professor feedback, marketing copy updates, or AI rewrite checks.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(246,241,236,0.92),transparent_26%),radial-gradient(circle_at_top_right,rgba(241,244,250,0.9),transparent_32%),linear-gradient(180deg,#f9f8f6_0%,#f6f5f2_45%,#fcfcfb_100%)]">
      <div className="mx-auto max-w-[1180px] px-4 py-6 sm:px-6 lg:px-8">
        <header className="rounded-[28px] border border-white/80 bg-white/92 px-5 py-4 shadow-[0_18px_70px_rgba(15,23,42,0.05)] backdrop-blur-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <RedlineLogo subtitle="Product details" imageClassName="h-10 w-10 rounded-2xl" />
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/jatinpatel06/?skipRedirect=true"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="secondary">Jatin Patel</Button>
              </a>
              <Link href="/">
                <Button variant="secondary">Back home</Button>
              </Link>
              <Link href="/compare">
                <Button className="gap-2">
                  Open compare app
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </header>

        <main className="py-14">
          <Badge className="border-slate-200 bg-white/90 text-slate-700">Clear revision intelligence</Badge>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-6xl">
            A polished comparison workspace for text-heavy teams and individuals.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Redline AI is positioned as a premium productivity tool for understanding how writing changed, not as a
            generic AI wrapper. It focuses on fast UX, elegant information design, and a believable startup-grade
            front-end.
          </p>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {sections.map((section) => (
              <Card key={section.title} className="rounded-[30px] border border-white/70 bg-white/88 p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h2 className="mt-6 font-display text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                  {section.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{section.copy}</p>
              </Card>
            ))}
          </div>

          <Card className="mt-12 rounded-[34px] border border-white/70 bg-slate-950 p-8 text-white">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <div className="text-sm uppercase tracking-[0.28em] text-white/55">External tooling</div>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em]">
                  Need a separate AI detector?
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/72">
                  The app includes a clear outbound shortcut to GPTZero so users understand it as an external resource,
                  not an internal scan.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Link href="/compare">
                  <Button size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
                    Launch Redline AI
                  </Button>
                </Link>
                <a
                  href="https://gptzero.me/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  Open GPTZero
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Card>

          <footer className="mt-10 border-t border-white/70 pt-6 text-sm text-slate-500">
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
        </main>
      </div>
    </div>
  );
}
