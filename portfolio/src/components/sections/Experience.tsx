"use client";

import { useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import { workExperience, type WorkRole } from "@/lib/content";

function RoleBlock({ role, defaultOpen }: { role: WorkRole; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const itemCount = role.accomplishments.reduce(
    (n, a) => n + (a.items?.length ?? 0),
    0,
  );

  return (
    <article className="reveal-up relative pl-8 sm:pl-10">
      <span
        className={`absolute left-0 top-2 size-3 rounded-full ring-4 ring-background ${
          role.current ? "bg-brass" : "bg-primary"
        }`}
        aria-hidden
      />

      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-heading text-xl font-semibold tracking-tight text-ink sm:text-2xl">
          {role.position}
        </h3>
        <time className="text-sm font-medium text-primary">{role.period}</time>
      </div>

      <p className="mt-1 text-sm font-semibold text-primary-deep sm:text-base">
        {role.organization}
        {role.location ? (
          <span className="font-normal text-muted"> · {role.location}</span>
        ) : null}
      </p>

      {role.unit ? (
        <p className="mt-1 flex items-start gap-1.5 text-sm text-muted">
          <MapPin className="mt-0.5 size-3.5 shrink-0 opacity-60" aria-hidden />
          <span>{role.unit}</span>
        </p>
      ) : null}

      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[15px]">
        {role.duties}
      </p>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-surface px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-primary/40 hover:bg-primary/5 cursor-pointer focus-ring"
        aria-expanded={open}
      >
        {open ? "Hide" : "Show"} accomplishments
        <span className="text-muted">({itemCount})</span>
        <ChevronDown
          className={`size-3.5 text-muted transition-transform duration-250 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden
        />
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="space-y-4 border-l border-primary/15 pl-4">
            {role.accomplishments.map((block) => (
              <li key={block.title}>
                <p className="text-sm font-semibold text-ink">{block.title}</p>
                {block.items?.length ? (
                  <ul className="mt-2 space-y-1.5">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm leading-relaxed text-muted"
                      >
                        <span
                          className="mt-2 size-1 shrink-0 rounded-full bg-primary/50"
                          aria-hidden
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-background py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute -right-20 top-1/3 size-72 rounded-full bg-primary/8 blur-[100px]"
        data-parallax="80"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="reveal-up max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Work experience
          </p>
          <h2 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            <span className="line-mask">
              <span>Roles that shaped</span>
            </span>
            <span className="line-mask mt-1 block text-primary">
              <span>how I ship systems</span>
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            From DSWD field systems and Google Play apps to finance modules,
            HRIS, and teaching — a record of delivery in public and private
            work.
          </p>
        </div>

        <div className="relative mt-14 max-w-3xl">
          <div
            className="absolute bottom-4 left-[5px] top-2 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent sm:left-[5px]"
            aria-hidden
          />
          <div className="space-y-12">
            {workExperience.map((role, i) => (
              <RoleBlock key={role.id} role={role} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
