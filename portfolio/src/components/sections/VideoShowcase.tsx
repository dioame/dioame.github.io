"use client";

import { ChevronLeft, ChevronRight, ExternalLink, Volume2 } from "lucide-react";
import { useState } from "react";

const videos = [
  {
    id: "OLh5BEnl8R8",
    title: "AI Video Portfolio",
    description: "Created with AI-assisted video and visual storytelling tools.",
  },
] as const;

function getEmbedUrl(videoId: string, soundEnabled: boolean) {
  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=${soundEnabled ? 0 : 1}&loop=1&playlist=${videoId}&playsinline=1&controls=1&rel=0`;
}

export default function VideoShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const activeVideo = videos[activeIndex];
  const videoUrl = `https://www.youtube.com/watch?v=${activeVideo.id}`;

  const showVideo = (index: number) => {
    setActiveIndex(index);
    setSoundEnabled(false);
  };

  const showPrevious = () => {
    showVideo((activeIndex - 1 + videos.length) % videos.length);
  };

  const showNext = () => {
    showVideo((activeIndex + 1) % videos.length);
  };

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
            View on YouTube
            <ExternalLink className="size-4" aria-hidden />
          </a>
        </div>

        <div className="reveal-scale mt-10 overflow-hidden rounded-[2rem] border border-white/12 bg-black shadow-[0_40px_90px_-45px_rgba(0,0,0,0.8)]">
          <div className="relative aspect-video">
            <iframe
              key={`${activeVideo.id}-${soundEnabled ? "sound" : "muted"}`}
              className="absolute inset-0 size-full"
              src={getEmbedUrl(activeVideo.id, soundEnabled)}
              title={`${activeVideo.title} video ${activeIndex + 1}`}
              allow="autoplay; encrypted-media; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />

            {!soundEnabled && (
              <button
                type="button"
                onClick={() => setSoundEnabled(true)}
                className="focus-ring absolute bottom-4 left-4 z-10 inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/20 bg-primary-deep/90 px-4 py-2.5 text-sm font-semibold text-white shadow-lg backdrop-blur-md transition-colors hover:bg-primary sm:bottom-5 sm:left-5"
              >
                <Volume2 className="size-4" aria-hidden />
                Play with sound
              </button>
            )}
          </div>

          <div className="flex flex-col gap-5 border-t border-white/10 bg-white/[0.04] px-5 py-5 sm:px-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-heading text-base font-semibold text-white">
                  {activeVideo.title} · {String(activeIndex + 1).padStart(2, "0")}
                </p>
                <p className="mt-1 text-sm text-white/55">{activeVideo.description}</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-white/50" aria-live="polite">
                  {activeIndex + 1} / {videos.length}
                </span>
                <button
                  type="button"
                  onClick={showPrevious}
                  disabled={videos.length < 2}
                  aria-label="Show previous video"
                  className="focus-ring inline-flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-white/40 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-35"
                >
                  <ChevronLeft className="size-5" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  disabled={videos.length < 2}
                  aria-label="Show next video"
                  className="focus-ring inline-flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-white/40 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-35"
                >
                  <ChevronRight className="size-5" aria-hidden />
                </button>
              </div>
            </div>

            <div className="flex gap-2" aria-label="Choose a video">
              {videos.map((video, index) => (
                <button
                  key={video.id}
                  type="button"
                  onClick={() => showVideo(index)}
                  aria-label={`Show video ${index + 1}: ${video.title}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  className={`h-1.5 cursor-pointer rounded-full transition-all ${
                    index === activeIndex
                      ? "w-10 bg-brass"
                      : "w-5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
