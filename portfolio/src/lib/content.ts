export const site = {
  name: "Dioame",
  fullName: "Dioame Jade",
  legalName: "Dioame Jade C. Rendon",
  role: "Full-stack engineer, prompt engineer & AI video creator",
  tagline: "Self-employed developer",
  headline: "API-first backends, integrations, and AI-powered digital experiences.",
  description:
    "Portfolio of Dioame Jade — full-stack developer, prompt engineer, and AI video creator focused on API-first systems, integrations, cloud, and AI-powered digital experiences.",
  email: "dioamejade.online@gmail.com",
  phone: "+63 946 710 5070",
  phoneTel: "+639467105070",
  location: "Philippines",
  github: "https://github.com/dioame",
  linkedin: "https://www.linkedin.com/in/dioame",
  facebook: "https://web.facebook.com/dioame.rendon/",
  promptHighlight:
    "I use AI-assisted tools daily for software delivery, prompt-led exploration, and visual storytelling—without compromising production standards.",
};

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#apps", label: "Portfolio" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
] as const;

export type WorkAccomplishment = {
  title: string;
  items?: string[];
};

export type WorkRole = {
  id: string;
  period: string;
  position: string;
  unit?: string;
  supervisor?: string;
  organization: string;
  location?: string;
  duties: string;
  accomplishments: WorkAccomplishment[];
  current?: boolean;
};

/** Work Experience Sheet (WES) roles — DSWD, HOLD, SFXC, DENR */
export const workExperience: WorkRole[] = [
  {
    id: "dswd-cp3",
    period: "Sep 2024 – Present",
    position: "Computer Programmer III",
    unit: "Regional Information and Communication Technology Section (RICTMS)",
    supervisor: "John A. Leonardo, ITO II",
    organization: "Department of Social Welfare and Development",
    location: "Field Office Caraga",
    duties: "Streamlining agency operations through system development.",
    current: true,
    accomplishments: [
      {
        title: "Systems & mobile apps shipped",
        items: [
          "DSWD CARAGA Tracking Travel Clearance of Children to Ensure Return and Re-Integration (TTRACERR)",
          "Field Acceptance and Inspection Tracking Hub (FAITH)",
          "Caraga Connect — owned initiative approved by RICTMS Head",
          "LDAP Login and SSO API — owned initiative approved by RICTMS Head",
          "RICTMS Synapse (Beta) — owned initiative approved by RICTMS Head",
          "DSWD MYMobile — deployed on Google Play",
          "FAITH Mobile — deployed on Google Play",
          "PAID Mobile — deployed on Google Play",
          "PINPOINT Mobile — deployed on Google Play",
        ],
      },
    ],
  },
  {
    id: "dswd-analyst",
    period: "Apr 2019 – Sep 2024",
    position: "AC/Financial Analyst III – IT Officer",
    unit: "KALAHI CIDSS NCDDP Finance unit",
    supervisor: "Maricris B. Cuenca, SAO",
    organization: "Department of Social Welfare and Development",
    location: "Field Office Caraga",
    duties:
      "Develop and enhance modules, lead system development with Trello, maintain documentation, perform daily DB backups, and support KC staff.",
    accomplishments: [
      {
        title: "Community Finance Management System",
        items: [
          "Cost Analysis; Liquidation & Transmittal; Report of Disbursement",
          "Municipal Local Counter Part Contribution Delivery Tracking",
          "Final Liquidation Tracking; Municipal Trust Fund Delivery",
          "Full Blown Tracking; Municipal Disbursement Plan with consolidated/monthly reports",
          "Dashboard for grants, utilization, and liquidation summaries",
          "Video walkthroughs, documentation, monthly finance meeting demos",
        ],
      },
      {
        title: "Account Management System",
        items: [
          "Tracked KC proposals from WFP → PPMP → PR → PO through billing",
          "Unpaid Obligation module; daily database backups",
        ],
      },
      {
        title: "KC Web App",
        items: [
          "SMS query for TEV, Travel Order, and project fund queries",
          "Automated Travel Order Request generation",
        ],
      },
      {
        title: "Human Resource Information System (HIReS)",
        items: [
          "Master lists for offices, positions, sector, fund source, SSL salary grades",
          "Authority to Hire workflows with auto-generated reports",
          "Staff deployment, augmentation, termination/resignation/transfer charging",
          "Regional Special Order (RSO) and intro letter generation",
        ],
      },
      {
        title: "KC Navigator & Dashboard",
        items: [
          "Online/offline project maps (Cordova), camera & file upload, NPMO API",
          "KC Dashboard consolidator with SSO across KC, DSWD Mainstream, and NPMO",
        ],
      },
      {
        title: "Technical leadership",
        items: [
          "Interconnected KC systems for single-credential login",
          "Business Enterprise System reconfiguration; technical assistance to KC staff",
        ],
      },
    ],
  },
  {
    id: "hold",
    period: "Jul 2020 – Present",
    position: "Technical Specialist",
    organization: "HOLD Bookkeeping and Business Consultancy Services",
    duties: "Create systems based on client needs.",
    current: true,
    accomplishments: [
      {
        title: "Business Information System",
        items: [
          "Revenue & expense, assets, liabilities, capital, and other transactions",
          "Reports, financial statements, trial balance, income statement, journal entry",
          "Staffing, payroll, and HR transactions",
          "Member and coop borrowings transactions",
        ],
      },
    ],
  },
  {
    id: "sfxc",
    period: "Jun 2018 – Mar 2019",
    position: "Technical Support / IT Instructor",
    unit: "College of Business",
    supervisor: "Engr. Irene May Escauso",
    organization: "Saint Francis Xavier College",
    location: "San Francisco, Agusan del Sur",
    duties:
      "Educate and train students in IT fields, support staff, and maintain computer laboratory hardware and software.",
    accomplishments: [
      {
        title: "Teaching & lab support",
        items: [
          "Software Engineering, OOP, Network Admin, Basic Programming",
          "Data Structures & Algorithms, IT Theory, IP addressing labs",
          "Capstone project mentoring and incident reporting for lab issues",
        ],
      },
    ],
  },
  {
    id: "denr-ojt",
    period: "Jun 2017 – Aug 2017",
    position: "On the Job Trainee",
    unit: "Human Resource Development Office",
    supervisor: "Johannah A. Aguilar",
    organization: "Department of Environment and Natural Resources",
    location: "Regional Office, Butuan City",
    duties:
      "Develop a Human Resource Information System and provide technical assistance to HR staff.",
    accomplishments: [
      {
        title: "Web-based HR Information System",
        items: [
          "Employee records; trainings and seminars tracking",
          "Provincial/municipal/city offices submit scanned trainings for regional review",
          "Consolidated staffing and training reports with prioritization analytics",
        ],
      },
    ],
  },
];

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
  "Today, I combine AI-assisted coding, prompt engineering, and AI video generation to turn ideas into working products and engaging visual stories. Alongside developing mobile applications with FlutterFlow and API-based backends, I use generative AI tools to create concepts, visuals, and videos that communicate products in a more memorable way.",
  "My broader experience includes CI/CD implementation, cloud infrastructure deployment, and third-party integrations spanning payment gateways and AI APIs—giving me the technical foundation to connect creative AI workflows with reliable, production-ready systems.",
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
  },
  {
    title: "Awesome Greetings By Dioame",
    desc: "Custom digital greeting cards",
    href: "https://greetingsapp.vercel.app/",
  },
  {
    title: "FundTracker Pro",
    desc: "Personal finance & fund tracking",
    href: "https://myfundtracker-lime.vercel.app/",
  },
  {
    title: "wampdf",
    desc: "Merge PDFs & images in the browser",
    href: "https://wampdf.vercel.app/",
  },
  {
    title: "WamPOS",
    desc: "Offline grocery point-of-sale",
    href: "https://wampos.vercel.app/login",
  },
] as const;

/** Verified creator profile on AppsRecord — the full shipped-app catalogue */
export const appsRecord = {
  href: "https://apps.rendovations.com/creators/dioame-jade-rendon",
  domain: "apps.rendovations.com",
  location: "Butuan City, Philippines",
  rating: "5.0",
  totalApps: 20,
  webApps: 11,
  mobileAppCount: 9,
  intro:
    "AppsRecord is my trusted creator profile—the complete, independently browsable catalogue of what I've shipped. It brings together developer tools, finance platforms, government field apps, productivity products, and everyday utilities, with ratings and live product pages you can explore.",
  categories: [
    {
      name: "Developer Tools",
      count: 3,
      icon: "code" as const,
      apps: "WamiSSO · wamSQLITE · wamiBucket",
    },
    {
      name: "Government",
      count: 5,
      icon: "landmark" as const,
      apps: "FAITH Mobile · DSWD MyMobile · PAID Mobile · DSWD WorkSPACE · Pinpoint",
    },
    {
      name: "Finance",
      count: 4,
      icon: "wallet" as const,
      apps: "WamsTracker · LiTrackoo · WamPOS · FundTracker Pro",
    },
    {
      name: "Utilities",
      count: 4,
      icon: "wrench" as const,
      apps: "WamiVoice · BIRFilingKeeper · EdropQR · WamPDF",
    },
    {
      name: "Productivity",
      count: 2,
      icon: "gauge" as const,
      apps: "Kaagap-AI Lokal · Tabulator App",
    },
    {
      name: "Health & Fitness",
      count: 1,
      icon: "heart" as const,
      apps: "EmotiMon",
    },
    {
      name: "Social",
      count: 1,
      icon: "users" as const,
      apps: "Awesome Greetings By Dioame",
    },
  ],
  appNames: [
    "WamiSSO",
    "wamSQLITE",
    "wamiBucket",
    "WamsTracker",
    "LiTrackoo",
    "WamPOS",
    "FundTracker Pro",
    "FAITH Mobile",
    "DSWD MyMobile",
    "PAID Mobile",
    "DSWD WorkSPACE",
    "Pinpoint",
    "EmotiMon",
    "Kaagap-AI Lokal",
    "Tabulator App",
    "Awesome Greetings By Dioame",
    "WamiVoice",
    "BIRFilingKeeper",
    "EdropQR",
    "WamPDF",
  ],
} as const;

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
