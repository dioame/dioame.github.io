import Link from "next/link";
import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <p className="font-heading text-3xl font-semibold tracking-tight">
            {site.name}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
            Full-stack portfolio — APIs, integrations, and cloud delivery.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">
            Portfolio
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>
              <a href="#services" className="transition-colors hover:text-white cursor-pointer">
                Services
              </a>
            </li>
            <li>
              <a href="#stack" className="transition-colors hover:text-white cursor-pointer">
                Stack
              </a>
            </li>
            <li>
              <a href="#projects" className="transition-colors hover:text-white cursor-pointer">
                Labs
              </a>
            </li>
            <li>
              <a href="#apps" className="transition-colors hover:text-white cursor-pointer">
                Apps
              </a>
            </li>
            <li>
              <a href="#javbis" className="transition-colors hover:text-white cursor-pointer">
                JavBis
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">
            Site
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>
              <a href="#about" className="transition-colors hover:text-white cursor-pointer">
                About
              </a>
            </li>
            <li>
              <Link href="/resume" className="transition-colors hover:text-white cursor-pointer">
                Resume
              </Link>
            </li>
            <li>
              <a href="#contact" className="transition-colors hover:text-white cursor-pointer">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">
            Connect
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white cursor-pointer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white cursor-pointer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="transition-colors hover:text-white cursor-pointer"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-sm text-white/50">
        © 2026 {site.fullName}. All rights reserved.
      </div>
    </footer>
  );
}
