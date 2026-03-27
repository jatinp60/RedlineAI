import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { ProjectHeader } from "@/components/project-header";
import { SearchBar } from "@/components/search-bar";
import { Card } from "@/components/ui/card";
import { demoProjects } from "@/lib/data";

export default async function ProjectOverviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = demoProjects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <ProjectHeader project={project} active="overview" />

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card className="rounded-[32px] border border-slate-200 bg-white/90 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-950">Workspace overview</h2>
              <p className="mt-2 text-sm text-slate-500">
                Move from niche selection to platform guidance and campaign diagnostics.
              </p>
            </div>
            <SearchBar placeholder="Search insights or reports" />
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Audience Decoder",
                copy: "Audience segmentation, psychographics, pain points, value proposition, and creative direction.",
                href: `/dashboard/projects/${project.id}/decoder`,
              },
              {
                title: "Channel Planner",
                copy: "Platform-specific strategy, objective guidance, testing plans, and KPI focus by funnel stage.",
                href: `/dashboard/projects/${project.id}/planner`,
              },
              {
                title: "Ad Analyzer",
                copy: "Assess campaign structure, messaging, targeting, landing-page alignment, and optimization opportunities.",
                href: `/dashboard/projects/${project.id}/analyzer`,
              },
              {
                title: "Saved reports",
                copy: "Keep executive-ready outputs, export summaries, and strategic recommendations in one project memory layer.",
                href: `/dashboard/projects/${project.id}/decoder`,
              },
            ].map((item) => (
              <Link key={item.title} href={item.href} className="rounded-[28px] border border-slate-200 bg-slate-50/60 p-5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white">
                <div className="text-lg font-semibold text-slate-950">{item.title}</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.copy}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                  Open tool
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </Card>

        <Card className="rounded-[32px] border border-slate-200 bg-white/90 p-6">
          <h2 className="text-2xl font-semibold text-slate-950">Current KPI snapshot</h2>
          <div className="mt-5 grid gap-4">
            {[
              { label: "Click-through rate", value: project.metrics.ctr },
              { label: "Conversion rate", value: project.metrics.cvr },
              { label: "Customer acquisition cost", value: project.metrics.cac },
              { label: "Return on ad spend", value: project.metrics.roas },
            ].map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                <div className="text-xs text-slate-500">{metric.label}</div>
                <div className="mt-2 font-display text-3xl text-slate-950">{metric.value}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
