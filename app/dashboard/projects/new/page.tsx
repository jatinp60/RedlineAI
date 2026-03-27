import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { demoProjects } from "@/lib/data";

export default function NewProjectPage() {
  return (
    <div className="space-y-6">
      <Card className="rounded-[38px] border border-white/70 bg-white/[0.82] p-8">
        <h1 className="font-display text-4xl font-semibold text-slate-950">Create a new project</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
          Capture the business context that shapes audience segmentation, positioning, and campaign recommendations.
        </p>
      </Card>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card className="rounded-[34px] border border-slate-200 bg-white/90 p-6 md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <Input placeholder="Project name" defaultValue="Northstar Launch Sprint" />
            <Input placeholder="Product name" defaultValue="Northstar AI Notebook" />
            <Input placeholder="Product category" defaultValue="SaaS Productivity" />
            <Input placeholder="Price point" defaultValue="$24/mo" />
            <Input placeholder="Target region" defaultValue="North America" />
            <Input placeholder="Business type" defaultValue="app" />
          </div>
          <div className="mt-4">
            <Textarea
              placeholder="Short product description"
              defaultValue="AI notebook for founders that converts voice notes, meetings, and task ideas into structured execution plans."
            />
          </div>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Link href={`/dashboard/projects/${demoProjects[0].id}`}>
              <Button size="lg">
                Generate project workspace
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="secondary">
              Save draft
            </Button>
          </div>
        </Card>

        <Card className="rounded-[34px] border border-slate-200 bg-white/90 p-6">
          <h2 className="text-xl font-semibold text-slate-950">What happens next</h2>
          <div className="mt-5 space-y-4">
            {[
              "Generate a project workspace with decoder, planner, and analyzer tabs.",
              "Create initial audience segmentation, positioning, and value proposition hypotheses.",
              "Surface platform-specific campaign recommendations based on your chosen objective.",
              "Provide save-report and export-summary actions inside the workspace.",
            ].map((item, index) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                <div className="text-xs uppercase tracking-[0.3em] text-slate-400">Step 0{index + 1}</div>
                <div className="mt-2 text-sm leading-7 text-slate-600">{item}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
