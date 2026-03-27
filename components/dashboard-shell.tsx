"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  BrainCircuit,
  FolderKanban,
  Home,
  Settings,
  Sparkles,
  Target,
} from "lucide-react";
import { demoProjects } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const firstProject = demoProjects[0];

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/dashboard/projects", label: "Projects", icon: FolderKanban },
  { href: `/dashboard/projects/${firstProject.id}/decoder`, label: "Audience Decoder", icon: BrainCircuit },
  { href: `/dashboard/projects/${firstProject.id}/planner`, label: "Channel Planner", icon: Target },
  { href: `/dashboard/projects/${firstProject.id}/analyzer`, label: "Ad Analyzer", icon: BarChart3 },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export function DashboardShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(194,241,220,0.58),transparent_24%),radial-gradient(circle_at_top_right,rgba(193,227,255,0.68),transparent_28%),linear-gradient(180deg,#f7f8f4_0%,#fcfcf9_38%,#ffffff_100%)]">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="hidden border-r border-slate-200/70 bg-white/[0.75] px-5 py-6 backdrop-blur-xl lg:block">
          <Link href="/" className="flex items-center gap-3 px-3">
            <div className="gradient-stroke flex h-12 w-12 items-center justify-center rounded-2xl text-slate-950 shadow-soft">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <div className="font-display text-lg font-semibold text-slate-950">Consumer Behavior Decoder</div>
              <div className="text-xs text-slate-500">Strategy command center</div>
            </div>
          </Link>

          <div className="mt-8 space-y-2">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition",
                    active
                      ? "bg-slate-950 text-white shadow-soft"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="mt-8 rounded-[28px] border border-slate-200 bg-white/90 p-5 shadow-soft">
            <div className="text-sm font-semibold text-slate-950">Premium demo workspace</div>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Explore seeded projects, compare channels, review positioning strategy, and analyze campaign quality.
            </p>
            <Badge className="mt-4 border-emerald-200 bg-emerald-50 text-emerald-700">Demo mode active</Badge>
          </div>
        </aside>

        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/[0.75] backdrop-blur-xl">
            <div className="flex h-20 items-center justify-between px-5 md:px-8">
              <div>
                <div className="text-sm text-slate-500">Workspace overview</div>
                <div className="font-display text-2xl font-semibold text-slate-950">AI marketing intelligence</div>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="hidden border-sky-200 bg-sky-50 text-sky-700 md:inline-flex">
                  Insight confidence 91%
                </Badge>
                <Link href="/dashboard/projects/new">
                  <Button>Create new project</Button>
                </Link>
              </div>
            </div>
          </header>
          <main className="flex-1 px-5 py-6 md:px-8 md:py-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
