import { ProfileData, Project, SkillCategory, ExperienceItem, EducationItem } from '../types';

export const profileData: ProfileData = {
  name: "Sayed Sepehr Mozafari",
  title: "Software Developer & QA Automation",
  heroIntro: "I build modern software experiences that combine clean design, reliable development, and intelligent test automation.",
  aboutContent: "I’m a Software Developer and QA Automation professional focused on building modern, reliable, and user-friendly digital experiences. I combine software development, web technologies, UI/UX principles, and automated testing to create products that are both functional and dependable.",
  email: "supher.22@gmail.com",
  githubUrl: "https://github.com/Sayedse/Figma-App-Design",
  linkedinUrl: "https://www.linkedin.com/in/sayed-sepehr/",
};

export const projectsData: Project[] = [
  {
    id: "monevo-ai",
    title: "Monevo AI",
    category: "AI-Powered Personal Finance Mobile Application",
    tagline: "Intelligent personal financial management with conversational AI guidance and real-time expense tracking.",
    description: "A full-featured mobile finance application designed to help users track spending, manage income and expenses, set savings goals, and receive personalized financial guidance through an AI-powered coach.",
    technologies: ["React Native", "Expo", "TypeScript", "Expo Router", "Supabase"],
    githubUrl: "https://github.com/Sayedse/Figma-App-Design",
    figmaUrl: "https://www.figma.com/design/e3mYxbE8ILcWHAkbZdsFxB/Mobile-App-Design?node-id=10-226",
    hasLiveDemo: false,
    featured: true,
    coverImage: "/assets/projects/monevo-dashboard.jpg",
    overview: "Monevo AI bridges everyday financial operations with intelligent contextual guidance. Built with React Native and Expo, the application provides an intuitive and modern interface for individuals aiming to gain complete control over their cash flow, budget limits, savings targets, and decision-making.",
    problem: "Modern individuals frequently juggle fragmented banking apps, disconnected spreadsheets, and unclear spending boundaries. Conventional budget apps either require tedious manual entries or fail to provide actionable, context-aware advice when an unplanned purchase opportunity arises.",
    solution: "Monevo AI consolidates income, expense tracking, recurring bills, and savings milestones into a cohesive system backed by an AI Financial Coach. Through features like 'Can I Afford It?', users receive immediate, data-driven answers tailored to their active budget limits and emergency fund health.",
    coreFeatures: [
      {
        title: "Personal Finance Dashboard",
        description: "Comprehensive financial overview displaying net balances, monthly cash flow distribution, and real-time progress toward monthly targets."
      },
      {
        title: "Income & Expense Tracking",
        description: "Detailed categorization and transaction logging allowing quick entry and immediate budget synchronization."
      },
      {
        title: "Transaction Management",
        description: "Searchable, filterable transaction histories with category metadata, timestamps, and merchant attribution."
      },
      {
        title: "Recurring Expenses Manager",
        description: "Scheduled tracking for subscriptions, utility bills, and memberships with upcoming due date notifications."
      },
      {
        title: "Savings Goals & Emergency Fund",
        description: "Dedicated goal tracking with visual milestone progress bars and emergency buffer preservation safeguards."
      },
      {
        title: "Budget Management",
        description: "Custom category-based spending ceilings (Housing, Dining, Tech, Entertainment) with proactive status indicators."
      },
      {
        title: "AI Coach & 'Can I Afford It?'",
        description: "Conversational guidance analyzing discretionary spending capacity against upcoming bills, current savings, and target goals."
      },
      {
        title: "Personalized Financial Guidance",
        description: "Contextual tips recommending early bill payment optimizations, expense reduction areas, and buffer reinforcement."
      },
      {
        title: "User Authentication",
        description: "Secure user registration, profile persistence, and credential protection integrated with Supabase."
      }
    ],
    screens: [
      "Dashboard",
      "Transactions",
      "AI Coach",
      "Budget",
      "Income",
      "Expenses",
      "Savings",
      "Goals",
      "Add Transaction",
      "Add Goal",
      "Add Recurring Expense",
      "Can I Afford It?"
    ],
    designProcess: [
      "User research into common personal finance friction points and cognitive overload caused by complex banking spreadsheets.",
      "Information architecture designed to keep primary daily actions accessible within two taps from the persistent tab bar.",
      "Comprehensive design system crafted in Figma utilizing dark mode contrast, accessible typography scales, and unified component states.",
      "Iterative prototyping of conversational affordance cards for the 'Can I Afford It?' interactive AI feature."
    ],
    development: [
      "Engineered cross-platform mobile client with React Native and Expo for fast performance across iOS and Android.",
      "Strict type safety and robust data structures implemented via TypeScript throughout application layers.",
      "File-based nested navigation and deep linking architecture managed using Expo Router.",
      "Real-time database persistence, authentication, and secure session management powered by Supabase."
    ],
    architecture: [
      "Presentation Layer: React Native components styled with utility systems and micro-interactions.",
      "Navigation Layer: Expo Router handling stack views, modal sheets, and persistent bottom tabs.",
      "State & Logic Layer: Typed hooks managing transaction state, budget computations, and offline-first caches.",
      "Backend & Data Layer: Supabase PostgreSQL database with row-level security and secure JWT auth."
    ],
    gallery: [
      {
        id: "gallery-1",
        title: "Main Financial Dashboard",
        image: "/assets/projects/monevo-dashboard.jpg",
        caption: "Central dashboard displaying net balance, category breakdown chart, quick transactions, and active savings goal progress.",
        tag: "Dashboard"
      },
      {
        id: "gallery-2",
        title: "AI Coach - 'Can I Afford It?'",
        image: "/assets/projects/monevo-coach.jpg",
        caption: "Conversational AI assistant evaluating user purchase queries against current cash balance and budget allocations.",
        tag: "AI Coach"
      },
      {
        id: "gallery-3",
        title: "Budget & Recurring Subscriptions",
        image: "/assets/projects/monevo-budget.jpg",
        caption: "Categorized limit meters, emergency fund status tracker, and recurring billing schedule reminders.",
        tag: "Budget & Subscriptions"
      }
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "automation-testing",
    name: "Automation Testing",
    description: "End-to-end browser and UI automation frameworks ensuring bulletproof functional stability.",
    badgeColor: "border-cyan-500/30 text-cyan-400 bg-cyan-950/20",
    skills: ["Selenium WebDriver", "Playwright", "TestNG", "JUnit", "Cucumber"]
  },
  {
    id: "api-testing",
    name: "API Testing",
    description: "Backend interface validation, payload assertions, status verification, and automated REST contract tests.",
    badgeColor: "border-blue-500/30 text-blue-400 bg-blue-950/20",
    skills: ["REST Assured", "Postman"]
  },
  {
    id: "database",
    name: "Database",
    description: "Relational data querying, schema inspection, transaction verification, and backend test validations.",
    badgeColor: "border-emerald-500/30 text-emerald-400 bg-emerald-950/20",
    skills: ["SQL", "PostgreSQL", "MySQL", "Oracle", "SQL Developer"]
  },
  {
    id: "ci-cd-version-control",
    name: "CI/CD & Version Control",
    description: "Continuous integration pipelines, automated test runs, and collaborative code management.",
    badgeColor: "border-purple-500/30 text-purple-400 bg-purple-950/20",
    skills: ["Jenkins", "Git", "GitHub"]
  },
  {
    id: "development-frameworks",
    name: "Development & Frameworks",
    description: "Core object-oriented programming, build automation, and cross-platform mobile engineering.",
    badgeColor: "border-indigo-500/30 text-indigo-400 bg-indigo-950/20",
    skills: ["Java", "Maven"]
  },
  {
    id: "testing-practices",
    name: "Testing Practices",
    description: "Industry-standard methodologies, modular design patterns, and collaborative Agile testing rituals.",
    badgeColor: "border-teal-500/30 text-teal-400 bg-teal-950/20",
    skills: ["Agile/Scrum", "BDD", "Page Object Model"]
  },
  {
    id: "tools",
    name: "Tools",
    description: "Primary development environments, issue tracking, and defect life-cycle management.",
    badgeColor: "border-slate-500/30 text-slate-300 bg-slate-900/30",
    skills: ["IntelliJ IDEA", "JIRA"]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "doordash",
    role: "QA Automation Engineer",
    company: "DoorDash",
    period: "January 2026 - Present",
    isCurrent: true,
    responsibilities: [
      "Created automated test scripts using Java and Selenium WebDriver for regression and functional testing.",
      "Performed API testing using REST Assured and Postman.",
      "Validated backend data using SQL queries and JDBC connections.",
      "Used TestNG and Maven for test execution and framework management.",
      "Worked with Jenkins pipelines for automated test runs.",
      "Participated in Agile sprint meetings and defect tracking using JIRA.",
      "Maintained reusable test components using Page Object Model (POM)."
    ],
    technologies: ["Java", "Selenium WebDriver", "REST Assured", "Postman", "SQL", "JDBC", "TestNG", "Maven", "Jenkins", "JIRA", "POM"]
  },
  {
    id: "cvs",
    role: "QA Engineer",
    company: "CVS",
    period: "September 2025 - December 2025",
    isCurrent: false,
    responsibilities: [
      "Assisted in developing UI automation scripts using Selenium WebDriver and Java.",
      "Executed smoke, regression, and functional testing for web applications.",
      "Created and executed API test scenarios using Postman.",
      "Performed database validation using SQL queries.",
      "Used Git and GitHub for version control and collaboration.",
      "Supported test execution using TestNG and Maven.",
      "Worked with developers to identify and report software defects."
    ],
    technologies: ["Selenium WebDriver", "Java", "Postman", "SQL", "Git", "GitHub", "TestNG", "Maven"]
  }
];

export const educationData: EducationItem = {
  degree: "Associate Degree in Computer Science",
  institution: "Prince George’s Community College",
  field: "Computer Science"
};
