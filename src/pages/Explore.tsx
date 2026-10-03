import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Clock,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { Link } from "react-router-dom";

type Routine = {
  id: number;
  title: string;
  category: string;
  duration: string;
  level: string;
  image: string;
  need: string;
  focus: string;
};

const routines: Routine[] = [
  {
    id: 1,
    title: "Morning Mobility",
    category: "Mobility",
    duration: "10 min",
    level: "Easy",
    image:
      "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=1400",
    need: "mobility",
    focus: "Full body",
  },
  {
    id: 2,
    title: "Full Body Reset",
    category: "Recovery",
    duration: "20 min",
    level: "Easy",
    image:
      "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=1400",
    need: "recovery",
    focus: "Full body",
  },
  {
    id: 3,
    title: "Hip Opening Flow",
    category: "Flexibility",
    duration: "15 min",
    level: "Moderate",
    image:
      "https://images.pexels.com/photos/4325464/pexels-photo-4325464.jpeg?auto=compress&cs=tinysrgb&w=1400",
    need: "flexibility",
    focus: "Hips",
  },
  {
    id: 4,
    title: "Training Prep",
    category: "Performance",
    duration: "10 min",
    level: "Active",
    image:
      "https://images.pexels.com/photos/7187806/pexels-photo-7187806.jpeg?auto=compress&cs=tinysrgb&w=1400",
    need: "training",
    focus: "Full body",
  },
  {
    id: 5,
    title: "Runner's Reset",
    category: "Running",
    duration: "20 min",
    level: "Moderate",
    image:
      "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1400",
    need: "recovery",
    focus: "Hips",
  },
  {
    id: 6,
    title: "Shoulder Release",
    category: "Recovery",
    duration: "10 min",
    level: "Easy",
    image:
      "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=1400",
    need: "recovery",
    focus: "Shoulders",
  },
];

const categories = [
  "All",
  "Mobility",
  "Recovery",
  "Flexibility",
  "Performance",
  "Running",
];

const durations = ["All", "10 min", "15 min", "20 min"];

export default function Explore() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [duration, setDuration] = useState("All");

  const filteredRoutines = useMemo(() => {
    return routines.filter((routine) => {
      const matchesSearch =
        routine.title.toLowerCase().includes(search.toLowerCase()) ||
        routine.category.toLowerCase().includes(search.toLowerCase()) ||
        routine.focus.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || routine.category === category;

      const matchesDuration =
        duration === "All" || routine.duration === duration;

      return matchesSearch && matchesCategory && matchesDuration;
    });
  }, [search, category, duration]);

  const getRoutineUrl = (routine: Routine) => {
    /*
     * The current routine engine supports:
     * 10 min / 20 min / 30 min.
     *
     * 15-minute visual cards are mapped to 10 minutes
     * until the routine engine adds 15-minute support.
     */
    const supportedDuration =
      routine.duration === "15 min" ? "10 min" : routine.duration;

    return `/routine?need=${encodeURIComponent(
      routine.need
    )}&duration=${encodeURIComponent(
      supportedDuration
    )}&focus=${encodeURIComponent(routine.focus)}`;
  };

  return (
    <main className="bg-white text-black">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="px-6 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
              Explore MOVA
            </p>

            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
              Find a routine
              <br />
              that fits today.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
              Short sessions for mobility, recovery, flexibility and
              performance. Choose what your body needs and start moving.
            </p>
          </div>

          {/* Search */}
          <div className="mt-12 max-w-2xl">
            <div className="flex items-center gap-3 rounded-full border border-neutral-200 bg-neutral-50 px-5 py-4 transition-colors focus-within:border-neutral-400">
              <Search
                size={19}
                className="shrink-0 text-neutral-500"
              />

              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search routines..."
                className="w-full bg-transparent text-sm text-black outline-none placeholder:text-neutral-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED ROUTINE
      ========================================================= */}
      <section className="px-6 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-black">
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative min-h-[420px] overflow-hidden lg:min-h-[560px]">
                <img
                  src="https://images.pexels.com/photos/7187806/pexels-photo-7187806.jpeg?auto=compress&cs=tinysrgb&w=1800"
                  alt="Person preparing for training"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-black backdrop-blur-sm">
                  Featured
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-8 text-white sm:p-10 lg:p-14">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                  Performance
                </p>

                <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[1] tracking-[-0.04em] sm:text-5xl">
                  Move before
                  <br />
                  you train.
                </h2>

                <p className="mt-6 max-w-lg text-sm leading-7 text-neutral-400 sm:text-base">
                  Prepare your joints, wake up your range of motion and
                  create space before your next workout.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-5 text-sm text-neutral-300">
                  <span className="inline-flex items-center gap-2">
                    <Clock size={15} />
                    10 min
                  </span>

                  <span>Full body</span>
                  <span>Active</span>
                </div>

                <Link
                  to="/routine?need=training&duration=10%20min&focus=Full%20body"
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-full !bg-white px-5 py-3 text-sm font-semibold !text-black transition-all duration-300 hover:!bg-neutral-100"
                >
                  <span className="!text-black">
                    Start session
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="!text-black"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FILTERS
      ========================================================= */}
      <section className="border-y border-neutral-200 bg-[#f7f7f4] px-6 py-7 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2">
            <SlidersHorizontal
              size={17}
              className="text-neutral-500"
            />

            <span className="text-sm font-semibold">
              Filter routines
            </span>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((item) => {
                const active = category === item;

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      active
                        ? "bg-black text-white"
                        : "bg-white text-neutral-600 hover:bg-neutral-200 hover:text-black"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            {/* Durations */}
            <div className="flex flex-wrap gap-2">
              {durations.map((item) => {
                const active = duration === item;

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setDuration(item)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      active
                        ? "bg-black text-white"
                        : "bg-white text-neutral-600 hover:bg-neutral-200 hover:text-black"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ROUTINE GRID
      ========================================================= */}
      <section className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                All routines
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Move in your own way.
              </h2>
            </div>

            <p className="text-sm text-neutral-500">
              {filteredRoutines.length}{" "}
              {filteredRoutines.length === 1
                ? "routine"
                : "routines"}
            </p>
          </div>

          {filteredRoutines.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredRoutines.map((routine) => (
                <article
                  key={routine.id}
                  className="group overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                    <img
                      src={routine.image}
                      alt={routine.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70" />

                    <div className="absolute left-5 top-5">
                      <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-black backdrop-blur-sm">
                        {routine.category}
                      </span>
                    </div>

                    {/* Quick action */}
                    <Link
                      to={getRoutineUrl(routine)}
                      aria-label={`Open ${routine.title}`}
                      className="absolute bottom-5 right-5 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <ArrowUpRight size={17} />
                    </Link>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-semibold tracking-[-0.035em]">
                        {routine.title}
                      </h3>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-500">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock size={14} />
                        {routine.duration}
                      </span>

                      <span>{routine.level}</span>
                      <span>{routine.focus}</span>
                    </div>

                    <Link
                      to={getRoutineUrl(routine)}
                      className="mt-6 inline-flex items-center gap-2 rounded-full !bg-black px-5 py-3 text-sm font-semibold !text-white transition-all duration-300 hover:!bg-neutral-900"
                    >
                      <span className="!text-white">
                        View routine
                      </span>

                      <ArrowUpRight
                        size={16}
                        className="!text-white"
                      />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Empty state */
            <div className="rounded-[2rem] border border-dashed border-neutral-300 bg-neutral-50 px-6 py-20 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-black text-white">
                <Search size={21} />
              </div>

              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em]">
                No routines found.
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-neutral-500">
                Try another search or clear your filters to explore
                more MOVA routines.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                  setDuration("All");
                }}
                className="mt-7 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-neutral-900"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          BUILD YOUR ROUTINE CTA
      ========================================================= */}
      <section className="px-6 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-black px-7 py-16 text-white sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="relative z-10 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                Make it yours
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Can't find exactly
                <br />
                what you need?
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">
                Tell MOVA how you want to feel, how much time you
                have and where you want to focus. We'll build a
                routine around it.
              </p>

              <Link
                to="/#body-needs"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full !bg-white px-6 py-3.5 text-sm font-semibold !text-black transition-all duration-300 hover:!bg-neutral-100"
              >
                <span className="!text-black">
                  Build my routine
                </span>

                <ArrowUpRight
                  size={16}
                  className="!text-black"
                />
              </Link>
            </div>

            {/* Decorative shapes */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-32 right-16 h-80 w-80 rounded-full border border-white/10" />
          </div>
        </div>
      </section>
    </main>
  );
}