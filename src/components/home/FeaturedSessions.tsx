import ExerciseCard from "../exercise/ExerciseCard";
import { exercises } from "../../data/exercises";

export default function FeaturedSessions() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/45">
            Explore MOVA
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Sessions for the way
            <br />
            you move.
          </h2>
        </div>

        <button className="w-fit rounded-full border border-black/15 px-5 py-3 text-sm font-semibold">
          View all sessions
        </button>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {exercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
          />
        ))}
      </div>
    </section>
  );
}