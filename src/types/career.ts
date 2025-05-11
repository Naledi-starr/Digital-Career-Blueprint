import { LucideIcon } from "lucide-react";

export interface Certification {
  name: string;
  description: string;
}

export interface CareerPathStep {
  title: string;
  description: string;
}

export interface CareerType {
  id: number;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  icon?: LucideIcon;
  imageSrc?: string;
  averageSalary: string;
  growthRate: string;
  experienceLevel: string;
  responsibilities: string;
  workEnvironment: string;
  technicalSkills: string[];
  softSkills: string[];
  education: string;
  certifications: Certification[];
  careerPath: CareerPathStep[];
  southAfricanContext?: string;
}
