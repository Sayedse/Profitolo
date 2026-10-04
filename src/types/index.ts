export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectGalleryItem {
  id: string;
  title: string;
  image: string;
  caption: string;
  tag: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  figmaUrl: string;
  hasLiveDemo: boolean;
  featured: boolean;
  coverImage: string;
  overview: string;
  problem: string;
  solution: string;
  coreFeatures: ProjectFeature[];
  screens: string[];
  designProcess: string[];
  development: string[];
  architecture: string[];
  gallery: ProjectGalleryItem[];
}

export interface SkillItem {
  name: string;
  category: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  badgeColor: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  isCurrent?: boolean;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  field?: string;
  details?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  heroIntro: string;
  aboutContent: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
}
