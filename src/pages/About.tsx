
import { Link } from "react-router-dom";
import {
  ArrowDownRight,
  ArrowRight,
  BookOpen,
  BrainCircuit,
  // BriefcaseBusiness,
  Code2,
  GraduationCap,
  Lightbulb,
  Mail,
  Target,
} from "lucide-react";

const expertise = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "Exploring machine learning, reinforcement learning, and fairness-aware AI to develop intelligent systems that are effective, responsible, and useful.",
  },
  {
    icon: GraduationCap,
    title: "Teaching & Learning",
    description:
      "Helping students build strong foundations in programming, computing, and emerging technologies through practical and structured learning.",
  },
  {
    icon: BookOpen,
    title: "Research & Innovation",
    description:
      "Investigating how intelligent systems can become more equitable, reliable, and beneficial through evidence-based research.",
  },
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Turning ideas into practical digital solutions through application development, problem-solving, and technology integration.",
  },
];

const journey = [
  {
    title: "B.Sc. in Computer Science and Technology",
    organization: "Kotebe University of Education",
    description:
      "Built a foundation in programming, computing principles, software development, and information technology.",
    icon: GraduationCap,
  },
  {
    title: "University Teaching",
    organization: "Kotebe University of Education",
    description:
      "Taught programming and computing courses, supporting students in developing practical technical skills.",
    icon: BookOpen,
  },
  {
    title: "M.Sc. in Artificial Intelligence",
    organization: "Addis Ababa University",
    description:
      "Advanced my knowledge of AI and developed a research interest in fairness-aware cooperative multi-agent reinforcement learning.",
    icon: BrainCircuit,
  },
  {
    title: "Machine Learning Instruction",
    organization: "Addis Ababa University",
    description:
      "Serving as a part-time Machine Learning instructor for students in the Software Engineering AI stream.",
    icon: Lightbulb,
  },
];

const courses = [
  "Machine Learning",
  "Fundamentals of Programming (Python)",
  "Fundamentals of Programming (C++)",
  "Emerging Technologies",
  "Internet Programming",
  "Computer Applications",
];

export default function About() {
  return (
    <div className="overflow-hidden bg-slate-50 text-slate-800">
      {/* Hero */}
      <section className="relative border-b border-slate-200 bg-white">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-teal-100/50 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-sky-100/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:px-10 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-800">
              <span className="h-2 w-2 rounded-full bg-teal-600" />
              A little about me
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Curiosity drives me.
              <span className="mt-2 block text-teal-700">
                Purpose guides me.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              I'm Bizuhan Abate Tayu, an artificial intelligence graduate,
              university instructor, researcher, and software developer
              passionate about learning, sharing knowledge, and building
              technology that makes a meaningful difference.
            </p>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              My journey brings together education, research, and practical
              technology development. I am particularly interested in how
              artificial intelligence can solve real-world problems while
              remaining fair, responsible, and accessible.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/research"
                className="inline-flex items-center gap-2 rounded-xl bg-teal-700 px-5 py-3 font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-teal-800"
              >
                Explore my research
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-teal-300 hover:text-teal-800"
              >
                Get in touch
                <Mail size={17} />
              </Link>
            </div>
          </div>

          {/* Profile photograph */}
          <div className="mx-auto w-full max-w-md">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -right-4 -top-4 h-28 w-28 rounded-3xl border-2 border-teal-600/30" />
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-3xl bg-teal-100" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-900/10">
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
              </div>

              <div className="absolute -bottom-7 right-4 max-w-[85%] rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:-right-8 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                  My professional identity
                </p>
                <p className="mt-1 font-bold text-slate-950">
                  Researcher. Educator. Developer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal introduction */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
              Beyond the titles
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Who I am and what drives me
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              I believe meaningful progress begins with curiosity, grows
              through continuous learning, and becomes valuable when shared
              with others. This belief shapes how I approach teaching,
              research, and technology development.
            </p>
            <p>
              As an educator, I value clear explanations, practical learning,
              and helping students connect theoretical concepts to real
              problems. As a researcher, I enjoy investigating challenging
              questions, evaluating ideas critically, and developing
              approaches that improve existing methods.
            </p>
            <p>
              My work in software development gives me another perspective:
              research and ideas become especially powerful when they can be
              translated into useful, reliable solutions. I aim to keep
              strengthening the connection between what we learn, what we
              investigate, and what we build.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
              Areas of focus
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Where my interests meet my work
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Four connected areas shape my professional development and
              the contributions I hope to make.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {expertise.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-800 transition group-hover:bg-teal-700 group-hover:text-white">
                    <Icon size={23} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-950">
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

      {/* Education and journey */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
              Academic foundation
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Education
            </h2>

            <div className="mt-8 space-y-5">
              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-800">
                    <BrainCircuit size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-teal-700">
                      Master of Science
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-slate-950">
                      Artificial Intelligence
                    </h3>
                    <p className="mt-1 text-slate-600">
                      Addis Ababa University
                    </p>
                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      Advanced study in AI, with research focused on fairness
                      in cooperative multi-agent reinforcement learning.
                    </p>
                  </div>
                </div>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-teal-700">
                      Bachelor of Science
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-slate-950">
                      Computer Science and Technology
                    </h3>
                    <p className="mt-1 text-slate-600">
                      Kotebe University of Education
                    </p>
                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      Undergraduate foundation in computing, programming,
                      and information technology.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
              My path so far
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Learning, teaching, and building
            </h2>

            <div className="relative mt-9 space-y-8 before:absolute before:bottom-2 before:left-[19px] before:top-2 before:w-px before:bg-slate-200">
              {journey.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="relative flex gap-5"
                  >
                    <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-teal-200 bg-white text-teal-800">
                      <Icon size={19} />
                    </div>
                    <div className="pb-1">
                      <h3 className="font-bold text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-teal-700">
                        {item.organization}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Teaching background */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
                Sharing knowledge
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Teaching and academic practice
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                My teaching experience spans foundational programming,
                practical computing, emerging technologies, and machine
                learning. I aim to help learners develop both conceptual
                understanding and the confidence to apply their knowledge.
              </p>
              <Link
                to="/teaching"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-teal-800 transition hover:text-teal-950"
              >
                Explore my teaching portfolio
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="flex flex-wrap gap-3">
              {courses.map((course) => (
                <span
                  key={course}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-900"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="rounded-3xl bg-slate-900 p-8 text-white sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/15 text-teal-300">
                <Target size={25} />
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                What keeps me moving forward
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-slate-300">
                I want to continue growing as an educator and researcher,
                contribute to meaningful scientific work, and build
                technology that responds to real human needs. For me,
                success is not simply about acquiring knowledge; it is about
                using that knowledge to create value and help others grow.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <ArrowDownRight className="text-teal-300" size={28} />
              <blockquote className="mt-4 text-xl font-medium leading-8 text-white">
                “Learn continuously. Teach generously. Build responsibly.”
              </blockquote>
              <p className="mt-4 text-sm text-slate-400">
                A principle that reflects the way I want to work and grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10 lg:py-20">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Let's connect and create something meaningful.
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              I welcome conversations about teaching, research
              collaborations, AI, and technology-driven opportunities.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-teal-700 px-6 py-3.5 font-semibold text-white transition hover:bg-teal-800"
          >
            Contact me
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
