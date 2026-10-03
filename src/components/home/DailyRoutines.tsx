import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const days = [
  {
    day: "Today",
    date: "03",
    active: true,
  },
  {
    day: "Mon",
    date: "04",
    active: false,
  },
  {
    day: "Tue",
    date: "05",
    active: false,
  },
  {
    day: "Wed",
    date: "06",
    active: false,
  },
  {
    day: "Thu",
    date: "07",
    active: false,
  },
];

const routines = [
  {
    title: "Morning Mobility",
    category: "Everyday",
    duration: "10 min",
    description:
      "Wake up your body with simple movement that gets everything moving.",
    image:
      "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg",
    query: "/routine?need=mobility&duration=10%20min&focus=Full%20body",
  },
  {
    title: "Full Body Reset",
    category: "Recovery",
    duration: "20 min",
    description:
      "Slow down, release tension and create space throughout your body.",
    image:
      "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg",
    query: "/routine?need=recovery&duration=20%20min&focus=Full%20body",
  },
  {
    title: "Hip & Lower Body",
    category: "Mobility",
    duration: "20 min",
    description:
      "Open your hips and build comfortable movement through your lower body.",
    image:
      "https://images.pexels.com/photos/4325464/pexels-photo-4325464.jpeg",
    query: "/routine?need=mobility&duration=20%20min&focus=Hips",
  },
];

export default function DailyRoutines() {
  return (
    <section className="bg-[#f5f5f2] px-6 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1400px]">
        {/* HEADER */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
                <CalendarDays size={15} />
              </span>

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/35">
                Daily practice
              </p>
            </div>

            <h2 className="mt-6 text-5xl font-medium leading-[0.92] tracking-[-0.055em] sm:text-6xl md:text-7xl">
              Make movement
              <br />
              <span className="text-black/25">part of your day.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-md text-sm leading-6 text-black/45"
          >
            Short sessions designed to fit naturally into your day. Start
            whenever you have a few minutes to move.
          </motion.p>
        </div>

        {/* DAYS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 overflow-x-auto pb-2"
        >
          <div className="flex min-w-max gap-2">
            {days.map((item) => (
              <button
                key={item.day}
                type="button"
                className={`flex min-w-[110px] flex-col rounded-2xl p-4 text-left transition ${
                  item.active
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-black hover:text-white"
                }`}
              >
                <span
                  className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${
                    item.active ? "text-white/45" : "text-black/30"
                  }`}
                >
                  {item.day}
                </span>

                <span className="mt-3 text-2xl font-medium tracking-[-0.04em]">
                  {item.date}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* FEATURED ROUTINE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-10"
        >
          <Link
            to={routines[0].query}
            className="group relative block overflow-hidden rounded-[2rem] bg-black"
          >
            <div className="aspect-[16/7] min-h-[400px]">
              <img
                src={routines[0].image}
                alt={routines[0].title}
                className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-105"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute bottom-7 left-7 right-7 sm:bottom-10 sm:left-10 sm:right-10">
              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                      {routines[0].category}
                    </span>

                    <span className="flex items-center gap-1.5 text-xs text-white/55">
                      <Clock3 size={13} />
                      {routines[0].duration}
                    </span>
                  </div>

                  <h3 className="mt-4 text-4xl font-medium tracking-[-0.05em] text-white sm:text-5xl md:text-6xl">
                    {routines[0].title}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-white/55">
                    {routines[0].description}
                  </p>
                </div>

                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={19} />
                </span>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* OTHER ROUTINES */}
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {routines.slice(1).map((routine, index) => (
            <motion.div
              key={routine.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <Link
                to={routine.query}
                className="group grid overflow-hidden rounded-[2rem] bg-white sm:grid-cols-[0.9fr_1.1fr]"
              >
                <div className="aspect-[4/3] overflow-hidden sm:aspect-auto">
                  <img
                    src={routine.image}
                    alt={routine.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-between p-6 sm:p-7">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/30">
                        {routine.category}
                      </span>

                      <span className="flex items-center gap-1.5 text-xs text-black/35">
                        <Clock3 size={13} />
                        {routine.duration}
                      </span>
                    </div>

                    <h3 className="mt-10 text-2xl font-medium tracking-[-0.04em]">
                      {routine.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-black/45">
                      {routine.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-2 text-sm font-semibold">
                    Start session

                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* FOOTER LINK */}
        <div className="mt-12 flex justify-end">
          <Link
            to="/explore"
            className="group inline-flex items-center gap-2 text-sm font-semibold"
          >
            Explore all routines

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight size={14} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}