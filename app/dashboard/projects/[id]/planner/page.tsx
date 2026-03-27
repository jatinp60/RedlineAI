import { notFound } from "next/navigation";
import { PlatformPlanCard } from "@/components/platform-plan-card";
import { ProjectHeader } from "@/components/project-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { platformPlans, demoProjects } from "@/lib/data";

export default async function PlannerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = demoProjects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  const plans = platformPlans[id];

  return (
    <div className="space-y-6">
      <ProjectHeader project={project} active="planner" />

      <div className="grid gap-6 xl:grid-cols-[0.88fr_1.12fr]">
        <Card className="rounded-[34px] border border-slate-200 bg-white/90 p-6">
          <h2 className="text-2xl font-semibold text-slate-950">Channel Planner</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Choose a platform and campaign objective to generate platform-specific ad structure, audience, KPI, and
            testing guidance.
          </p>
          <div className="mt-6 grid gap-4">
            <Input defaultValue={plans[0].platform} placeholder="Marketing platform" />
            <Input defaultValue={plans[0].objective} placeholder="Campaign objective" />
            <Input defaultValue="Warm + cold audience mix" placeholder="Audience strategy" />
            <Input defaultValue="Retargeting plus creative testing" placeholder="Funnel stage preference" />
            <Button size="lg">Generate recommendation</Button>
          </div>

          <Card className="mt-6 rounded-[28px] border border-slate-200 bg-slate-50/70 p-5">
            <h3 className="text-lg font-semibold text-slate-950">Side-by-side platform comparison</h3>
            <div className="mt-4 space-y-3">
              {plans.map((plan) => (
                <div key={plan.platform} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-slate-950">{plan.platform}</div>
                    <div className="text-sm text-sky-700">{plan.score}% confidence</div>
                  </div>
                  <div className="mt-2 text-sm text-slate-600">{plan.kpiFocus}</div>
                </div>
              ))}
            </div>
          </Card>
        </Card>

        <Tabs defaultValue={plans[0].platform} className="space-y-5">
          <TabsList>
            {plans.map((plan) => (
              <TabsTrigger key={plan.platform} value={plan.platform}>
                {plan.platform}
              </TabsTrigger>
            ))}
          </TabsList>
          {plans.map((plan) => (
            <TabsContent key={plan.platform} value={plan.platform}>
              <PlatformPlanCard plan={plan} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
