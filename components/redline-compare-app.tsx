"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState, type RefObject } from "react";
import {
  ArrowLeftRight,
  ArrowUpRight,
  Clipboard,
  Copy,
  FileText,
  LoaderCircle,
  RefreshCcw,
  Sparkles,
  Trash2,
  Upload,
} from "lucide-react";
import { RedlineLogo } from "@/components/redline-logo";
import { demoExamples } from "@/lib/redline-demo";
import {
  buildDiffSegments,
  countCharacters,
  countWords,
  summarizeDiff,
  toPlaintextDiff,
  type DiffSegment,
} from "@/lib/redline";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

type ViewMode = "side-by-side" | "inline" | "changes-only";
type PanelSide = "original" | "revised";

const panelCopy = {
  original: {
    title: "Original text",
    hint: "Paste the first version or drop a .txt file here.",
  },
  revised: {
    title: "Revised text",
    hint: "Paste the updated version or drop a .txt file here.",
  },
};

export function RedlineCompareApp() {
  const [originalText, setOriginalText] = useState(demoExamples[0].original);
  const [revisedText, setRevisedText] = useState(demoExamples[0].revised);
  const [segments, setSegments] = useState<DiffSegment[]>([]);
  const [viewMode, setViewMode] = useState<ViewMode>("side-by-side");
  const [isComparing, setIsComparing] = useState(false);
  const [statusMessage, setStatusMessage] = useState("Loaded with a live demo so you can explore the experience immediately.");
  const [copied, setCopied] = useState(false);
  const [activeDemo, setActiveDemo] = useState(demoExamples[0].id);
  const [dragging, setDragging] = useState<PanelSide | null>(null);

  const originalInputRef = useRef<HTMLInputElement>(null);
  const revisedInputRef = useRef<HTMLInputElement>(null);

  const summary = summarizeDiff(segments);
  const hasComparison = segments.some((segment) => segment.type !== "equal");

  async function handleCompare() {
    setIsComparing(true);
    setStatusMessage("Comparing drafts and grouping changes into readable revision blocks.");

    await new Promise((resolve) => {
      window.setTimeout(resolve, 650);
    });

    const nextSegments = buildDiffSegments(originalText, revisedText);
    setSegments(nextSegments);
    setStatusMessage(
      nextSegments.some((segment) => segment.type !== "equal")
        ? "Comparison ready. Switch views to inspect edits in the format that fits your workflow."
        : "These versions are effectively identical. Try another demo or change the text to surface revisions.",
    );
    setIsComparing(false);
  }

  async function handleCopyResult() {
    if (!segments.length) {
      return;
    }

    await navigator.clipboard.writeText(toPlaintextDiff(segments));
    setCopied(true);
    setStatusMessage("Copied the current comparison output to your clipboard.");
    window.setTimeout(() => setCopied(false), 1800);
  }

  function handleSwap() {
    setOriginalText(revisedText);
    setRevisedText(originalText);
    setSegments([]);
    setStatusMessage("Swapped both drafts. Run compare again to see the reversed revision view.");
  }

  function handleClearAll() {
    setOriginalText("");
    setRevisedText("");
    setSegments([]);
    setActiveDemo("");
    setStatusMessage("Cleared both panels. Paste new text or load a sample to continue.");
  }

  function loadDemo(id: string) {
    const selected = demoExamples.find((example) => example.id === id);
    if (!selected) {
      return;
    }

    setActiveDemo(id);
    setOriginalText(selected.original);
    setRevisedText(selected.revised);
    setSegments([]);
    setStatusMessage(`Loaded the ${selected.label.toLowerCase()} example. Compare when you're ready.`);
  }

  async function processFile(file: File, side: PanelSide) {
    if (file.name.endsWith(".docx")) {
      setStatusMessage("DOCX support is reserved for a future pass. For now, use plain text or a .txt file.");
      return;
    }

    if (!file.type.startsWith("text/") && !file.name.endsWith(".txt")) {
      setStatusMessage("Only plain text files are supported in this first version.");
      return;
    }

    const contents = await file.text();
    if (side === "original") {
      setOriginalText(contents);
    } else {
      setRevisedText(contents);
    }

    setSegments([]);
    setStatusMessage(`Loaded ${file.name} into the ${side} panel.`);
  }

  function openFilePicker(side: PanelSide) {
    if (side === "original") {
      originalInputRef.current?.click();
      return;
    }

    revisedInputRef.current?.click();
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(246,241,236,0.88),transparent_32%),radial-gradient(circle_at_top_right,rgba(241,244,250,0.92),transparent_35%),linear-gradient(180deg,#f9f8f6_0%,#f5f4f1_48%,#fcfcfb_100%)] text-slate-900">
      <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-4 py-5 sm:px-6 lg:px-8">
        <header className="sticky top-0 z-20 mb-6 rounded-[28px] border border-white/80 bg-white/92 px-4 py-4 shadow-[0_20px_80px_rgba(15,23,42,0.05)] backdrop-blur-xl sm:px-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:text-slate-950"
              >
                <ArrowLeftRight className="h-5 w-5" />
              </Link>
              <RedlineLogo subtitle="Revision comparison workspace" imageClassName="h-10 w-10 rounded-2xl" />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.linkedin.com/in/jatinpatel06/?skipRedirect=true"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 shadow-soft transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950"
              >
                Jatin Patel
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <Button variant="secondary" className="gap-2" onClick={handleSwap}>
                <RefreshCcw className="h-4 w-4" />
                Swap texts
              </Button>
              <Button variant="secondary" className="gap-2" onClick={handleClearAll}>
                <Trash2 className="h-4 w-4" />
                Clear all
              </Button>
              <a
                href="https://gptzero.me/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 shadow-soft transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950"
              >
                Check with GPTZero
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </header>

        <main className="grid flex-1 gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <section className="space-y-6">
            <Card className="rounded-[32px] border border-white/70 bg-white/85 p-5 sm:p-6">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <Badge className="mb-3 border-slate-200 bg-slate-50 text-slate-700">Fast, local comparison</Badge>
                    <h1 className="font-display text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                      Compare drafts, line by line.
                    </h1>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                      Paste two versions of your writing, upload a text file, and surface additions, deletions, and
                      rewrites in a format that feels calm, premium, and easy to scan.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {demoExamples.map((example) => (
                      <button
                        key={example.id}
                        type="button"
                        onClick={() => loadDemo(example.id)}
                        className={cn(
                          "rounded-full border px-4 py-2 text-sm font-medium transition",
                          activeDemo === example.id
                            ? "border-slate-900 bg-slate-950 text-white"
                            : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-950",
                        )}
                      >
                        {example.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 xl:grid-cols-2">
                  <TextPanel
                    side="original"
                    value={originalText}
                    onChange={setOriginalText}
                    dragging={dragging === "original"}
                    onDragStateChange={setDragging}
                    onFile={processFile}
                    onOpenPicker={openFilePicker}
                    inputRef={originalInputRef}
                  />
                  <TextPanel
                    side="revised"
                    value={revisedText}
                    onChange={setRevisedText}
                    dragging={dragging === "revised"}
                    onDragStateChange={setDragging}
                    onFile={processFile}
                    onOpenPicker={openFilePicker}
                    inputRef={revisedInputRef}
                  />
                </div>

                <div className="flex flex-col gap-4 rounded-[28px] border border-slate-200 bg-slate-50/70 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-sm text-slate-600">{statusMessage}</div>
                  <div className="flex flex-wrap gap-3">
                    <Button className="gap-2" onClick={handleCompare} disabled={isComparing || (!originalText && !revisedText)}>
                      {isComparing ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                      Compare now
                    </Button>
                    <Button variant="secondary" className="gap-2" onClick={handleCopyResult} disabled={!segments.length}>
                      {copied ? <Clipboard className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      {copied ? "Copied" : "Copy result"}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="rounded-[32px] border border-white/70 bg-white/88 p-5 sm:p-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="font-display text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                    Comparison output
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Switch between contextual views depending on whether you want a quick scan, a reviewer-friendly
                    inline pass, or a clean list of changes only.
                  </p>
                </div>

                <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 p-1.5">
                  {(["side-by-side", "inline", "changes-only"] as ViewMode[]).map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => setViewMode(mode)}
                      className={cn(
                        "rounded-full px-4 py-2 text-sm font-medium capitalize transition",
                        viewMode === mode ? "bg-slate-950 text-white shadow-soft" : "text-slate-600 hover:text-slate-950",
                      )}
                    >
                      {mode.replace("-", " ")}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <AnimatePresence mode="wait">
                  {isComparing ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      className="grid gap-4 xl:grid-cols-2"
                    >
                      <LoadingCard />
                      <LoadingCard />
                    </motion.div>
                  ) : !segments.length ? (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      className="rounded-[28px] border border-dashed border-slate-300 bg-slate-50/80 p-10 text-center"
                    >
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-soft">
                        <FileText className="h-6 w-6 text-slate-500" />
                      </div>
                      <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                        Your diff will show up here
                      </h3>
                      <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600">
                        Use the seeded example or paste two versions of text, then run compare to reveal additions in
                        green, removals in red, and rewrites in amber.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={viewMode}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                    >
                      <ComparisonView mode={viewMode} segments={segments} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Card>
          </section>

          <aside className="space-y-6">
            <SummaryPanel summary={summary} />

            <Card className="rounded-[32px] border border-white/70 bg-white/88 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-slate-950">View guide</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Each view is tuned for a different review moment, from high-level scanning to revision-only
                    inspection.
                  </p>
                </div>
                <Badge className="border-slate-200 bg-slate-50 text-slate-700">External AI check available</Badge>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  ["Side-by-Side", "Best for tracking both versions at once with visual highlight blocks."],
                  ["Inline", "Reads like one flowing draft with edits embedded in context."],
                  ["Changes Only", "Filters out stable text and shows only the revision work."],
                ].map(([title, description]) => (
                  <div key={title} className="rounded-[24px] border border-slate-200 bg-slate-50/70 p-4">
                    <div className="font-medium text-slate-950">{title}</div>
                    <div className="mt-1 text-sm leading-6 text-slate-600">{description}</div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="rounded-[32px] border border-white/70 bg-slate-950 p-6 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
              <div className="text-sm uppercase tracking-[0.28em] text-white/55">Premium utility</div>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em]">Understand revisions without guessing.</h3>
              <p className="mt-3 text-sm leading-7 text-white/72">
                Redline AI is purpose-built for writers, students, recruiters, marketers, and anyone who needs to
                explain how text changed.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Essay edits", "Resume rewrites", "Professor feedback", "Marketing copy"].map((item) => (
                  <span key={item} className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-white/80">
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          </aside>
        </main>

        <footer className="mt-8 border-t border-white/70 px-1 pt-6 text-sm text-slate-500">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>Made by Jatin Patel</div>
            <a
              href="https://www.linkedin.com/in/jatinpatel06/?skipRedirect=true"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-medium text-slate-700 transition hover:text-slate-950"
            >
              Visit LinkedIn
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

function TextPanel({
  side,
  value,
  onChange,
  dragging,
  onDragStateChange,
  onFile,
  onOpenPicker,
  inputRef,
}: {
  side: PanelSide;
  value: string;
  onChange: (value: string) => void;
  dragging: boolean;
  onDragStateChange: (side: PanelSide | null) => void;
  onFile: (file: File, side: PanelSide) => Promise<void>;
  onOpenPicker: (side: PanelSide) => void;
  inputRef: RefObject<HTMLInputElement | null>;
}) {
  const meta = panelCopy[side];

  return (
    <div
      onDragOver={(event) => {
        event.preventDefault();
        onDragStateChange(side);
      }}
      onDragLeave={() => onDragStateChange(null)}
      onDrop={(event) => {
        event.preventDefault();
        onDragStateChange(null);
        const file = event.dataTransfer.files[0];
        if (file) {
          void onFile(file, side);
        }
      }}
      className={cn(
        "rounded-[30px] border p-4 transition sm:p-5",
        dragging
          ? "border-sky-300 bg-sky-50/80 shadow-[0_18px_40px_rgba(125,183,255,0.18)]"
          : "border-slate-200 bg-slate-50/70",
      )}
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-slate-950">{meta.title}</h3>
          <p className="mt-1 text-sm text-slate-500">{meta.hint}</p>
        </div>
        <button
          type="button"
          onClick={() => onOpenPicker(side)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 transition hover:border-slate-300 hover:text-slate-950"
        >
          <Upload className="h-4 w-4" />
        </button>
      </div>

      <Textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={side === "original" ? "Paste the original draft..." : "Paste the revised draft..."}
        className="min-h-[320px] resize-none border-white bg-white/95 text-[15px] leading-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]"
      />

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          <Badge className="border-slate-200 bg-white text-slate-600">{countWords(value)} words</Badge>
          <Badge className="border-slate-200 bg-white text-slate-600">{countCharacters(value)} characters</Badge>
        </div>
        <button
          type="button"
          onClick={() => onOpenPicker(side)}
          className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
        >
          Upload .txt
        </button>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept=".txt,.docx,text/plain"
        className="hidden"
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) {
            void onFile(file, side);
          }
          event.target.value = "";
        }}
      />
    </div>
  );
}

function SummaryPanel({
  summary,
}: {
  summary: {
    totalChanges: number;
    additions: number;
    deletions: number;
    modifications: number;
  };
}) {
  return (
    <Card className="rounded-[32px] border border-white/70 bg-white/88 p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-sm uppercase tracking-[0.28em] text-slate-400">Summary</div>
          <h2 className="mt-2 font-display text-2xl font-semibold tracking-[-0.03em] text-slate-950">
            Change snapshot
          </h2>
        </div>
        <div className="rounded-[24px] bg-slate-950 px-4 py-3 text-right text-white shadow-soft">
          <div className="text-xs uppercase tracking-[0.2em] text-white/60">Total</div>
          <div className="font-display text-2xl font-semibold">{summary.totalChanges}</div>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <SummaryStat label="Additions" value={summary.additions} className="bg-emerald-50 text-emerald-700" />
        <SummaryStat label="Deletions" value={summary.deletions} className="bg-rose-50 text-rose-700" />
        <SummaryStat label="Modifications" value={summary.modifications} className="bg-amber-50 text-amber-700" />
        <SummaryStat label="Views" value={3} className="bg-slate-100 text-slate-700" />
      </div>
    </Card>
  );
}

function SummaryStat({
  label,
  value,
  className,
}: {
  label: string;
  value: number;
  className: string;
}) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-4">
      <div className={cn("inline-flex rounded-full px-3 py-1 text-xs font-semibold", className)}>{label}</div>
      <div className="mt-4 font-display text-3xl font-semibold tracking-[-0.03em] text-slate-950">{value}</div>
    </div>
  );
}

function LoadingCard() {
  return (
    <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white p-5">
      <div className="h-4 w-28 animate-pulse rounded-full bg-slate-200" />
      <div className="mt-5 space-y-3">
        {[70, 100, 88, 94, 62].map((width) => (
          <div key={width} className="h-4 animate-pulse rounded-full bg-slate-100" style={{ width: `${width}%` }} />
        ))}
      </div>
    </div>
  );
}

function ComparisonView({ mode, segments }: { mode: ViewMode; segments: DiffSegment[] }) {
  if (mode === "side-by-side") {
    return (
      <div className="grid gap-4 xl:grid-cols-2">
        <RenderPane title="Original" segments={segments} side="original" />
        <RenderPane title="Revised" segments={segments} side="revised" />
      </div>
    );
  }

  if (mode === "inline") {
    return (
      <div className="rounded-[28px] border border-slate-200 bg-white p-5 text-[15px] leading-8 text-slate-800">
        {segments.map((segment, index) => (
          <InlineSegment key={`${segment.type}-${index}`} segment={segment} />
        ))}
      </div>
    );
  }

  const filtered = segments.filter((segment) => segment.type !== "equal");

  return (
    <div className="space-y-3">
      {filtered.length ? (
        filtered.map((segment, index) => (
          <div key={`${segment.type}-${index}`} className="rounded-[24px] border border-slate-200 bg-white p-4">
            {segment.type === "modify" ? (
              <div className="grid gap-3 lg:grid-cols-2">
                <ChangeTile label="Before" tone="remove" text={segment.oldText} />
                <ChangeTile label="After" tone="modify" text={segment.newText} />
              </div>
            ) : (
              <ChangeTile label={segment.type === "add" ? "Added" : "Removed"} tone={segment.type} text={segment.text} />
            )}
          </div>
        ))
      ) : (
        <div className="rounded-[24px] border border-slate-200 bg-white p-6 text-sm text-slate-600">
          No distinct changes to isolate yet.
        </div>
      )}
    </div>
  );
}

function RenderPane({
  title,
  segments,
  side,
}: {
  title: string;
  segments: DiffSegment[];
  side: "original" | "revised";
}) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="font-display text-xl font-semibold tracking-[-0.03em] text-slate-950">{title}</div>
        <Badge className="border-slate-200 bg-slate-50 text-slate-600">{side === "original" ? "Source" : "Updated"}</Badge>
      </div>
      <div className="whitespace-pre-wrap text-[15px] leading-8 text-slate-800">
        {segments.map((segment, index) => (
          <PaneSegment key={`${segment.type}-${index}`} segment={segment} side={side} />
        ))}
      </div>
    </div>
  );
}

function PaneSegment({ segment, side }: { segment: DiffSegment; side: "original" | "revised" }) {
  if (segment.type === "equal") {
    return <span>{segment.text}</span>;
  }

  if (segment.type === "modify") {
    if (side === "original") {
      return <span className="rounded-lg bg-amber-100 px-1.5 py-0.5 text-amber-950 line-through">{segment.oldText}</span>;
    }

    return <span className="rounded-lg bg-amber-100 px-1.5 py-0.5 text-amber-950">{segment.newText}</span>;
  }

  if (segment.type === "add") {
    if (side === "original") {
      return null;
    }
    return <span className="rounded-lg bg-emerald-100 px-1.5 py-0.5 text-emerald-900">{segment.text}</span>;
  }

  if (segment.type === "remove") {
    if (side === "revised") {
      return null;
    }
    return <span className="rounded-lg bg-rose-100 px-1.5 py-0.5 text-rose-900 line-through">{segment.text}</span>;
  }
}

function InlineSegment({ segment }: { segment: DiffSegment }) {
  if (segment.type === "equal") {
    return <span>{segment.text}</span>;
  }

  if (segment.type === "add") {
    return <span className="rounded-lg bg-emerald-100 px-1.5 py-0.5 text-emerald-900">{segment.text}</span>;
  }

  if (segment.type === "remove") {
    return <span className="rounded-lg bg-rose-100 px-1.5 py-0.5 text-rose-900 line-through">{segment.text}</span>;
  }

  return (
    <>
      <span className="rounded-lg bg-amber-100 px-1.5 py-0.5 text-amber-950 line-through">{segment.oldText}</span>
      <span className="mx-1 text-slate-300">→</span>
      <span className="rounded-lg bg-amber-100 px-1.5 py-0.5 text-amber-950">{segment.newText}</span>
    </>
  );
}

function ChangeTile({
  label,
  tone,
  text,
}: {
  label: string;
  tone: "add" | "remove" | "modify";
  text: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[20px] p-4 text-sm leading-7",
        tone === "add" && "bg-emerald-50 text-emerald-900",
        tone === "remove" && "bg-rose-50 text-rose-900",
        tone === "modify" && "bg-amber-50 text-amber-950",
      )}
    >
      <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] opacity-70">{label}</div>
      <div className="whitespace-pre-wrap">{text}</div>
    </div>
  );
}
