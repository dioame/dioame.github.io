import { trustStacks } from "@/lib/content";

export default function Trust() {
  const items = [...trustStacks, ...trustStacks];

  return (
    <section className="overflow-hidden border-y border-primary/10 bg-surface py-7">
      <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
        Stacks & platforms
      </p>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent sm:w-28" />
        <div className="marquee-track" data-marquee="32">
          {items.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="inline-flex items-center gap-6 sm:gap-8"
            >
              <span className="font-heading text-lg font-semibold tracking-tight text-ink/70 sm:text-2xl">
                {item}
              </span>
              <span
                className="inline-block size-1.5 shrink-0 rotate-45 bg-brass/70"
                aria-hidden
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
