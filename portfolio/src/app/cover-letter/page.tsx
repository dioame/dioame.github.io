import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "@/components/PrintButton";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Cover Letter — ${site.fullName}`,
  description: `Professional introduction and cover letter from ${site.legalName}, a full-stack developer based in the Philippines.`,
};

export default function CoverLetterPage() {
  return (
    <div className="atmosphere min-h-screen pb-20 print:bg-white print:pb-0">
      <nav
        aria-label="Document navigation"
        className="relative mx-auto mt-4 flex w-[calc(100%-2rem)] max-w-3xl flex-wrap items-center justify-between gap-3 rounded-2xl border border-primary/15 bg-surface/90 px-4 py-3 shadow-sm print:hidden"
      >
        <Link
          href="/"
          className="focus-ring inline-flex min-h-11 items-center rounded-full border border-primary/15 px-4 py-2 text-sm font-semibold text-primary-deep transition-colors hover:border-primary/35"
        >
          ← Back to portfolio
        </Link>
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href="/resume"
            className="focus-ring inline-flex min-h-11 items-center rounded-full px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/8"
          >
            Resume
          </Link>
          <PrintButton />
        </div>
      </nav>

      <main id="main" className="mx-auto mt-6 max-w-3xl px-4 print:mt-0 print:max-w-none print:px-0">
        <article className="rounded-3xl border border-primary/12 bg-surface p-6 shadow-[0_24px_60px_-28px_rgba(15,23,42,0.18)] sm:p-10 print:rounded-none print:border-0 print:bg-white print:p-0 print:shadow-none">
          <header className="border-b-[3px] border-primary pb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Professional introduction
            </p>
            <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary-deep sm:text-4xl">
              Cover Letter
            </h1>
            <p className="mt-4 font-heading text-xl font-semibold text-primary-deep">
              {site.legalName}
            </p>
            <p className="mt-1 text-sm text-primary">Full-Stack Developer · {site.location}</p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
              <a href={`mailto:${site.email}`} className="focus-ring rounded break-all hover:text-primary hover:underline">
                {site.email}
              </a>
              <a href={`tel:${site.phoneTel}`} className="focus-ring rounded hover:text-primary hover:underline">
                {site.phone}
              </a>
              <span>
                Portfolio:{" "}
                <a href={site.portfolio} target="_blank" rel="noopener noreferrer" className="focus-ring rounded hover:text-primary hover:underline">
                  dioame.github.io
                </a>
              </span>
              <span>
                Rendovations:{" "}
                <a href={site.rendovations} target="_blank" rel="noopener noreferrer" className="focus-ring rounded hover:text-primary hover:underline">
                  rendovations.com
                </a>
              </span>
            </div>
          </header>

          <section aria-label="Letter" className="mt-8 space-y-5 text-base leading-relaxed text-primary-deep print:text-sm">
            <p>Dear Hiring Manager,</p>
            <p>
              I would like to express my interest in opportunities to contribute
              to your team as a Full-Stack Developer. With more than seven years
              of professional experience developing web and mobile applications,
              I bring a practical approach to building reliable software that
              supports the people and organizations who use it.
            </p>
            <p>
              My work with the Department of Social Welfare and Development in
              Caraga has involved developing systems for financial reporting,
              operational tracking, and field services. These projects have taught
              me to listen carefully to users, translate requirements into useful
              solutions, and give equal attention to implementation, documentation,
              and ongoing support.
            </p>
            <p>
              My technical experience includes Laravel-based APIs, authentication
              and single sign-on, real-time communication, database design, and
              third-party integrations. I have worked with MySQL, Firebase, and
              Supabase, integrated payment services, and developed mobile
              applications using FlutterFlow and API-based backends. I also use
              AI-assisted development tools and prompt engineering to explore
              ideas and support delivery, while reviewing the resulting work for
              accuracy and maintainability.
            </p>
            <p>
              I value clear communication, respectful collaboration, and taking
              responsibility for the work entrusted to me. I would welcome the
              opportunity to learn about your team’s priorities and discuss how
              my experience could support your projects. My resume and portfolio
              at{" "}
              <a href={site.portfolio} target="_blank" rel="noopener noreferrer" className="focus-ring rounded text-primary underline underline-offset-2">
                dioame.github.io
              </a>{" "}
              provide further details about my background and completed work.
              You can also explore{" "}
              <a href={site.rendovations} target="_blank" rel="noopener noreferrer" className="focus-ring rounded text-primary underline underline-offset-2">
                rendovations.com
              </a>{" "}
              for an overview of software development, AI automation, API
              integration, and AI video editing services.
            </p>
            <p>
              Thank you for your time and consideration. I would be grateful for
              the opportunity to speak with you and learn more about how I may
              contribute to your organization.
            </p>
            <footer className="pt-2">
              <p>Sincerely,</p>
              <p className="mt-4 font-heading text-lg font-semibold">{site.legalName}</p>
              <p className="mt-1 text-sm text-muted">Full-Stack Developer</p>
            </footer>
          </section>
        </article>
      </main>
    </div>
  );
}
