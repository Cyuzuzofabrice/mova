import { ArrowUpRight, Move3D } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    number: "01",
    title: "Move freely",
    text: "Build the range of motion you need for training, work and everyday life.",
  },
  {
    number: "02",
    title: "Recover better",
    text: "Give your body time and space to release tension after demanding days.",
  },
  {
    number: "03",
    title: "Stay ready",
    text: "Prepare your body to move before you run, train, lift or compete.",
  },
];

export default function WhyMobility() {
  return (
    <section className="overflow-hidden bg-white px-6 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1400px]">
        {/* TOP LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
            <Move3D size={16} />
          </span>

          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-black/40">
            Why mobility
          </span>
        </motion.div>

        {/* MAIN EDITORIAL AREA */}
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-20">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="max-w-4xl text-6xl font-medium leading-[0.88] tracking-[-0.065em] sm:text-7xl md:text-8xl">
              Your body
              <br />
              was built
              <br />
              <span className="text-black/25">to move.</span>
            </h2>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-lg lg:pb-2"
          >
            <p className="text-lg leading-8 text-black/55">
              Mobility is more than stretching. It's the ability to move with
              control, comfort and confidence — before training, after
              training and throughout everyday life.
            </p>

            <a
              href="#goals"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Find your focus
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="group relative mt-20 overflow-hidden rounded-[2rem] bg-black md:mt-28"
        >
          <div className="aspect-[16/8] min-h-[420px]">
            <img
              src="https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg"
              alt="Athlete practicing mobility"
              className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-105"
            />
          </div>

          {/* IMAGE OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

          {/* IMAGE LABEL */}
          <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between sm:bottom-9 sm:left-9 sm:right-9">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                The MOVA approach
              </p>

              <p className="mt-2 max-w-md text-lg font-medium leading-6 text-white sm:text-xl">
                Small sessions. Better movement. A practice you can actually
                keep.
              </p>
            </div>

            <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-black sm:flex">
              <ArrowUpRight size={18} />
            </div>
          </div>
        </motion.div>

        {/* BENEFITS */}
        <div className="mt-16 grid border-t border-black/10 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="border-b border-black/10 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-black/30">
                  {benefit.number}
                </span>

                <ArrowUpRight
                  size={17}
                  className="text-black/20"
                />
              </div>

              <h3 className="mt-10 text-2xl font-medium tracking-[-0.04em]">
                {benefit.title}
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-black/45">
                {benefit.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}