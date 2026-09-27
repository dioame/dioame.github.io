import { ExternalLink } from "lucide-react";

const videoId = "OLh5BEnl8R8";
const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&playsinline=1&rel=0`;

export default function VideoShowcase() {
  return (
    <section
      id="video-showcase"
      data-theme="dark"
      className="relative overflow-hidden bg-primary-deep py-24 text-white sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 mesh-grid opacity-35" aria-hidden />
      <div
        className="pointer-events-none absolute -right-24 top-1/4 size-80 rounded-full bg-primary-bright/15 blur-[110px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="reveal-up flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brass">
              Video portfolio
            </p>
            <h2 className="mt-3 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              Ideas brought to life with AI
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
              A growing collection of videos I create using AI technology—combining
              storytelling, generated visuals, and creative tools to present my work in
              new ways.
            </p>
          </div>

          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit shrink-0 items-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-white focus-ring"
          >
            View channel video
            <ExternalLink className="size-4" aria-hidden />
          </a>
        </div>

        <div className="reveal-scale mt-10 overflow-hidden rounded-[2rem] border border-white/12 bg-black shadow-[0_40px_90px_-45px_rgba(0,0,0,0.8)]">
          <div className="relative aspect-video">
            <iframe
              className="absolute inset-0 size-full"
              src={embedUrl}
              title="Dioame portfolio video showcase"
              allow="autoplay; encrypted-media; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="flex flex-col gap-2 border-t border-white/10 bg-white/[0.04] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div>
              <p className="font-heading text-base font-semibold text-white">
                AI Video Portfolio · 01
              </p>
              <p className="mt-1 text-sm text-white/55">
                Created with AI-assisted video and visual storytelling tools.
              </p>
            </div>
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-brass transition-colors hover:text-white focus-ring"
            >
              Open video
              <ExternalLink className="size-4" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
