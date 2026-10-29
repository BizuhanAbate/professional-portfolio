
import {
  ArrowUpRight,
  GraduationCap,
  FlaskConical,
  Code2,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const focusAreas = [
  {
    id: "teaching",
    number: "01",
    title: "Teaching & Learning",
    description:
      "Explore teaching materials, lesson planning, assessment design, educational practice, and professional reflection.",
    tags: ["Lesson plans", "Learning materials", "Assessment"],
    icon: GraduationCap,
  },
  {
    id: "research",
    number: "02",
    title: "Research & Publications",
    description:
      "Discover my work in artificial intelligence, cooperative multi-agent learning, and fairness-aware policy optimization.",
    tags: ["AI research", "Publications", "Experiments"],
    icon: FlaskConical,
  },
  {
    id: "projects",
    number: "03",
    title: "Software & Engineering",
    description:
      "See practical applications, software projects, technical decisions, and lessons learned through development.",
    tags: ["React", "Flutter", "AI / ML"],
    icon: Code2,
  },
];

export default function FocusCards() {
  return (
    <section className="scroll-mt-24 bg-white py-20 sm:py-24" id="focus">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="What defines my work"
          title="Three disciplines. One purpose."
          description="My portfolio brings together the work I do as an educator, researcher, and technology practitioner—supported by evidence, outcomes, and continuous learning."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area) => {
            const Icon = area.icon;

            return (
              <a
                key={area.id}
                href={`#${area.id}`}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-slate-900/5 sm:p-7"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 transition group-hover:bg-teal-700 group-hover:text-white">
                    <Icon size={24} />
                  </span>

                  <span className="text-sm font-semibold text-slate-300">
                    {area.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {area.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-teal-700">
                  Explore section
                  <ArrowUpRight
                    size={16}
                    className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
