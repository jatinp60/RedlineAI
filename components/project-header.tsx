import { Download, Save } from "lucide-react";
import { Project } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { scoreTone } from "@/lib/utils";
import { ProjectWorkspaceNav } from "@/components/project-workspace-nav";

export function ProjectHeader({
  project,
  active,
}: {
  project: Project;
  active: "overview" | "decoder" | "planner" | "analyzer";
}) {
  return (
    <Card className="rounded-[38px] border border-white/70 bg-white/80 p-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.35em] text-slate-400">{project.category}</div>
            <h1 className="mt-4 font-display text-4xl font-semibold text-slate-950 md:text-5xl">{project.name}</h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">{project.description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button variant="secondary">
              <Save className="mr-2 h-4 w-4" />
              Save report
            </Button>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Export summary
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-5">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/90 p-4">
            <div className="text-xs text-slate-500">Product</div>
            <div className="mt-2 text-sm font-semibold text-slate-950">{project.productName}</div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50/90 p-4">
            <div className="text-xs text-slate-500">Stage</div>
            <div className="mt-2 text-sm font-semibold text-slate-950">{project.stage}</div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50/90 p-4">
            <div className="text-xs text-slate-500">Target region</div>
            <div className="mt-2 text-sm font-semibold text-slate-950">{project.region}</div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50/90 p-4">
            <div className="text-xs text-slate-500">Campaign score</div>
            <div className="mt-2 text-sm font-semibold text-slate-950">
              {project.score}/100 · {scoreTone(project.score)}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50/90 p-4">
            <div className="text-xs text-slate-500">Confidence</div>
            <div className="mt-2 text-sm font-semibold text-slate-950">{project.confidence}%</div>
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-slate-50/85 p-5">
          <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
            <span>Campaign score meter</span>
            <span>{project.score}/100</span>
          </div>
          <Progress value={project.score} />
          <div className="mt-3 flex flex-wrap gap-3">
            {project.channels.map((channel) => (
              <Badge key={channel} className="border-slate-200 bg-white text-slate-700">
                {channel}
              </Badge>
            ))}
          </div>
        </div>

        <ProjectWorkspaceNav project={project} active={active} />
      </div>
    </Card>
  );
}
