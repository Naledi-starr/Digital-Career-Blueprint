import { Briefcase } from "lucide-react";
import { CareerType } from "@/types/career";

const productManager: CareerType = {
  id: 6,
  title: "Product Manager",
  slug: "product-manager",
  shortDescription: "Guide the development of products from conception to launch and beyond.",
  description: "Product managers are responsible for the strategy, roadmap, and feature definitions for a product or product line. They work at the intersection of business, technology, and user experience to ensure that products meet market needs and business objectives.",
  icon: Briefcase,
  imageSrc: "https://images.unsplash.com/photo-1550831103-58317ff2aa1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  averageSalary: "R600,000 - R1,300,000 per year",
  growthRate: "10% (Average)",
  experienceLevel: "Mid to Senior",
  responsibilities: "Product managers define product vision and strategy, conduct market research, prioritize features, create product roadmaps, and work closely with development teams to ensure successful delivery. They also analyze product performance, gather user feedback, and make data-driven decisions to improve products.",
  workEnvironment: "In South Africa, product managers work in technology companies, software firms, and organizations with digital products. They typically work in collaborative office environments but remote work is increasingly common. They interact with multiple stakeholders including developers, designers, marketers, and executives.",
  technicalSkills: [
    "Product Management Tools (Jira, Trello)",
    "Data Analysis (Excel, SQL)",
    "Market Research",
    "Agile Methodologies",
    "User Story Mapping",
    "Wireframing Tools (Sketch, Figma)",
    "A/B Testing",
    "Product Analytics (Google Analytics)",
    "Basic Technical Understanding",
    "Product Roadmapping"
  ],
  softSkills: [
    "Leadership",
    "Communication",
    "Strategic Thinking",
    "Problem Solving",
    "Negotiation",
    "Prioritization"
  ],
  education: "Product managers in South Africa come from diverse educational backgrounds, often with bachelor's degrees in business, computer science, or related fields. Many have advanced degrees like MBAs. Technical products may require more technical backgrounds, while consumer products might value marketing experience.",
  certifications: [
    {
      name: "Certified Product Manager (CPM)",
      description: "Industry-recognized credential validating product management knowledge and skills."
    },
    {
      name: "Professional Scrum Product Owner (PSPO)",
      description: "Focuses on the product owner role within Scrum frameworks."
    },
    {
      name: "Pragmatic Marketing Certification",
      description: "Validates market-driven product management expertise."
    },
    {
      name: "General Assembly Product Management Immersive",
      description: "Intensive program covering the full product lifecycle."
    }
  ],
  careerPath: [
    {
      title: "Business Analyst",
      description: "Entry point providing experience in analyzing business requirements and processes."
    },
    {
      title: "Associate Product Manager",
      description: "Entry-level role focused on learning product processes and assisting senior PMs."
    },
    {
      title: "Product Manager",
      description: "Manages specific products or features independently."
    },
    {
      title: "Senior Product Manager",
      description: "Handles more complex products and may lead strategic initiatives."
    },
    {
      title: "Director of Product",
      description: "Oversees multiple product managers and aligns product strategy with company goals."
    },
    {
      title: "VP of Product",
      description: "Sets product vision and strategy for the entire organization."
    }
  ],
  southAfricanContext: "The product management role is gaining prominence in South Africa as companies strive to build innovative and customer-centric products. The demand for skilled product managers is high, particularly in the fintech, e-commerce, and telecommunications sectors. Local companies are increasingly adopting agile methodologies, which require strong product ownership and collaboration. The South African product management community is growing, with regular events and workshops providing opportunities for networking and professional development."
};

export default productManager;
