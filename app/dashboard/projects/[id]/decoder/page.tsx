import { notFound } from "next/navigation";
import { InsightList } from "@/components/insight-list";
import { LoadingStateCard } from "@/components/loading-state-card";
import { ProjectHeader } from "@/components/project-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { decoderInsights, demoProjects } from "@/lib/data";

export default async function DecoderPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = demoProjects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  const insights = decoderInsights[id];

  return (
    <div className="space-y-6">
      <ProjectHeader project={project} active="decoder" />

      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <Card className="rounded-[34px] border border-slate-200 bg-white/90 p-6">
          <h2 className="text-2xl font-semibold text-slate-950">Audience Decoder</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Enter positioning context, perceived value, and any existing audience signal to generate a premium marketing
            strategy profile.
          </p>
          <div className="mt-6 grid gap-4">
            <Input defaultValue={project.productName} placeholder="Product name" />
            <Textarea defaultValue={project.description} placeholder="Short description" />
            <Input defaultValue="Calm-performance skincare for breakout-prone, sensitive routines" placeholder="Brand positioning" />
            <Input defaultValue={project.pricePoint} placeholder="Price range" />
            <Input defaultValue="Premium but accessible" placeholder="Perceived value" />
            <Input defaultValue="Skin-conscious women 24-34 with active skincare routines" placeholder="Current audience if known" />
            <Button size="lg">Generate decoder report</Button>
          </div>
        </Card>

        <div className="space-y-6">
          <LoadingStateCard />
          <InsightList insights={insights} />
        </div>
      </div>
    </div>
  );
}
