import { Computer } from "lucide-react";
import { CareerType } from "@/types/career";

const cybersecurityAnalyst: CareerType = {
  id: 3,
  title: "Cybersecurity Analyst",
  slug: "cybersecurity-analyst",
  shortDescription: "Protect organizations' systems, networks, and data from cyber threats.",
  description: "Cybersecurity analysts plan and implement security measures to protect an organization's computer networks and systems. They monitor networks for security breaches, investigate violations, and respond to cybersecurity incidents.",
  icon: Computer,
  imageSrc: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  averageSalary: "R400,000 - R950,000 per year",
  growthRate: "30% (Much faster than average)",
  experienceLevel: "Entry to Senior",
  responsibilities: "Cybersecurity analysts monitor networks for security breaches and investigate violations when they occur. They install and maintain security software, conduct penetration testing, develop security standards, and prepare reports on security breaches. They also train users on security protocols and stay informed about emerging threats and security enhancements.",
  workEnvironment: "In South Africa, cybersecurity analysts work across various sectors including financial services, telecommunications, government, and critical infrastructure. With South Africa experiencing one of the highest rates of cybercrime in Africa, these professionals are in high demand. They typically work in office environments in major cities but may be on call outside regular business hours to respond to security incidents.",
  technicalSkills: [
    "Network Security",
    "Security Information and Event Management (SIEM) Tools",
    "Intrusion Detection Systems",
    "Firewall Management",
    "Vulnerability Assessment",
    "Cryptography",
    "POPIA Compliance",
    "Operating Systems Security",
    "Scripting (Python, PowerShell)",
    "Cloud Security"
  ],
  softSkills: [
    "Analytical Thinking",
    "Attention to Detail",
    "Problem Solving",
    "Communication",
    "Continuous Learning",
    "Ethical Judgment"
  ],
  education: "Most cybersecurity analysts in South Africa have a bachelor's degree in computer science, information technology, or cybersecurity from institutions like University of Cape Town, University of Johannesburg, or Stellenbosch University. The field also values practical experience and professional certifications. Specialized programs like those offered by IT Varsity and MICT SETA provide focused cybersecurity training.",
  certifications: [
    {
      name: "CompTIA Security+",
      description: "Entry-level certification covering core security functions and best practices."
    },
    {
      name: "Certified Information Systems Security Professional (CISSP)",
      description: "Advanced certification demonstrating expertise across various cybersecurity domains."
    },
    {
      name: "Certified Ethical Hacker (CEH)",
      description: "Focuses on ethical hacking methodologies and penetration testing."
    },
    {
      name: "ISACA Certifications (CISM, CISA)",
      description: "Globally recognized certifications for information security management and auditing."
    }
  ],
  careerPath: [
    {
      title: "IT Support/Network Administrator",
      description: "Entry point providing experience with systems and networks."
    },
    {
      title: "Security Operations Analyst",
      description: "Monitors security events and responds to basic incidents."
    },
    {
      title: "Cybersecurity Analyst",
      description: "Handles more complex security issues and threat hunting."
    },
    {
      title: "Senior Security Analyst",
      description: "Leads security initiatives and mentors junior team members."
    },
    {
      title: "Security Architect/CISO",
      description: "Designs enterprise-wide security structures or leads organization's security strategy."
    }
  ],
  southAfricanContext: "South Africa faces significant cybersecurity challenges, with the country experiencing one of the highest rates of cybercrime on the continent. The implementation of the Protection of Personal Information Act (POPIA) in 2021 has increased the demand for cybersecurity professionals who understand compliance requirements. Financial institutions, telecommunications companies, and government agencies are the largest employers. The country has several cybersecurity communities and organizations, including the South African Cyber Security Academic Alliance (SACSAA) and the Centre for Cyber Security at the Council for Scientific and Industrial Research (CSIR), which work to develop capacity and awareness in this field."
};

export default cybersecurityAnalyst;
