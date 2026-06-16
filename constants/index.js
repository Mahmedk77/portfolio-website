import { Globe, Workflow, Bot, BarChart2 } from "lucide-react";

export const experiences = [
  {
    id: 1,
    logo: "/mk.png",
    companyName: "Manaknight Digital",
    companyType: "Tech Firm",
    companyLink: "https://manaknightdigital.com",
    companyWebsite: "manaknightdigital.com",
    duration: "Apr 2026 – Present",
    jobTitle: "Data & AI Operations Specialist",
    jobDescription:
      "Evaluating AI models across 13+ standardized tasks, automating data collection pipelines across 300+ websites using Python and Playwright, and benchmarking LLM outputs with structured scorecards for tool selection decisions.",
  },
  {
    id: 2,
    logo: "/mk.png",
    companyName: "Manaknight Digital",
    companyType: "Tech Firm",
    companyLink: "https://manaknightdigital.com",
    companyWebsite: "manaknightdigital.com",
    duration: "Dec 2024 – Feb 2026",
    jobTitle: "Full-Stack Developer",
    jobDescription:
      "Built and maintained production web systems across 5+ live products, including REST API development, backend data architecture, and database schema design across MongoDB and PostgreSQL. Designed automated testing infrastructure reducing bug escape rate by 40%, and contributed to frontend and backend integration.",
  },
  {
    id: 3,
    logo: "/walee.png",
    companyName: "Walee Lab",
    companyType: "Tech Startup",
    companyLink: "https://walee.pk/",
    companyWebsite: "walee.pk",
    duration: "Jun – Aug 2024",
    jobTitle: "Full-Stack Developer Intern",
    jobDescription:
      "Built responsive React.js UI components and integrated Node.js REST APIs for internal tools. Contributed to agile sprints via GitHub with a focus on component reusability and performance.",
  },
  {
    id: 4,
    logo: "/teckno.png",
    companyName: "Team Vitesse NUST",
    companyType: "UAV Team",
    companyLink: "https://www.teknofest.org/en/",
    companyWebsite: "teknofest.org",
    duration: "Oct 2024 – Oct 2025",
    jobTitle: "Manufacturing Lead",
    jobDescription:
      "Led end-to-end UAV and UGV manufacturing for TEKNOFEST 2025 in Istanbul, Turkey. Built an autonomous mobile landing platform using OpenCV, ArUco marker detection, ROS, and a Pixhawk and Raspberry Pi hardware stack.",
  },
];


export const stacks = {
  frontend: [
    { logo: "/javascript.svg", name: "JavaScript", description: "Core Web Language" },
    { logo: "/typescript.svg", name: "TypeScript", description: "Typed JavaScript" },
    { logo: "/react.svg", name: "React.js", description: "UI Library" },
    { logo: "/nextjs1.svg", name: "Next.js", description: "React Framework" },
  ],

  backend: [
    { logo: "/nodejs.svg", name: "Node.js", description: "Backend Runtime" },
    { logo: "/express.png", name: "Express.js", description: "Web Framework" },
    { logo: "/sql.svg", name: "PostgreSQL", description: "Relational Database" },
    { logo: "/mongo.svg", name: "MongoDB", description: "NoSQL Database" },
  ],

  automation: [
    { logo: "/python.svg", name: "Python", description: "Scripting & Automation" },
    { logo: "/playwright.svg", name: "Playwright", description: "Browser Automation" },
    { logo: "/beautifulsoup.svg", name: "BeautifulSoup", description: "HTML Parsing" },
    { logo: "/serpapi.svg", name: "SerpAPI", description: "Search Data API" },
    { logo: "/chain2.svg", name: "LangChain", description: "LLM Framework" },
    { logo: "/ai.svg", name: "OpenAI API", description: "AI Integration" },
    { logo: "/faceai.svg", name: "Hugging Face", description: "AI Models" },
    { logo: "/vercel.svg", name: "Vercel AI SDK", description: "AI Streaming SDK" },
  ],
};


export const projects = [
  {
    id: 1,
    name: "Social Media Platform (Threads Clone)",
    image: null,
    tags: ["Next.js", "TypeScript", "MongoDB", "Clerk"],
    description:
      "Production social platform with threaded comments, nested replies, community pages, and infinite scroll. Server-side auth and Zod-validated serverless routes.",
    github: "https://github.com/Mahmedk77/threads_app",
    live: "https://threads-app-taupe.vercel.app/",
  },
  {
    id: 2,
    name: "Full-Stack E-Commerce Platform",
    image: null,
    tags: ["React.js", "Node.js", "MongoDB", "Stripe"],
    description:
      "Production-ready store with JWT auth, cart management, Stripe payments, role-based admin dashboard, and optimized MongoDB queries.",
    github: "https://github.com/Mahmedk77/ecommerce",
    live: "https://ecommerce-navy-pi.vercel.app/",
  },
  {
    id: 3,
    name: "Pitchify — Startup Pitch Platform",
    image: null,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS"],
    description:
      "Startup idea discovery platform powered by Sanity CMS with advanced keyword search, category filters, and real-time view tracking.",
    github: "https://github.com/Mahmedk77/pitchify",
    live: "https://pitchify-mu.vercel.app/",
  },
];


export const services = [
  {
    icon: <Globe size={30} strokeWidth={1.5} />,
    heading: "Web Application Development",
    description:
      "Building full-stack web apps using Next.js, React, and Node.js. Fast, scalable, and production-ready.",
  },
  {
    icon: <Workflow size={30} strokeWidth={1.5} />,
    heading: "Automation and Data Pipelines",
    description:
      "Scraping, processing, and monitoring data from any public source. Automated workflows that run without manual intervention.",
  },
  {
    icon: <Bot size={30} strokeWidth={1.5} />,
    heading: "AI Integration",
    description:
      "Adding LLM-powered features to existing products. Chatbots, content generation, and evaluation systems using OpenAI API and LangChain.",
  },
  {
    icon: <BarChart2 size={30} strokeWidth={1.5} />,
    heading: "Business Intelligence Dashboards",
    description:
      "Custom dashboards that pull live data and surface insights your team actually uses.",
  },
];
