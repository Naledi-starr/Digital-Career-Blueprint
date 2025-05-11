import { BookOpen } from "lucide-react";
import { CareerType } from "@/types/career";

const uxUiDesigner: CareerType = {
  id: 4,
  title: "UX/UI Designer",
  slug: "ux-ui-designer",
  shortDescription: "Create intuitive, engaging, and user-friendly digital experiences.",
  description: "UX/UI designers focus on enhancing user satisfaction by improving the usability, accessibility, and pleasure provided in the interaction between users and digital products. They combine research, design thinking, and technical skills to create intuitive interfaces.",
  icon: BookOpen,
  imageSrc: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  averageSalary: "R350,000 - R750,000 per year",
  growthRate: "12% (Faster than average)",
  experienceLevel: "Entry to Senior",
  responsibilities: "UX/UI designers research user needs and behaviors, create user personas and journey maps, design wireframes and prototypes, conduct usability testing, and collaborate with developers to implement designs. They also ensure designs meet accessibility standards and align with brand guidelines.",
  workEnvironment: "In South Africa, UX/UI designers work in tech companies, design agencies, and in-house design teams across various industries. Major tech companies like Takealot, Discovery, and Multichoice employ UX/UI designers, as do digital agencies like Ogilvy, VMLY&R, and Digitas Liquorice. They typically work in collaborative office environments in major cities like Cape Town and Johannesburg, though remote work has become more common.",
  technicalSkills: [
    "UI Design Tools (Figma, Adobe XD)",
    "Wireframing and Prototyping",
    "User Research Methods",
    "Information Architecture",
    "Visual Design Principles",
    "Interaction Design",
    "HTML/CSS Knowledge",
    "Responsive Design",
    "Design Systems",
    "Usability Testing"
  ],
  softSkills: [
    "Empathy",
    "Communication",
    "Collaboration",
    "Problem Solving",
    "Creativity",
    "Attention to Detail"
  ],
  education: "Many UX/UI designers in South Africa have degrees in design, human-computer interaction, or related fields from institutions like Red & Yellow Creative School of Business, Cape Town Creative Academy, or traditional universities. Others transition from related disciplines like graphic design or marketing. Short courses and bootcamps from providers like UX Design Institute, OfferZen, and Friends of Design are increasingly popular pathways into the field.",
  certifications: [
    {
      name: "Google UX Design Professional Certificate",
      description: "Comprehensive program covering UX research, wireframing, prototyping, and design."
    },
    {
      name: "Interaction Design Foundation Certificates",
      description: "Courses on specific UX/UI topics from a respected industry organization."
    },
    {
      name: "Red & Yellow Digital UX Design Certificate",
      description: "South African-focused UX design certification recognized by local industry."
    },
    {
      name: "Certified User Experience Professional (CUXP)",
      description: "Demonstrates understanding of core UX principles and methodologies."
    }
  ],
  careerPath: [
    {
      title: "Junior UX/UI Designer",
      description: "Works on specific components under supervision, learning design processes."
    },
    {
      title: "UX/UI Designer",
      description: "Independently handles design projects from research through implementation."
    },
    {
      title: "Senior UX/UI Designer",
      description: "Leads complex projects and may mentor junior designers."
    },
    {
      title: "UX/UI Lead or Manager",
      description: "Oversees design teams and ensures alignment with product strategy."
    },
    {
      title: "Design Director/VP of Design",
      description: "Sets design strategy and vision for the organization."
    }
  ],
  southAfricanContext: "The UX/UI design field in South Africa has grown significantly with the digital transformation of businesses across sectors. Cape Town has emerged as a hub for UX/UI design, housing many digital agencies and tech startups with strong design cultures. The e-commerce boom, accelerated by the COVID-19 pandemic, has increased demand for designers who can create intuitive online shopping experiences. South African designers often need to consider unique local challenges such as designing for low-bandwidth environments, supporting multiple official languages, and creating interfaces that work for diverse user groups with varying levels of tech literacy."
};

export default uxUiDesigner;
