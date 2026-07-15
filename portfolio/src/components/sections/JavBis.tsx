import { ArrowUpRight, ChartPie, Layers3, Receipt } from "lucide-react";
import { javbis } from "@/lib/content";

const icons = {
  sitemap: Layers3,
  receipt: Receipt,
  pie: ChartPie,
};

export default function JavBis() {
  return (
    <section id="javbis" className="atmosphere noise py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="reveal-up">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Laravel · Accounting & financial management
          </p>
          <h2 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            <span className="line-mask">
              <span>JavBis</span>
            </span>
          </h2>
          <p className="mt-3 font-heading text-xl text-brass">{javbis.tagline}</p>
        </div>

        <div className="reveal-scale mt-12 overflow-hidden rounded-[2rem] border border-primary/15 bg-surface shadow-[0_40px_90px_-50px_rgba(4,19,18,0.4)]">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-7 sm:p-10">
              <p className="text-sm font-medium text-muted">{javbis.stack}</p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {javbis.intro}
              </p>
              <a
                href={javbis.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-bright cursor-pointer focus-ring"
              >
                Open JavBis
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
              <p className="mt-8 text-sm text-muted">
                Collaborating with{" "}
                <strong className="font-semibold text-ink">
                  {javbis.collaborator}
                </strong>
              </p>
            </div>

            <div className="border-t border-primary/10 bg-primary-deep p-7 text-white sm:p-10 lg:border-l lg:border-t-0">
              <div className="grid gap-4" data-stagger>
                {javbis.features.map((feature) => {
                  const Icon = icons[feature.icon];
                  return (
                    <div
                      key={feature.title}
                      className="stagger-item rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <Icon className="size-5 text-brass" aria-hidden />
                      <h3 className="mt-3 font-heading text-base font-bold">
                        {feature.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/65">
                        {feature.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="border-t border-primary/10 px-7 py-6 sm:px-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
              Core modules
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {javbis.modules.map((mod) => (
                <span
                  key={mod}
                  className="rounded-full border border-primary/15 bg-background px-3 py-1.5 font-mono text-xs text-ink"
                >
                  {mod}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
