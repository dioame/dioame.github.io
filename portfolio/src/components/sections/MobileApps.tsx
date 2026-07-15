"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowUpRight, Columns3, Cpu, HeartPulse } from "lucide-react";
import { mobileApps } from "@/lib/content";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";

const appIcons = {
  columns: Columns3,
  chip: Cpu,
  heart: HeartPulse,
};

export default function MobileApps() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const api = getGsap();
    if (!root || !api) return;

    const { gsap } = api;
    const cards = root.querySelectorAll<HTMLElement>(".app-card");
    const icons = root.querySelectorAll<HTMLElement>(".app-card-icon");
    const header = root.querySelectorAll<HTMLElement>(".apps-header-anim");

    if (prefersReducedMotion()) {
      gsap.set([header, cards, icons], {
        clearProps: "all",
        opacity: 1,
        y: 0,
        clipPath: "none",
      });
      return;
    }

    const { ScrollTrigger } = api;

    const ctx = gsap.context(() => {
      // Showcase-style: header once, then batch wipe cards as they enter
      gsap.set(header, { opacity: 0, y: 20 });
      gsap.set(cards, { clipPath: "inset(100% 0 0 0)", opacity: 1 });
      gsap.set(icons, { opacity: 0, y: 10 });

      ScrollTrigger.create({
        trigger: root,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(header, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.08,
            ease: "expo.out",
          });
        },
      });

      ScrollTrigger.batch(cards, {
        start: "top 92%",
        once: true,
        onEnter: (batch) => {
          batch.forEach((card, i) => {
            const icon = card.querySelector<HTMLElement>(".app-card-icon");
            const tl = gsap.timeline({
              delay: i * 0.06,
              defaults: { ease: "expo.out" },
            });
            tl.to(card, { clipPath: "inset(0% 0 0 0)", duration: 1 });
            if (icon) {
              tl.to(icon, { opacity: 1, y: 0, duration: 0.5 }, "-=0.45");
            }
          });
        },
      });

      const cleanups: Array<() => void> = [];

      cards.forEach((card) => {
        const enter = () => {
          gsap.to(card, {
            y: -4,
            borderColor: "rgba(212, 175, 99, 0.45)",
            backgroundColor: "rgba(255,255,255,0.08)",
            duration: 0.25,
            ease: "power2.out",
            overwrite: "auto",
          });
        };
        const leave = () => {
          gsap.to(card, {
            y: 0,
            borderColor:
              card.dataset.featured === "true"
                ? "rgba(212, 175, 99, 0.35)"
                : "rgba(255,255,255,0.1)",
            backgroundColor:
              card.dataset.featured === "true"
                ? "rgba(255,255,255,0.1)"
                : "rgba(255,255,255,0.04)",
            duration: 0.25,
            ease: "power2.out",
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
    <div id="mobile-apps" ref={rootRef} className="mt-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h3 className="apps-header-anim font-heading text-3xl font-semibold">
            Mobile Apps
          </h3>
          <p className="apps-header-anim mt-2 text-sm text-white/55">
            DSWD Field Office Caraga · Google Play
          </p>
        </div>
        <span className="apps-header-anim rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/75">
          Google Play
        </span>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {mobileApps.map((app) => {
          const Icon = app.icon ? appIcons[app.icon] : null;
          const featured = Boolean(app.featured);
          return (
            <a
              key={app.title}
              href={app.href}
              target="_blank"
              rel="noopener noreferrer"
              data-featured={featured ? "true" : "false"}
              className={`app-card group flex items-start gap-4 rounded-2xl border p-4 will-change-[clip-path] cursor-pointer focus-ring ${
                featured
                  ? "border-brass/35 bg-white/10"
                  : "border-white/10 bg-white/[0.04]"
              } ${app.title === "Pinpoint" ? "sm:col-span-2 lg:col-span-3" : ""}`}
            >
              {app.image ? (
                <Image
                  src={app.image}
                  alt=""
                  width={48}
                  height={48}
                  className="app-card-icon size-12 rounded-xl object-cover"
                />
              ) : Icon ? (
                <span className="app-card-icon inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/40 text-brass">
                  <Icon className="size-5" aria-hidden />
                </span>
              ) : null}
              <span className="min-w-0 flex-1">
                <span className="flex items-center justify-between gap-2">
                  <span className="font-heading text-base font-semibold">
                    {app.title}
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-white/50 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-white/55">
                  {app.desc}
                </span>
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
