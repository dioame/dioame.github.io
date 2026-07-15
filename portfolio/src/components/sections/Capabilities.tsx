"use client";

import { useEffect, useRef } from "react";
import {
  Bot,
  Briefcase,
  Cloud,
  CreditCard,
  KeyRound,
  Plug,
  Radio,
  Rocket,
  Settings2,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";
import { capabilities } from "@/lib/content";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";

const icons = {
  briefcase: Briefcase,
  cogs: Settings2,
  mobile: Smartphone,
  rocket: Rocket,
  cloud: Cloud,
  bot: Bot,
  card: CreditCard,
  sparkles: Sparkles,
  plug: Plug,
  radio: Radio,
  key: KeyRound,
  zap: Zap,
};

/**
 * Motion pattern inspired by GSAP Showcase / Codrops portfolios:
 * - progressive ScrollTrigger.batch (cards enter as they hit the viewport)
 * - clip-path wipe instead of bounce/scale pops
 * - expo.out pacing, once per element
 * - restrained hover (lift + border only)
 */
export default function Capabilities() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const api = getGsap();
    if (!root || !api) return;

    const { gsap, ScrollTrigger } = api;
    const eyebrow = root.querySelector<HTMLElement>(".cap-eyebrow");
    const titleLines = root.querySelectorAll<HTMLElement>(".cap-title-line");
    const cards = gsap.utils.toArray<HTMLElement>(root.querySelectorAll(".cap-card"));

    if (prefersReducedMotion()) {
      gsap.set([eyebrow, titleLines, cards], {
        clearProps: "all",
        opacity: 1,
        y: 0,
        clipPath: "none",
      });
      gsap.set(root.querySelectorAll(".cap-card-inner"), { clearProps: "all", opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      // Header — masked line reveals (showcase typography cue)
      if (eyebrow) gsap.set(eyebrow, { opacity: 0, y: 16 });
      gsap.set(titleLines, { yPercent: 110 });

      ScrollTrigger.create({
        trigger: root.querySelector(".cap-header") || root,
        start: "top 78%",
        once: true,
        onEnter: () => {
          const hTl = gsap.timeline({ defaults: { ease: "expo.out" } });
          if (eyebrow) {
            hTl.to(eyebrow, { opacity: 1, y: 0, duration: 0.8 });
          }
          hTl.to(
            titleLines,
            { yPercent: 0, duration: 1.1, stagger: 0.12 },
            eyebrow ? "-=0.45" : 0,
          );
        },
      });

      // Cards — batch wipe (each card animates when IT enters)
      gsap.set(cards, { clipPath: "inset(100% 0 0 0)" });
      gsap.set(
        cards.map((c) => c.querySelector(".cap-card-inner")),
        { opacity: 0, y: 28 },
      );

      ScrollTrigger.batch(cards, {
        start: "top 90%",
        once: true,
        onEnter: (batch) => {
          batch.forEach((card, i) => {
            const inner = card.querySelector<HTMLElement>(".cap-card-inner");
            const icon = card.querySelector<HTMLElement>(".cap-card-icon");

            const cardTl = gsap.timeline({
              delay: i * 0.05,
              defaults: { ease: "expo.out" },
            });

            cardTl
              .to(card, {
                clipPath: "inset(0% 0 0 0)",
                duration: 1.05,
              })
              .to(
                inner,
                { opacity: 1, y: 0, duration: 0.85 },
                "-=0.7",
              );

            if (icon) {
              cardTl.fromTo(
                icon,
                { opacity: 0, y: 12 },
                { opacity: 1, y: 0, duration: 0.55 },
                "-=0.5",
              );
            }
          });
        },
      });

      // Soft hover — showcase restraint (no bounce scale)
      const cleanups: Array<() => void> = [];
      cards.forEach((card) => {
        const enter = () => {
          gsap.to(card, {
            y: -6,
            duration: 0.35,
            ease: "power3.out",
            overwrite: "auto",
          });
          gsap.to(card, {
            borderColor: "rgba(15, 118, 110, 0.4)",
            boxShadow: "0 22px 40px -28px rgba(4, 19, 18, 0.35)",
            duration: 0.35,
            ease: "power3.out",
            overwrite: false,
          });
        };
        const leave = () => {
          gsap.to(card, {
            y: 0,
            borderColor: "rgba(15, 118, 110, 0.14)",
            boxShadow: "0 0 0 0 rgba(0,0,0,0)",
            duration: 0.35,
            ease: "power3.out",
            overwrite: "auto",
          });
        };
        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);
        cleanups.push(() => {
          card.removeEventListener("mouseenter", enter);
          card.removeEventListener("mouseleave", leave);
        });
      });

      return () => cleanups.forEach((fn) => fn());
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={rootRef}
      className="atmosphere noise py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5">
        <div className="cap-header max-w-2xl">
          <p className="cap-eyebrow text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Experience
          </p>
          <h2 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            <span className="block overflow-hidden">
              <span className="cap-title-line block">What I bring</span>
            </span>
            <span className="mt-1 block overflow-hidden">
              <span className="cap-title-line block">to a project</span>
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {capabilities.map((item) => {
            const Icon = icons[item.icon];
            return (
              <article
                key={item.title}
                className="cap-card bento will-change-[clip-path] p-5 cursor-default"
              >
                <div className="cap-card-inner">
                  <div className="cap-card-icon inline-flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <h3 className="mt-4 font-heading text-base font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
