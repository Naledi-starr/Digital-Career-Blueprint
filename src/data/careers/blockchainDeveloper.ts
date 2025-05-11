import { BookOpen } from "lucide-react";
import { CareerType } from "@/types/career";

const blockchainDeveloper: CareerType = {
  id: 8,
  title: "Blockchain Developer",
  slug: "blockchain-developer",
  shortDescription: "Develop and implement blockchain solutions for secure and transparent transactions.",
  description: "Blockchain developers design, develop, and implement blockchain-based solutions for various industries. They work with distributed ledger technologies to create secure, transparent, and decentralized applications.",
  icon: BookOpen,
  imageSrc: "https://images.unsplash.com/photo-1517169374139-275957374975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  averageSalary: "R650,000 - R1,400,000 per year",
  growthRate: "22% (Much faster than average)",
  experienceLevel: "Mid to Senior",
  responsibilities: "Blockchain developers design and develop smart contracts, build decentralized applications (dApps), integrate blockchain technologies with existing systems, and ensure the security and scalability of blockchain solutions. They also stay up-to-date with the latest blockchain trends and technologies.",
  workEnvironment: "In South Africa, blockchain developers work in technology companies, financial institutions, and startups focused on blockchain solutions. They typically work in collaborative office environments but remote work is increasingly common. They interact with software developers, system architects, and business stakeholders.",
  technicalSkills: [
    "Blockchain Technologies (Ethereum, Hyperledger)",
    "Smart Contract Development (Solidity)",
    "Decentralized Application (dApp) Development",
    "Cryptography",
    "Web Development (JavaScript, HTML, CSS)",
    "Database Management",
    "API Integration",
    "Version Control (Git)",
    "Cloud Computing (AWS, Azure)",
    "Security Principles"
  ],
  softSkills: [
    "Problem Solving",
    "Analytical Thinking",
    "Communication",
    "Collaboration",
    "Attention to Detail",
    "Continuous Learning"
  ],
  education: "Most blockchain developers in South Africa have a bachelor's degree in computer science, software engineering, or a related field. They also have specialized knowledge of blockchain technologies and smart contract development. Online courses and certifications are valuable for gaining expertise in this field.",
  certifications: [
    {
      name: "Certified Blockchain Developer (CBD)",
      description: "Validates skills in blockchain development and smart contract creation."
    },
    {
      name: "Certified Ethereum Developer (CED)",
      description: "Demonstrates expertise in Ethereum blockchain development."
    },
    {
      name: "Blockchain Training Alliance (BTA) Certifications",
      description: "Offers various certifications covering different aspects of blockchain technology."
    },
    {
      name: "IBM Blockchain Foundation Developer",
      description: "Validates skills in developing blockchain solutions using IBM technologies."
    }
  ],
  careerPath: [
    {
      title: "Software Developer",
      description: "Entry point providing experience in software development and coding practices."
    },
    {
      title: "Blockchain Developer",
      description: "Develops and implements blockchain solutions under supervision."
    },
    {
      title: "Senior Blockchain Developer",
      description: "Leads blockchain development projects and mentors junior developers."
    },
    {
      title: "Blockchain Architect",
      description: "Designs and implements enterprise-wide blockchain solutions."
    },
    {
      title: "Blockchain Consultant",
      description: "Provides expertise and guidance on blockchain technologies to organizations."
    }
  ],
  southAfricanContext: "The blockchain industry in South Africa is still emerging but growing steadily. Several financial institutions and startups are exploring blockchain solutions for challenges like cross-border payments, supply chain tracking, and digital identity verification. The South African Reserve Bank has been conducting research on central bank digital currencies. The country hosts blockchain events and hackathons to foster innovation and collaboration in this space. There's a particular interest in blockchain applications that can address uniquely African challenges, such as land registry systems and financial inclusion for the unbanked population."
};

export default blockchainDeveloper;
