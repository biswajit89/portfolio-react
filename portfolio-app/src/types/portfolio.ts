export interface Personal {
  name: string;
  title: string;
  experience: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
}

export interface Skills {
  frontend: string[];
  backend: string[];
  database: string[];
  tools: string[];
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
}

export interface Project {
  name: string;
  tech: string[];
  description: string;
  github: string;
  live: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  gpa: string;
}

export interface PortfolioData {
  personal: Personal;
  skills: Skills;
  experience: Experience[];
  projects: Project[];
  education: Education[];
}