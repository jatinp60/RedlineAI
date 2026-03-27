import { AlertCircle, CheckCircle2 } from "lucide-react";
import { AnalyzerReport } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function AnalyzerReportView({ report }: { report: AnalyzerReport }) {
  return (
    <div className="space-y-6">
      <Card className="rounded-[34px] border border-slate-200 bg-white/90 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <div
              className={`mt-1 flex h-11 w-11 items-center justify-center rounded-2xl ${
                report.status === "strong" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
              }`}
            >
              {report.status === "strong" ? <CheckCircle2 className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-slate-400">Campaign assessment</div>
              <h2 className="mt-3 text-2xl font-semibold text-slate-950">{report.summary}</h2>
            </div>
          </div>
          <Badge className={report.status === "strong" ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-amber-200 bg-amber-50 text-amber-700"}>
            {report.status === "strong" ? "Healthy structure" : "Optimization recommended"}
          </Badge>
        </div>
      </Card>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card className="rounded-[32px] border border-slate-200 bg-white/90 p-6">
          <h3 className="text-xl font-semibold text-slate-950">Strengths</h3>
          <div className="mt-5 space-y-3">
            {report.strengths.map((item) => (
              <div key={item} className="rounded-2xl border border-emerald-100 bg-emerald-50/80 p-4 text-sm leading-7 text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </Card>
        <Card className="rounded-[32px] border border-slate-200 bg-white/90 p-6">
          <h3 className="text-xl font-semibold text-slate-950">Weaknesses and bottlenecks</h3>
          <div className="mt-5 space-y-3">
            {report.weaknesses.length ? (
              report.weaknesses.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-sm leading-7 text-slate-600">
                  {item}
                </div>
              ))
            ) : (
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-sm leading-7 text-slate-600">
                No material weaknesses surfaced in the current campaign setup.
              </div>
            )}
          </div>
        </Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card className="rounded-[32px] border border-slate-200 bg-white/90 p-6">
          <h3 className="text-xl font-semibold text-slate-950">Optimization suggestions</h3>
          <div className="mt-5 space-y-3">
            {report.optimizations.map((item) => (
              <div key={item} className="rounded-2xl border border-sky-100 bg-sky-50/80 p-4 text-sm leading-7 text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </Card>
        <Card className="rounded-[32px] border border-slate-200 bg-white/90 p-6">
          <h3 className="text-xl font-semibold text-slate-950">KPI interpretation</h3>
          <div className="mt-5 space-y-3">
            {report.kpiInterpretation.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-sm leading-7 text-slate-600">
                {item}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
