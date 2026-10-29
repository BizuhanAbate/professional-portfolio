
import {
  ArrowUpRight,
  BookOpen,
  ChartNoAxesCombined,
  ShieldCheck,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const researchHighlights = [
  {
    icon: ShieldCheck,
    title: "Fairness-aware learning",
    text: "Investigating how cooperative agents can share rewards more equitably.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Adaptive welfare weighting",
    text: "Exploring adaptive weighting to balance collective performance and fairness.",
  },
  {
    icon: BookOpen,
    title: "Experimental evaluation",
    text: "Comparing methods using reward and fairness-related evaluation metrics.",
  },
];

export default function Research() {
  return (
    <section
      id="research"
      className="scroll-mt-24 bg-slate-950 py-20 text-white sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Research spotlight"
          title="Making cooperative AI more equitable."
          description="My research explores how adaptive welfare weighting can improve fairness while maintaining strong performance in cooperative multi-agent reinforcement learning."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1.5 text-xs font-semibold text-teal-300">
              <BookOpen size={14} />
              MSc research
            </span>

            <h3 className="mt-6 text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
              Adaptive Welfare Weighting for Enhanced Fairness Integration
              in Cooperative Multi-Agent Proximal Policy Optimization
            </h3>

            <p className="mt-5 text-sm leading-7 text-slate-300">
              The work investigates adaptive welfare weighting for balancing
              collective reward and fairness, addressing the risk that some
              agents consistently benefit more than others during cooperative
              learning.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Multi-agent RL", "Fairness", "PPO", "Welfare optimization"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            <a
              href="#publications"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-500"
            >
              Explore publication <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="flex flex-col justify-center divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03] px-6 sm:px-8">
            {researchHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex gap-4 py-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-400/10 text-teal-300">
                    <Icon size={22} />
                  </span>

                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          id="publications"
          className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"
        >
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-300">
            Publication
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Published in IEEE Access. Add the official article title, DOI,
            citation, and publisher link before deploying the final version.
          </p>

          {/* Replace # with the official DOI or publisher URL. */}
          <a
            href="#"
            onClick={(event) => event.preventDefault()}
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-teal-300 hover:text-teal-200"
          >
            Add publication link <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
