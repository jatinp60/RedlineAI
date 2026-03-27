import Link from "next/link";
import { BrainCircuit, LayoutDashboard, Target, BarChart3 } from "lucide-react";
import { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

const items = [
  { key: "overview", label: "Overview", icon: LayoutDashboard, href: "" },
  { key: "decoder", label: "Audience Decoder", icon: BrainCircuit, href: "/decoder" },
  { key: "planner", label: "Channel Planner", icon: Target, href: "/planner" },
  { key: "analyzer", label: "Ad Analyzer", icon: BarChart3, href: "/analyzer" },
];

export function ProjectWorkspaceNav({
  project,
  active,
}: {
  project: Project;
  active: "overview" | "decoder" | "planner" | "analyzer";
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => (
        <Link
          key={item.key}
          href={`/dashboard/projects/${project.id}${item.href}`}
          className={cn(
            "inline-flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm transition",
            active === item.key
              ? "border-slate-950 bg-slate-950 text-white shadow-soft"
              : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-950",
          )}
        >
          <item.icon className="h-4 w-4" />
          {item.label}
        </Link>
      ))}
    </div>
  );
}
