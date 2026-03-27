import { Card } from "@/components/ui/card";

export function StatCard({
  label,
  value,
  change,
}: {
  label: string;
  value: string;
  change: string;
}) {
  return (
    <Card className="rounded-[30px] border border-slate-200 bg-white/90 p-5">
      <div className="text-sm text-slate-500">{label}</div>
      <div className="mt-4 font-display text-4xl font-semibold text-slate-950">{value}</div>
      <div className="mt-3 text-sm text-emerald-700">{change}</div>
    </Card>
  );
}
