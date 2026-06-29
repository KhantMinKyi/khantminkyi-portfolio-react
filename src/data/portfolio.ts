import {
  BriefcaseBusiness,
  Code2,
  Database,
  Mail,
  MapPin,
  Phone,
  Rocket,
  TerminalSquare,
} from "lucide-react";
import type { ContactItem, Experience, Project, Service, SkillGroup } from "../types";

export const navItems = ["Services", "Expertise", "Experience", "Projects", "Contact"];

export const currentFocus = ["Laravel", "Node.js", "React", "API Security", "MySQL", "School ERP"];

export const roleWords = ["Full-Stack Developer", "Laravel Engineer", "React Builder", "API Architect"];

export const stats = [
  ["5+", "Years full-stack"],
  ["12+", "Core systems"],
  ["Laravel", "Main backend"],
  ["React", "Modern UI"],
];

export const experiences: Experience[] = [
  {
    company: "BFI Education Services Co., Ltd.",
    role: "Full-Stack Developer",
    period: "Dec 2023 - Present",
    points: [
      "Leading Student Information System development across attendance, grading, scheduling, library, and behavior modules.",
      "Redesigned MySQL database structures to improve speed, reliability, and daily school operations.",
      "Improved internal portal UI/UX and collaborated with international teams on secure API delivery.",
    ],
  },
  {
    company: "Ultimate Solutions Myanmar",
    role: "Senior Backend Developer",
    period: "May 2023 - Dec 2023",
    points: [
      "Built backend architecture for ERP and HR platforms with scalable APIs and high-volume data handling.",
      "Implemented role-based access control for sensitive business data and staff workflows.",
      "Reviewed junior developer code and used Postman-driven API testing to catch issues early.",
    ],
  },
  {
    company: "Royal Maven Technology",
    role: "Web Developer",
    period: "Feb 2021 - Jan 2023",
    points: [
      "Built clinic admin portals with QR-based medical record access, appointments, PDF printing, and secure roles.",
      "Grew from WordPress site management into Laravel APIs, CRUD systems, ERP flows, and database design.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "BFI Student Information System",
    type: "Full-Stack Platform",
    stack: "Laravel, JavaScript, jQuery, MySQL",
    summary:
      "A production school management system covering attendance, grading, scheduling, library, behavior, permissions, and notifications.",
    highlights: ["Secure mobile APIs", "Teacher/admin/staff roles", "Smooth internal UX"],
  },
  {
    name: "GESC School Management System",
    type: "Backend API",
    stack: "Laravel, MySQL, Postman",
    summary:
      "Secure and scalable internal school APIs with reporting, finance calculations, wallet transactions, and optimized endpoints.",
    highlights: ["RBAC authentication", "PDF and Excel reports", "Code review leadership"],
  },
  {
    name: "Myat Saydanar Clinic System",
    type: "Full-Stack Product",
    stack: "Laravel, Bootstrap, MySQL, QR, PDF",
    summary:
      "Clinic operations portal with appointment booking, patient records, medical history QR codes, and printable documents.",
    highlights: ["QR record access", "Admin dashboards", "Optimized patient data"],
  },
  {
    name: "BFI KG System",
    type: "Independent Delivery",
    stack: "Laravel, React, MySQL, Postman",
    summary:
      "A responsive multi-user dashboard and REST API system delivered end-to-end, including client meetings and maintenance.",
    highlights: ["React dashboard", "Menu access control", "Complete ownership"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "Material UI", "Tailwind CSS", "Bootstrap", "jQuery", "UI/UX"],
  },
  {
    title: "Backend",
    icon: TerminalSquare,
    skills: ["Laravel", "PHP", "Node.js", "REST APIs", "Authentication", "RBAC"],
  },
  {
    title: "Data",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Database Design", "Query Optimization"],
  },
  {
    title: "Delivery",
    icon: Rocket,
    skills: ["Git", "Docker", "Postman", "AWS", "DigitalOcean", "Documentation"],
  },
];

export const services: Service[] = [
  {
    title: "Backend Engineering",
    subtitle: "Fast APIs, clean logic, secure data flow.",
    description:
      "I build the backend your product can trust: Laravel and Node.js APIs, authentication, permissions, reporting, integrations, and database logic that stays stable when real users start depending on it.",
    outcomes: ["REST API architecture", "RBAC and authentication", "Database optimization"],
    icon: TerminalSquare,
    direction: "left",
  },
  {
    title: "Full System Delivery",
    subtitle: "From idea to dashboard to production.",
    description:
      "I can take a system from requirements to working software: admin portals, school platforms, ERP workflows, staff dashboards, responsive frontends, backend services, and long-term maintenance.",
    outcomes: ["Laravel + React platforms", "Admin and staff dashboards", "End-to-end ownership"],
    icon: BriefcaseBusiness,
    direction: "top",
  },
  {
    title: "DevOps and Deployment",
    subtitle: "Reliable releases without the drama.",
    description:
      "I prepare applications for real operations with hosting setup, Docker-friendly workflows, server configuration, environment management, backups, and practical deployment processes teams can repeat.",
    outcomes: ["Server setup and deployment", "Docker-ready workflows", "Production support"],
    icon: Rocket,
    direction: "right",
  },
  {
    title: "Data and System Improvement",
    subtitle: "Make slow systems feel sharp again.",
    description:
      "I improve existing platforms by cleaning database structures, optimizing queries, reviewing risky code paths, upgrading user flows, and turning messy internal tools into software teams enjoy using.",
    outcomes: ["Query and schema tuning", "Workflow redesign", "Code review and refactor"],
    icon: Database,
    direction: "bottom",
  },
];

export const courses = [
  "Professional Website Developer course at Fairway Technology",
  "Cybersecurity Awareness Workshop at MDIS",
  "System Networking Engineering at MST",
  "Software Engineering at KMD",
  "Back-End Apps with Node.js and Express at Coursera",
];

export const contactLinks: ContactItem[] = [
  {
    icon: Mail,
    label: "khantminkyi@gmail.com",
    href: "mailto:khantminkyi@gmail.com",
  },
  {
    icon: Phone,
    label: "+959 502 5363",
    href: "tel:+9595025363",
  },
  {
    icon: BriefcaseBusiness,
    label: "LinkedIn",
    href: "https://www.linkedin.com/search/results/all/?keywords=Khant%20Min%20Kyi",
  },
  {
    icon: Code2,
    label: "GitHub",
    href: "https://github.com/KhantMinKyi",
  },
  {
    icon: MapPin,
    label: "Yangon, Myanmar",
    href: "https://www.google.com/maps/search/?api=1&query=Yangon%2C%20Myanmar",
  },
];
