import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { site } from "@/lib/content";
import MobileApps from "@/components/sections/MobileApps";

export default function Contact() {
  return (
    <section
      id="contact"
      data-theme="dark"
      className="noise relative overflow-hidden bg-primary-deep py-24 text-white sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 mesh-grid opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 size-96 rounded-full bg-primary-bright/20 blur-[120px]"
        data-parallax="-40"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="reveal-up max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brass">
            Contact
          </p>
          <h2 className="mt-3 font-heading text-4xl font-semibold tracking-tight sm:text-6xl">
            <span className="line-mask">
              <span>Say hello</span>
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">
            Tell me about your API, product surface, or integration roadmap. I
            typically reply within one business day. Please message before
            calling—thank you.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3" data-stagger>
          <a
            href={`mailto:${site.email}`}
            className="stagger-item glass-dark group rounded-[1.75rem] p-6 transition-colors duration-200 hover:border-brass/40 cursor-pointer focus-ring"
          >
            <Mail className="size-5 text-brass" aria-hidden />
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
              Email
            </p>
            <p className="mt-2 break-all font-heading text-lg font-semibold">
              {site.email}
            </p>
          </a>
          <a
            href={`tel:${site.phoneTel}`}
            className="stagger-item glass-dark rounded-[1.75rem] p-6 transition-colors duration-200 hover:border-brass/40 cursor-pointer focus-ring"
          >
            <Phone className="size-5 text-brass" aria-hidden />
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
              Phone
            </p>
            <p className="mt-2 font-heading text-lg font-semibold">{site.phone}</p>
            <p className="mt-2 text-xs text-white/40">Message first before calling.</p>
          </a>
          <div className="stagger-item glass-dark rounded-[1.75rem] p-6 md:col-span-1">
            <ArrowUpRight className="size-5 text-brass" aria-hidden />
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
              Social
            </p>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium transition-colors hover:text-brass cursor-pointer focus-ring rounded"
              >
                GitHub — github.com/dioame
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 transition-colors hover:text-white cursor-pointer focus-ring rounded"
              >
                LinkedIn
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 transition-colors hover:text-white cursor-pointer focus-ring rounded"
              >
                Facebook — dioame.rendon
              </a>
            </div>
          </div>
        </div>

        <MobileApps />
      </div>
    </section>
  );
}
