import { aboutParagraphs, site } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <div
        className="pointer-events-none absolute -left-24 top-1/4 size-80 rounded-full bg-primary/10 blur-[100px]"
        data-parallax="70"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div className="reveal-left">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Why Dioame
          </p>
          <h2 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            <span className="line-mask">
              <span>Details so releases</span>
            </span>
            <span className="line-mask mt-1 block text-primary">
              <span>stay boring—in a good way</span>
            </span>
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            {aboutParagraphs.map((p) => (
              <p key={p.slice(0, 32)} className="reveal-up">
                {p}
              </p>
            ))}
          </div>
        </div>

        <aside
          id="about-panel"
          className="reveal-scale relative self-start overflow-hidden rounded-[2rem] border border-white/10 bg-primary-deep p-7 text-white shadow-[0_40px_80px_-40px_rgba(4,19,18,0.55)] lg:sticky lg:top-28"
        >
          <div
            className="pointer-events-none absolute -right-8 top-0 size-40 rounded-full bg-brass/25 blur-3xl"
            aria-hidden
          />
          <p className="font-heading text-6xl font-semibold tracking-tight text-brass">
            7+
          </p>
          <p className="mt-2 text-sm text-white/65">Years shipping APIs & products</p>
          <div className="my-7 h-px bg-gradient-to-r from-white/20 to-transparent" />
          <p className="text-sm leading-relaxed text-white/80">
            {site.promptHighlight}
          </p>
          <div className="mt-7 flex flex-wrap gap-2" data-stagger>
            {["Fractional / project", "API & integrations", "Cloud & CI/CD"].map(
              (badge) => (
                <span
                  key={badge}
                  className="stagger-item rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/85"
                >
                  {badge}
                </span>
              ),
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}
