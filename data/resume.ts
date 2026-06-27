// Single source of truth for all résumé / portfolio content.
// Edit this file to update what appears on the site — components only render this data.

export type RoleType = "ENGINEERING" | "OPERATIONS";

export interface Profile {
  name: string;
  initials: string;
  role: string;
  kicker: string;
  location: string;
  lede: string;
}

export interface Stat {
  id: string;
  value: number;
  prefix?: string;
  suffix?: string;
  staticDisplay?: string;
  label: string;
}

export interface ExperienceEntry {
  org: string;
  role: string;
  location: string;
  start: string;
  end: string;
  type: RoleType;
  summary: string;
}

export interface EducationEntry {
  school: string;
  credential: string;
  start: string;
  end: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Project {
  title: string;
  stack: string[];
  href?: string;
}

export interface Certification {
  name: string;
  year: string;
}

export interface Award {
  name: string;
  org: string;
  year: string;
}

export interface Contact {
  email: string;
  github: string;
  linkedin: string;
  location: string;
}

export const profile: Profile = {
  name: "Ashutosh Pradhan",
  initials: "AP",
  role: "Software Developer",
  kicker:
    "Software Developer · Distributed Systems · AI-Driven Solutions — Kathmandu, Nepal",
  location: "Kathmandu, Nepal",
  lede: "Results-driven software developer building scalable, high-performance applications, with a focus on distributed systems and AI-driven solutions — and a long-term goal of becoming a software architect who designs resilient systems that solve real-world problems.",
};

export const stats: Stat[] = [
  { id: "experience", value: 2, suffix: "+", label: "Years building" },
  {
    id: "engagement",
    prefix: "~25–",
    value: 35,
    suffix: "%",
    label: "Engagement lift",
  },
  {
    id: "latency",
    prefix: "<",
    value: 150,
    suffix: "ms",
    label: "Avg latency",
  },
  { id: "focus", value: 0, staticDisplay: "Full-stack + AI", label: "Focus" },
];

export const experience: ExperienceEntry[] = [
  {
    org: "FiveOne",
    role: "Software Developer",
    location: "Kathmandu, Nepal",
    start: "Aug 2025",
    end: "Present",
    type: "ENGINEERING",
    summary:
      "Modular NestJS + MongoDB backend (ports-and-adapters) powering a real-time social platform; REST + WebSocket sync for AI events, game state, and chat; OpenAI-powered conversational features (+25–35% session engagement); Firebase Auth/Analytics/Messaging.",
  },
  {
    org: "Gunasys",
    role: "Software Developer",
    location: "Kathmandu, Nepal",
    start: "Apr 2024",
    end: "Aug 2025",
    type: "ENGINEERING",
    summary:
      "RBAC auth across departments; optimized RESTful services and schemas with caching (<150ms avg latency); LLM-powered RAG pipeline for a domain-specific medical chatbot.",
  },
  {
    org: "Islington College",
    role: "Academic Liaison Officer",
    location: "Kathmandu, Nepal",
    start: "Feb 2025",
    end: "Aug 2025",
    type: "OPERATIONS",
    summary:
      "Structured student follow-ups (35% drop in non-submissions); staff scheduling with zero class cancellations.",
  },
  {
    org: "Fresh KTM",
    role: "Frontend Intern",
    location: "Kathmandu, Nepal",
    start: "Oct 2023",
    end: "Apr 2024",
    type: "ENGINEERING",
    summary:
      "Dynamic dashboards and real-time updates (~25% efficiency gain); responsive components and state-management work on the ERP web app.",
  },
];

export const education: EducationEntry[] = [
  {
    school: "Islington College",
    credential: "BSc (Hons) Computer Science and IT, First Class Honours",
    start: "Oct 2021",
    end: "Dec 2024",
  },
  {
    school: "Rato Bangla School",
    credential: "A Levels",
    start: "Jun 2018",
    end: "Oct 2020",
  },
];

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Java", "Python", "C#", "JavaScript", "TypeScript"],
  },
  {
    label: "Frontend",
    items: ["React.js", "React Native", "Next.js", "Vue", "Context API"],
  },
  {
    label: "Backend",
    items: ["Node.js", "NestJS", "FastAPI", "Spring Boot", "Django", "ASP.NET"],
  },
  { label: "Databases", items: ["PostgreSQL", "MongoDB", "SQLite"] },
  { label: "Caching", items: ["Redis", "In-memory caching"] },
  {
    label: "AI / ML",
    items: [
      "RAG pipelines",
      "LLM integration",
      "Prompt engineering",
      "NLP",
      "TensorFlow",
      "PyTorch",
    ],
  },
  {
    label: "Cloud / DevOps",
    items: ["AWS (EC2, S3)", "Docker", "CI/CD (GitHub Actions)", "Firebase"],
  },
  { label: "API / Realtime", items: ["REST", "GraphQL", "WebSockets"] },
  { label: "Auth & Security", items: ["JWT", "OAuth", "RBAC"] },
  {
    label: "Architecture",
    items: ["Microservices", "Ports-and-Adapters (Hexagonal)"],
  },
];

export const projects: Project[] = [
  {
    title: "KaKhani — Restaurant Reviews with NLP",
    stack: ["FastAPI", "Next.js", "Python", "PostgreSQL", "Redis"],
    href: "https://kakhani.netlify.app/",
  },
  {
    title: "Anyani — Animated Image Generator",
    stack: [
      "Python (GAN, ResNet-18)",
      "TensorFlow/PyTorch",
      "Next.js",
      "FastAPI",
    ],
    href: "https://anyani.netlify.app/",
  },
];

export const certifications: Certification[] = [
  { name: "AWS Academy Cloud Foundations", year: "2022" },
  { name: "AWS Academy Machine Learning Foundations", year: "2022" },
];

export const awards: Award[] = [
  { name: "AAA Scholarship", org: "Islington College", year: "2025" },
];

export const contact: Contact = {
  email: "aashutoshpradhan1@gmail.com",
  github: "https://github.com/AshutoshPradhan1195",
  linkedin:
    "https://www.linkedin.com/in/ashutosh-pradhan-61844231b/?skipRedirect=true",
  location: "Samakhusi, Kathmandu, Nepal",
};

export const cvPath = "/Ashutosh_Pradhan_CV.pdf";

export const nav = [
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#cv", label: "CV" },
  { href: "#contact", label: "Contact" },
];
