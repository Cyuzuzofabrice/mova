import { ArrowRight, CalendarDays, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const activities = [
  {
    id: "running",
    title: "Running",
    description: "Build mobility around your running week.",
  },
  {
    id: "training",
    title: "Training",
    description: "Support strength and performance.",
  },
  {
    id: "golf",
    title: "Golf",
    description: "Move freely through every swing.",
  },
  {
    id: "everyday",
    title: "Everyday",
    description: "Build a consistent movement practice.",
  },
];

const schedules = [2, 3, 4, 5];

const week = [
  {
    day: "MON",
    session: "Mobility",
    duration: "15 min",
  },
  {
    day: "TUE",
    session: "Recovery",
    duration: "10 min",
  },
  {
    day: "WED",
    session: "Mobility",
    duration: "20 min",
  },
  {
    day: "THU",
    session: "Rest",
    duration: "",
  },
  {
    day: "FRI",
    session: "Performance",
    duration: "15 min",
  },
  {
    day: "SAT",
    session: "Recovery",
    duration: "10 min",
  },
  {
    day: "SUN",
    session: "Rest",
    duration: "",
  },
];

export default function ProgramBuilder() {
  const [activity, setActivity] = useState("running");
  const [schedule, setSchedule] = useState(3);

  const selectedActivity =
    activities.find((item) => item.id === activity) ?? activities[0];

  return (
    <section className="bg-white px-6 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1400px]">
        {/* HEADER */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/35">
              Build your program
            </p>

            <h2 className="mt-5 text-5xl font-medium leading-[0.9] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-8xl">
              Make movement
              <br />
              <span className="text-black/25">a habit.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-lg text-base leading-7 text-black/45 lg:ml-auto"
          >
            Choose what you want to support and how often you want to move.
            MOVA creates a simple weekly rhythm you can actually follow.
          </motion.p>
        </div>

        {/* BUILDER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-16 grid overflow-hidden rounded-[2rem] bg-[#f4f4f1] lg:grid-cols-[0.8fr_1.2fr]"
        >
          {/* CONTROLS */}
          <div className="p-7 sm:p-10 lg:p-14">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
                <CalendarDays size={15} />
              </span>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/35">
                Your preferences
              </p>
            </div>

            {/* ACTIVITY */}
            <div className="mt-12">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/30">
                What do you want to support?
              </p>

              <div className="mt-5 space-y-2">
                {activities.map((item) => {
                  const active = activity === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActivity(item.id)}
                      className={`w-full rounded-2xl border p-4 text-left transition-all duration-300 ${
                        active
                          ? "border-black bg-black text-white"
                          : "border-black/10 bg-white hover:border-black/25"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold">
                            {item.title}
                          </p>

                          <p
                            className={`mt-1 text-xs ${
                              active
                                ? "text-white/45"
                                : "text-black/40"
                            }`}
                          >
                            {item.description}
                          </p>
                        </div>

                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                            active
                              ? "bg-white text-black"
                              : "border border-black/10"
                          }`}
                        >
                          {active && <Check size={13} />}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* SCHEDULE */}
            <div className="mt-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/30">
                Days per week
              </p>

              <div className="mt-5 grid grid-cols-4 gap-2">
                {schedules.map((number) => {
                  const active = schedule === number;

                  return (
                    <button
                      key={number}
                      type="button"
                      onClick={() => setSchedule(number)}
                      className={`rounded-2xl py-4 text-center text-sm font-semibold transition ${
                        active
                          ? "bg-black text-white"
                          : "bg-white text-black/45 hover:text-black"
                      }`}
                    >
                      {number}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* WEEKLY PLAN */}
          <div className="bg-black p-7 text-white sm:p-10 lg:p-14">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                  Your week
                </p>

                <motion.h3
                  key={`${activity}-${schedule}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 text-3xl font-medium tracking-[-0.04em] sm:text-4xl"
                >
                  {selectedActivity.title} · Week 1
                </motion.h3>
              </div>

              <span className="hidden rounded-full bg-white/10 px-4 py-2 text-xs text-white/45 sm:block">
                {schedule} sessions
              </span>
            </div>

            {/* DAYS */}
            <div className="mt-10 space-y-2">
              {week.map((item, index) => {
                const isRest = item.session === "Rest";

                return (
                  <motion.div
                    key={item.day}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                    }}
                    className={`flex items-center justify-between rounded-2xl px-4 py-4 ${
                      isRest ? "bg-white/[0.03]" : "bg-white/[0.08]"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-8 text-[10px] font-semibold tracking-[0.15em] text-white/30">
                        {item.day}
                      </span>

                      <div>
                        <p
                          className={`text-sm font-medium ${
                            isRest ? "text-white/35" : "text-white"
                          }`}
                        >
                          {item.session}
                        </p>

                        {!isRest && (
                          <p className="mt-1 text-[11px] text-white/30">
                            {item.duration}
                          </p>
                        )}
                      </div>
                    </div>

                    {!isRest && (
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black">
                        <Check size={13} />
                      </span>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
           <Link
  to="/programs"
  className="group flex w-full items-center justify-between rounded-full !bg-white py-3 pl-6 pr-3 text-sm font-semibold !text-black transition-all duration-300 hover:!bg-neutral-100"
>
  <span className="!text-black">
    Explore programs
  </span>

  <span className="flex h-9 w-9 items-center justify-center rounded-full !bg-black !text-white transition-transform duration-300 group-hover:translate-x-1">
    <ArrowRight size={16} />
  </span>
</Link>
          </div>
        </motion.div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-black/30">
            Consistency beats intensity. Start small and keep moving.
          </p>
        </motion.div>
      </div>
    </section>
  );
}