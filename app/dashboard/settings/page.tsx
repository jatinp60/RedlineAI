import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <Card className="rounded-[38px] border border-white/70 bg-white/[0.82] p-8">
        <h1 className="font-display text-4xl font-semibold text-slate-950">Settings</h1>
        <p className="mt-4 text-sm leading-7 text-slate-600">
          Configure workspace preferences, reporting defaults, and brand-level context for future projects.
        </p>
      </Card>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card className="rounded-[32px] border border-slate-200 bg-white/90 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-950">Workspace profile</h2>
            <Badge className="border-slate-200 bg-slate-50 text-slate-700">Demo profile</Badge>
          </div>
          <div className="mt-5 grid gap-4">
            <Input defaultValue="Avery Brooks" />
            <Input defaultValue="Growth Strategist" />
            <Input defaultValue="North Harbor Studio" />
          </div>
        </Card>

        <Card className="rounded-[32px] border border-slate-200 bg-white/90 p-6">
          <h2 className="text-xl font-semibold text-slate-950">Reporting preferences</h2>
          <div className="mt-5 space-y-4">
            {[
              "Default region: United States",
              "Preferred KPI stack: CTR, CVR, CAC, ROAS",
              "Export mode: Executive summary + detailed appendix",
              "Alert threshold: show warnings when confidence drops below 72%",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-600">
                {item}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
