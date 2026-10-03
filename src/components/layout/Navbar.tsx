import {
  ChevronDown,
  Menu,
  Move3D,
  X,
} from "lucide-react";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [mobilityOpen, setMobilityOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const closeMenus = () => {
    setMobilityOpen(false);
    setMobileOpen(false);
  };

  const handleStoriesClick = () => {
    closeMenus();

    if (location.pathname === "/") {
      document.getElementById("stories")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      navigate("/");

      setTimeout(() => {
        document.getElementById("stories")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  return (
    <header className="relative z-50 bg-white">
      <nav className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* LOGO */}
        <Link
          to="/"
          onClick={closeMenus}
          className="text-2xl font-bold tracking-[-0.07em]"
        >
          MOVA
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden items-center gap-8 lg:flex">
          <Link
            to="/explore"
            className={`text-sm transition ${
              location.pathname === "/explore"
                ? "font-medium text-black"
                : "text-black/50 hover:text-black"
            }`}
          >
            Explore
          </Link>

          <Link
            to="/programs"
            className={`text-sm transition ${
              location.pathname === "/programs"
                ? "font-medium text-black"
                : "text-black/50 hover:text-black"
            }`}
          >
            Programs
          </Link>

          {/* MOBILITY DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setMobilityOpen(true)}
            onMouseLeave={() => setMobilityOpen(false)}
          >
            <button
              type="button"
              onClick={() => setMobilityOpen((open) => !open)}
              className="flex items-center gap-1.5 text-sm text-black/50 transition hover:text-black"
            >
              Mobility

              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  mobilityOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {mobilityOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-4"
                >
                  <div className="overflow-hidden rounded-2xl border border-black/10 bg-white p-2 shadow-xl shadow-black/5">
                    <Link
                      to="/mobility-test"
                      onClick={closeMenus}
                      className="group flex items-center gap-3 rounded-xl p-3 transition hover:bg-neutral-100"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white">
                        <Move3D size={17} />
                      </span>

                      <div>
                        <p className="text-sm font-semibold">
                          Mobility Test
                        </p>

                        <p className="mt-0.5 text-xs text-black/40">
                          Discover your movement profile
                        </p>
                      </div>
                    </Link>

                    <Link
                      to="/explore"
                      onClick={closeMenus}
                      className="block rounded-xl p-3 transition hover:bg-neutral-100"
                    >
                      <p className="text-sm font-semibold">
                        Explore Mobility
                      </p>

                      <p className="mt-0.5 text-xs text-black/40">
                        Find mobility routines
                      </p>
                    </Link>

                    <Link
                      to="/programs"
                      onClick={closeMenus}
                      className="block rounded-xl p-3 transition hover:bg-neutral-100"
                    >
                      <p className="text-sm font-semibold">
                        Mobility Programs
                      </p>

                      <p className="mt-0.5 text-xs text-black/40">
                        Follow a structured plan
                      </p>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={handleStoriesClick}
            className="text-sm text-black/50 transition hover:text-black"
          >
            Stories
          </button>
        </div>

        {/* DESKTOP CTA */}
      <Link
  to="/explore"
  className="hidden rounded-full !bg-black px-5 py-2.5 text-sm font-semibold !text-white transition-all duration-300 hover:!bg-neutral-900 lg:block"
>
  Start Free
</Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-black/5 bg-white lg:hidden"
          >
            <div className="px-6 pb-8 pt-5 sm:px-8">
              <div className="flex flex-col">
                <Link
                  to="/explore"
                  onClick={closeMenus}
                  className="border-b border-black/5 py-5 text-2xl font-medium tracking-[-0.04em]"
                >
                  Explore
                </Link>

                <Link
                  to="/programs"
                  onClick={closeMenus}
                  className="border-b border-black/5 py-5 text-2xl font-medium tracking-[-0.04em]"
                >
                  Programs
                </Link>

                <Link
                  to="/mobility-test"
                  onClick={closeMenus}
                  className="border-b border-black/5 py-5 text-2xl font-medium tracking-[-0.04em]"
                >
                  Mobility Test
                </Link>

                <button
                  type="button"
                  onClick={handleStoriesClick}
                  className="border-b border-black/5 py-5 text-left text-2xl font-medium tracking-[-0.04em]"
                >
                  Stories
                </button>
              </div>
<Link
  to="/explore"
  className="group hidden items-center gap-3 rounded-full bg-black py-2.5 pl-5 pr-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1a1a1a] lg:flex"
>
  <span>Start Free</span>

  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:translate-x-0.5">
    <ArrowRight size={15} />
  </span>
</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}