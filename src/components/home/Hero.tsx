import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const slides = [
  {
    image:
      "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg",
    eyebrow: "Daily mobility",
    title: "For a body",
    highlight: "that lasts.",
  },
  {
    image:
      "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg",
    eyebrow: "Move with intention",
    title: "Create more",
    highlight: "space.",
  },
  {
    image:
      "https://images.pexels.com/photos/4325464/pexels-photo-4325464.jpeg",
    eyebrow: "Recovery",
    title: "Give your body",
    highlight: "time.",
  },
  {
    image:
      "https://images.pexels.com/photos/7187806/pexels-photo-7187806.jpeg",
    eyebrow: "Performance",
    title: "Move ready.",
    highlight: "Stay ready.",
  },
  {
    image:
      "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg",
    eyebrow: "Everyday movement",
    title: "Keep your body",
    highlight: "moving.",
  },
];

const INTERVAL = 6000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const slide = slides[current];

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, INTERVAL);

    return () => window.clearInterval(timer);
  }, [paused]);

  const previous = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-black text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* IMAGE */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <motion.img
            key={`image-${current}`}
            src={slide.image}
            alt=""
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 6,
              ease: "linear",
            }}
            className="h-full w-full object-cover"
          />

          {/* Image treatment */}
          <div className="absolute inset-0 bg-black/25" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] max-w-[1440px] flex-col justify-between px-6 pb-7 pt-12 sm:px-8 sm:pb-10 lg:px-12 lg:pt-16">
        {/* TOP */}
        <div className="flex items-start justify-between">
          <motion.div
            key={`eyebrow-${current}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
              {slide.eyebrow}
            </span>
          </motion.div>

          <div className="hidden text-right sm:block">
            <p className="text-xs text-white/40">
              Move daily
            </p>

            <p className="mt-1 text-xs text-white/60">
              01 — 05
            </p>
          </div>
        </div>

        {/* MAIN */}
        <div className="max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h1 className="text-[clamp(3.5rem,9vw,9rem)] font-medium leading-[0.82] tracking-[-0.07em]">
                {slide.title}
                <br />
                <span className="text-white/45">
                  {slide.highlight}
                </span>
              </h1>

              <p className="mt-8 max-w-lg text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
                Stretch, recover and move with routines built around
                your goals.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/explore"
                  className="group inline-flex items-center justify-between gap-8 rounded-full bg-black px-5 py-3.5 text-sm font-semibold text-white transition"
                >
                  Start Free

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight size={15} />
                  </span>
                </Link>

                <Link
                  to="/explore"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
                >
                  Explore routines
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* BOTTOM CONTROLS */}
        <div className="flex items-end justify-between gap-6">
          {/* PROGRESS */}
          <div className="flex max-w-md flex-1 items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide ${index + 1}`}
                className="group h-8 flex-1"
              >
                <span className="relative block h-[2px] w-full overflow-hidden bg-white/20">
                  {index === current && !paused && (
                    <motion.span
                      key={`progress-${current}`}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: INTERVAL / 1000,
                        ease: "linear",
                      }}
                      className="absolute inset-y-0 left-0 bg-white"
                    />
                  )}

                  {index === current && paused && (
                    <span className="absolute inset-0 bg-white" />
                  )}

                  {index < current && (
                    <span className="absolute inset-0 bg-white/60" />
                  )}
                </span>
              </button>
            ))}
          </div>

          {/* CONTROLS */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPaused((value) => !value)}
              aria-label={paused ? "Play slideshow" : "Pause slideshow"}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
            >
              {paused ? <Play size={15} /> : <Pause size={15} />}
            </button>

            <button
              type="button"
              onClick={previous}
              aria-label="Previous slide"
              className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-sm transition hover:bg-white hover:text-black sm:flex"
            >
              <ChevronLeft size={17} />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}