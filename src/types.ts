import type { ComponentType } from "react";

export type IconComponent = ComponentType<{ size?: number; className?: string }>;

export type Experience = {
  company: string;
  role: string;
  period: string;
  points: string[];
};

export type Project = {
  name: string;
  type: string;
  stack: string;
  summary: string;
  highlights: string[];
};

export type SkillGroup = {
  title: string;
  icon: IconComponent;
  skills: string[];
};

export type Service = {
  title: string;
  subtitle: string;
  description: string;
  outcomes: string[];
  icon: IconComponent;
  direction: "left" | "right" | "top" | "bottom";
};

export type ContactItem = {
  icon: IconComponent;
  label: string;
  href: string;
};
