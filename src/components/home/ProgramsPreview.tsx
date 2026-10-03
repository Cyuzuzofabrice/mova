import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Clock,
  Play,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

type Program = {
  title: string;
  category: string;
  duration: string;
  sessions: string;
  level: string;
  description: string;
  image: string;
  need: "recovery" | "mobility" | "flexibility" | "training" | "quick";
  focus: "Full body" | "Hips" | "Back" | "Shoulders";
};

const programData: Record<string, Program> = {
  "move-better": {
    title: "Move Better",
    category: "Mobility",
    duration: "4 weeks",
    sessions: "3 sessions / week",
    level: "All levels",
    description:
      "Build a stronger movement foundation through consistent mobility work for your whole body.",
    image:
      "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg",
    need: "mobility",
    focus: "Full body",
  },

  "recover-reset": {
    title: "Recover & Reset",
    category: "Recovery",
    duration: "3 weeks",
    sessions: "4 sessions / week",
    level: "Easy",
    description:
      "Release tension, restore comfortable movement and give your body space to recover.",
    image:
      "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg",
    need: "recovery",
    focus: "Full body",
  },

  "athlete-ready": {
    title: "Athlete Ready",
    category: "Performance",
    duration: "4 weeks",
    sessions: "4 sessions / week",
    level: "Active",
    description:
      "Prepare your body for training with dynamic mobility and movement preparation.",
    image:
      "https://images.pexels.com/photos/7187806/pexels-photo-7187806.jpeg",
    need: "training",
    focus: "Full body",
  },

  "flexibility-flow": {
    title: "Flexibility Flow",
    category: "Flexibility",
    duration: "6 weeks",
    sessions: "3 sessions / week",
    level: "All levels",
    description:
      "Develop flexibility gradually through controlled movement and consistent practice.",
    image:
      "https://images.pexels.com/photos/4325464/pexels-photo-4325464.jpeg",
    need: "flexibility",
    focus: "Hips",
  },
};

const weeks = [
  {
    week: "01",
    title: "Build awareness",
    description:
      "Start with controlled movements and learn how your body moves.",
    sessions: [
      {
        title: "Full Body Foundation",
        duration: "10 min",
      },
      {
        title: "Hips & Lower Body",
        duration: "10 min",
      },
      {
        title: "Movement Reset",
        duration: "10 min",
      },
    ],
  },
  {
    week: "02",
    title: "Create more space",
    description:
      "Explore greater ranges of movement while staying controlled.",
    sessions: [
      {
        title: "Full Body Mobility",
        duration: "20 min",
      },
      {
        title: "Hip Mobility",
        duration: "10 min",
      },
      {
        title: "Back & Shoulders",
        duration: "10 min",
      },
    ],
  },
  {
    week: "03",
    title: "Move with control",
    description:
      "Combine mobility movements into longer, more intentional sessions.",
    sessions: [
      {
        title: "Movement Flow",
        duration: "20 min",
      },
      {
        title: "Full Body Reset",
        duration: "20 min",
      },
      {
        title: "Active Mobility",
        duration: "10 min",
      },
    ],
  },
  {
    week: "04",
    title: "Make it a habit",
    description:
      "Bring everything together and create a practice you can continue.",
    sessions: [
      {
        title: "Full Body Flow",
        duration: "20 min",
      },
      {
        title: "Recovery Reset",
        duration: "10 min",
      },
      {
        title: "Final Movement Session",
        duration: "20 min",
      },
    ],
  },
];

export default function ProgramPreview() {
  const { programId } = useParams();

  const program =
    programData[programId || ""] || programData["move-better"];

  const routineLink = `/routine?need=${program.need}&duration=20%20min&focus=${encodeURIComponent(
    program.focus
  )}`;

  return (
    <main className="min-h-screen bg-[#f5f5f2]">
      {/* HERO */}
      <section className="px-6 pb-16 pt-8 sm:px-8 md:pb-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <Link
            to="/programs"
            className="group inline-flex items-center gap-2 text-sm text-black/45 transition hover:text-black"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            All programs
          </Link>

          <div className="relative mt-8 overflow-hidden rounded-[2rem] bg-black">
            <div className="aspect-[16/9] min-h-[560px]">
              <img
                src={program.image}
                alt={program.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/30 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10 md:p-14">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-white/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
                  {program.category}
                </span>

                <span className="rounded-full bg-white/10 px-3 py-2 text-[10px] text-white/70 backdrop-blur">
                  {program.level}
                </span>
              </div>

              <h1 className="mt-5 max-w-3xl text-6xl font-medium leading-[0.88] tracking-[-0.065em] text-white sm:text-7xl md:text-8xl">
                {program.title}
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-6 text-white/55 sm:text-base">
                {program.description}
              </p>

              <Link
                to={routineLink}
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-neutral-200"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white">
                  <Play size={10} fill="currentColor" />
                </span>

                Start program

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM INFO */}
      <section className="px-6 pb-24 sm:px-8 md:pb-32 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-6">
            <CalendarDays size={18} className="text-black/35" />

            <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/35">
              Program length
            </p>

            <p className="mt-2 text-2xl font-medium">
              {program.duration}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6">
            <Clock size={18} className="text-black/35" />

            <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/35">
              Weekly schedule
            </p>

            <p className="mt-2 text-2xl font-medium">
              {program.sessions}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6">
            <Check size={18} className="text-black/35" />

            <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/35">
              Level
            </p>

            <p className="mt-2 text-2xl font-medium">
              {program.level}
            </p>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="bg-white px-6 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/35">
                The journey
              </p>

              <h2 className="mt-5 max-w-md text-5xl font-medium leading-[0.94] tracking-[-0.055em] sm:text-6xl">
                Four weeks
                <br />
                of movement.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-6 text-black/45">
                Each week builds naturally on the previous one. Start small,
                learn the movements and gradually create a consistent
                practice.
              </p>
            </div>

            <div className="divide-y divide-black/10">
              {weeks.map((week) => (
                <div
                  key={week.week}
                  className="py-8 first:pt-0"
                >
                  <div className="flex gap-6">
                    <span className="text-xs text-black/30">
                      {week.week}
                    </span>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-2xl font-medium tracking-[-0.035em]">
                        {week.title}
                      </h3>

                      <p className="mt-2 max-w-lg text-sm leading-6 text-black/45">
                        {week.description}
                      </p>

                      <div className="mt-6 overflow-hidden rounded-2xl border border-black/10">
                        {week.sessions.map((session, index) => (
                          <Link
                            key={session.title}
                            to={routineLink}
                            className="group flex items-center gap-4 border-b border-black/10 p-4 last:border-b-0 transition hover:bg-black hover:text-white"
                          >
                            <span className="text-xs text-black/30 transition group-hover:text-white/40">
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <span className="flex-1 text-sm font-medium">
                              {session.title}
                            </span>

                            <span className="flex items-center gap-2 text-xs text-black/35 transition group-hover:text-white/40">
                              <Clock size={13} />
                              {session.duration}
                            </span>

                            <ArrowRight
                              size={15}
                              className="text-black/20 transition group-hover:translate-x-1 group-hover:text-white/60"
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black px-6 py-24 text-white sm:px-8 md:py-32 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/35">
                Ready when you are
              </p>

              <h2 className="mt-5 max-w-3xl text-5xl font-medium leading-[0.9] tracking-[-0.06em] sm:text-6xl">
                Start with the
                <br />
                first session.
              </h2>
            </div>

            <Link
              to={routineLink}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Start {program.title}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}