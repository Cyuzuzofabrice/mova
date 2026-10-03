import { ArrowLeft, Pause, Play, RotateCcw } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { generateRoutine } from "../data/routines";

export default function Workout() {
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

  const routine = useMemo(
    () => generateRoutine(need, duration, focus),
    [need, duration, focus]
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(
    routine.exercises[0]?.duration || 60
  );
  const [isPaused, setIsPaused] = useState(false);
  const [completed, setCompleted] = useState(false);

  const currentExercise = routine.exercises[currentIndex];

  useEffect(() => {
    if (isPaused || completed) return;

    const timer = setInterval(() => {
      setSecondsLeft((seconds) => {
        if (seconds <= 1) {
          if (currentIndex < routine.exercises.length - 1) {
            setCurrentIndex((index) => index + 1);
            return routine.exercises[currentIndex + 1].duration;
          }

          setCompleted(true);
          return 0;
        }

        return seconds - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPaused, completed, currentIndex, routine.exercises]);

  useEffect(() => {
    if (currentExercise && !completed) {
      setSecondsLeft(currentExercise.duration);
    }
  }, [currentIndex]);

  const goNext = () => {
    if (currentIndex < routine.exercises.length - 1) {
      setCurrentIndex((index) => index + 1);
      setSecondsLeft(routine.exercises[currentIndex + 1].duration);
      setIsPaused(false);
    } else {
      setCompleted(true);
    }
  };

  const goPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((index) => index - 1);
      setSecondsLeft(routine.exercises[currentIndex - 1].duration);
    }
  };

  const restart = () => {
    setCurrentIndex(0);
    setSecondsLeft(routine.exercises[0]?.duration || 60);
    setCompleted(false);
    setIsPaused(false);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remaining = seconds % 60;

    return `${minutes}:${String(remaining).padStart(2, "0")}`;
  };

  if (completed) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-neutral-950 px-6 text-white">
        <div className="w-full max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
            Session complete
          </p>

          <h1 className="mt-6 text-6xl font-medium tracking-[-0.06em] sm:text-8xl">
            You moved.
          </h1>

          <p className="mx-auto mt-6 max-w-md text-base leading-7 text-white/50">
            Nice work. Your {routine.title.toLowerCase()} is complete.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={restart}
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              <RotateCcw size={16} />
              Do it again
            </button>

            <Link
              to="/"
              className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Back to MOVA
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (!currentExercise) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p>No exercises found.</p>
      </main>
    );
  }

  const progress =
    ((currentIndex + 1) / routine.exercises.length) * 100;

  const timerProgress =
    ((currentExercise.duration - secondsLeft) /
      currentExercise.duration) *
    100;

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* TOP BAR */}
      <header className="flex items-center justify-between px-6 py-6 sm:px-10">
        <Link
          to={`/routine?need=${need}&duration=${encodeURIComponent(
            duration
          )}&focus=${encodeURIComponent(focus)}`}
          className="flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          Exit routine
        </Link>

        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
            MOVA
          </p>
          <p className="mt-1 text-sm text-white/60">{routine.title}</p>
        </div>

        <div className="text-right">
          <p className="text-xs text-white/30">MOVEMENT</p>
          <p className="mt-1 text-sm">
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(routine.exercises.length).padStart(2, "0")}
          </p>
        </div>
      </header>

      {/* PROGRESS */}
      <div className="px-6 sm:px-10">
        <div className="h-[2px] w-full bg-white/10">
          <div
            className="h-full bg-white transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* PLAYER */}
      <section className="mx-auto flex min-h-[calc(100vh-110px)] max-w-[1500px] flex-col px-6 py-8 sm:px-10 lg:grid lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:gap-12">
        {/* IMAGE */}
        <div className="relative overflow-hidden rounded-[2rem] bg-neutral-900">
          <div className="aspect-[4/3] lg:aspect-[1.15/1]">
            <img
              src={currentExercise.image}
              alt={currentExercise.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          <div className="absolute bottom-6 left-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50">
              {currentExercise.category}
            </p>

            <h2 className="mt-2 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
              {currentExercise.name}
            </h2>
          </div>
        </div>

        {/* CONTROLS */}
        <div className="mt-8 lg:mt-0">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/30">
            Current movement
          </p>

          <h1 className="mt-5 text-5xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-6xl">
            {currentExercise.name}
          </h1>

          <p className="mt-5 max-w-md text-sm leading-6 text-white/45">
            {currentExercise.description}
          </p>

          {/* TIMER */}
          <div className="mt-10">
            <div className="text-[7rem] font-light leading-none tracking-[-0.08em] sm:text-[9rem]">
              {formatTime(secondsLeft)}
            </div>

            <div className="mt-6 h-1 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full bg-white transition-all duration-1000"
                style={{ width: `${timerProgress}%` }}
              />
            </div>
          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex items-center gap-3">
            <button
              type="button"
              onClick={goPrevious}
              disabled={currentIndex === 0}
              className="rounded-full border border-white/15 px-5 py-3 text-sm text-white/60 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              Previous
            </button>

            <button
              type="button"
              onClick={() => setIsPaused((paused) => !paused)}
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              {isPaused ? (
                <>
                  <Play size={15} fill="currentColor" />
                  Resume
                </>
              ) : (
                <>
                  <Pause size={15} />
                  Pause
                </>
              )}
            </button>

            <button
              type="button"
              onClick={goNext}
              className="rounded-full border border-white/15 px-5 py-3 text-sm text-white/60 transition hover:bg-white/10 hover:text-white"
            >
              {currentIndex === routine.exercises.length - 1
                ? "Finish"
                : "Next"}
            </button>
          </div>

          {/* NEXT */}
          {routine.exercises[currentIndex + 1] && (
            <div className="mt-10 border-t border-white/10 pt-6">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                Up next
              </p>

              <p className="mt-2 text-lg text-white/70">
                {routine.exercises[currentIndex + 1].name}
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}