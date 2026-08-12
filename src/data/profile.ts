export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
] as const;

export const profile = {
  name: "Pramod Gurudath",
  title: "Senior QA Automation Engineer & QA Lead",
  tagline: "Building quality into AI-powered products at scale.",
  email: "pramoddathg@gmail.com",
  phone: "+1 (647) 685-9364",
  linkedin: "https://linkedin.com/in/pramodgurudath",
  location: "Canada",
  resumePath: "/Pramod Gurudath.pdf",
  summary:
    "Senior QA Automation Engineer and QA Lead with 13+ years of experience driving quality engineering across Web, Mobile, API, Cloud, and AI-powered platforms. Currently leading QA strategy for Generative AI solutions, including Voicebots, Chatbots, and Smart Document Analyzer applications. Experienced in validating AI models through scorecard design, benchmark analysis, prompt evaluation, and functional testing of Adaptive SLMs to ensure reliable, accurate, and production-ready AI experiences.",
  highlights: [
    "96% automation coverage with Cypress & Playwright",
    "98.6% reduction in test execution time",
    "Leading QA for Generative AI & Voicebot platforms",
    "13+ years across Deloitte, Amazon & Zeta",
  ],
};

export const experience = [
  {
    id: "deloitte-canada",
    company: "Deloitte Canada",
    role: "Senior QA Specialist",
    period: "Nov 2021 — Present",
    description:
      "Leading enterprise automation and AI quality strategy for GenAI solutions including Voicebots, Chatbots, and Smart Document Analyzers.",
    highlights: [
      "Built automation frameworks with Cypress and Playwright achieving 96% coverage.",
      "Reduced test execution time by 98.6% and regression cycles by 70%.",
      "Integrated testing into GitLab CI/CD with Shift-Left practices.",
      "Defined AI testing strategies, scorecards, and benchmark validation.",
      "Executed Voicebot testing via Genesys Cloud and Adaptive SLM validation.",
      "Performed AI robustness testing including red teaming and adversarial testing.",
    ],
    tech: ["Playwright", "Cypress", "GitLab CI/CD", "Genesys Cloud", "Azure", "Deepgram"],
  },
  {
    id: "deloitte-usi",
    company: "Deloitte USI",
    role: "Senior Consultant (QA Lead)",
    period: "Nov 2018 — Oct 2021",
    description:
      "Led QA transformation initiatives and automation POCs across enterprise web and API platforms.",
    highlights: [
      "Converted manual test cases to automated scripts, reducing cost/time by 20%.",
      "Created robust test plans from functional specification documents.",
      "Developed Robot Framework POCs for web and API automation.",
      "Boosted team productivity by 45% through cross-functional QA alignment.",
    ],
    tech: ["Robot Framework", "Selenium", "API Testing", "Test Planning"],
  },
  {
    id: "zeta",
    company: "Directi Internet Solutions (Zeta)",
    role: "Software QA Engineer + Software Developer",
    period: "Oct 2015 — Nov 2018",
    description:
      "Dual role developing Vue.js applications while driving web and mobile QA excellence.",
    highlights: [
      "Developed web applications using Vue.js with strong architecture understanding.",
      "Designed and executed web & mobile testing with root cause analysis.",
      "Supported CI/CD integration improving release efficiency by 60%.",
    ],
    tech: ["Vue.js", "JavaScript", "Mobile Testing", "CI/CD"],
  },
  {
    id: "amazon",
    company: "Amazon Development Centre",
    role: "Device Associate Lead",
    period: "Jan 2013 — Oct 2015",
    description:
      "Led functional, localization, and media testing for Amazon devices across global markets.",
    highlights: [
      "Led functional, localization, and media testing across multiple markets.",
      "Validated media playback, performance, and QoS metrics.",
      "Collaborated with cross-functional teams on defect analysis and RCA.",
    ],
    tech: ["Functional Testing", "Localization", "Media QA", "Performance"],
  },
];

export const projects = [
  {
    id: "genai-voicebot",
    title: "GenAI Voicebot Quality Platform",
    description:
      "End-to-end QA framework for validating conversational AI voicebots on Genesys Cloud — covering call routing, speech recognition, intent handling, and response accuracy.",
    tags: ["Genesys Cloud", "Voicebot", "AI Testing", "Deepgram"],
    featured: true,
  },
  {
    id: "automation-framework",
    title: "Enterprise Automation Framework",
    description:
      "Scalable Cypress & Playwright framework with reusable components, achieving 96% automation coverage and 98.6% faster test execution across web and API layers.",
    tags: ["Playwright", "Cypress", "GitLab CI/CD", "Shift-Left"],
    featured: true,
  },
  {
    id: "document-analyzer",
    title: "Smart Document Analyzer QA",
    description:
      "Comprehensive testing suite for AI-powered document analysis — validating OCR accuracy, data extraction, classification, and summarization workflows.",
    tags: ["OCR", "AI Validation", "Document AI", "Benchmark Testing"],
    featured: true,
  },
  {
    id: "ai-scorecard",
    title: "AI Model Scorecard System",
    description:
      "Designed and implemented AI evaluation scorecards measuring accuracy, consistency, latency, and performance — with hallucination detection and prompt validation pipelines.",
    tags: ["Scorecard Design", "Prompt Testing", "Red Teaming", "SLM"],
    featured: false,
  },
  {
    id: "chatbot-qa",
    title: "Conversational Chatbot Testing",
    description:
      "Multi-layer chatbot validation covering conversation journeys, contextual accuracy, factual validation, and business rule verification for production AI assistants.",
    tags: ["Chatbot", "Prompt Validation", "Adversarial Testing"],
    featured: false,
  },
  {
    id: "ci-cd-pipeline",
    title: "CI/CD Quality Gates",
    description:
      "Integrated automated regression suites into GitLab CI/CD pipelines with quality gates, reducing regression cycles by 70% and improving release confidence.",
    tags: ["GitLab", "Jenkins", "GitHub Actions", "DevOps"],
    featured: false,
  },
];

export const automationProjects = [
  {
    id: "cypress-e2e",
    title: "Cypress E2E Framework",
    description:
      "Enterprise-grade end-to-end automation framework built with Cypress — featuring reusable page objects, custom commands, API intercepts, and GitLab CI/CD integration for reliable web regression at scale.",
    tags: ["Cypress", "E2E", "TypeScript", "Page Objects"],
    href: "#",
  },
  {
    id: "appium-tdd",
    title: "Appium TDD Framework",
    description:
      "Mobile test automation framework using Appium with a test-driven development approach — covering iOS and Android flows, device farm integration, and structured test design for cross-platform coverage.",
    tags: ["Appium", "TDD", "Mobile", "iOS & Android"],
    href: "#",
  },
  {
    id: "python-behave-bdd",
    title: "Python Behave BDD",
    description:
      "Behavior-driven test suite using Python Behave and Gherkin feature files — enabling readable scenarios, reusable step definitions, and collaborative test authoring across QA and engineering teams.",
    tags: ["Behave", "BDD", "Python", "Gherkin"],
    href: "#",
  },
  {
    id: "playwright-bdd",
    title: "Playwright BDD",
    description:
      "Playwright-based BDD automation framework with structured step definitions and parallel execution — delivering fast, reliable web regression across modern browser environments.",
    tags: ["Playwright", "BDD", "TypeScript", "Parallel Execution"],
    href: "#",
  },
];

export const skillCategories = [
  {
    title: "Automation",
    skills: ["Playwright", "Cypress", "Selenium", "Appium", "Robot Framework"],
  },
  {
    title: "Programming",
    skills: ["Python", "JavaScript", "TypeScript"],
  },
  {
    title: "API Testing",
    skills: ["Postman", "REST Assured"],
  },
  {
    title: "AI Testing",
    skills: [
      "Prompt Validation",
      "Model Evaluation",
      "Voicebot Testing",
      "Red Teaming",
      "Adversarial Testing",
    ],
  },
  {
    title: "Cloud",
    skills: ["AWS", "Azure", "GCP"],
  },
  {
    title: "CI/CD",
    skills: ["GitLab CI/CD", "GitHub Actions", "Jenkins"],
  },
  {
    title: "AI Platforms",
    skills: ["Genesys Cloud", "Deepgram", "AKKA", "Adaptive SLM Models"],
  },
  {
    title: "AI-Assisted Dev",
    skills: ["Copilot", "Cursor AI", "Gemini", "ChatGPT"],
  },
];

export const certifications = [
  {
    title: "Professional Scrum Master",
    issuer: "Scrum.org",
    category: "Agile Leadership",
  }
];

export const education = {
  degree: "Bachelor of Engineering",
  institution: "Visvesvaraya Technological University",
};
