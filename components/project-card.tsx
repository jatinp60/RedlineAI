import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/types";
import { scoreTone } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="rounded-[34px] border border-slate-200 bg-white/90 p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-slate-500">{project.category}</div>
          <h3 className="mt-3 text-2xl font-semibold text-slate-950">{project.name}</h3>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">{project.description}</p>
        </div>
        <Badge className="border-slate-200 bg-slate-50 text-slate-600">{project.lastUpdated}</Badge>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
          <div className="text-xs text-slate-500">Price point</div>
          <div className="mt-2 text-sm font-semibold text-slate-950">{project.pricePoint}</div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
          <div className="text-xs text-slate-500">Region</div>
          <div className="mt-2 text-sm font-semibold text-slate-950">{project.region}</div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
          <div className="text-xs text-slate-500">Business type</div>
          <div className="mt-2 text-sm font-semibold capitalize text-slate-950">{project.businessType}</div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
          <div className="text-xs text-slate-500">Predicted CAC efficiency</div>
          <div className="mt-2 text-sm font-semibold text-slate-950">{project.metrics.cac}</div>
        </div>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <div className="mb-2 flex justify-between text-sm text-slate-500">
            <span>Project score</span>
            <span>
              {project.score}/100 · {scoreTone(project.score)}
            </span>
          </div>
          <Progress value={project.score} />
        </div>
        <Link
          href={`/dashboard/projects/${project.id}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-sky-700"
        >
          Open workspace
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </Card>
  );
}
