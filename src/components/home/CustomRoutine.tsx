import { ArrowRight, Clock3, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

const needs = [
  {
    id: "recovery",
    label: "Recover",
    description: "Release tension and reset",
  },
  {
    id: "mobility",
    label: "Move better",
    description: "Improve everyday movement",
  },
  {
    id: "flexibility",
    label: "Get flexible",
    description: "Build comfortable range",
  },
  {
    id: "training",
    label: "Prepare",
    description: "Get ready to train",
  },
];

const durations = ["10 min", "20 min", "30 min"];

const focuses = ["Full body", "Hips", "Back", "Shoulders"];

export default function CustomRoutine() {
  const [need, setNeed] = useState("mobility");
  const [duration, setDuration] = useState("20 min");
  const [focus, setFocus] = useState("Full body");

  const routineUrl = `/routine?need=${need}&duration=${encodeURIComponent(
    duration
  )}&focus=${encodeURIComponent(focus)}`;

  const selectedNeed = needs.find((item) => item.id === need);

  return (
    <section className="bg-white px-6 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1400px]">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/35">
            Build your session
          </p>

          <h2 className="mt-5 text-5xl font-medium leading-[0.92] tracking-[-0.055em] sm:text-6xl md:text-7xl">
            What do you need
            <br />
            <span className="text-black/25">today?</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-black/45">
            Tell MOVA how you feel, how much time you have and where you want
            to focus. We'll build a session around you.
          </p>
        </motion.div>

        {/* BUILDER */}
        <div className="mt-16 grid overflow-hidden rounded-[2rem] bg-[#f4f4f1] lg:grid-cols-[1.15fr_0.85fr]">
          {/* LEFT — CONTROLS */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="p-7 sm:p-10 lg:p-14"
          >
            {/* NEED */}
            <div>
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/35">
                  01 — What do you need?
                </p>

                <Sparkles size={16} className="text-black/25" />
              </div>

              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {needs.map((item) => {
                  const active = need === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setNeed(item.id)}
                      className={`rounded-2xl border p-4 text-left transition-all duration-300 ${
                        active
                          ? "border-black bg-black text-white shadow-lg shadow-black/10"
                          : "border-black/10 bg-white hover:border-black/25"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold">
                          {item.label}
                        </span>

                        <span
                          className={`h-2 w-2 rounded-full ${
                            active ? "bg-white" : "bg-black/15"
                          }`}
                        />
                      </div>

                      <p
                        className={`mt-1 text-xs ${
                          active ? "text-white/50" : "text-black/40"
                        }`}
                      >
                        {item.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* DURATION */}
            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/35">
                02 — How much time?
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {durations.map((item) => {
                  const active = duration === item;

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setDuration(item)}
                      className={`rounded-full px-5 py-3 text-sm font-medium transition ${
                        active
                          ? "bg-black text-white"
                          : "bg-white text-black/55 hover:text-black"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* FOCUS */}
            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/35">
                03 — Where should we focus?
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {focuses.map((item) => {
                  const active = focus === item;

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setFocus(item)}
                      className={`rounded-full px-5 py-3 text-sm font-medium transition ${
                        active
                          ? "bg-black text-white"
                          : "bg-white text-black/55 hover:text-black"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* RIGHT — LIVE PREVIEW */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative flex min-h-[500px] flex-col justify-between overflow-hidden bg-black p-7 text-white sm:p-10 lg:p-14"
          >
            {/* DECORATION */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
            <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10" />

            <div className="relative">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                  <Sparkles size={14} />
                </span>

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                  Your MOVA session
                </span>
              </div>

              <motion.div
                key={`${need}-${duration}-${focus}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-16"
              >
                <p className="text-sm text-white/35">
                  {selectedNeed?.label}
                </p>

                <h3 className="mt-3 text-5xl font-medium leading-[0.92] tracking-[-0.055em] sm:text-6xl">
                  {focus}
                  <br />
                  <span className="text-white/30">
                    {duration.replace(" min", " minutes")}
                  </span>
                </h3>

                <p className="mt-7 max-w-sm text-sm leading-6 text-white/45">
                  A personalized {selectedNeed?.label.toLowerCase()} session
                  designed around your {focus.toLowerCase()}.
                </p>
              </motion.div>
            </div>

            <div className="relative mt-12">
              <div className="mb-5 flex items-center gap-2 text-xs text-white/40">
                <Clock3 size={14} />
                {duration}
                <span className="mx-1">•</span>
                {focus}
              </div>

<Link
  to={routineUrl}
  className="group flex w-full items-center justify-between rounded-full !bg-white py-3 pl-6 pr-3 text-sm font-semibold !text-black transition-all duration-300 hover:!bg-neutral-100"
>
  <span className="!text-black">
    Build my routine
  </span>

  <span className="flex h-9 w-9 items-center justify-center rounded-full !bg-black !text-white transition-transform duration-300 group-hover:translate-x-1">
    <ArrowRight size={16} />
  </span>
</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}