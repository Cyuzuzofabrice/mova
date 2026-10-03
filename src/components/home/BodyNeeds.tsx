import { ArrowUpRight, Check } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const needs = [
  {
    id: "recovery",
    number: "01",
    title: "I need recovery",
    description: "Release tension and help your body recover.",
  },
  {
    id: "mobility",
    number: "02",
    title: "I want to move better",
    description: "Improve your range of motion and everyday movement.",
  },
  {
    id: "flexibility",
    number: "03",
    title: "I want more flexibility",
    description: "Build flexibility through consistent mobility work.",
  },
  {
    id: "training",
    number: "04",
    title: "I'm preparing for training",
    description: "Get your body ready before you train.",
  },
  {
    id: "quick",
    number: "05",
    title: "I only have 10 minutes",
    description: "A short routine that fits into your day.",
  },
];

const durations = ["10 min", "20 min", "30 min"];

const focuses = ["Full body", "Hips", "Back", "Shoulders"];

const routineData = {
  recovery: {
    title: "Recovery Reset",
    description:
      "Release tension and help your body feel relaxed, mobile and ready for the rest of your day.",
    level: "Easy",
  },
  mobility: {
    title: "Move Better",
    description:
      "Improve your range of motion and build better movement through controlled mobility work.",
    level: "Moderate",
  },
  flexibility: {
    title: "Flexibility Flow",
    description:
      "Build flexibility gradually with slow, controlled movements and longer stretches.",
    level: "Easy",
  },
  training: {
    title: "Training Prep",
    description:
      "Prepare your body for training with dynamic mobility and movement preparation.",
    level: "Active",
  },
  quick: {
    title: "10-Minute Reset",
    description:
      "A focused mobility session designed for days when you only have a few minutes.",
    level: "Easy",
  },
};

export default function BodyNeeds() {
  const [selected, setSelected] = useState("recovery");
  const [duration, setDuration] = useState("10 min");
  const [focus, setFocus] = useState("Full body");

  const activeNeed = needs.find((item) => item.id === selected);

  const routine =
    routineData[selected as keyof typeof routineData];

  return (
    <section className="bg-[#f5f5f2] px-6 py-24 sm:px-8 md:py-32 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        {/* HEADER */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/40">
              Start where you are
            </p>

            <h2 className="mt-5 max-w-lg text-5xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-6xl">
              What does your
              <br />
              body need today?
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-lg text-base leading-7 text-black/55">
              Tell MOVA how you're feeling and we'll build a routine
              around your goal, available time and focus.
            </p>
          </div>
        </div>

        {/* ROUTINE BUILDER */}
        <div className="mt-16 grid overflow-hidden rounded-[2rem] bg-white lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT SIDE */}
          <div className="border-black/10 lg:border-r">
            <div className="divide-y divide-black/10">
              {needs.map((need) => {
                const isSelected = selected === need.id;

                return (
                  <button
                    key={need.id}
                    type="button"
                    onClick={() => setSelected(need.id)}
                    className={`group flex w-full items-center justify-between px-6 py-7 text-left transition sm:px-8 ${
                      isSelected
                        ? "bg-black text-white"
                        : "hover:bg-neutral-100"
                    }`}
                  >
                    <div className="flex items-center gap-5">
                      <span
                        className={`text-xs ${
                          isSelected
                            ? "text-white/45"
                            : "text-black/30"
                        }`}
                      >
                        {need.number}
                      </span>

                      <div>
                        <span className="block text-lg font-medium tracking-tight sm:text-xl">
                          {need.title}
                        </span>

                        <span
                          className={`mt-1 block text-sm ${
                            isSelected
                              ? "text-white/50"
                              : "text-black/40"
                          }`}
                        >
                          {need.description}
                        </span>
                      </div>
                    </div>

                    {isSelected ? (
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-black">
                        <Check size={15} />
                      </span>
                    ) : (
                      <ArrowUpRight
                        size={20}
                        className="text-black/25 transition group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-neutral-950 p-7 text-white sm:p-10 lg:p-12">
            {/* INTRO */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
                Build your routine
              </p>

              <h3 className="mt-4 text-4xl font-medium tracking-[-0.045em] sm:text-5xl">
                {activeNeed?.title}
              </h3>

              <p className="mt-4 max-w-md text-sm leading-6 text-white/50">
                {activeNeed?.description}
              </p>
            </div>

            {/* DURATION */}
            <div className="mt-10">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                How much time do you have?
              </p>

              <div className="flex flex-wrap gap-2">
                {durations.map((item) => {
                  const active = duration === item;

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setDuration(item)}
                      className={`rounded-full px-4 py-2.5 text-sm transition ${
                        active
                          ? "bg-white text-black"
                          : "bg-white/10 text-white/60 hover:bg-white/15 hover:text-white"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* FOCUS */}
            <div className="mt-8">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                What should we focus on?
              </p>

              <div className="flex flex-wrap gap-2">
                {focuses.map((item) => {
                  const active = focus === item;

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setFocus(item)}
                      className={`rounded-full px-4 py-2.5 text-sm transition ${
                        active
                          ? "bg-white text-black"
                          : "bg-white/10 text-white/60 hover:bg-white/15 hover:text-white"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ROUTINE PREVIEW */}
            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                Your MOVA routine
              </p>

              <h4 className="mt-3 text-2xl font-medium tracking-[-0.03em]">
                {routine.title}
              </h4>

              <p className="mt-3 max-w-md text-sm leading-6 text-white/45">
                {routine.description}
              </p>

              {/* STATS */}
              <div className="mt-6 grid grid-cols-3 gap-2">
                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-[9px] uppercase tracking-wider text-white/30">
                    Time
                  </p>

                  <p className="mt-1 text-sm font-medium">
                    {duration}
                  </p>
                </div>

                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-[9px] uppercase tracking-wider text-white/30">
                    Focus
                  </p>

                  <p className="mt-1 text-sm font-medium">
                    {focus}
                  </p>
                </div>

                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-[9px] uppercase tracking-wider text-white/30">
                    Level
                  </p>

                  <p className="mt-1 text-sm font-medium">
                    {routine.level}
                  </p>
                </div>
              </div>

              {/* BUILD ROUTINE BUTTON */}
              <Link
                to={`/routine?need=${selected}&duration=${encodeURIComponent(
                  duration
                )}&focus=${encodeURIComponent(focus)}`}
                className="group mt-7 flex w-full items-center justify-between rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-black transition hover:bg-neutral-200"
              >
                <span>Build my routine</span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition-transform group-hover:translate-x-1">
                  <ArrowUpRight size={15} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}