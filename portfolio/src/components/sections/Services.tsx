import { Network, Rocket, Shield } from "lucide-react";
import { services } from "@/lib/content";

const icons = {
  network: Network,
  rocket: Rocket,
  shield: Shield,
};

export default function Services() {
  return (
    <section id="services" className="atmosphere noise py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="reveal-up max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Services
          </p>
          <h2 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            <span className="line-mask">
              <span>How I usually</span>
            </span>
            <span className="line-mask mt-1 block">
              <span>collaborate</span>
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Three ways I typically help—pick what fits your roadmap. You work
            directly with me from discovery through handoff.
          </p>
        </div>

        <div
          className="mt-14 grid auto-rows-[minmax(180px,auto)] gap-4 md:grid-cols-6"
          data-stagger
        >
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            const span =
              index === 1
                ? "md:col-span-4 md:row-span-2"
                : index === 0
                  ? "md:col-span-2 md:row-span-2"
                  : "md:col-span-6";

            return (
              <article
                key={service.title}
                className={`stagger-item group relative overflow-hidden p-6 sm:p-8 ${span} ${
                  service.featured ? "bento-featured" : "bento"
                }`}
              >
                {service.featured ? (
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-primary-bright/20 blur-3xl"
                    aria-hidden
                  />
                ) : null}
                {service.featured ? (
                  <span className="mb-6 inline-flex rounded-full bg-brass/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brass">
                    Most requested
                  </span>
                ) : null}
                <div
                  className={`inline-flex size-12 items-center justify-center rounded-2xl ${
                    service.featured
                      ? "bg-white/10 text-brass"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <Icon className="size-5" aria-hidden />
                </div>
                <h3
                  className={`mt-6 font-heading text-2xl font-semibold ${
                    service.featured ? "text-white" : "text-ink"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`mt-3 max-w-xl text-sm leading-relaxed sm:text-base ${
                    service.featured ? "text-white/70" : "text-muted"
                  }`}
                >
                  {service.body}
                </p>
                <ul
                  className={`mt-6 flex flex-wrap gap-2 ${
                    service.featured ? "text-white/80" : "text-ink/80"
                  }`}
                >
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        service.featured
                          ? "bg-white/10"
                          : "bg-primary/8 text-primary"
                      }`}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
