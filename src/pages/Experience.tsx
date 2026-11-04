import {
  ArrowUpRight,
  Network,
  Code2,
  GraduationCap,
  BrainCircuit,
  Factory,
  Sparkles,
  ArrowRight,
  ArrowDown
} from "lucide-react";

export default function Experience() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#0d1b2c] px-6 py-20 md:py-24">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          {/* <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-2 text-sm text-teal-300">
            <BriefcaseBusiness size={16} />
           My Professional Journey
          </div> */}

      <span className="inline-flex items-center gap-2 rounded-full border border-teal-400 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-teal-800">
        <span className="h-2 w-2 rounded-full bg-teal-500" />
        My Professional Journey
      </span>


          {/* <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
            A journey of
            <span className="text-teal-400"> learning, </span>
            building & growing.
          </h1> */}

        <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
        {/* Different chapters. */}
        A journey of learning,
        <span className="block text-teal-400">
          {/* One evolving journey. */}
           building & growing.
        </span>
      </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
        Every experience has contributed a different perspective to
        the professional I am becoming. From understanding technology
        infrastructure to creating software, sharing knowledge,
        exploring artificial intelligence, and working with industrial
        automation, my journey continues to evolve.
          </p>

          <div className="mt-9 flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="rounded-full border border-white/10 px-4 py-2">
              Software Development
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2">
              Artificial Intelligence
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2">
              Education
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2">
              Automation
            </span>
          </div>
        </div>
      </section>



{/* ================= CREATIVE EXPERIENCE JOURNEY ================= */}
{/* 
<section className="relative overflow-hidden bg-[#f4f8f7] px-5 py-24 md:px-8 md:py-28">

  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-teal-200/30 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 top-[45%] h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />

  <div className="relative mx-auto max-w-6xl">

    <div className="mb-20 max-w-3xl">

      <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-teal-800">
        <span className="h-2 w-2 rounded-full bg-teal-500" />
        My Professional Journey
      </span>

      <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-[#0d1b2c] md:text-6xl">
        A journey of learning,
        <span className="block text-teal-700">
           building & growing.
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
        Every experience has contributed a different perspective to
        the professional I am becoming. From understanding technology
        infrastructure to creating software, sharing knowledge,
        exploring artificial intelligence, and working with industrial
        automation, my journey continues to evolve.
      </p>

      <div className="mt-9 flex flex-wrap gap-3 text-sm text-teal-700 ">
    <span className="rounded-full border border-teal-700 px-4 py-2">
      Software Development
    </span>
    <span className="rounded-full border border-teal-700 px-4 py-2">
      Artificial Intelligence
    </span>
    <span className="rounded-full border border-teal-700  px-4 py-2">
      Education
    </span>
    <span className="rounded-full border border-teal-700  px-4 py-2">
      Automation
    </span>
  </div>
    </div>
    </div>
</section> */}


  {/* JOURNEY START LABEL */}
<section className="relative overflow-hidden bg-[#f4f8f7] px-5 py-20 md:px-8 md:py-28">
    <div className="relative mx-auto max-w-6xl">
    <div className="mb-6 flex items-center gap-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0d1b2c] text-sm font-bold text-white">
        01
      </span>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
          Where it all started
        </p>
        <p className="text-sm text-slate-500">
          Building the foundation
        </p>
      </div>
    </div>


    {/* FIRST ROW: TWO EXPERIENCES */}
    <div className="grid gap-6 md:grid-cols-2">

      {/* ERCA */}
      <article className="group relative overflow-hidden rounded-[28px] border border-sky-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl md:p-9">

        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky-100/70 transition-transform duration-700 group-hover:scale-150" />

        <div className="relative">

          <div className="flex items-start justify-between">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
              <Network size={27} />
            </div>

            <span className="text-5xl font-black text-sky-100">
              01
            </span>
          </div>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-sky-700">
            January – May 2020
          </p>

          <h3 className="mt-3 text-2xl font-bold leading-tight text-[#0d1b2c]">
            Computer Technician & Network Administrator
          </h3>

          <p className="mt-3 text-sm font-semibold text-sky-700">
            Ethiopian Revenues and Customs Authority
          </p>

          <p className="mt-5 text-sm leading-7 text-slate-600">
            My professional journey began with practical exposure to
            computer technology and network administration. This
            experience introduced me to the technical foundations
            behind organizational IT environments and helped develop
            my interest in understanding, maintaining, and solving
            technology-related problems.
          </p>

          <div className="mt-6 rounded-2xl bg-sky-50 p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-sky-800">
              What this chapter built
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              A foundation in IT infrastructure, networking,
              technical support, and practical problem-solving.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-2 text-xs font-bold text-sky-700">
            IT Foundations
            <ArrowRight size={15} />
            Technical Growth
          </div>

        </div>
      </article>


      {/* MELFAN */}
      <article className="group relative overflow-hidden rounded-[28px] border border-violet-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl md:mt-12 md:p-9">

        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-100/70 transition-transform duration-700 group-hover:scale-150" />

        <div className="relative">

          <div className="flex items-start justify-between">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
              <Code2 size={27} />
            </div>

            <span className="text-5xl font-black text-violet-100">
              02
            </span>
          </div>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-violet-700">
            February 2021 – March 2022
          </p>

          <h3 className="mt-3 text-2xl font-bold leading-tight text-[#0d1b2c]">
            Software Developer
          </h3>

          <p className="mt-3 text-sm font-semibold text-violet-700">
            Melfan Tech PLC
          </p>

          <p className="mt-5 text-sm leading-7 text-slate-600">
            Moving into software development opened a new dimension
            of my professional journey. At Melfan Tech, I had the
            opportunity to apply my programming knowledge in a
            professional environment, develop my software engineering
            mindset, and gain practical exposure to turning technical
            ideas into functional digital solutions.
          </p>

          <div className="mt-6 rounded-2xl bg-violet-50 p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-violet-800">
              What this chapter built
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              A stronger software development mindset, programming
              experience, and the ability to approach challenges
              through technology.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-2 text-xs font-bold text-violet-700">
            Programming
            <ArrowRight size={15} />
            Software Solutions
          </div>

        </div>
      </article>

    </div>


    {/* FLOW CONNECTOR */}
    <div className="relative flex items-center justify-center py-12">

      <div className="absolute left-1/4 top-0 h-full w-px rotate-[-25deg] bg-gradient-to-b from-sky-200 via-teal-400 to-emerald-300" />

      <div className="absolute right-1/4 top-0 h-full w-px rotate-[25deg] bg-gradient-to-b from-violet-200 via-teal-400 to-emerald-300" />

      <div className="relative flex items-center gap-3 rounded-full border border-teal-100 bg-white px-6 py-3 shadow-sm">
        <Sparkles size={17} className="text-teal-600" />
        <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
          Growing beyond technical boundaries
        </span>
      </div>

    </div>


    {/* CENTRAL FEATURE: KOTEBE */}
    <article className="relative overflow-hidden rounded-[32px] bg-[#0d1b2c] shadow-2xl shadow-slate-900/10">

      {/* Background decoration */}
      <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-teal-400/10 blur-3xl" />

      <div className="relative grid gap-10 p-7 md:grid-cols-[0.85fr_1.15fr] md:p-12 lg:p-14">

        {/* Left feature panel */}
        <div className="flex flex-col justify-between">

          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-300">
                <GraduationCap size={29} />
              </div>

              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                Current Position
              </span>
            </div>

            <p className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
              June 2021 – Present
            </p>

            <h3 className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl">
              Lecturer
            </h3>

            <p className="mt-3 text-base font-semibold text-emerald-300">
              Kotebe University of Education
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Addis Ababa, Ethiopia
            </p>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-emerald-300">
              A continuing journey
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Beyond professional development, teaching has
              become an important part of how I learn, grow,
              and contribute to the technology community.
            </p>
          </div>

        </div>


        {/* Right detailed panel */}
        <div className="rounded-[24px] border border-white/10 bg-white/[0.06] p-6 md:p-8">

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
            Knowledge · Teaching · Mentorship
          </p>

          <h4 className="mt-4 text-xl font-bold text-white md:text-2xl">
            Empowering the next generation of technology professionals.
          </h4>

          <p className="mt-5 text-sm leading-8 text-slate-300">
            My academic journey as a lecturer has allowed me to
            combine technical knowledge with teaching, mentorship,
            and continuous learning. I have been involved in helping
            university students understand computing concepts,
            develop programming skills, and explore emerging areas
            of technology. Teaching has also strengthened my ability
            to communicate complex technical ideas clearly and
            approach problems from different perspectives.
          </p>

          <div className="mt-8">
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-emerald-300">
              Courses and teaching areas
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Python Programming",
                "C++ Programming",
                "Internet Programming",
                "Computer Applications",
                "Emerging Technologies",
              ].map((course) => (
                <span
                  key={course}
                  className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-2 text-xs text-slate-200"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-xl bg-emerald-400/10 p-4">
            <Sparkles size={18} className="mt-0.5 shrink-0 text-emerald-300" />
            <p className="text-sm leading-6 text-emerald-100">
              Teaching is not only about sharing what I know;
              it is also about continuously learning, asking
              better questions, and growing together.
            </p>
          </div>

        </div>

      </div>
    </article>


    {/* SECOND FLOW CONNECTOR */}
    <div className="flex flex-col items-center py-12">

      <div className="h-12 w-px bg-gradient-to-b from-emerald-300 to-fuchsia-300" />

      <div className="flex items-center gap-2 rounded-full border border-teal-100 bg-white px-5 py-3 shadow-sm">
        <ArrowDown size={16} className="text-teal-700" />
        <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
          Exploring intelligent systems
        </span>
      </div>

      <div className="h-12 w-px bg-gradient-to-b from-fuchsia-300 to-amber-300" />

    </div>


    {/* FINAL ROW: LESAN + ADANETECH */}
    <div className="grid gap-6 md:grid-cols-2">

      {/* LESAN AI */}
      <article className="group relative overflow-hidden rounded-[28px] border border-fuchsia-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl md:mt-10 md:p-9">

        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-fuchsia-100/70 transition-transform duration-700 group-hover:scale-150" />

        <div className="relative">

          <div className="flex items-start justify-between">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-fuchsia-100 text-fuchsia-700">
              <BrainCircuit size={27} />
            </div>

            <span className="text-5xl font-black text-fuchsia-100">
              04
            </span>
          </div>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-fuchsia-700">
            February 2023 – March 2025
          </p>

          <h3 className="mt-3 text-2xl font-bold leading-tight text-[#0d1b2c]">
            Data Annotator
          </h3>

          <p className="mt-3 text-sm font-semibold text-fuchsia-700">
            Lesan AI
          </p>

          <p className="mt-5 text-sm leading-7 text-slate-600">
            My experience at Lesan AI brought me closer to the
            practical data side of artificial intelligence.
            It provided exposure to data annotation and the role
            of prepared, high-quality data in developing intelligent
            systems. This experience further strengthened my
            interest in AI and the foundations behind machine learning.
          </p>

          <div className="mt-6 rounded-2xl bg-fuchsia-50 p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-fuchsia-800">
              What this chapter built
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              A stronger appreciation for data quality,
              AI development processes, and data-driven systems.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-2 text-xs font-bold text-fuchsia-700">
            Data Preparation
            <ArrowRight size={15} />
            Intelligent Systems
          </div>

        </div>
      </article>


      {/* ADANETECH */}
      <article className="group relative overflow-hidden rounded-[28px] border border-amber-200 bg-gradient-to-br from-[#fffaf1] via-white to-[#f2faf7] p-7 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl md:p-9">

        <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-amber-100/60 transition-transform duration-700 group-hover:scale-150" />

        <div className="relative">

          <div className="flex items-start justify-between">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
              <Factory size={27} />
            </div>

            <span className="rounded-full bg-emerald-100 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-800">
              Current
            </span>
          </div>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-amber-700">
            June 2026 – Present
          </p>

          <h3 className="mt-3 text-2xl font-bold leading-tight text-[#0d1b2c]">
            Software Developer & Controls Engineer
          </h3>

          <p className="mt-3 text-sm font-semibold text-amber-800">
            AdaneTech Automation Systems
          </p>

          <p className="mt-5 text-sm leading-7 text-slate-600">
            At AdaneTech, my professional responsibilities bring
            together software development and industrial automation.
            On the software side, I have developed multiple websites,
            contributing to the company's digital presence and
            web-based solutions. Alongside this, my controls
            engineering work connects me with industrial automation
            technologies and engineering challenges.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">

            <div className="rounded-2xl bg-white/90 p-4 shadow-sm">
              <Code2 size={21} className="text-teal-700" />
              <p className="mt-3 text-sm font-bold text-slate-800">
                Software Development
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Website development and digital solutions.
              </p>
            </div>

            <div className="rounded-2xl bg-white/90 p-4 shadow-sm">
              <Factory size={21} className="text-amber-700" />
              <p className="mt-3 text-sm font-bold text-slate-800">
                Controls Engineering
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Industrial automation and engineering.
              </p>
            </div>

          </div>

          <div className="mt-6 rounded-2xl bg-amber-100/60 p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-900">
              What this chapter represents
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Bringing software engineering and industrial
              technology together to create practical solutions.
            </p>
          </div>

        </div>
      </article>

    </div>
{/* FINAL JOURNEY STATEMENT */}
{/* <section className="px-5 pb-20 md:px-8">
    <div className="mt-24 text-center">

      <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-teal-800">
        <Sparkles size={25} />
      </div>

      <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
        And the journey continues
      </p>

      <h3 className="mt-4 text-3xl font-bold text-[#0d1b2c] md:text-4xl">
        Always learning.
        <span className="text-teal-700"> Always creating.</span>
      </h3>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-slate-600 md:text-base">
        I believe growth happens when we remain curious,
        embrace new challenges, and bring different areas
        of knowledge together. My journey is still unfolding,
        and I look forward to the opportunities, ideas,
        and meaningful contributions that lie ahead.
      </p>

      <a
        href="/contact"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0d1b2c] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-teal-800"
      >
        Let's Connect
        <ArrowUpRight size={17} />
      </a>

    </div>
    </section> */}

  </div>
</section>

      {/* CLOSING SECTION */}
      <section className="px-5 pb-20 md:px-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#0d1b2c] px-7 py-12 text-center md:px-16 md:py-16">
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />

          <div className="relative">
            <Sparkles className="mx-auto mb-5 text-teal-400" size={30} />

            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Always learning. Always building.
              <span className="block text-teal-400">
                Always growing.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
              I see every experience as another opportunity to learn,
              challenge myself, and contribute something meaningful.
              The journey continues, and I am excited about what comes next.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-teal-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-teal-400"
            >
              Let's Connect
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
