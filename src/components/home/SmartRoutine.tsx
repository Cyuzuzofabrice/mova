import { ArrowRight, Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const options = [
  {
    id: "stiff",
    title: "I'm feeling stiff",
    description: "Loosen up and create more space.",
    need: "mobility",
    focus: "Full body",
  },
  {
    id: "training",
    title: "I'm training today",
    description: "Prepare your body for movement.",
    need: "training",
    focus: "Full body",
  },
  {
    id: "recovery",
    title: "I need to recover",
    description: "Slow down and release tension.",
    need: "recovery",
    focus: "Full body",
  },
  {
    id: "hips",
    title: "My hips need attention",
    description: "Open and mobilize your hips.",
    need: "mobility",
    focus: "Hips",
  },
];

const durations = ["10 min", "20 min", "30 min"];

export default function SmartRoutine() {
  const [selected, setSelected] = useState("stiff");
  const [duration, setDuration] = useState("20 min");

  const selectedOption =
    options.find((option) => option.id === selected) ?? options[0];

  const routineUrl = `/routine?need=${
    selectedOption.need
  }&duration=${encodeURIComponent(duration)}&focus=${encodeURIComponent(
    selectedOption.focus
  )}`;

  return (
    <section className="bg-[#f5f5f2] px-6 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1400px]">
        {/* INTRO */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/35">
              Smart routines
            </p>

            <h2 className="mt-5 text-5xl font-medium leading-[0.9] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-8xl">
              You tell us
              <br />
              <span className="text-black/25">what you need.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl text-base leading-7 text-black/45 lg:ml-auto"
          >
            No complicated planning. Choose how you're feeling and how much
            time you have. MOVA will shape the session around you.
          </motion.p>
        </div>

        {/* SMART BUILDER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-16 overflow-hidden rounded-[2rem] bg-black text-white"
        >
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            {/* OPTIONS */}
            <div className="p-7 sm:p-10 lg:p-14">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                  <Sparkles size={14} />
                </span>

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                  Tell MOVA
                </span>
              </div>

              <h3 className="mt-10 max-w-xl text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">
                How does your body feel right now?
              </h3>

              <div className="mt-8 grid gap-2 sm:grid-cols-2">
                {options.map((option) => {
                  const active = selected === option.id;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setSelected(option.id)}
                      className={`group rounded-2xl border p-5 text-left transition-all duration-300 ${
                        active
                          ? "border-white bg-white text-black"
                          : "border-white/10 bg-white/[0.04] hover:border-white/25 hover:bg-white/[0.08]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold">
                            {option.title}
                          </p>

                          <p
                            className={`mt-2 text-xs leading-5 ${
                              active
                                ? "text-black/45"
                                : "text-white/35"
                            }`}
                          >
                            {option.description}
                          </p>
                        </div>

                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
                            active
                              ? "border-black bg-black text-white"
                              : "border-white/15"
                          }`}
                        >
                          {active && <Check size={12} />}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* DURATION */}
              <div className="mt-12">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                  How much time do you have?
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
                            ? "bg-white text-black"
                            : "bg-white/10 text-white/55 hover:bg-white/15 hover:text-white"
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RESULT */}
            <div className="relative flex min-h-[500px] flex-col justify-between overflow-hidden border-t border-white/10 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-14">
              {/* DECORATIVE CIRCLE */}
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />

              <div className="relative">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                  MOVA suggests
                </p>

                <motion.div
                  key={`${selected}-${duration}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-16"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
                    <Sparkles size={18} />
                  </div>

                  <h3 className="mt-8 text-4xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-5xl">
                    {selectedOption.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-white/40">
                    {selectedOption.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    <span className="rounded-full bg-white/10 px-3 py-2 text-xs text-white/55">
                      {duration}
                    </span>

                    <span className="rounded-full bg-white/10 px-3 py-2 text-xs text-white/55">
                      {selectedOption.focus}
                    </span>

                    <span className="rounded-full bg-white/10 px-3 py-2 text-xs text-white/55">
                      Personalized
                    </span>
                  </div>
                </motion.div>
              </div>
<Link
  to={routineUrl}
  className="group relative mt-12 flex items-center justify-between rounded-full !bg-white py-3 pl-6 pr-3 text-sm font-semibold !text-black transition-all duration-300 hover:!bg-neutral-100"
>
  <span className="!text-black">
    Start your session
  </span>

  <span className="flex h-9 w-9 items-center justify-center rounded-full !bg-black !text-white transition-transform duration-300 group-hover:translate-x-1">
    <ArrowRight size={16} />
  </span>
</Link>
            </div>
          </div>
        </motion.div>

        {/* SMALL NOTE */}
        <p className="mt-6 text-center text-xs text-black/30">
          Every session is designed to be simple, focused and easy to fit into
          your day.
        </p>
      </div>
    </section>
  );
}