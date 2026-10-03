import {
  ArrowUpRight,
  Check,
  Flame,
  Move3D,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const stats = [
  {
    value: "12",
    label: "Sessions completed",
    icon: Check,
  },
  {
    value: "3.8h",
    label: "Time moving",
    icon: Move3D,
  },
  {
    value: "7",
    label: "Day streak",
    icon: Flame,
  },
];

const weeklyActivity = [
  { day: "M", value: 72 },
  { day: "T", value: 45 },
  { day: "W", value: 88 },
  { day: "T", value: 58 },
  { day: "F", value: 76 },
  { day: "S", value: 35 },
  { day: "S", value: 64 },
];

export default function Progress() {
  return (
    <section className="bg-[#f5f5f2] px-6 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1400px]">
        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.6fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/35">
              Your progress
            </p>

            <h2 className="mt-5 text-5xl font-medium leading-[0.9] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-8xl">
              Every session
              <br />
              <span className="text-black/25">adds up.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-md text-base leading-7 text-black/45 lg:ml-auto"
          >
            Keep showing up. MOVA turns your sessions into a simple picture
            of your movement practice.
          </motion.p>
        </div>

        {/* DASHBOARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-16 overflow-hidden rounded-[2rem] bg-black text-white"
        >
          {/* TOP */}
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-7 sm:p-10 lg:p-14">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                    This week
                  </p>

                  <h3 className="mt-3 text-3xl font-medium tracking-[-0.04em]">
                    Keep moving.
                  </h3>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black">
                  <Trophy size={17} />
                </div>
              </div>

              {/* STATS */}
              <div className="mt-12 grid grid-cols-3 gap-2">
                {stats.map((stat) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={stat.label}
                      className="rounded-2xl bg-white/[0.07] p-4"
                    >
                      <Icon size={15} className="text-white/35" />

                      <p className="mt-7 text-2xl font-medium tracking-[-0.04em]">
                        {stat.value}
                      </p>

                      <p className="mt-1 text-[10px] leading-4 text-white/30">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* STREAK */}
              <div className="mt-5 rounded-2xl bg-white/[0.07] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/35">Current streak</p>

                    <p className="mt-2 text-3xl font-medium tracking-[-0.04em]">
                      7 days
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                    <Flame size={17} />
                  </div>
                </div>

                <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "70%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="h-full rounded-full bg-white"
                  />
                </div>
              </div>
            </div>

            {/* CHART */}
            <div className="border-t border-white/10 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-14">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                    Movement
                  </p>

                  <p className="mt-2 text-xl font-medium">
                    Weekly activity
                  </p>
                </div>

                <span className="text-xs text-white/30">
                  7 sessions
                </span>
              </div>

              <div className="mt-14 flex h-64 items-end justify-between gap-3 sm:gap-5">
                {weeklyActivity.map((item, index) => (
                  <div
                    key={`${item.day}-${index}`}
                    className="flex h-full flex-1 flex-col items-center justify-end gap-3"
                  >
                    <div className="flex h-full w-full items-end">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${item.value}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.7,
                          delay: index * 0.08,
                        }}
                        className={`w-full rounded-t-xl ${
                          index === 2
                            ? "bg-white"
                            : "bg-white/15"
                        }`}
                      />
                    </div>

                    <span className="text-[10px] font-medium text-white/30">
                      {item.day}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="text-sm leading-6 text-white/40">
                  Consistency is the goal. You don't need a perfect week —
                  you just need to keep moving.
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="border-t border-white/10 p-7 sm:p-10 lg:px-14 lg:py-8">
            <Link
              to="/explore"
              className="group flex items-center justify-between"
            >
              <div>
                <p className="text-sm font-semibold">
                  Ready for your next session?
                </p>

                <p className="mt-1 text-xs text-white/30">
                  Keep your momentum going.
                </p>
              </div>

              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:translate-x-1">
                <ArrowUpRight size={17} />
              </span>
            </Link>
          </div>
        </motion.div>

        {/* SMALL STATEMENT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 flex items-center justify-center gap-3 text-center"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-black/25" />

          <p className="text-xs text-black/35">
            Your progress stays on your device.
          </p>
        </motion.div>
      </div>
    </section>
  );
}