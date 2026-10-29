
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  GraduationCap,
  Lightbulb,
  Monitor,
  Network,
  Users,
} from "lucide-react";


const courses = [
  {
    number: "01",
    title: "Machine Learning",
    institution: "Addis Ababa University",
    role: "Part-time Instructor",
    category: "Artificial Intelligence · Software Engineering",
    description:
      "Teaching machine learning to Software Engineering students in the AI stream, connecting foundational concepts with practical model development and evaluation.",
    topics: [
      "Machine learning concepts and workflows",
      "Supervised and unsupervised learning",
      "Model training and evaluation",
      "Practical machine learning applications",
    ],
    icon: BrainCircuit,
  },
  {
    number: "02",
    title: "Fundamentals of Programming — Python",
    institution: "Kotebe University of Education",
    role: "Instructor",
    category: "Programming · Problem-solving",
    description:
      "Developing students' programming foundations through algorithmic thinking, structured problem-solving, and hands-on Python exercises.",
    topics: [
      "Variables, data types, and operators",
      "Conditional statements and loops",
      "Functions and modular programming",
      "Practical programming exercises",
    ],
    icon: Monitor,
  },
  {
    number: "03",
    title: "Fundamentals of Programming — C++",
    institution: "Kotebe University of Education",
    role: "Instructor",
    category: "Programming · Computational thinking",
    description:
      "Building students' understanding of programming logic and fundamental software development concepts using C++.",
    topics: [
      "C++ syntax and program structure",
      "Variables, operators, and expressions",
      "Selection and iteration",
      "Functions and problem-solving exercises",
    ],
    icon: Network,
  },
  {
    number: "04",
    title: "Emerging Technologies",
    institution: "Kotebe University of Education",
    role: "Instructor",
    category: "Digital innovation · Technology",
    description:
      "Exploring emerging technologies, their applications, and their implications for society, education, and industry.",
    topics: [
      "Artificial intelligence and machine learning",
      "Cloud computing and virtualization",
      "Internet of Things",
      "Emerging technology applications and trends",
    ],
    icon: Lightbulb,
  },
  {
    number: "05",
    title: "Internet Programming",
    institution: "Kotebe University of Education",
    role: "Instructor",
    category: "Web development · Internet technologies",
    description:
      "Introducing the concepts and practical techniques involved in developing applications and content for the web.",
    topics: [
      "Web architecture and Internet fundamentals",
      "Web page structure and presentation",
      "Client-side programming concepts",
      "Building and testing web-based applications",
    ],
    icon: Network,
  },
  {
    number: "06",
    title: "Computer Applications",
    institution: "Kotebe University of Education",
    role: "Instructor",
    category: "Digital literacy · Productivity",
    description:
      "Helping students develop practical computer skills and use digital applications to support academic and professional work.",
    topics: [
      "Computer fundamentals and file management",
      "Word processing and document formatting",
      "Spreadsheets and data organization",
      "Presentations and digital productivity",
    ],
    icon: Monitor,
  },
];


const assessmentMethods = [
  {
    title: "Formative assessment",
    description:
      "Short quizzes, questioning, class exercises, and guided practice to identify misconceptions while learning is in progress.",
    icon: Lightbulb,
  },
  {
    title: "Practical assessment",
    description:
      "Demonstrations, configuration exercises, troubleshooting tasks, and other activities that assess applied understanding.",
    icon: Monitor,
  },
  {
    title: "Project-based assessment",
    description:
      "Individual or group assignments that evaluate problem-solving, collaboration, technical execution, and communication.",
    icon: Users,
  },
  {
    title: "Summative assessment",
    description:
      "Tests and examinations aligned with intended learning outcomes, using clear criteria to evaluate achievement.",
    icon: ClipboardCheck,
  },
];

const evidenceItems = [
  {
    title: "Lesson plans",
    description:
      "Learning objectives, lesson sequences, activities, resources, and checks for understanding.",
    type: "Planning",
    icon: FileText,
  },
  {
    title: "Teaching materials",
    description:
      "Lecture slides, handouts, practical guides, diagrams, and supplementary reading.",
    type: "Learning resources",
    icon: BookOpen,
  },
  {
    title: "Assessment instruments",
    description:
      "Quizzes, examination questions, assignment instructions, and marking rubrics.",
    type: "Assessment",
    icon: ClipboardCheck,
  },
  {
    title: "Teaching reflection",
    description:
      "Reflective notes on lesson effectiveness, student difficulties, and improvements for future delivery.",
    type: "Professional reflection",
    icon: GraduationCap,
  },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
      {children}
    </p>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl">
      <SectionLabel>{eyebrow}</SectionLabel>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
}

export default function Teaching() {
  return (
    <section
      id="teaching"
      className="scroll-mt-24 overflow-hidden bg-slate-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section introduction */}
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <SectionLabel>Teaching portfolio</SectionLabel>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Helping learners move from{" "}
              <span className="text-teal-700">understanding</span> to
              application.
            </h1>
          </div>

          <div className="max-w-xl lg:justify-self-end">
            <p className="text-base leading-8 text-slate-600">
              My teaching portfolio brings together my instructional
              philosophy, learning activities, assessment approaches, and
              evidence of professional practice. It reflects my commitment
              to clear explanations, active participation, and connecting
              technical concepts to practical problems.
            </p>
          </div>
        </div>

        {/* Teaching philosophy */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="relative overflow-hidden rounded-3xl bg-slate-950 p-7 text-white sm:p-10">
            <div className="absolute -right-14 -top-14 h-48 w-48 rounded-full border border-white/10" />
            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full border border-teal-400/20" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-400/15 text-teal-300">
                <Lightbulb size={25} />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-teal-300">
                My teaching philosophy
              </p>

              <h2 className="mt-3 max-w-xl text-2xl font-bold leading-tight sm:text-3xl">
                Teaching is not only about explaining concepts. It is about
                helping students learn how to think, practice, and solve
                problems.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
                I aim to make complex ideas accessible through structured
                explanations, relevant examples, guided practice, and
                opportunities for independent thinking. I see the classroom
                as a learning environment where students should be encouraged
                to ask questions, learn from mistakes, collaborate, and
                gradually develop confidence in applying what they know.
              </p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
                I also view assessment and feedback as part of learning—not
                simply as a way to assign marks. Evidence of student
                understanding should inform how I adjust explanations,
                activities, and future lessons.
              </p>
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {[
              {
                number: "01",
                title: "Clarity before complexity",
                text: "Introduce foundational ideas in manageable steps before moving to more challenging concepts.",
              },
              {
                number: "02",
                title: "Learning through practice",
                text: "Connect theory with exercises, demonstrations, real-world scenarios, and projects.",
              },
              {
                number: "03",
                title: "Inclusive participation",
                text: "Create opportunities for students with different learning needs and confidence levels to contribute.",
              },
              {
                number: "04",
                title: "Reflect and improve",
                text: "Use student responses, assessment evidence, and reflection to improve future teaching.",
              },
            ].map((principle) => (
              <article
                key={principle.number}
                className="rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg hover:shadow-slate-200/50"
              >
                <p className="text-xs font-bold tracking-widest text-teal-700">
                  {principle.number}
                </p>
                <h3 className="mt-2 font-bold text-slate-900">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {principle.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Courses */}
        <div id="teaching-courses" className="scroll-mt-24 pt-24">
          <SectionTitle
            eyebrow="Courses and subject areas"
            title="What I teach and how I approach it."
            description="Organize your teaching experience by course, with concise descriptions, key topics, learning outcomes, and links to actual course documents."
          />

          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            {courses.map((course) => {
              const Icon = course.icon;

              return (
                <article
                  key={course.number}
                  className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-slate-200/60 sm:p-7"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 transition group-hover:bg-teal-700 group-hover:text-white">
                      <Icon size={23} />
                    </div>
                    <span className="text-sm font-semibold text-slate-300">
                      {course.number}
                    </span>
                  </div>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-teal-700">
                    {course.category}
                  </p>

                  <h3 className="mt-2 text-xl font-bold leading-snug text-slate-950">
                    {course.title}
                  </h3>


                    <p className="mt-3 text-xs font-medium text-slate-500">
                    {course.role} · {course.institution}
                    </p>


                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {course.description}
                  </p>

                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Topics and activities
                    </p>
                    <ul className="mt-4 space-y-3">
                      {course.topics.map((topic) => (
                        <li
                          key={topic}
                          className="flex items-start gap-2.5 text-sm leading-6 text-slate-700"
                        >
                          <CheckCircle2
                            size={17}
                            className="mt-0.5 shrink-0 text-teal-700"
                          />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#teaching-resources"
                    className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-teal-700 transition hover:text-teal-900"
                  >
                    Explore learning resources
                    <ArrowUpRight size={16} />
                  </a>
                </article>
              );
            })}
          </div>

          <p className="mt-4 text-xs leading-6 text-slate-500">
            Course descriptions are starting points for customization. Update
            them to match your actual teaching assignments, institutional
            course titles, and approved course outlines.
          </p>
        </div>

        {/* Lesson plans and resources */}
        <div
          id="teaching-resources"
          className="scroll-mt-24 pt-24"
        >
          <SectionTitle
            eyebrow="Lesson plans and learning materials"
            title="From learning objectives to classroom practice."
            description="A useful lesson plan connects what students should learn with what they will do, how their understanding will be checked, and what resources support the lesson."
          />

          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Lesson plans",
                label: "Structured instruction",
                text: "Learning outcomes, prior knowledge, introduction, guided explanation, student activities, assessment checks, and lesson closure.",
                icon: BookOpen,
              },
              {
                title: "Lecture slides and notes",
                label: "Conceptual understanding",
                text: "Organized explanations, visual diagrams, worked examples, definitions, and summaries for revision.",
                icon: FileText,
              },
              {
                title: "Practical and laboratory guides",
                label: "Learning by doing",
                text: "Step-by-step tasks, expected results, troubleshooting prompts, reflection questions, and completion criteria.",
                icon: Monitor,
              },
              {
                title: "Group assignments and projects",
                label: "Collaboration and application",
                text: "Clear task instructions, deliverables, individual responsibilities, presentation expectations, and assessment rubrics.",
                icon: Users,
              },
            ].map((resource) => {
              const Icon = resource.icon;

              return (
                <article
                  key={resource.title}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-teal-200 hover:shadow-lg hover:shadow-slate-200/40"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-teal-700">
                    <Icon size={21} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
                      {resource.label}
                    </p>
                    <h3 className="mt-1 font-bold text-slate-950">
                      {resource.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {resource.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-dashed border-slate-300 bg-white/70 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-slate-900">
                Your teaching documents belong here
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Add real lesson plans, PDFs, slides, practical guides, and
                assignment briefs when they are ready to share.
              </p>
            </div>
            <a
              href="#teaching-evidence"
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-800 sm:self-center"
            >
              View evidence areas
              <ArrowDown size={16} />
            </a>
          </div>
        </div>

        {/* Assessment */}
        <div id="teaching-assessment" className="scroll-mt-24 pt-24">
          <SectionTitle
            eyebrow="Assessment and feedback"
            title="Assess understanding, not just memorization."
            description="Assessment should align with learning outcomes and give students a clear understanding of what they have achieved and what they can improve next."
          />

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {assessmentMethods.map((method) => {
              const Icon = method.icon;

              return (
                <article
                  key={method.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-bold text-slate-950">
                      {method.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {method.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="border-b border-slate-200 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
                Sample assessment framework
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-950">
                Practical task marking criteria
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                An illustrative rubric for a technical practical assignment.
                Adjust the criteria and weights to fit the course outcomes.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[540px] text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Criterion</th>
                    <th className="px-6 py-4 font-semibold">What is evaluated</th>
                    <th className="px-6 py-4 text-right font-semibold">
                      Weight
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Technical accuracy", "Correctness of the solution", "35%"],
                    ["Practical execution", "Process and task completion", "30%"],
                    ["Problem-solving", "Reasoning and troubleshooting", "20%"],
                    ["Documentation", "Clarity and explanation of results", "15%"],
                  ].map(([criterion, detail, weight]) => (
                    <tr key={criterion}>
                      <td className="px-6 py-4 font-semibold text-slate-800">
                        {criterion}
                      </td>
                      <td className="px-6 py-4 text-slate-600">{detail}</td>
                      <td className="px-6 py-4 text-right font-semibold tabular-nums text-teal-800">
                        {weight}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-slate-50">
                  <tr>
                    <td
                      colSpan={2}
                      className="px-6 py-4 font-bold text-slate-900"
                    >
                      Total
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-slate-900">
                      100%
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>

        {/* Evidence */}
        <div id="teaching-evidence" className="scroll-mt-24 pt-24">
          <SectionTitle
            eyebrow="Evidence of teaching practice"
            title="Show the work behind the teaching."
            description="A credible teaching portfolio combines reflective statements with supporting evidence. Each item should demonstrate a teaching activity, a decision, a learning outcome, or an improvement."
          />

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {evidenceItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                    <Icon size={21} />
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-teal-700">
                    {item.type}
                  </p>
                  <h3 className="mt-2 font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-500">
                      <span className="h-2 w-2 rounded-full bg-amber-400" />
                      Evidence to add
                    </span>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 rounded-3xl bg-teal-50 p-7 sm:p-9">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-800">
                  Continuous improvement
                </p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                  Reflect. Refine. Teach better.
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  The strongest evidence goes beyond showing what was taught.
                  It explains what students needed, how teaching responded,
                  and what you would improve in the next learning cycle.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800 sm:self-center"
              >
                Connect with me
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
