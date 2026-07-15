"use client";

import Image from "next/image";
import Link from "next/link";
import {
  aboutParagraphs,
  capabilities,
  hobbyProjects,
  resume,
  site,
  skillCategories,
} from "@/lib/content";

export default function ResumePage() {
  return (
    <div className="atmosphere min-h-screen pb-16">
      <header className="sticky top-4 z-40 mx-auto flex w-[calc(100%-2rem)] max-w-3xl flex-wrap items-center justify-between gap-3 rounded-full border border-primary/15 bg-surface/90 px-4 py-3 shadow-[0_12px_40px_-20px_rgba(15,23,42,0.16)] backdrop-blur-xl">
        <Link
          href="/"
          className="rounded-full border border-primary/15 px-4 py-2 text-sm font-semibold text-primary-deep transition-colors duration-200 hover:border-primary/35 cursor-pointer focus-ring"
        >
          ← Back to portfolio
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-bright cursor-pointer focus-ring"
        >
          Print / Save as PDF
        </button>
      </header>

      <article className="mx-auto mt-6 max-w-3xl px-4 print:max-w-none print:px-0">
        <div className="rounded-[1.5rem] border border-primary/12 bg-surface p-6 shadow-[0_24px_60px_-28px_rgba(15,23,42,0.18)] sm:p-10 print:rounded-none print:border-0 print:shadow-none">
          <header className="flex flex-col items-center gap-5 border-b-[3px] border-primary pb-6 shadow-[0_1px_0_0_rgba(201,169,98,0.5)] sm:flex-row sm:items-start">
            <Image
              src="/images/profile.png"
              alt={site.legalName}
              width={120}
              height={120}
              className="size-[120px] rounded-2xl border-2 border-primary/40 object-cover"
              priority
            />
            <div className="text-center sm:text-left">
              <h1 className="font-heading text-3xl font-bold tracking-tight text-primary-deep sm:text-4xl">
                {site.legalName}
              </h1>
              <p className="mt-2 text-lg font-semibold text-primary">
                Full Stack Developer
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-muted sm:justify-start">
                <span>
                  <strong className="text-primary-deep">Email:</strong>{" "}
                  <a href={`mailto:${site.email}`} className="hover:text-primary">
                    {site.email}
                  </a>
                </span>
                <span>
                  <strong className="text-primary-deep">Phone:</strong>{" "}
                  <a href={`tel:${site.phoneTel}`} className="hover:text-primary">
                    {site.phone}
                  </a>
                </span>
                <span>
                  <strong className="text-primary-deep">GitHub:</strong>{" "}
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    github.com/dioame
                  </a>
                </span>
                <span>
                  <strong className="text-primary-deep">LinkedIn:</strong>{" "}
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    linkedin.com/in/dioame
                  </a>
                </span>
                <span>
                  <strong className="text-primary-deep">Location:</strong>{" "}
                  {site.location}
                </span>
              </div>
            </div>
          </header>

          <section className="mt-8">
            <h2 className="border-b-2 border-primary/10 pb-2 font-heading text-sm font-bold uppercase tracking-wider text-primary">
              Professional Summary
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-primary-deep">
              {resume.summary}
            </p>
          </section>

          <section className="mt-8">
            <h2 className="border-b-2 border-primary/10 pb-2 font-heading text-sm font-bold uppercase tracking-wider text-primary">
              Technical Skills
            </h2>
            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              {skillCategories.map((cat) => (
                <div key={cat.title}>
                  <h3 className="text-sm font-semibold text-primary-deep">
                    {cat.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {cat.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-primary/15 bg-background px-2 py-0.5 text-xs text-primary-deep"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-8">
            <h2 className="border-b-2 border-primary/10 pb-2 font-heading text-sm font-bold uppercase tracking-wider text-primary">
              Professional Experience
            </h2>
            <div className="mt-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold text-primary-deep">
                  {resume.experience.title}
                </h3>
                <span className="text-sm text-muted">{resume.experience.period}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {resume.experience.body}
              </p>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="border-b-2 border-primary/10 pb-2 font-heading text-sm font-bold uppercase tracking-wider text-primary">
              Projects & Mobile Apps
            </h2>
            <ul className="mt-4 space-y-4">
              {hobbyProjects.slice(0, 2).map((p) => (
                <li key={p.title}>
                  <h3 className="font-semibold text-primary-deep">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted">
                    {p.desc}.{" "}
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {p.href.replace(/^https?:\/\//, "")}
                    </a>
                  </p>
                </li>
              ))}
              <li>
                <h3 className="font-semibold text-primary-deep">
                  Mobile Apps (Google Play)
                </h3>
                <p className="mt-1 text-sm text-muted">
                  PAID Mobile, FAITH Mobile, DSWD MyMobile, Pinpoint, WorkSPACE,
                  Kaagap-AI Lokal, EmotiMon — field and employee tools for DSWD
                  Caraga.
                </p>
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="border-b-2 border-primary/10 pb-2 font-heading text-sm font-bold uppercase tracking-wider text-primary">
              Education
            </h2>
            <ul className="mt-4 space-y-4">
              {resume.education.map((ed) => (
                <li key={ed.title}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-semibold text-primary-deep">{ed.title}</h3>
                    <span className="text-sm text-muted">{ed.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{ed.school}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="border-b-2 border-primary/10 pb-2 font-heading text-sm font-bold uppercase tracking-wider text-primary">
              Certifications & Eligibility
            </h2>
            <div className="mt-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold text-primary-deep">
                  {resume.certification.title}
                </h3>
                <span className="text-sm text-muted">
                  {resume.certification.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">{resume.certification.body}</p>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="border-b-2 border-primary/10 pb-2 font-heading text-sm font-bold uppercase tracking-wider text-primary">
              Publications
            </h2>
            <p className="mt-4 text-sm">
              <a
                href={resume.publication.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                {resume.publication.title} — IEEE Xplore
              </a>
            </p>
          </section>

          <section className="mt-8">
            <h2 className="border-b-2 border-primary/10 pb-2 font-heading text-sm font-bold uppercase tracking-wider text-primary">
              Key Expertise
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {capabilities.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border-l-[3px] border-primary bg-background/80 p-3"
                >
                  <h4 className="text-sm font-semibold text-primary-deep">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <p className="mt-10 hidden text-xs text-muted print:hidden">
            {aboutParagraphs[0]}
          </p>
        </div>
      </article>
    </div>
  );
}
