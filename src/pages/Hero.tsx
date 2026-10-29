
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Code2,
  FlaskConical,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const strengths = [
  {
    number: "01",
    title: "Teaching",
    description:
      "Making technical concepts accessible through structured learning and practical examples.",
    icon: GraduationCap,
    href: "#teaching",
  },
  {
    number: "02",
    title: "Research",
    description:
      "Exploring artificial intelligence, multi-agent learning, and fairness-aware methods.",
    icon: FlaskConical,
    href: "#research",
  },
  {
    number: "03",
    title: "Engineering",
    description:
      "Turning ideas into useful software, data-driven tools, and technology solutions.",
    icon: Code2,
    href: "#projects",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate scroll-mt-24 overflow-hidden bg-slate-50"
    >
      <div className="pointer-events-none absolute -right-32 -top-28 -z-10 h-96 w-96 rounded-full bg-teal-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-80 w-80 rounded-full bg-cyan-100/50 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-10 lg:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-3.5 py-2 shadow-sm">
            <Sparkles size={15} className="text-teal-700" />
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-teal-800">
              Research · Education · Technology
            </span>
          </div>

          <h1 className="mt-7 max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Ideas into{" "}
            <span className="text-teal-700">impact.</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg font-medium leading-8 text-slate-700 sm:text-xl">
            Building knowledge. Advancing research. Engineering solutions.
          </p>

          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
            I bring together teaching, artificial intelligence research, and
            software development to solve meaningful problems and create
            practical impact.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-900/10 transition hover:-translate-y-0.5 hover:bg-teal-800"
            >
              Explore my work <ArrowRight size={17} />
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-teal-300 hover:bg-teal-50"
            >
              View my CV <ArrowDown size={17} />
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-600" />
              M.Sc. in Artificial Intelligence
            </span>
            <span className="hidden h-4 w-px bg-slate-300 sm:block" />
            <span>Educator & Software Developer</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-teal-100 via-cyan-50 to-slate-100" />

          <div className="relative rounded-[1.75rem] border border-white bg-white p-5 shadow-2xl shadow-slate-900/10 sm:p-7">
            <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  What I work on
                </p>
                <h2 className="mt-1 text-xl font-bold tracking-tight text-slate-900">
                  A multidisciplinary approach
                </h2>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                <BookOpen size={23} />
              </span>
            </div>

            <div className="mt-2 divide-y divide-slate-100">
              {strengths.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.number}
                    href={item.href}
                    className="group flex gap-4 rounded-xl py-5 transition hover:bg-slate-50 sm:px-3"
                  >
                    <span className="pt-1 text-xs font-bold tracking-wider text-teal-700">
                      {item.number}
                    </span>

                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition group-hover:bg-teal-700 group-hover:text-white">
                      <Icon size={21} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="flex items-center justify-between gap-2">
                        <span className="font-semibold text-slate-900">
                          {item.title}
                        </span>
                        <ArrowUpRight
                          size={16}
                          className="shrink-0 text-slate-400 transition group-hover:text-teal-700"
                        />
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-slate-500">
                        {item.description}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="mt-3 rounded-xl bg-slate-950 p-4 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-300">
                My guiding principle
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Learn continuously. Build thoughtfully. Share knowledge.
              </p>
            </div>
          </div>

          <div className="absolute -bottom-5 -right-2 hidden rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-lg sm:block sm:-right-5">
            <p className="text-xs text-slate-500">My focus</p>
            <p className="mt-1 text-sm font-bold text-slate-900">
              Research with purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
