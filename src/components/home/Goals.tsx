import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const goals = [
  {
    title: "Performance",
    description: "Prepare your body to perform at its best.",
    image:
      "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg",
    query: "/routine?need=training&duration=20%20min&focus=Full%20body",
    size: "large",
  },
  {
    title: "Recovery",
    description: "Release tension and help your body reset.",
    image:
      "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg",
    query: "/routine?need=recovery&duration=20%20min&focus=Full%20body",
    size: "normal",
  },
  {
    title: "Running",
    description: "Move better before and after every run.",
    image:
      "https://images.pexels.com/photos/3764014/pexels-photo-3764014.jpeg",
    query: "/routine?need=training&duration=20%20min&focus=Hips",
    size: "normal",
  },
  {
    title: "Training",
    description: "Build movement into your training routine.",
    image:
      "https://images.pexels.com/photos/7187806/pexels-photo-7187806.jpeg",
    query: "/routine?need=training&duration=20%20min&focus=Full%20body",
    size: "normal",
  },
  {
    title: "Full Body",
    description: "Give your whole body room to move.",
    image:
      "https://images.pexels.com/photos/4325464/pexels-photo-4325464.jpeg",
    query: "/routine?need=mobility&duration=20%20min&focus=Full%20body",
    size: "normal",
  },
  {
    title: "Hips",
    description: "Create more space through your hips.",
    image:
      "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg",
    query: "/routine?need=mobility&duration=20%20min&focus=Hips",
    size: "normal",
  },
  {
    title: "Back",
    description: "Move, rotate and reset your back.",
    image:
      "https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg",
    query: "/routine?need=mobility&duration=20%20min&focus=Back",
    size: "normal",
  },
  {
    title: "Shoulders",
    description: "Open up your shoulders and upper body.",
    image:
      "https://images.pexels.com/photos/6453399/pexels-photo-6453399.jpeg",
    query: "/routine?need=mobility&duration=20%20min&focus=Shoulders",
    size: "normal",
  },
  {
    title: "Flexibility",
    description: "Build comfortable range of motion.",
    image:
      "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg",
    query: "/routine?need=flexibility&duration=20%20min&focus=Full%20body",
    size: "normal",
  },
];

export default function Goals() {
  return (
    <section
      id="goals"
      className="bg-[#f5f5f2] px-6 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/35">
              Find your focus
            </p>

            <h2 className="mt-5 max-w-4xl text-5xl font-medium leading-[0.92] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-8xl">
              What do you want
              <br />
              <span className="text-black/30">to work on?</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-md text-base leading-7 text-black/50 lg:pb-2"
          >
            Whether you're training, recovering or simply trying to feel
            better, choose a focus and MOVA will help you find a session that
            fits.
          </motion.p>
        </div>

        {/* FEATURED CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <Link
            to={goals[0].query}
            className="group relative block overflow-hidden rounded-[2rem] bg-black"
          >
            <div className="aspect-[16/7] min-h-[400px]">
              <img
                src={goals[0].image}
                alt={goals[0].title}
                className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-105"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between sm:bottom-10 sm:left-10 sm:right-10">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
                  Featured focus
                </p>

                <h3 className="mt-2 text-4xl font-medium tracking-[-0.05em] text-white sm:text-5xl md:text-6xl">
                  {goals[0].title}
                </h3>

                <p className="mt-2 max-w-md text-sm text-white/60">
                  {goals[0].description}
                </p>
              </div>

              <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45 sm:flex">
                <ArrowUpRight size={20} />
              </span>
            </div>
          </Link>
        </motion.div>

        {/* GOAL GRID */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {goals.slice(1).map((goal, index) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
              }}
            >
              <Link
                to={goal.query}
                className="group relative block overflow-hidden rounded-[1.75rem] bg-black"
              >
                <div className="aspect-[4/5]">
                  <img
                    src={goal.image}
                    alt={goal.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-medium tracking-[-0.04em] text-white">
                        {goal.title}
                      </h3>

                      <p className="mt-1.5 max-w-[220px] text-xs leading-5 text-white/55">
                        {goal.description}
                      </p>
                    </div>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight size={15} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM TEXT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 flex flex-col justify-between gap-5 border-t border-black/10 pt-7 sm:flex-row sm:items-center"
        >
          <p className="text-sm text-black/40">
            Don't know where to start?
          </p>

          <Link
            to="/mobility-test"
            className="group inline-flex items-center gap-2 text-sm font-semibold"
          >
            Take the mobility test
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={13} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}