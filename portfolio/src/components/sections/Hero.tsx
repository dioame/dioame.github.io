"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { site } from "@/lib/content";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";

const TERMINAL_LINES = [
  "$ dioame status --live",
  "→ API systems: ready",
  "→ auth · payments · AI",
  "→ CI/CD · AWS · Docker",
  "ok — open for projects",
];

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const terminalRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const api = getGsap();
    if (!api || !rootRef.current) return;
    const { gsap } = api;
    const reduce = prefersReducedMotion();

    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set(
          ".hero-line span, .hero-anim-role, .hero-anim-copy, .hero-anim-cta, .hero-anim-visual",
          { clearProps: "all", opacity: 1, y: 0 },
        );
        return;
      }

      gsap.set(".hero-line span", { y: "110%" });

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.to(".hero-line span", { y: 0, duration: 1, stagger: 0.12 })
        .from(".hero-anim-role", { opacity: 0, y: 20, duration: 0.55 }, "-=0.4")
        .from(".hero-anim-copy", { opacity: 0, y: 16, duration: 0.5 }, "-=0.3")
        .from(".hero-anim-cta", { opacity: 0, y: 14, duration: 0.45 }, "-=0.25")
        .from(".hero-anim-visual", { opacity: 0, y: 24, duration: 0.7 }, "-=0.5");

      gsap.to(".hero-orb", {
        y: "+=18",
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5,
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const el = terminalRef.current;
    if (!el || prefersReducedMotion()) {
      if (el) el.textContent = TERMINAL_LINES.join("\n");
      return;
    }

    let cancelled = false;
    let line = 0;
    let char = 0;

    const tick = () => {
      if (cancelled || !el) return;
      const current = TERMINAL_LINES[line] ?? "";
      el.textContent =
        TERMINAL_LINES.slice(0, line).join("\n") +
        (line < TERMINAL_LINES.length ? (line ? "\n" : "") + current.slice(0, char) : "");

      if (char < current.length) {
        char += 1;
        window.setTimeout(tick, 26);
      } else if (line < TERMINAL_LINES.length - 1) {
        line += 1;
        char = 0;
        window.setTimeout(tick, 280);
      }
    };

    const start = window.setTimeout(tick, 1100);
    return () => {
      cancelled = true;
      window.clearTimeout(start);
    };
  }, []);

  return (
    <section
      id="home"
      ref={rootRef}
      data-theme="dark"
      className="hero-atmosphere noise relative min-h-[100svh] overflow-hidden text-white"
    >
      <div className="pointer-events-none absolute inset-0 mesh-grid" aria-hidden />
      <div
        className="hero-orb pointer-events-none absolute -left-28 top-16 size-[28rem] rounded-full bg-primary-bright/25 blur-[100px]"
        aria-hidden
      />
      <div
        className="hero-orb pointer-events-none absolute -right-20 bottom-0 size-[24rem] rounded-full bg-brass/20 blur-[90px]"
        aria-hidden
      />

      <p
        className="watermark pointer-events-none absolute left-0 top-[20%] z-0 select-none text-[clamp(4rem,16vw,12rem)] text-white/[0.035]"
        aria-hidden
      >
        DIOAME
      </p>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-center gap-10 px-5 pb-16 pt-28 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:pb-20 lg:pt-24">
        {/* Copy */}
        <div className="w-full max-w-xl shrink-0 lg:max-w-[34rem]">
          <p className="hero-anim-role mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-white/70">
            <span className="size-1.5 animate-pulse rounded-full bg-primary-bright" aria-hidden />
            Portfolio · Remote · API-first
          </p>

          <h1 className="font-heading text-[clamp(2.75rem,6.5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
            <span className="hero-line line-mask block overflow-hidden">
              <span className="block">{site.fullName.split(" ")[0]}</span>
            </span>
            <span className="hero-line line-mask mt-1 block overflow-hidden text-brass">
              <span className="block">
                {site.fullName.split(" ").slice(1).join(" ")}
              </span>
            </span>
          </h1>

          <p className="hero-anim-role mt-5 font-heading text-lg font-medium text-white/90 sm:text-xl">
            {site.role}
          </p>
          <p className="hero-anim-copy mt-3 text-base leading-relaxed text-white/65">
            {site.headline}
          </p>

          <div className="hero-anim-cta mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary-bright px-6 py-3.5 text-sm font-semibold text-primary-deep transition-colors duration-200 hover:bg-brass cursor-pointer focus-ring"
            >
              Start a project
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-white/40 hover:bg-white/10 cursor-pointer focus-ring"
            >
              Explore labs
              <ArrowDownRight className="size-4" />
            </a>
          </div>
        </div>

        {/* Photo + terminal (inline on md+, stacked on small) */}
        <div className="hero-anim-visual flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:items-stretch lg:w-auto lg:shrink-0">
          <div className="relative mx-auto h-[280px] w-[200px] shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-[0_32px_64px_-28px_rgba(0,0,0,0.7)] sm:mx-0 sm:h-[300px] sm:w-[210px]">
            <Image
              src="/images/profile.png"
              alt={site.fullName}
              fill
              priority
              className="object-cover object-top"
              sizes="210px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/55 via-transparent to-transparent" />
            <span className="absolute left-2.5 top-2.5 rounded-full border border-white/15 bg-primary-deep/75 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-brass backdrop-blur-md">
              Available
            </span>
          </div>

          <div className="glass-dark flex w-full flex-col justify-between rounded-2xl p-4 sm:w-[240px] sm:shrink-0">
            <div>
              <div className="mb-2.5 flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-[#ff5f56]" />
                <span className="size-2 rounded-full bg-[#ffbd2e]" />
                <span className="size-2 rounded-full bg-[#27c93f]" />
                <span className="ml-1.5 font-mono text-[10px] text-white/40">
                  api.studio · v1
                </span>
              </div>
              <pre className="min-h-[7.5rem] font-mono text-[11px] leading-relaxed text-emerald-200/90">
                <code ref={terminalRef} />
              </pre>
            </div>
            <p className="mt-3 border-t border-white/10 pt-3 text-xs text-white/55">
              {site.tagline}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
