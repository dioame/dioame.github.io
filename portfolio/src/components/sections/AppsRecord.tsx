"use client";

import { useEffect, useRef } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  Code2,
  Gamepad2,
  Gauge,
  HeartPulse,
  Landmark,
  MapPin,
  Play,
  Star,
  Users,
  Wallet,
  Wrench,
} from "lucide-react";
import { appsRecord, featuredGame } from "@/lib/content";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";

const categoryIcons = {
  code: Code2,
  landmark: Landmark,
  map: MapPin,
  wrench: Wrench,
  wallet: Wallet,
  gauge: Gauge,
  heart: HeartPulse,
  users: Users,
  gamepad: Gamepad2,
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
            {appsRecord.totalApps}-app portfolio · Verified creator
          </p>
          <h2 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            <span className="line-mask">
              <span>Real products.</span>
            </span>
            <span className="line-mask mt-1 block text-primary">
              <span>Verified and ready to explore.</span>
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Explore all {appsRecord.totalApps} published web and mobile applications—from
            interactive games and government field tools to finance platforms, productivity products, and
            browser-based utilities.
          </p>
        </div>

        {/* Featured Showcase: Game Development */}
        <div className="reveal-scale relative mt-12 overflow-hidden rounded-[2rem] border border-brass/35 bg-[linear-gradient(150deg,#070a10_0%,#0c1420_45%,#150e24_100%)] text-white shadow-[0_44px_90px_-40px_rgba(0,0,0,0.85)] sm:rounded-[2.5rem]">
          <div className="pointer-events-none absolute inset-0 mesh-grid opacity-30" aria-hidden />
          <div className="pointer-events-none absolute -right-20 -top-20 size-96 rounded-full bg-brass/15 blur-[120px]" aria-hidden />
          <div className="pointer-events-none absolute -left-20 bottom-0 size-80 rounded-full bg-purple-600/15 blur-[110px]" aria-hidden />

          <div className="relative grid gap-8 p-6 sm:p-10 lg:grid-cols-12 lg:gap-10 lg:p-12 items-center">
            {/* Left Col: Info & CTAs */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-brass/40 bg-brass/15 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-brass">
                    <Gamepad2 className="size-3.5" aria-hidden />
                    Game Development
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
                    <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
                    Playable in Browser
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-purple-300">
                    Tactical Card Battler
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {featuredGame.title}
                </h3>
                <p className="mt-2 font-heading text-lg font-medium text-brass/90">
                  {featuredGame.subtitle}
                </p>

                <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
                  {featuredGame.description}
                </p>

                {/* Elemental Affinities Pills */}
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/50 mr-1">
                    5 Elements:
                  </span>
                  <span className="rounded-full border border-[#ff5733]/40 bg-[#ff5733]/15 px-2.5 py-1 text-xs font-semibold text-[#ff8066]">
                    🔥 Fire
                  </span>
                  <span className="rounded-full border border-[#00b4d8]/40 bg-[#00b4d8]/15 px-2.5 py-1 text-xs font-semibold text-[#48cae4]">
                    💧 Water
                  </span>
                  <span className="rounded-full border border-[#52b788]/40 bg-[#52b788]/15 px-2.5 py-1 text-xs font-semibold text-[#74c69d]">
                    🌿 Earth
                  </span>
                  <span className="rounded-full border border-[#38bdf8]/40 bg-[#38bdf8]/15 px-2.5 py-1 text-xs font-semibold text-[#7dd3fc]">
                    💨 Air
                  </span>
                  <span className="rounded-full border border-[#a855f7]/40 bg-[#a855f7]/15 px-2.5 py-1 text-xs font-semibold text-[#c084fc]">
                    🔮 Void
                  </span>
                </div>

                {/* Highlights Grid */}
                <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                  {featuredGame.highlights.map((h) => (
                    <div key={h.label} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                      <div className="text-[10px] uppercase tracking-wider text-white/45 font-medium">{h.label}</div>
                      <div className="mt-1 font-heading text-xs sm:text-sm font-semibold text-white/90">{h.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={featuredGame.gameUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-brass via-[#ffd27a] to-brass px-7 py-4 text-sm font-bold text-[#070a10] shadow-[0_12px_28px_-8px_rgba(212,175,99,0.55)] transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_16px_32px_-8px_rgba(212,175,99,0.7)] cursor-pointer focus-ring"
                >
                  <Gamepad2 className="size-4 transition-transform group-hover:rotate-12" />
                  Play Heroes of Wami
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href={featuredGame.trailerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:border-white/40 hover:bg-white/10 cursor-pointer focus-ring"
                >
                  <Play className="size-4 fill-white text-white" />
                  Watch Trailer
                  <ArrowUpRight className="size-4 text-white/60" />
                </a>
              </div>
            </div>

            {/* Right Col: Video Trailer */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-brass/30 bg-black shadow-2xl">
                <div className="aspect-video w-full">
                  <iframe
                    className="size-full"
                    src={`https://www.youtube-nocookie.com/embed/${featuredGame.trailerVideoId}?rel=0&playsinline=1`}
                    title="Heroes of Wami — Official Game Trailer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="border-t border-white/10 bg-white/[0.04] p-3.5 flex items-center justify-between text-xs text-white/70">
                  <span className="flex items-center gap-2 font-mono">
                    <span className="size-2 rounded-full bg-red-500 animate-pulse" />
                    Official Gameplay Trailer
                  </span>
                  <a
                    href={featuredGame.gameUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brass hover:underline inline-flex items-center gap-1 font-semibold"
                  >
                    wami-heroes.rendovations.com
                    <ArrowUpRight className="size-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Existing AppsRecord creator profile card */}
        <div className="reveal-scale relative mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,#0a2e2a_0%,#061614_55%,#0f3d38_100%)] text-white shadow-[0_44px_90px_-46px_rgba(4,19,18,0.75)] sm:rounded-[2.5rem]">
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
