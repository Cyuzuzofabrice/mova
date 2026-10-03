import {
  ArrowUpRight,
  CalendarDays,
  ChevronRight,
  Clock,
  Flame,
  Move3D,
} from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  {
    id: "move-better",
    title: "Move Better",
    description:
      "Build a stronger movement foundation with mobility sessions for your whole body.",
    weeks: "4 weeks",
    sessions: "3 sessions / week",
    level: "All levels",
    category: "Mobility",
    image:
      "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg",
    accent: "01",
    routine:
      "/routine?need=mobility&duration=20%20min&focus=Full%20body",
  },
  {
    id: "recover-reset",
    title: "Recover & Reset",
    description:
      "A slower program designed to release tension, restore movement and help you recover.",
    weeks: "3 weeks",
    sessions: "4 sessions / week",
    level: "Easy",
    category: "Recovery",
    image:
      "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg",
    accent: "02",
    routine:
      "/routine?need=recovery&duration=20%20min&focus=Full%20body",
  },
  {
    id: "athlete-ready",
    title: "Athlete Ready",
    description:
      "Prepare your body for training with dynamic mobility and movement preparation.",
    weeks: "4 weeks",
    sessions: "4 sessions / week",
    level: "Active",
    category: "Performance",
    image:
      "https://images.pexels.com/photos/7187806/pexels-photo-7187806.jpeg",
    accent: "03",
    routine:
      "/routine?need=training&duration=20%20min&focus=Full%20body",
  },
  {
    id: "flexibility-flow",
    title: "Flexibility Flow",
    description:
      "Develop flexibility gradually through controlled movement and consistent practice.",
    weeks: "6 weeks",
    sessions: "3 sessions / week",
    level: "All levels",
    category: "Flexibility",
    image:
      "https://images.pexels.com/photos/4325464/pexels-photo-4325464.jpeg",
    accent: "04",
    routine:
      "/routine?need=flexibility&duration=20%20min&focus=Hips",
  },
];

const benefits = [
  {
    icon: Move3D,
    title: "Move with intention",
    text: "Every session has a clear purpose instead of random exercises.",
  },
  {
    icon: CalendarDays,
    title: "Build consistency",
    text: "Follow a simple schedule that makes mobility easier to maintain.",
  },
  {
    icon: Flame,
    title: "Keep your momentum",
    text: "Complete sessions and build your personal movement streak.",
  },
];

export default function Programs() {
  return (
    <main className="min-h-screen bg-[#f5f5f2]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="px-6 pb-20 pt-16 sm:px-8 md:pb-28 md:pt-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/40">
                MOVA Programs
              </p>

              <h1 className="mt-5 max-w-5xl text-6xl font-medium leading-[0.88] tracking-[-0.065em] sm:text-7xl md:text-8xl">
                A practice
                <br />
                worth keeping.
              </h1>
            </div>

            <div className="max-w-md lg:pb-2">
              <p className="text-base leading-7 text-black/50">
                Follow a structured movement plan instead of wondering what
                to do next. Choose a goal, show up consistently and let MOVA
                guide the session.
              </p>

              <Link
                to="/explore"
                className="mt-7 inline-flex items-center gap-2 rounded-full !bg-black px-5 py-3.5 text-sm font-semibold !text-white transition-all duration-300 hover:!bg-neutral-900"
              >
                <span className="!text-white">
                  Explore individual routines
                </span>
                <ArrowUpRight size={16} className="!text-white" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED PROGRAM
      ========================================================= */}
      <section className="px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="group relative overflow-hidden rounded-[2rem] bg-black">
            <div className="aspect-[16/8] min-h-[500px]">
              <img
                src="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg"
                alt="Athlete moving through a mobility session"
                className="h-full w-full object-cover transition duration-1000 group-hover:scale-105"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10 md:p-14">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-white/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                  Featured program
                </span>

                <span className="rounded-full bg-white/10 px-3 py-2 text-[10px] text-white/60 backdrop-blur">
                  4 weeks
                </span>
              </div>

              <h2 className="mt-5 max-w-2xl text-5xl font-medium leading-[0.92] tracking-[-0.055em] text-white sm:text-6xl">
                Move Better.
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-6 !text-white/55">
                Four weeks of focused mobility designed to help you build a
                stronger movement foundation.
              </p>

              <Link
                to="/routine?need=mobility&duration=20%20min&focus=Full%20body"
                className="mt-7 inline-flex items-center gap-2 rounded-full !bg-black px-5 py-3.5 text-sm font-semibold !text-white transition-all duration-300 hover:!bg-neutral-900"
              >
                <span className="!text-white">Start program</span>
                <ArrowUpRight size={16} className="!text-white" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY PROGRAMS
      ========================================================= */}
      <section className="px-6 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/40">
                Why follow a program?
              </p>

              <h2 className="mt-5 max-w-lg text-5xl font-medium leading-[0.94] tracking-[-0.055em] sm:text-6xl">
                Consistency
                <br />
                changes movement.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="rounded-[1.5rem] bg-white p-6"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white">
                      <Icon size={18} />
                    </div>

                    <h3 className="mt-8 text-xl font-medium tracking-[-0.03em]">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-black/45">
                      {benefit.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROGRAM GRID
      ========================================================= */}
      <section className="bg-white px-6 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/35">
                All programs
              </p>

              <h2 className="mt-4 text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
                Choose your direction.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-black/45">
              Different goals. Different starting points. One simple practice
              of moving consistently.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {programs.map((program) => (
              <article
                key={program.id}
                className="group overflow-hidden rounded-[2rem] bg-[#f5f5f2]"
              >
                {/* IMAGE */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xs font-semibold">
                    {program.accent}
                  </span>

                  <div className="absolute bottom-5 left-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-black/60 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur">
                      {program.category}
                    </span>

                    <span className="rounded-full bg-white/90 px-3 py-2 text-[10px] font-semibold text-black backdrop-blur">
                      {program.level}
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-7 sm:p-8">
                  <h3 className="text-3xl font-medium tracking-[-0.045em]">
                    {program.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-black/45">
                    {program.description}
                  </p>

                  {/* PROGRAM INFO */}
                  <div className="mt-7 grid grid-cols-2 gap-2">
                    <div className="rounded-xl bg-white p-4">
                      <div className="flex items-center gap-2 text-black/35">
                        <CalendarDays size={14} />

                        <span className="text-[10px] uppercase tracking-[0.15em]">
                          Length
                        </span>
                      </div>

                      <p className="mt-2 text-sm font-medium">
                        {program.weeks}
                      </p>
                    </div>

                    <div className="rounded-xl bg-white p-4">
                      <div className="flex items-center gap-2 text-black/35">
                        <Clock size={14} />

                        <span className="text-[10px] uppercase tracking-[0.15em]">
                          Schedule
                        </span>
                      </div>

                      <p className="mt-2 text-sm font-medium">
                        {program.sessions}
                      </p>
                    </div>
                  </div>

                  {/* START PROGRAM */}
                  <Link
                    to={program.routine}
                    className="group mt-7 flex w-full items-center justify-between rounded-full !bg-black px-5 py-3.5 text-sm font-semibold !text-white transition-all duration-300 hover:!bg-neutral-900"
                  >
                    <span className="!text-white">Start program</span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full !bg-white !text-black transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowUpRight size={15} className="!text-black" />
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}
      <section className="bg-[#f5f5f2] px-6 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/35">
                Your practice
              </p>

              <h2 className="mt-5 text-5xl font-medium leading-[0.94] tracking-[-0.055em] sm:text-6xl">
                Simple enough
                <br />
                to keep going.
              </h2>
            </div>

            <div className="divide-y divide-black/10">
              {[
                {
                  number: "01",
                  title: "Choose a program",
                  text: "Pick the goal that matches where you want your movement practice to go.",
                },
                {
                  number: "02",
                  title: "Show up for the session",
                  text: "Each session gives you a focused set of movements to work through.",
                },
                {
                  number: "03",
                  title: "Keep moving",
                  text: "Return regularly and build a practice around how you want to feel.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="flex gap-6 py-7 first:pt-0"
                >
                  <span className="text-xs text-black/30">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-medium tracking-[-0.025em]">
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-black/45">
                      {step.text}
                    </p>
                  </div>

                  <ChevronRight
                    size={18}
                    className="ml-auto shrink-0 text-black/20"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="bg-black px-6 py-24 text-white sm:px-8 md:py-32 lg:px-12">
        <div className="mx-auto max-w-[1400px] text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/35">
            Start today
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-5xl font-medium leading-[0.9] tracking-[-0.06em] sm:text-7xl">
            Your body doesn't need
            <br />
            another complicated plan.
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-sm leading-6 text-white/45">
            Choose a session, press start and move at your own pace.
          </p>

          <Link
            to="/explore"
            className="mt-8 inline-flex items-center gap-2 rounded-full !bg-white px-6 py-3.5 text-sm font-semibold !text-black transition-all duration-300 hover:!bg-neutral-100"
          >
            <span className="!text-black">Explore MOVA</span>
            <ArrowUpRight size={16} className="!text-black" />
          </Link>
        </div>
      </section>
    </main>
  );
}