import { Laptop } from "lucide-react";
import { CareerType } from "@/types/career";

const softwareDeveloper: CareerType = {
  id: 1,
  title: "Software Developer",
  slug: "software-developer",
  shortDescription: "Build applications and systems that power the digital world.",
  description: "Software developers are the creative minds behind computer programs. Some develop applications that allow people to perform specific tasks on computers or other devices, while others develop the underlying systems that run the devices or control networks.",
  icon: Laptop,
  imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
  averageSalary: "R450,000 - R900,000 per year",
  growthRate: "15% (Faster than average)",
  experienceLevel: "Entry to Senior",
  responsibilities: "Software developers design, build, and maintain software systems. They write code, debug programs, and collaborate with team members to create solutions that meet user needs. They also test software for bugs and functionality issues, update existing programs, and document their work for future reference.",
  workEnvironment: "Software developers in South Africa typically work in office settings in tech hubs like Cape Town, Johannesburg, and Durban. Remote work has become increasingly common, especially since the COVID-19 pandemic. Many South African developers work for local companies as well as international firms that have set up development centers in the country.",
  technicalSkills: [
    "JavaScript/TypeScript",
    "Python",
    "Java",
    "C#",
    "SQL",
    "Cloud Services (AWS, Azure)",
    "Git",
    "Testing and Debugging",
    "Data Structures and Algorithms",
    "REST APIs"
  ],
  softSkills: [
    "Problem Solving",
    "Communication",
    "Collaboration",
    "Time Management",
    "Adaptability",
    "Attention to Detail"
  ],
  education: "A bachelor's degree in computer science, software engineering, or information technology from institutions like University of Cape Town, University of the Witwatersrand, or Stellenbosch University is common. Many developers also learn through coding bootcamps like WeThinkCode_, CodeSpace, and HyperionDev. Self-taught developers with strong portfolios are increasingly being recognized in the industry.",
  certifications: [
    {
      name: "AWS Certified Developer",
      description: "Demonstrates proficiency in AWS services for application development."
    },
    {
      name: "Microsoft Certified: Azure Developer Associate",
      description: "Validates skills to design, build, test, and maintain cloud applications on Microsoft Azure."
    },
    {
      name: "Oracle Certified Professional, Java SE Programmer",
      description: "Proves expertise in Java programming language fundamentals."
    },
    {
      name: "MICT SETA Accredited Qualifications",
      description: "South African industry-recognized qualifications for IT professionals."
    }
  ],
  careerPath: [
    {
      title: "Junior Developer",
      description: "Entry-level position focused on learning codebases and development practices while handling basic coding tasks."
    },
    {
      title: "Mid-level Developer",
      description: "Takes on more complex projects independently and may mentor junior team members."
    },
    {
      title: "Senior Developer",
      description: "Leads development efforts, makes architectural decisions, and guides junior developers."
    },
    {
      title: "Lead Developer/Technical Lead",
      description: "Oversees development teams and projects while still contributing code."
    },
    {
      title: "Software Architect",
      description: "Designs high-level software structures and makes critical technical decisions for projects."
    }
  ],
  southAfricanContext: "South Africa has a growing software development industry with major tech hubs in Cape Town (nicknamed 'Silicon Cape'), Johannesburg, and Durban. Many international companies have established development centers in the country due to the high-quality talent pool, favorable time zone for European collaboration, and competitive costs. The industry offers opportunities in fintech, e-commerce, mobile development, and business process outsourcing. Organizations like OfferZen and Silicon Cape are working to strengthen the local developer community. Skills development initiatives by government and private sector are helping to address the digital skills gap."
};

export default softwareDeveloper;
