import {
  aboutParagraphs,
  hobbyProjects,
  javbis,
  mobileApps,
  resume,
  services,
  site,
  skillCategories,
  trustStacks,
} from "@/lib/content";

export type FaqItem = {
  id: string;
  question: string;
  keywords: string[];
  answer: string;
};

export const quickPrompts = [
  "Who is Dioame?",
  "What services do you offer?",
  "How can I contact you?",
  "Show me your projects",
  "What is your tech stack?",
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
    answer: `${site.legalName} is a ${site.role} based in ${site.location}. ${site.tagline} with 7+ years of experience focusing on API-first backends, integrations, cloud delivery, and AI-assisted development.`,
  },
  {
    id: "experience",
    question: "How much experience do you have?",
    keywords: ["experience", "years", "how long", "seniority", "career"],
    answer:
      "Dioame has 7+ years of professional full-stack experience (2018–Present as a self-employed developer), building scalable web/mobile apps, API backends, CI/CD, cloud infra, payments, and AI integrations.",
  },
  {
    id: "services",
    question: "What services do you offer?",
    keywords: ["service", "offer", "hire", "collaborate", "work with", "help with"],
    answer: `Three main offers: Architecture & integrations; Build & launch (most requested); Stabilize & scale. Remote-friendly fractional/project work.`,
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
    answer: `Main stack: ${trustStacks.join(", ")}. Also PHP/Node/Python, Laravel/React/Vue/Django, Docker, CI/CD, payments, and AI APIs.`,
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
    answer: `Best way: email ${site.email}. Phone: ${site.phone} (please message first before calling). GitHub: ${site.github}. LinkedIn: ${site.linkedin}. Typical reply within one business day.`,
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
    answer: `Labs include ${hobbyProjects.map((p) => p.title).join(", ")}. Featured product: JavBis (${javbis.href}).`,
  },
  {
    id: "apps",
    question: "What mobile apps have you shipped?",
    keywords: [
      "mobile",
      "app",
      "play store",
      "google play",
      "dswd",
      "flutterflow",
    ],
    answer: `Google Play (DSWD Caraga): ${mobileApps.map((a) => a.title).join(", ")}.`,
  },
  {
    id: "education",
    question: "What is your education?",
    keywords: ["education", "school", "degree", "university", "msit", "bsit"],
    answer: resume.education
      .map((e) => `• ${e.title} — ${e.school} (${e.period})`)
      .join("\n"),
  },
  {
    id: "cert",
    question: "Do you have certifications?",
    keywords: ["cert", "eligibility", "dict", "csc", "edps"],
    answer: `${resume.certification.title} (${resume.certification.period}) — ${resume.certification.body}`,
  },
  {
    id: "resume",
    question: "Where can I see your resume?",
    keywords: ["resume", "cv", "curriculum"],
    answer:
      "Open the Resume page on this site: /resume. You can also print/save it as PDF from there.",
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
    answer: `${site.promptHighlight} Daily tools include GitHub Copilot, Cursor, Antigravity, and Codex. Integration experience with OpenAI, Google Gemini, and Amazon Bedrock.`,
  },
  {
    id: "location",
    question: "Where are you based?",
    keywords: ["location", "where", "based", "philippines", "remote", "timezone"],
    answer: `Based in ${site.location}. Remote-friendly for fractional and project collaborations.`,
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
    `Stack: ${skillLine}.`,
    `Labs: ${hobbyProjects.map((p) => p.title).join(", ")}.`,
    `JavBis: Laravel accounting app (${javbis.href}).`,
    `Apps: ${mobileApps.map((a) => a.title).join(", ")}.`,
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
