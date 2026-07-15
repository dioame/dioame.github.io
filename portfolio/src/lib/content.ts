export const site = {
  name: "Dioame",
  fullName: "Dioame Jade",
  legalName: "Dioame Jade C. Rendon",
  role: "Full-stack engineer & prompt engineer",
  tagline: "Self-employed developer",
  headline: "API-first backends, integrations, and AI-assisted delivery.",
  description:
    "Portfolio of Dioame Jade — full-stack developer focused on API-first backends, integrations, cloud, and AI-assisted delivery. Open to freelance and project work.",
  email: "dioamejade.online@gmail.com",
  phone: "+63 946 710 5070",
  phoneTel: "+639467105070",
  location: "Philippines",
  github: "https://github.com/dioame",
  linkedin: "https://www.linkedin.com/in/dioame",
  facebook: "https://web.facebook.com/dioame.rendon/",
  promptHighlight:
    "I now use AI-assisted tools daily — same standards, faster development.",
};

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Labs" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
] as const;

export const trustStacks = [
  "Laravel",
  "AWS",
  "React / Vue",
  "OpenAI",
  "Docker",
  "FlutterFlow",
] as const;

export const services = [
  {
    title: "Architecture & integrations",
    body: "API design, auth patterns (OAuth2 / Passport), third-party services, payment rails, and AI endpoints—documented so you can own and extend them without guesswork.",
    points: ["Technical spikes & RFCs", "Webhook & realtime flows"],
    featured: false,
    icon: "network" as const,
  },
  {
    title: "Build & launch",
    body: "I deliver end-to-end backends and supporting web surfaces—with CI/CD, environments, and sensible observability hooks.",
    points: ["Laravel / Node / Django", "AWS & containers"],
    featured: true,
    icon: "rocket" as const,
  },
  {
    title: "Stabilize & scale",
    body: "I help with hardening passes, performance tuning, and incremental features on live products—especially API-heavy and mobile-backed systems.",
    points: ["Incident-minded reviews", "Cost-aware cloud tuning"],
    featured: false,
    icon: "shield" as const,
  },
] as const;

export const aboutParagraphs = [
  "I'm a passionate full-stack developer with over 7 years of experience in web and mobile development. I specialize in creating API-based backend systems and have built numerous scalable applications throughout my career.",
  "Currently, I'm engaged in AI-assisted coding and developing mobile applications using FlutterFlow with API-based backends. I have experience in CI/CD implementation, cloud infrastructure deployment, and integrating third-party services including payment gateways and AI APIs.",
];

export const skillCategories = [
  {
    title: "Core Technologies",
    tags: ["HTML", "JavaScript", "PHP", "Node.js", "Python"],
  },
  {
    title: "Frameworks & Libraries",
    tags: ["Laravel", "React.js", "Vue.js", "Django"],
  },
  {
    title: "Mobile Development",
    tags: ["FlutterFlow", "API Integration"],
  },
  {
    title: "DevOps & CI/CD",
    tags: ["Jenkins", "GitLab Runners", "Gitflow", "Docker"],
  },
  {
    title: "Server & Deployment",
    tags: ["Nginx", "Caddy Server", "Linux", "AWS Linux"],
  },
  {
    title: "AWS & Cloud Services",
    tags: ["EC2", "RDS", "Amazon Bedrock", "AWS Integration"],
  },
  {
    title: "AI & APIs",
    tags: ["OpenAI API", "Google Gemini", "Amazon Bedrock", "AI Integration"],
  },
  {
    title: "Prompt Engineering",
    tags: ["GitHub Copilot", "Cursor", "Antigravity", "Codex"],
    highlight: true,
  },
  {
    title: "Payment Integration",
    tags: ["PayMongo", "Stripe", "AltPayNet", "Third-party APIs"],
  },
  {
    title: "Database & Storage",
    tags: ["MySQL", "Complex Queries", "NoSQL", "Firebase", "Supabase"],
  },
  {
    title: "Authentication & Real-time",
    tags: [
      "Laravel Passport",
      "Laravel Sanctum",
      "Laravel Reverb",
      "JWT",
      "SSO Systems",
    ],
  },
] as const;

export const capabilities = [
  {
    title: "Self-Employed Developer",
    body: "7+ years of professional development experience",
    icon: "briefcase" as const,
  },
  {
    title: "API-Based Systems",
    body: "Extensive experience building robust, scalable API backends for various applications",
    icon: "cogs" as const,
  },
  {
    title: "Mobile App Development",
    body: "Developing mobile applications using FlutterFlow with API-based backend integration",
    icon: "mobile" as const,
  },
  {
    title: "CI/CD Implementation",
    body: "Setting up and managing CI/CD pipelines using Jenkins and GitLab Runners with Gitflow workflow",
    icon: "rocket" as const,
  },
  {
    title: "Cloud Infrastructure",
    body: "Deploying applications on Nginx and Caddy servers, managing AWS EC2 instances and RDS databases",
    icon: "cloud" as const,
  },
  {
    title: "AI Integration",
    body: "Integrating AI services including Amazon Bedrock, Google Gemini, and OpenAI APIs into applications",
    icon: "bot" as const,
  },
  {
    title: "Payment Integration",
    body: "Implementing payment gateways with PayMongo, Stripe, and AltPayNet for secure transactions",
    icon: "card" as const,
  },
  {
    title: "Prompt Engineering",
    body: "Daily use of GitHub Copilot, Cursor, Antigravity, and Codex for AI-assisted development",
    icon: "sparkles" as const,
  },
  {
    title: "Socket Integration",
    body: "Implementing real-time communication using WebSocket technology for live updates",
    icon: "plug" as const,
  },
  {
    title: "Laravel Reverb",
    body: "Building real-time applications with Laravel Reverb for event broadcasting",
    icon: "radio" as const,
  },
  {
    title: "Laravel Passport",
    body: "OAuth2 authentication and API token management for secure API access",
    icon: "key" as const,
  },
  {
    title: "AI-Assisted Coding",
    body: "Leveraging AI tools to enhance development workflow and productivity",
    icon: "zap" as const,
  },
] as const;

export const hobbyProjects = [
  {
    title: "DSWD KORAMBUSAN 2026",
    desc: "Live scoring & rankings for events",
    href: "http://tabulatorapp.vercel.app/",
    tone: "amber" as const,
    icon: "trophy" as const,
  },
  {
    title: "Awesome Greetings By Dioame",
    desc: "Custom digital greeting cards",
    href: "https://greetingsapp.vercel.app/",
    tone: "rose" as const,
    icon: "gift" as const,
  },
  {
    title: "FundTracker Pro",
    desc: "Personal finance & fund tracking",
    href: "https://myfundtracker-lime.vercel.app/",
    tone: "emerald" as const,
    icon: "chart" as const,
  },
  {
    title: "wampdf",
    desc: "Merge PDFs & images in the browser",
    href: "https://wampdf.vercel.app/",
    tone: "sky" as const,
    icon: "file" as const,
  },
  {
    title: "WamPOS",
    desc: "Offline grocery point-of-sale",
    href: "https://wampos.vercel.app/login",
    tone: "teal" as const,
    icon: "store" as const,
    featured: true,
  },
] as const;

export const javbis = {
  tagline: "Accounting that stays in balance.",
  stack: "Laravel · Laravel Cloud",
  intro:
    "JavBis brings chart of accounts, cash flow, journal entry vouchers (JEV) with line-level detail, cash receipts and disbursements, bank accounts, payees, customers, and company context into one clear, audit-friendly system—with cash and non-cash reporting from the same ledger. Built on Laravel and hosted on Laravel Cloud.",
  href: "https://javbis-master-tg0c6c.free.laravel.cloud/",
  collaborator: "Javo Ancla, CPA",
  features: [
    {
      title: "Structure your books",
      desc: "Account types, groups, and chart accounts so every posting lands in the right bucket.",
      icon: "sitemap" as const,
    },
    {
      title: "Record & trace activity",
      desc: "Vouchers, lines, banks, and counterparties stay linked for fast review and defensible month-end.",
      icon: "receipt" as const,
    },
    {
      title: "Report with confidence",
      desc: "Roll cash flow by period and generate cash and non-cash reports from structured inputs.",
      icon: "pie" as const,
    },
  ],
  modules: [
    "ChartAccount",
    "CashFlow",
    "Jev & JevLine",
    "CashReceipt",
    "CashDisbursement",
    "BankAccount",
    "Payee",
    "Customer",
    "CompanyInformation",
  ],
};

export const mobileApps = [
  {
    title: "DSWD WorkSPACE",
    desc: "My Space, tasks, kanban boards & project discussions via secure Caraga Connect MFA.",
    href: "https://play.google.com/store/apps/details?id=gov.dswdcaraga.dswdworkspace&hl=en",
    featured: true,
    image: null as string | null,
    icon: "columns" as const,
  },
  {
    title: "Kaagap-AI Lokal",
    desc: "Private offline AI assistant — models run on-device, no cloud, no account.",
    href: "https://play.google.com/store/apps/details?id=gov.dswdcaraga.kaagapailokal",
    featured: false,
    image: null,
    icon: "chip" as const,
  },
  {
    title: "EmotiMon",
    desc: "Wellness companion — daily mood check-ins, stress quiz & gamified habits.",
    href: "https://play.google.com/store/apps/details?id=gov.dswdcaraga.emotimon",
    featured: false,
    image: null,
    icon: "heart" as const,
  },
  {
    title: "PAID Mobile",
    desc: "Payout documentation for Cash-for-Work",
    href: "https://play.google.com/store/apps/details?id=gov.dswdfocrg.paid&pcampaignid=web_share",
    featured: false,
    image: "/images/apps/paidmobile.webp",
    icon: null,
  },
  {
    title: "FAITH Mobile",
    desc: "Field Acceptance & Inspection Tracking",
    href: "https://play.google.com/store/apps/details?id=gov.dswdfocrg.faithmobile&pcampaignid=web_share",
    featured: false,
    image: "/images/apps/faithmobile.webp",
    icon: null,
  },
  {
    title: "DSWD MyMobile",
    desc: "Employee service platform for DSWD",
    href: "https://play.google.com/store/apps/details?id=gov.dswdfocrg.dswdmymobile&pcampaignid=web_share",
    featured: false,
    image: "/images/apps/dswdmymobile.webp",
    icon: null,
  },
  {
    title: "Pinpoint",
    desc: "KALAHI-CIDSS geotagging companion",
    href: "https://play.google.com/store/apps/details?id=gov.dswdfocrg.pinpoint&pcampaignid=web_share",
    featured: false,
    image: "/images/apps/pinpointmobile.webp",
    icon: null,
  },
] as const;

export const resume = {
  summary:
    "Self-employed full-stack developer with 7+ years of professional experience building API-based systems and scalable applications. Specialized in creating backend solutions with complex database queries, implementing real-time communication using Laravel Reverb, and developing SSO systems with Laravel Passport. Experienced in API authentication using Laravel Sanctum and JWT, working with MySQL, NoSQL, Firebase, and Supabase databases. Proficient in CI/CD implementation, cloud infrastructure deployment, and integrating third-party services including payment gateways and AI APIs. Currently engaged in AI-assisted coding and developing innovative solutions.",
  experience: {
    title: "Self-Employed Developer",
    period: "2018 - Present",
    body: "7+ years of professional development experience building scalable web and mobile applications with a focus on API-based backend systems and modern frontend frameworks. Implemented payment integrations with PayMongo, Stripe, and AltPayNet. Daily use of prompt engineering tools: GitHub Copilot, Cursor, Antigravity, and Codex for AI-assisted development. Implemented real-time socket communication using Laravel Reverb, developed SSO systems with Laravel Passport, and integrated API authentication using Laravel Sanctum and JWT. Experienced in writing complex MySQL queries, working with NoSQL databases, and implementing Firebase and Supabase for data management and real-time features.",
  },
  education: [
    {
      title: "Master of Science in Information Technology",
      period: "Ongoing (27 units completed)",
      school: "Caraga State University",
    },
    {
      title: "Bachelor of Science in Information Technology",
      period: "Completed",
      school: "Caraga State University",
    },
  ],
  certification: {
    title: "Electronic Data Processing Specialist",
    period: "Granted",
    body: "DICT (Department of Information and Communications Technology) and CSC (Civil Service Commission) Eligibility",
  },
  publication: {
    title: "IEEE Publication",
    href: "https://ieeexplore.ieee.org/document/10459522",
  },
};
