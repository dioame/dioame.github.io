"use client";

import { useEffect, useRef } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  Gauge,
  HeartPulse,
  Landmark,
  MapPin,
  Star,
  Users,
  Wallet,
  Wrench,
} from "lucide-react";
import { appsRecord } from "@/lib/content";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";

const categoryIcons = {
  landmark: Landmark,
  wrench: Wrench,
  wallet: Wallet,
  gauge: Gauge,
  heart: HeartPulse,
  users: Users,
};

const quickStats = [
  { value: appsRecord.webApps, label: "Web apps" },
  { value: appsRecord.mobileAppCount, label: "Mobile apps" },
  { value: appsRecord.categories.length, label: "Categories" },
];

export default function AppsRecord() {
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = countRef.current;
    const api = getGsap();
    if (!el || !api) return;

    const { gsap } = api;
    const target = appsRecord.totalApps;

    if (prefersReducedMotion()) {
      el.textContent = String(target);
      return;
    }

    const ctx = gsap.context(() => {
      const counter = { value: 0 };
      el.textContent = "0";

      gsap.to(counter, {
        value: target,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
        onUpdate: () => {
          el.textContent = String(Math.round(counter.value));
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  const marqueeNames = [...appsRecord.appNames, ...appsRecord.appNames];

  return (
    <section id="apps" className="atmosphere noise py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="reveal-up max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            AppsRecord · Verified creator
          </p>
          <h2 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            <span className="line-mask">
              <span>Every app I&rsquo;ve shipped,</span>
            </span>
            <span className="line-mask mt-1 block text-primary">
              <span>in one place.</span>
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            The sections above are highlights. My full catalogue lives on
            AppsRecord — browse it end to end.
          </p>
        </div>

        <div className="reveal-scale relative mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,#0a2e2a_0%,#061614_55%,#0f3d38_100%)] text-white shadow-[0_44px_90px_-46px_rgba(4,19,18,0.75)] sm:rounded-[2.5rem]">
          <div
            className="pointer-events-none absolute inset-0 mesh-grid opacity-50"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-24 -top-28 size-96 rounded-full bg-brass/12 blur-[110px]"
            data-parallax="-30"
            aria-hidden
          />

          <div className="relative grid gap-12 p-7 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:p-14">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brass/35 bg-brass/12 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-brass">
                  <BadgeCheck className="size-3.5" aria-hidden />
                  Trusted creator
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/75">
                  <Star className="size-3.5 fill-brass text-brass" aria-hidden />
                  {appsRecord.rating} average rating
                </span>
              </div>

              <div className="mt-8 flex items-end gap-5">
                <span
                  ref={countRef}
                  className="bg-gradient-to-br from-white via-brass to-primary-bright bg-clip-text font-heading text-[clamp(4.5rem,13vw,8.5rem)] font-bold leading-[0.82] tracking-tight text-transparent tabular-nums"
                >
                  {appsRecord.totalApps}
                </span>
                <span className="mb-2 font-heading text-lg font-semibold leading-tight text-white/80 sm:text-xl">
                  apps
                  <br />
                  published
                </span>
              </div>

              <dl className="mt-8 flex flex-wrap gap-2.5">
                {quickStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
                  >
                    <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/50">
                      {stat.label}
                    </dt>
                    <dd className="mt-1 font-heading text-2xl font-bold text-white">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-8 max-w-lg text-base leading-relaxed text-white/65">
                {appsRecord.intro}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3">
                <a
                  href={appsRecord.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-brass px-7 py-4 text-sm font-bold text-primary-deep transition-colors duration-200 hover:bg-primary-bright cursor-pointer focus-ring"
                >
                  View all {appsRecord.totalApps} apps
                  <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <span className="font-mono text-xs text-white/45">
                  {appsRecord.domain}
                </span>
              </div>

              <p className="mt-6 flex items-center gap-1.5 text-sm text-white/45">
                <MapPin className="size-3.5 shrink-0" aria-hidden />
                {appsRecord.location}
              </p>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brass">
                Browse by category
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2" data-stagger>
                {appsRecord.categories.map((category) => {
                  const Icon = categoryIcons[category.icon];
                  return (
                    <a
                      key={category.name}
                      href={appsRecord.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="stagger-item group rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors duration-200 hover:border-brass/40 hover:bg-white/[0.08] cursor-pointer focus-ring"
                    >
                      <span className="flex items-center justify-between gap-3">
                        <span
                          className="inline-flex size-9 items-center justify-center rounded-xl bg-primary/40 text-brass"
                          aria-hidden
                        >
                          <Icon className="size-4" />
                        </span>
                        <span className="font-heading text-2xl font-bold text-white">
                          {category.count}
                        </span>
                      </span>
                      <span className="mt-3 block font-heading text-sm font-semibold text-white">
                        {category.name}
                      </span>
                      <span className="mt-1 block text-xs leading-relaxed text-white/45">
                        {category.apps}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden border-t border-white/10 bg-[#04100f] py-4">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#04100f] to-transparent sm:w-28"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#04100f] to-transparent sm:w-28"
              aria-hidden
            />
            <div className="marquee-track" data-marquee="46" aria-hidden>
              {marqueeNames.map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="inline-flex items-center gap-6 sm:gap-8"
                >
                  <span className="whitespace-nowrap font-heading text-sm font-semibold tracking-tight text-white/55">
                    {name}
                  </span>
                  <span
                    className="inline-block size-1 shrink-0 rotate-45 bg-brass/60"
                    aria-hidden
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
