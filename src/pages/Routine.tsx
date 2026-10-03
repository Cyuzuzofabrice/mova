import { ArrowLeft, ArrowRight, Clock, Play } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { generateRoutine } from "../data/routines";

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}

export default function Routine() {
  const [searchParams] = useSearchParams();

  const need =
    (searchParams.get("need") as
      | "recovery"
      | "mobility"
      | "flexibility"
      | "training"
      | "quick") || "recovery";

  const duration =
    (searchParams.get("duration") as "10 min" | "20 min" | "30 min") ||
    "10 min";

  const focus =
    (searchParams.get("focus") as
      | "Full body"
      | "Hips"
      | "Back"
      | "Shoulders") || "Full body";

  const routine = generateRoutine(need, duration, focus);

  const totalDuration = routine.exercises.reduce(
    (total, exercise) => total + exercise.duration,
    0
  );

  return (
    <main className="min-h-screen bg-[#f5f5f2] px-6 pb-20 pt-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1200px]">
        {/* BACK */}
        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-sm text-black/50 transition hover:text-black"
        >
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-1"
          />
          Back to MOVA
        </Link>

        {/* HEADER */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/40">
              Your MOVA routine
            </p>

            <h1 className="mt-5 max-w-3xl text-6xl font-medium leading-[0.9] tracking-[-0.06em] sm:text-7xl">
              {routine.title}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-black/55">
              {routine.description}
            </p>
          </div>

          <div className="lg:text-right">
            <p className="text-sm text-black/40">
              Built for your current goal
            </p>

            <p className="mt-2 text-xl font-medium">
              {focus} · {duration}
            </p>
          </div>
        </div>

        {/* SUMMARY */}
        <div className="mt-14 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/35">
              Duration
            </p>

            <div className="mt-4 flex items-center gap-2">
              <Clock size={18} className="text-black/40" />

              <span className="text-2xl font-medium">
                {formatTime(totalDuration)}
              </span>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/35">
              Exercises
            </p>

            <p className="mt-4 text-2xl font-medium">
              {routine.exercises.length}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/35">
              Intensity
            </p>

            <p className="mt-4 text-2xl font-medium">
              {routine.level}
            </p>
          </div>
        </div>

        {/* EXERCISES */}
        <section className="mt-16">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/40">
                Your session
              </p>

              <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em]">
                {routine.exercises.length} movements
              </h2>
            </div>

            <span className="hidden text-sm text-black/40 sm:block">
              {focus}
            </span>
          </div>

          <div className="mt-7 overflow-hidden rounded-[2rem] bg-white">
            {routine.exercises.map((exercise, index) => (
              <div
                key={exercise.id}
                className="group flex items-center gap-5 border-b border-black/10 p-5 last:border-b-0 sm:p-6"
              >
                {/* NUMBER */}
                <div className="hidden w-8 text-xs text-black/30 sm:block">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* IMAGE */}
                <div className="h-20 w-24 shrink-0 overflow-hidden rounded-xl bg-neutral-200 sm:h-24 sm:w-32">
                  <img
                    src={exercise.image}
                    alt={exercise.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* INFO */}
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/35">
                    {String(index + 1).padStart(2, "0")} · {exercise.category}
                  </p>

                  <h3 className="mt-2 text-lg font-medium tracking-tight sm:text-xl">
                    {exercise.name}
                  </h3>

                  <p className="mt-1 hidden max-w-lg text-sm leading-5 text-black/45 sm:block">
                    {exercise.description}
                  </p>
                </div>

                {/* TIME */}
                <div className="flex items-center gap-2 text-sm text-black/45">
                  <Clock size={14} />

                  {formatTime(exercise.duration)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-10 flex flex-col gap-4 rounded-[2rem] bg-black p-7 text-white sm:p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Ready to move?
            </p>

            <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em]">
              Start your {routine.duration} routine.
            </h2>

            <p className="mt-2 text-sm text-white/45">
              Follow each movement at your own pace.
            </p>
          </div>

          <Link
            to={`/workout?need=${need}&duration=${encodeURIComponent(
              duration
            )}&focus=${encodeURIComponent(focus)}`}
            className="group flex shrink-0 items-center justify-between gap-8 rounded-full !bg-white px-6 py-3.5 text-sm font-semibold !text-black transition hover:bg-neutral-200"
          >
            <span className="flex items-center gap-2">
              <Play size={15} fill="currentColor" />
              Start Routine
            </span>

            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}