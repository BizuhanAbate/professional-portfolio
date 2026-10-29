
import { ArrowUpRight, Code2, Smartphone, Factory } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const projects = [
  {
    title: "TeamTrack / DailyTracker",
    category: "Business application",
    description:
      "A Flutter-based team and timesheet management application supporting daily work logs, project tracking, and manager review workflows.",
    technologies: ["Flutter", "Firebase", "Supabase"],
    icon: Smartphone,
    href: "",
  },
  {
    title: "Industrial automation web experience",
    category: "Web development",
    description:
      "A modern company website presenting industrial automation services, engineering projects, and technology solutions.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    icon: Code2,
    href: "",
  },
  {
    title: "Fairness-aware multi-agent learning",
    category: "AI research",
    description:
      "An investigation into adaptive welfare weighting for balancing collective reward and fairness in cooperative reinforcement learning.",
    technologies: ["Python", "Reinforcement learning", "Evaluation"],
    icon: Factory,
    href: "#research",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-slate-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Selected work"
          title="From ideas to working solutions."
          description="A selection of research and development work demonstrating how I approach problems, build solutions, and apply technology in practical settings."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <article
                key={project.title}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-slate-900/5"
              >
                <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-teal-50 via-slate-100 to-cyan-50">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-teal-200/70" />
                  <div className="absolute -bottom-16 -left-8 h-40 w-40 rounded-full border border-slate-300/70" />

                  <span className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-white bg-white/90 text-teal-700 shadow-lg shadow-slate-900/5 transition duration-300 group-hover:scale-105">
                    <Icon size={36} strokeWidth={1.5} />
                  </span>

                  <span className="absolute left-4 top-4 rounded-full border border-white/80 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-600">
                    {project.category}
                  </span>

                  <span className="absolute bottom-4 right-4 text-sm font-bold text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold tracking-tight text-slate-900">
                    {project.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-600"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-900"
                    >
                      View project <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-400">
                      Project details coming soon
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
