"use client";

import { useEffect } from "react";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";

export default function GsapInit() {
  useEffect(() => {
    const api = getGsap();
    if (!api) return;
    const { gsap, ScrollTrigger } = api;

    if (prefersReducedMotion()) {
      gsap.set(
        ".section-reveal, .reveal-up, .reveal-left, .reveal-scale, .stagger-item",
        { clearProps: "all", opacity: 1, y: 0, x: 0, scale: 1 },
      );
      gsap.set(".line-mask > span", { y: 0 });
      return;
    }

    const mm = gsap.matchMedia();

    // Scroll progress bar
    gsap.to(".scroll-progress", {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      },
    });

    // Generic section fades
    gsap.utils.toArray<HTMLElement>(".section-reveal, .reveal-up").forEach((el) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    });

    gsap.utils.toArray<HTMLElement>(".reveal-left").forEach((el) => {
      gsap.to(el, {
        opacity: 1,
        x: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    });

    gsap.utils.toArray<HTMLElement>(".reveal-scale").forEach((el) => {
      gsap.to(el, {
        opacity: 1,
        scale: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    });

    // Stagger groups — ScrollTrigger.batch (showcase pattern: progressive enter)
    gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
      const items = gsap.utils.toArray<HTMLElement>(
        group.querySelectorAll(".stagger-item"),
      );
      gsap.set(items, { opacity: 0, y: 36 });

      ScrollTrigger.batch(items, {
        start: "top 88%",
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.08,
            ease: "expo.out",
            overwrite: true,
          });
        },
      });
    });

    // Line mask reveals (kinetic type) — skip hero (handles its own entrance)
    gsap.utils
      .toArray<HTMLElement>("main .line-mask > span")
      .filter((span) => !span.closest("#home"))
      .forEach((span) => {
        gsap.to(span, {
          y: 0,
          duration: 0.95,
          ease: "power4.out",
          scrollTrigger: {
            trigger: span.parentElement,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });

    // Parallax layers
    gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
      const depth = Number(el.dataset.parallax) || 40;
      gsap.to(el, {
        y: depth,
        ease: "none",
        scrollTrigger: {
          trigger: el.closest("section") || el.parentElement || el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // Rotating watermark
    gsap.utils.toArray<HTMLElement>("[data-spin-slow]").forEach((el) => {
      gsap.to(el, {
        rotation: 360,
        duration: 80,
        ease: "none",
        repeat: -1,
      });
    });

    // Infinite marquees
    gsap.utils.toArray<HTMLElement>("[data-marquee]").forEach((track) => {
      const distance = track.scrollWidth / 2;
      gsap.to(track, {
        x: -distance,
        duration: Number(track.dataset.marquee) || 28,
        ease: "none",
        repeat: -1,
      });
    });

    // Pin + horizontal scrub for labs (desktop only)
    mm.add("(min-width: 900px)", () => {
      const pin = document.querySelector<HTMLElement>("#projects-pin");
      const track = document.querySelector<HTMLElement>("#projects-track");
      if (!pin || !track) return;

      const getScroll = () => Math.max(0, track.scrollWidth - window.innerWidth + 80);

      const tween = gsap.to(track, {
        x: () => -getScroll(),
        ease: "none",
        scrollTrigger: {
          trigger: pin,
          start: "top top",
          end: () => `+=${getScroll()}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
        gsap.set(track, { clearProps: "transform" });
      };
    });

    // About sticky panel scrub
    mm.add("(min-width: 1024px)", () => {
      const about = document.querySelector<HTMLElement>("#about");
      const panel = document.querySelector<HTMLElement>("#about-panel");
      if (!about || !panel) return;

      gsap.fromTo(
        panel,
        { y: 60, opacity: 0.4 },
        {
          y: -40,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: about,
            start: "top 70%",
            end: "bottom 40%",
            scrub: 1.2,
          },
        },
      );
    });

    // Dark section color shift for navbar cue
    const darkSections = gsap.utils.toArray<HTMLElement>("[data-theme='dark']");
    darkSections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 80px",
        end: "bottom 80px",
        onEnter: () => document.documentElement.classList.add("on-dark"),
        onEnterBack: () => document.documentElement.classList.add("on-dark"),
        onLeave: () => document.documentElement.classList.remove("on-dark"),
        onLeaveBack: () => document.documentElement.classList.remove("on-dark"),
      });
    });

    ScrollTrigger.refresh();

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
