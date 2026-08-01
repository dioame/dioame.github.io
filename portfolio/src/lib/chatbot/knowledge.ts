import {
  aboutParagraphs,
  appsRecord,
  hobbyProjects,
  javbis,
  mobileApps,
  resume,
  services,
  site,
  skillCategories,
  trustStacks,
  workExperience,
} from "@/lib/content";

export type FaqItem = {
  id: string;
  question: string;
  keywords: string[];
  answer: string;
};

export const quickPrompts = [
  "Who is Dioame?",
  "Where have you worked?",
  "Tell me about DSWD work",
  "What services do you offer?",
  "Show me your projects",
  "What mobile apps have you shipped?",
  "How can I contact you?",
] as const;

export const faqs: FaqItem[] = [
  {
    id: "who",
    question: "Who is Dioame?",
    keywords: [
      "who",
      "dioame",
      "about you",
      "yourself",
      "introduce",
      "profile",
      "who are you",
    ],
    answer: [
      `${site.legalName}`,
      `${site.role} · ${site.location}`,
      "",
      site.tagline,
      "",
      "7+ years focusing on:",
      "• API-first backends",
      "• Integrations & cloud delivery",
      "• AI-assisted development",
    ].join("\n"),
  },
  {
    id: "experience",
    question: "How much experience do you have?",
    keywords: ["experience", "years", "how long", "seniority", "career"],
    answer: [
      "7+ years professional full-stack (2018–Present)",
      "Self-employed developer building:",
      "• Scalable web & mobile apps",
      "• API backends, CI/CD, cloud infra",
      "• Payments & AI integrations",
    ].join("\n"),
  },
  {
    id: "services",
    question: "What services do you offer?",
    keywords: ["service", "offer", "hire", "collaborate", "work with", "help with"],
    answer: [
      "Main offers:",
      "• Architecture & integrations",
      "• Build & launch (most requested)",
      "• Stabilize & scale",
      "",
      "Remote-friendly for fractional or project work.",
    ].join("\n"),
  },
  {
    id: "stack",
    question: "What is your tech stack?",
    keywords: [
      "stack",
      "tech",
      "technology",
      "skills",
      "laravel",
      "react",
      "aws",
      "tools",
    ],
    answer: [
      "Main stack:",
      ...trustStacks.map((s) => `• ${s}`),
      "",
      "Also: PHP, Node, Python · Laravel, React, Vue, Django",
      "Plus Docker, CI/CD, payments, and AI APIs.",
    ].join("\n"),
  },
  {
    id: "contact",
    question: "How can I contact you?",
    keywords: [
      "contact",
      "email",
      "phone",
      "reach",
      "message",
      "hire",
      "call",
    ],
    answer: [
      "Best way to reach Dioame:",
      "",
      `Email: ${site.email}`,
      `Phone: ${site.phone}`,
      "(Please message first before calling.)",
      "",
      `GitHub: ${site.github}`,
      `LinkedIn: ${site.linkedin}`,
      "",
      "Typical reply within one business day.",
    ].join("\n"),
  },
  {
    id: "projects",
    question: "Show me your projects",
    keywords: [
      "project",
      "labs",
      "portfolio",
      "hobby",
      "demo",
      "wampdf",
      "javbis",
      "wampos",
    ],
    answer: [
      "Labs:",
      ...hobbyProjects.map((p) => `• ${p.title}`),
      "",
      `Featured: JavBis`,
      javbis.href,
    ].join("\n"),
  },
  {
    id: "apps",
    question: "What apps have you shipped?",
    keywords: [
      "mobile",
      "app",
      "apps",
      "appsrecord",
      "catalogue",
      "catalog",
      "play store",
      "google play",
      "dswd",
      "flutterflow",
    ],
    answer: [
      `Full catalogue (${appsRecord.totalApps} apps) on AppsRecord:`,
      appsRecord.href,
      "",
      "Google Play (DSWD Caraga):",
      ...mobileApps.map((a) => `• ${a.title}`),
    ].join("\n"),
  },
  {
    id: "education",
    question: "What is your education?",
    keywords: ["education", "school", "degree", "university", "msit", "bsit"],
    answer: resume.education
      .map((e) => `• ${e.title}\n  ${e.school} (${e.period})`)
      .join("\n\n"),
  },
  {
    id: "cert",
    question: "Do you have certifications?",
    keywords: ["cert", "eligibility", "dict", "csc", "edps"],
    answer: [
      resume.certification.title,
      `(${resume.certification.period})`,
      "",
      resume.certification.body,
    ].join("\n"),
  },
  {
    id: "resume",
    question: "Where can I see your resume?",
    keywords: ["resume", "cv", "curriculum"],
    answer: [
      "Open the Resume page on this site:",
      "/resume",
      "",
      "You can also print or save it as PDF from there.",
    ].join("\n"),
  },
  {
    id: "ai",
    question: "Do you use AI in your work?",
    keywords: [
      "ai",
      "prompt",
      "copilot",
      "cursor",
      "gemini",
      "openai",
      "bedrock",
    ],
    answer: [
      site.promptHighlight,
      "",
      "Daily tools:",
      "• GitHub Copilot, Cursor, Antigravity, Codex",
      "",
      "Integrations:",
      "• OpenAI, Google Gemini, Amazon Bedrock",
    ].join("\n"),
  },
  {
    id: "location",
    question: "Where are you based?",
    keywords: ["location", "where", "based", "philippines", "remote", "timezone"],
    answer: [
      `Based in ${site.location}.`,
      "Remote-friendly for fractional and project collaborations.",
    ].join("\n"),
  },
  {
    id: "work",
    question: "Where have you worked?",
    keywords: [
      "work",
      "worked",
      "experience",
      "employer",
      "job",
      "career",
      "employment",
      "office",
      "roles",
    ],
    answer: [
      "Recent roles:",
      ...workExperience.slice(0, 3).map(
        (r) => `• ${r.position} — ${r.organization} (${r.period})`,
      ),
      "",
      "Also: IT Instructor at Saint Francis Xavier College; HRIS OJT at DENR.",
      "See the Experience section on this site for full accomplishments.",
    ].join("\n"),
  },
  {
    id: "dswd",
    question: "Tell me about DSWD work",
    keywords: [
      "dswd",
      "caraga",
      "kalahi",
      "rictms",
      "programmer iii",
      "financial analyst",
      "faith",
      "ttracerr",
      "government",
    ],
    answer: [
      "DSWD Field Office Caraga:",
      "",
      "• Computer Programmer III (Sep 2024 – Present), RICTMS",
      "  Systems like TTRACERR, FAITH, Caraga Connect, LDAP/SSO API,",
      "  RICTMS Synapse, plus MYMobile / FAITH / PAID / PINPOINT on Google Play.",
      "",
      "• AC/Financial Analyst III – IT Officer (Apr 2019 – Sep 2024)",
      "  KALAHI CIDSS finance & HR systems: CFMS, AMS, HIReS, KC Navigator,",
      "  KC Dashboard SSO, and daily DB backups.",
      "",
      "Open the Experience section for the full list.",
    ].join("\n"),
  },
];

/** Full context (rare use). Prefer compact for chat latency. */
export function buildPortfolioContext(): string {
  return buildCompactPortfolioContext();
}

/** Short context for faster Gemini calls. */
export function buildCompactPortfolioContext(): string {
  const skillLine = skillCategories
    .map((c) => `${c.title}: ${c.tags.slice(0, 4).join(", ")}`)
    .join(" | ");

  return [
    `${site.legalName} — ${site.role}, ${site.location}. ${site.tagline}. 7+ years.`,
    `Contact: ${site.email}; phone ${site.phone} (message first); GitHub ${site.github}.`,
    `About: ${aboutParagraphs[0]}`,
    `Services: ${services.map((s) => s.title).join("; ")}.`,
    `Work: ${workExperience
      .slice(0, 3)
      .map((r) => `${r.position} @ ${r.organization} (${r.period})`)
      .join("; ")}.`,
    `Stack: ${skillLine}.`,
    `Labs: ${hobbyProjects.map((p) => p.title).join(", ")}.`,
    `JavBis: Laravel accounting app (${javbis.href}).`,
    `AppsRecord: ${appsRecord.totalApps} apps — ${appsRecord.href}.`,
    `Mobile (Play): ${mobileApps.map((a) => a.title).join(", ")}.`,
    `Education: ${resume.education.map((e) => e.title).join("; ")}.`,
    `Cert: ${resume.certification.title}.`,
  ].join("\n");
}

/** Keyword score match against local FAQs. Returns null if confidence is low. */
export function matchFaq(userMessage: string): FaqItem | null {
  const q = userMessage.toLowerCase().trim();
  if (!q) return null;

  let best: FaqItem | null = null;
  let bestScore = 0;

  for (const faq of faqs) {
    let score = 0;
    for (const kw of faq.keywords) {
      if (q.includes(kw.toLowerCase())) {
        score += kw.length > 6 ? 2 : 1;
      }
    }
    const words = q.split(/\s+/);
    for (const w of words) {
      if (w.length < 3) continue;
      if (faq.question.toLowerCase().includes(w)) score += 0.5;
    }
    if (score > bestScore) {
      bestScore = score;
      best = faq;
    }
  }

  // Prefer local FAQ more often to avoid slow Gemini round-trips
  return bestScore >= 1.5 ? best : null;
}
