import { notFound } from "next/navigation";
import { AnalyzerReportView } from "@/components/analyzer-report";
import { ProjectHeader } from "@/components/project-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { analyzerReports, demoProjects } from "@/lib/data";

export default async function AnalyzerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = demoProjects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  const report = analyzerReports[id];

  return (
    <div className="space-y-6">
      <ProjectHeader project={project} active="analyzer" />

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <Card className="rounded-[34px] border border-slate-200 bg-white/90 p-6">
          <h2 className="text-2xl font-semibold text-slate-950">Ad Analyzer</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Paste or upload campaign details to assess campaign structure, audience quality, messaging, funnel fit, and
            optimization opportunities.
          </p>
          <div className="mt-6 grid gap-4">
            <Input defaultValue={project.channels[0]} placeholder="Platform" />
            <Input defaultValue="Conversions" placeholder="Objective" />
            <Input defaultValue="Women 24-34, skincare interests, site retargeting" placeholder="Audience" />
            <Input defaultValue="$150/day" placeholder="Budget" />
            <Input defaultValue="Calm your skin barrier without irritation." placeholder="Headline" />
            <Textarea
              defaultValue="Clinically fluent serum positioning with reassurance-focused primary text, proof-led CTA, and conversion-oriented landing page handoff."
              placeholder="Primary text or campaign notes"
            />
            <Input defaultValue="Shop now" placeholder="CTA" />
            <Input defaultValue="https://example.com/landing-page" placeholder="Landing page URL" />
            <Button size="lg">Analyze campaign</Button>
          </div>
        </Card>

        <AnalyzerReportView report={report} />
      </div>
    </div>
  );
}
