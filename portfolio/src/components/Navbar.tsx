"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-all duration-300 sm:px-5 ${
          solid
            ? "border border-primary/15 bg-surface/80 shadow-[0_20px_50px_-28px_rgba(4,19,18,0.4)] backdrop-blur-2xl"
            : "border border-white/10 bg-white/5 shadow-[0_16px_40px_-28px_rgba(0,0,0,0.5)] backdrop-blur-xl"
        }`}
      >
        <a
          href="#home"
          className={`font-heading text-lg font-semibold tracking-tight transition-colors duration-200 focus-ring cursor-pointer ${
            solid ? "text-ink" : "text-white"
          }`}
        >
          {site.name}
        </a>

        <ul className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer focus-ring ${
                  solid
                    ? "text-muted hover:bg-primary/8 hover:text-ink"
                    : "text-white/75 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/resume"
            className={`rounded-full border px-3.5 py-2 text-sm font-semibold transition-colors duration-200 cursor-pointer focus-ring ${
              solid
                ? "border-primary/20 text-ink hover:border-primary/45"
                : "border-white/20 text-white hover:border-white/45"
            }`}
          >
            Resume
          </Link>
          <a
            href="#contact"
            className="rounded-full bg-primary-bright px-4 py-2 text-sm font-semibold text-primary-deep transition-colors duration-200 hover:bg-brass cursor-pointer focus-ring"
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          className={`inline-flex size-10 items-center justify-center rounded-xl border transition-colors duration-200 cursor-pointer focus-ring md:hidden ${
            solid ? "border-primary/20 text-ink" : "border-white/20 text-white"
          }`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open ? (
        <div
          id="mobile-nav"
          className="mx-auto mt-2 max-w-7xl rounded-2xl border border-primary/15 bg-surface/95 p-4 shadow-xl backdrop-blur-2xl md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-xl px-3 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:bg-primary/8 cursor-pointer focus-ring"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex gap-2 border-t border-primary/10 pt-3">
            <Link
              href="/resume"
              className="flex-1 rounded-full border border-primary/25 px-3 py-2.5 text-center text-sm font-semibold text-ink cursor-pointer focus-ring"
              onClick={() => setOpen(false)}
            >
              Resume
            </Link>
            <a
              href="#contact"
              className="flex-1 rounded-full bg-primary px-3 py-2.5 text-center text-sm font-semibold text-white cursor-pointer focus-ring"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
