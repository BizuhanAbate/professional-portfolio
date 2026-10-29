
// export default function About() {
//   return (
//     <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
//       <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">
//         Academic portfolio
//       </p>
//       <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
//         About Me
//       </h1>
//       <p className="mt-4 max-w-2xl leading-7 text-slate-600">
//         Learn more about my background, education, and professional journey.
//       </p>
//     </section>
//   );
// }



import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  // Lightbulb,
  Microscope,
  // Network,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const expertise = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "Machine learning, reinforcement learning, and fairness-aware AI.",
  },
  {
    icon: GraduationCap,
    title: "Teaching & Learning",
    description:
      "Programming education, technical instruction, and practical learning.",
  },
  {
    icon: Microscope,
    title: "Research",
    description:
      "Investigating intelligent systems, multi-agent learning, and equitable outcomes.",
  },
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Building web applications, digital tools, and technology solutions.",
  },
];

const milestones = [
  {
    period: "Academic foundation",
    title: "Computer Science & Technology",
    organization: "Kotebe University of Education",
    description:
      "Built a foundation in computing, programming, and software development.",
  },
  {
    period: "Teaching experience",
    title: "University-level instruction",
    organization: "Kotebe University of Education",
    description:
      "Taught programming, Internet Programming, Computer Applications, and Emerging Technologies.",
  },
  {
    period: "Advanced study",
    title: "M.Sc. in Artificial Intelligence",
    organization: "Addis Ababa University",
    description:
      "Advanced into AI research, with a focus on fairness in cooperative multi-agent reinforcement learning.",
  },
  {
    period: "Teaching and research",
    title: "Machine Learning Instructor",
    organization: "Addis Ababa University",
    description:
      "Teaching Machine Learning part-time to Software Engineering students in the AI stream.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section
        id="about"
        className="relative overflow-hidden bg-white"
      >
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-teal-50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-slate-100 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-3.5 py-2 text-xs font-semibold text-teal-800">
              <Sparkles size={14} />
              Academic · Researcher · Technology Professional
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Hello, I'm
              <span className="mt-2 block text-teal-700">
                Bizuhan Abate Tayu.
              </span>
              <span className="mt-3 block text-3xl leading-tight text-slate-700 sm:text-4xl">
                I turn curiosity into knowledge and ideas into solutions.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600">
              I am an Artificial Intelligence graduate, university instructor,
              researcher, and software developer interested in building
              intelligent systems, sharing knowledge, and applying technology
              to meaningful real-world problems.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              My work brings together teaching, AI research, and software
              development. I enjoy exploring how technology works, helping
              others understand it, and translating ideas into practical
              applications.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/research"
                className="inline-flex items-center gap-2 rounded-xl bg-teal-700 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-teal-800"
              >
                Explore my research
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/teaching"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-800"
              >
                Discover my teaching
                <ArrowDownRight size={16} />
              </Link>
            </div>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-teal-700"
            >
              View my CV
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Profile panel: replace with a real portrait when available */}
          <div className="mx-auto w-full max-w-md lg:justify-self-end">
            <div className="relative">
              <div className="absolute -inset-3 rotate-3 rounded-[2rem] bg-teal-100/70" />

              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-7 text-white shadow-2xl shadow-slate-300/50 sm:p-9">
                <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-teal-300/20" />
                <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full border border-teal-300/20" />

                <div className="relative">



              {/* <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-900/10"> */}
                <img
                  // src="/images/bizuhan-profile.jpg"
                  src={`${import.meta.env.BASE_URL}images/bizuhan-profile.jpg`}
                  alt="Bizuhan Abate Tayu"
                  className="h-full w-full object-cover object-center"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
{/* 
                <div className="absolute inset-0 -z-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-teal-50 to-slate-200 text-slate-500">
                  <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-teal-700 text-4xl font-bold text-white shadow-lg">
                    BT
                  </div>
                  <span className="text-sm font-medium">
                    Add your professional photo
                  </span>
                </div> */}
              {/* </div> */}

                  {/* <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-teal-300/20 bg-teal-400/10 text-2xl font-bold text-teal-300">
                    BT
                  </div>

                  <p className="mt-10 text-xs font-bold uppercase tracking-[0.22em] text-teal-300">
                    My professional focus
                  </p>

                  <h2 className="mt-3 text-3xl font-bold leading-tight">
                    Learning.
                    <br />
                    Research.
                    <br />
                    Building.
                  </h2> */}

                  {/* <p className="mt-4 text-sm leading-7 text-slate-300">
                    Connecting academic knowledge with practical technology
                    and continuous professional growth.
                  </p> */}

                  {/* <div className="mt-8 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <GraduationCap
                        size={21}
                        className="text-teal-300"
                      />
                      <p className="mt-3 text-sm font-semibold">
                        Teaching
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        Sharing knowledge
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <BrainCircuit
                        size={21}
                        className="text-teal-300"
                      />
                      <p className="mt-3 text-sm font-semibold">
                        Artificial Intelligence
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        Exploring ideas
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            <p className="mt-5 text-center text-xs text-slate-500">
              A portfolio of my academic and professional journey
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
              A little about me
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Driven by curiosity. Grounded in learning.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              My academic journey began in Computer Science and Technology
              and continued into Artificial Intelligence. Along the way,
              teaching has given me opportunities to help students build
              technical foundations, while research has challenged me to
              investigate problems more deeply and evaluate new ideas
              critically.
            </p>

            <p>
              I am especially interested in the relationship between
              intelligent systems and fairness: how learning agents can
              collaborate effectively without overlooking less successful
              participants. This interest informs my research in cooperative
              multi-agent reinforcement learning.
            </p>

            <p>
              Alongside academic work, I value software development as a
              practical way to turn requirements into useful digital tools.
              I see teaching, research, and engineering as complementary
              activities that strengthen one another.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
              Areas of interest
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Where my interests meet.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Four connected areas shape my professional development and
              the work I want to contribute to.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {expertise.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-slate-200/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 transition group-hover:bg-teal-700 group-hover:text-white">
                    <Icon size={23} />
                  </div>
                  <h3 className="mt-6 font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
              Education
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              The foundation behind my work.
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              My academic background combines computing fundamentals with
              advanced study in intelligent systems.
            </p>
          </div>

          <div className="space-y-5">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <BrainCircuit size={23} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-teal-700">
                    Master's degree
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-slate-950">
                    Master of Science in Artificial Intelligence
                  </h3>
                  <p className="mt-2 text-sm font-medium text-slate-600">
                    Addis Ababa University
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Advanced study in AI, including research on adaptive
                    welfare weighting for fairness in cooperative
                    multi-agent reinforcement learning.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                  <GraduationCap size={23} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    Bachelor's degree
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-slate-950">
                    Computer Science and Technology
                  </h3>
                  <p className="mt-2 text-sm font-medium text-slate-600">
                    Kotebe University of Education
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Undergraduate foundation in computing and the technical
                    skills that support my continued work in teaching,
                    research, and software development.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
              My journey
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Learning, teaching, and building over time.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {milestones.map((item, index) => (
              <article
                key={item.title}
                className="relative rounded-2xl border border-slate-200 bg-white p-6 sm:p-7"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 text-sm font-bold text-teal-800">
                    0{index + 1}
                  </span>
                  <p className="text-xs font-bold uppercase tracking-wide text-teal-700">
                    {item.period}
                  </p>
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-500">
                  {item.organization}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="bg-slate-950 py-16 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-300">
              What's next?
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Explore the work behind the introduction.
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Learn more about my teaching practice, research contributions,
              and technology projects.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/teaching"
              className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-500"
            >
              Teaching portfolio
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View projects
              <BriefcaseBusiness size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
