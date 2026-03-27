import { ArrowUpRight } from "lucide-react";
import { PlatformPlan } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function PlatformPlanCard({ plan }: { plan: PlatformPlan }) {
  return (
    <Card className="rounded-[34px] border border-slate-200 bg-white/90 p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-slate-400">{plan.platform}</div>
          <h3 className="mt-3 text-2xl font-semibold text-slate-950">{plan.objective}</h3>
        </div>
        <Badge className="border-slate-200 bg-slate-50 text-slate-700">{plan.kpiFocus}</Badge>
      </div>
      <div className="mt-5">
        <div className="mb-2 flex justify-between text-sm text-slate-500">
          <span>Recommendation confidence</span>
          <span>{plan.score}%</span>
        </div>
        <Progress value={plan.score} />
      </div>
      <div className="mt-5 space-y-3">
        {plan.recommendations.map((recommendation) => (
          <div key={recommendation} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-sm leading-7 text-slate-600">
            {recommendation}
          </div>
        ))}
      </div>
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
        Platform-specific strategy output
        <ArrowUpRight className="h-4 w-4" />
      </div>
    </Card>
  );
}
