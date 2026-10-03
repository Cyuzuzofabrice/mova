import { ArrowRight, Move3D } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="bg-white px-6 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-black px-7 py-16 text-white sm:px-10 sm:py-20 lg:px-16 lg:py-24"
        >
          {/* Background circles */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-white/[0.08]" />

          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full border border-white/[0.06]" />

          <div className="pointer-events-none absolute right-20 top-20 h-2 w-2 rounded-full bg-white/30" />

          <div className="relative max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
                <Move3D size={16} />
              </span>

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                Start moving
              </p>
            </div>

            <h2 className="mt-10 text-5xl font-medium leading-[0.88] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[7.5rem]">
              Move better.
              <br />
              <span className="text-white/30">Feel better.</span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-7 text-white/45 sm:text-lg">
              Build a movement practice that fits your body, your schedule
              and your everyday life.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
               <Link
    to="/explore"
    className="group inline-flex items-center justify-between gap-8 rounded-full !bg-white py-3 pl-6 pr-3 text-sm font-semibold !text-black transition-all duration-300 hover:!bg-neutral-100"
  >
    <span className="!text-black">
      Start Free
    </span>

    <span className="flex h-9 w-9 items-center justify-center rounded-full !bg-black !text-white transition-transform duration-300 group-hover:translate-x-1">
      <ArrowRight size={16} />
    </span>
  </Link>

              <Link
                to="/mobility-test"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-4 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
              >
                Take the Mobility Test
              </Link>
            </div>
          </div>

          {/* Bottom statement */}
          <div className="relative mt-20 border-t border-white/10 pt-6 sm:mt-24">
            <div className="flex flex-col gap-3 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
              <span>No account. No equipment. No pressure.</span>

              <span>Just move.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}