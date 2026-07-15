import { skillCategories } from "@/lib/content";

export default function Stack() {
  return (
    <section
      id="stack"
      data-theme="dark"
      className="noise relative overflow-hidden bg-primary-deep py-24 text-white sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 mesh-grid opacity-50" aria-hidden />
      <div
        className="pointer-events-none absolute right-[-10%] top-10 size-[28rem] rounded-full bg-primary-bright/15 blur-[120px]"
        data-parallax="60"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="reveal-up flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brass">
              Skills
            </p>
            <h2 className="mt-3 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              <span className="line-mask">
                <span>Technical stack</span>
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/60 lg:text-right">
            From Laravel backends to AWS, AI APIs, and day-to-day prompt tooling.
          </p>
        </div>

        <div
          className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          data-stagger
        >
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className={`stagger-item group rounded-[1.5rem] border p-5 transition-colors duration-200 ${
                "highlight" in cat && cat.highlight
                  ? "border-brass/40 bg-gradient-to-br from-brass/20 to-white/5"
                  : "border-white/10 bg-white/[0.04] hover:border-white/25 hover:bg-white/[0.07]"
              }`}
            >
              <h3 className="font-heading text-base font-bold">{cat.title}</h3>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-primary-deep/50 px-2.5 py-1 font-mono text-[11px] text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
