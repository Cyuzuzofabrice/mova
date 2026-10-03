import { ArrowUpRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  {
    title: "Move Better",
    category: "Mobility",
    duration: "20 min",
    description:
      "Build a stronger movement foundation with focused mobility sessions.",
    image:
      "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg",
    routine:
      "/routine?need=mobility&duration=20%20min&focus=Full%20body",
  },
  {
    title: "Recover & Reset",
    category: "Recovery",
    duration: "20 min",
    description:
      "Release tension, restore movement and give your body space to recover.",
    image:
      "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg",
    routine:
      "/routine?need=recovery&duration=20%20min&focus=Full%20body",
  },
  {
    title: "Athlete Ready",
    category: "Performance",
    duration: "20 min",
    description:
      "Prepare your body with dynamic movement before training.",
    image:
      "https://images.pexels.com/photos/7187806/pexels-photo-7187806.jpeg",
    routine:
      "/routine?need=training&duration=20%20min&focus=Full%20body",
  },
];

export default function ProgramPreview() {
  return (
    <section className="bg-white px-6 py-24 sm:px-8 md:py-32 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/35">
              MOVA Programs
            </p>

            <h2 className="mt-5 max-w-3xl text-5xl font-medium leading-[0.92] tracking-[-0.055em] sm:text-6xl md:text-7xl">
              A practice
              <br />
              worth keeping.
            </h2>
          </div>

          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-black"
          >
            View all programs
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Program cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {programs.map((program) => (
            <article
              key={program.title}
              className="group overflow-hidden rounded-[2rem] bg-[#f5f5f2]"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute left-5 top-5">
                  <span className="rounded-full bg-white/90 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-black backdrop-blur">
                    {program.category}
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-black/60 px-3 py-2 text-xs text-white backdrop-blur">
                  <Clock size={13} />
                  {program.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                <h3 className="text-2xl font-medium tracking-[-0.04em]">
                  {program.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-black/45">
                  {program.description}
                </p>

             <Link
  to="/routine?need=mobility&duration=20%20min&focus=Full%20body"
  className="group flex items-center justify-between rounded-full !bg-black px-5 py-3 text-sm font-semibold !text-white transition-all duration-300 hover:!bg-neutral-900"
>
  <span className="!text-white">Start program</span>
</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}