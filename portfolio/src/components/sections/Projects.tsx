import {
  ArrowUpRight,
  FileStack,
  Gift,
  LineChart,
  Store,
  Trophy,
} from "lucide-react";
import { hobbyProjects } from "@/lib/content";

const tones: Record<string, string> = {
  amber: "from-amber-400/30 to-amber-600/10 text-amber-100",
  rose: "from-rose-400/30 to-rose-600/10 text-rose-100",
  emerald: "from-emerald-400/30 to-emerald-600/10 text-emerald-100",
  sky: "from-sky-400/30 to-sky-600/10 text-sky-100",
  teal: "from-teal-300/35 to-teal-600/10 text-teal-50",
};

const iconShell: Record<string, string> = {
  amber: "bg-amber-400/20 text-amber-200 ring-amber-300/25",
  rose: "bg-rose-400/20 text-rose-200 ring-rose-300/25",
  emerald: "bg-emerald-400/20 text-emerald-200 ring-emerald-300/25",
  sky: "bg-sky-400/20 text-sky-200 ring-sky-300/25",
  teal: "bg-teal-300/20 text-teal-100 ring-teal-200/25",
};

const icons = {
  trophy: Trophy,
  gift: Gift,
  chart: LineChart,
  file: FileStack,
  store: Store,
};

export default function Projects() {
  return (
    <section
      id="projects"
      data-theme="dark"
      className="relative overflow-hidden bg-primary-deep text-white"
    >
      <div className="pointer-events-none absolute inset-0 mesh-grid opacity-40" aria-hidden />

      {/* Mobile / tablet stacked grid */}
      <div className="px-5 py-24 min-[900px]:hidden">
        <div className="reveal-up">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brass">
            Labs
          </p>
          <h2 className="mt-3 font-heading text-4xl font-semibold tracking-tight">
            Side projects & experiments
          </h2>
          <p className="mt-4 max-w-xl text-base text-white/65">
            Prompt-led builds I ship in my spare time—mostly AI-assisted.
          </p>
        </div>
        <div className="mt-10 grid gap-4" data-stagger>
          {hobbyProjects.map((project) => {
            const Icon = icons[project.icon];
            return (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`stagger-item group flex min-h-[240px] flex-col justify-between rounded-[1.75rem] border border-white/10 bg-gradient-to-br p-6 cursor-pointer focus-ring ${tones[project.tone]}`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] opacity-80">
                    Live experiment
                  </span>
                  <span
                    className={`inline-flex size-14 items-center justify-center rounded-2xl ring-1 ${iconShell[project.tone]}`}
                    aria-hidden
                  >
                    <Icon className="size-7" strokeWidth={1.6} />
                  </span>
                </div>
                <div>
                  <span className="font-heading text-2xl font-bold text-white">
                    {project.title}
                  </span>
                  <span className="mt-2 block text-sm text-white/70">{project.desc}</span>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-white">
                    Open
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Desktop horizontal pin scroll */}
      <div id="projects-pin" className="hidden min-h-screen min-[900px]:block">
        <div className="flex h-screen flex-col justify-center">
          <div className="mb-10 px-8 xl:px-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brass">
              Labs · scroll sideways
            </p>
            <h2 className="mt-3 max-w-3xl font-heading text-5xl font-semibold tracking-tight xl:text-6xl">
              Side projects & experiments
            </h2>
          </div>
          <div
            id="projects-track"
            className="flex w-max gap-5 px-8 will-change-transform xl:gap-6 xl:px-14"
          >
            {hobbyProjects.map((project, i) => {
              const Icon = icons[project.icon];
              return (
                <a
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex h-[420px] w-[min(78vw,380px)] shrink-0 flex-col justify-between overflow-hidden rounded-[2rem] border border-white/12 bg-gradient-to-br p-8 cursor-pointer focus-ring ${tones[project.tone]} ${
                    "featured" in project && project.featured ? "w-[min(85vw,440px)]" : ""
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] opacity-75">
                      0{i + 1} — Live
                    </span>
                    <ArrowUpRight className="size-6 text-white/70 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>

                  <div className="flex flex-1 items-center justify-center py-4" aria-hidden>
                    <span
                      className={`inline-flex size-28 items-center justify-center rounded-[2rem] ring-1 transition-transform duration-300 group-hover:-translate-y-1 ${iconShell[project.tone]}`}
                    >
                      <Icon className="size-14 opacity-90" strokeWidth={1.35} />
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading text-3xl font-bold leading-tight text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-xs text-base text-white/70">{project.desc}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
