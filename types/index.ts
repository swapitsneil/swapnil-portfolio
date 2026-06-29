export interface Project {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  github: string;
  demo?: string;
  docs?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade: string;
}

export interface WhatIBuild {
  id: string;
  icon: string;
  title: string;
  description: string;
}
