import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const stories = [
  {
    category: "Everyday movement",
    title: "For the days when your body feels stuck.",
    text: "Short mobility sessions can turn a long day at a desk into a chance to reset.",
    image:
      "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg",
    size: "large",
  },
  {
    category: "Running",
    title: "Move before you push.",
    text: "A few intentional minutes can help you prepare for the miles ahead.",
    image:
      "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg",
    size: "small",
  },
  {
    category: "Recovery",
    title: "Slow down without stopping.",
    text: "Recovery is part of training. Give your body room to reset.",
    image:
      "https://images.pexels.com/photos/4325464/pexels-photo-4325464.jpeg",
    size: "small",
  },
];

export default function Stories() {
  return (
    <section
      id="stories"
      className="bg-[#f5f5f2] px-6 py-24 sm:px-8 md:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/35">
              MOVA Stories
            </p>

            <h2 className="mt-5 max-w-3xl text-5xl font-medium leading-[0.92] tracking-[-0.055em] sm:text-6xl md:text-7xl">
              Movement belongs
              <br />
              in everyday life.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-black/45">
            From the first stretch in the morning to recovery after training,
            movement can become part of how you live.
          </p>
        </div>

        {/* Stories grid */}
        <div className="mt-14 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          {/* Main story */}
          <article className="group relative min-h-[600px] overflow-hidden rounded-[2rem] bg-black">
            <img
              src={stories[0].image}
              alt={stories[0].title}
              className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10 md:p-12">
              <span className="rounded-full bg-white/15 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                {stories[0].category}
              </span>

              <h3 className="mt-5 max-w-2xl text-4xl font-medium leading-[0.95] tracking-[-0.045em] text-white sm:text-5xl">
                {stories[0].title}
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-6 text-white/55">
                {stories[0].text}
              </p>

              <Link
                to="/explore"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-black transition hover:bg-neutral-200"
              >
                Explore routines
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </article>

          {/* Smaller stories */}
          <div className="grid gap-5">
            {stories.slice(1).map((story) => (
              <article
                key={story.title}
                className="group relative min-h-[290px] overflow-hidden rounded-[2rem] bg-black"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
                    {story.category}
                  </span>

                  <h3 className="mt-3 max-w-md text-2xl font-medium leading-tight tracking-[-0.035em] text-white">
                    {story.title}
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-5 text-white/45">
                    {story.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-16 flex flex-col justify-between gap-6 border-t border-black/10 pt-7 sm:flex-row sm:items-center">
          <p className="max-w-xl text-sm leading-6 text-black/40">
            You don't need an hour. You don't need a perfect schedule. You
            just need a reason to move.
          </p>

          <Link
            to="/explore"
            className="inline-flex items-center gap-2 text-sm font-semibold text-black"
          >
            Find your session
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}