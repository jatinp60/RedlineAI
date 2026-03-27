import { ProjectCard } from "@/components/project-card";
import { SearchBar } from "@/components/search-bar";
import { Card } from "@/components/ui/card";
import { demoProjects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <Card className="rounded-[34px] border border-white/70 bg-white/[0.82] p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="font-display text-4xl font-semibold text-slate-950">Projects</h1>
            <p className="mt-2 text-sm text-slate-500">
              Search across seeded workspaces, compare strategy scores, and jump into decoder outputs.
            </p>
          </div>
          <div className="w-full md:w-[360px]">
            <SearchBar placeholder="Search by brand, niche, or campaign objective" />
          </div>
        </div>
      </Card>
      {demoProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
