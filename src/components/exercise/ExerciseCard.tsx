import { ArrowUpRight, Clock3 } from "lucide-react";
import type { Exercise } from "../../data/exercises";

type ExerciseCardProps = {
  exercise: Exercise;
};

export default function ExerciseCard({
  exercise,
}: ExerciseCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-neutral-100">
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
        <img
          src={exercise.image}
          alt={exercise.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold backdrop-blur">
          {exercise.category}
        </div>

        <button className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white transition group-hover:scale-110">
          <ArrowUpRight size={18} />
        </button>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold tracking-tight">
          {exercise.name}
        </h3>

        <p className="mt-2 text-sm leading-6 text-black/55">
          {exercise.description}
        </p>

        <div className="mt-5 flex items-center justify-between text-sm">
          <span className="flex items-center gap-1.5 text-black/60">
            <Clock3 size={15} />
            {exercise.duration} min
          </span>

          <span className="font-medium">
            {exercise.difficulty}
          </span>
        </div>
      </div>
    </article>
  );
} 