import { Card } from "@/components/ui/card";
import { DecoderInsight } from "@/lib/types";

export function InsightList({ insights }: { insights: DecoderInsight[] }) {
  return (
    <div className="grid gap-4 xl:grid-cols-2">
      {insights.map((insight) => (
        <Card key={insight.label} className="rounded-[30px] border border-slate-200 bg-white/90 p-5">
          <div className="text-xs uppercase tracking-[0.28em] text-slate-400">{insight.label}</div>
          <p className="mt-4 text-sm leading-7 text-slate-600">{insight.detail}</p>
        </Card>
      ))}
    </div>
  );
}
