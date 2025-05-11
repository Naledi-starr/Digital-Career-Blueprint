import { FileText } from "lucide-react";
import { CareerType } from "@/types/career";

const dataScientist: CareerType = {
  id: 2,
  title: "Data Scientist",
  slug: "data-scientist",
  shortDescription: "Analyze and interpret complex data to help organizations make better decisions.",
  description: "Data scientists gather, analyze, and interpret large datasets to identify patterns and trends that can help guide business decisions. They combine skills in statistics, programming, and domain knowledge to extract insights from data.",
  icon: FileText,
  imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  averageSalary: "R500,000 - R1,100,000 per year",
  growthRate: "25% (Much faster than average)",
  experienceLevel: "Mid to Senior",
  responsibilities: "Data scientists collect, clean, and process large datasets. They apply statistical analysis, machine learning, and data visualization techniques to uncover patterns and insights. They build predictive models, communicate findings to stakeholders, and develop data-driven solutions to business challenges.",
  workEnvironment: "In South Africa, data scientists work across various sectors including financial services, telecommunications, retail, healthcare, and government. Major banks like Standard Bank and FNB, telecom companies like MTN and Vodacom, and retailers like Woolworths and Shoprite employ data scientists. Many work in collaborative office environments in major cities, though remote work options are increasingly available.",
  technicalSkills: [
    "Python",
    "R",
    "SQL",
    "Statistics and Probability",
    "Machine Learning",
    "Data Visualization",
    "Big Data Technologies",
    "Deep Learning",
    "Natural Language Processing",
    "Data Wrangling"
  ],
  softSkills: [
    "Critical Thinking",
    "Business Acumen",
    "Communication",
    "Storytelling with Data",
    "Problem Solving",
    "Domain Knowledge"
  ],
  education: "Most data scientists in South Africa have at least a bachelor's degree in statistics, mathematics, computer science, or related fields from universities like University of Cape Town, University of the Witwatersrand, or University of Pretoria. Many positions require or prefer advanced degrees (master's or PhD). Specialized data science programs and bootcamps are becoming more common, with offerings from institutions like Explore Data Science Academy and EDSA.",
  certifications: [
    {
      name: "IBM Data Science Professional Certificate",
      description: "Comprehensive program covering data science methodology, tools, and techniques."
    },
    {
      name: "Microsoft Certified: Azure Data Scientist Associate",
      description: "Validates ability to implement and run machine learning workloads on Azure."
    },
    {
      name: "EDSA Data Science Certification",
      description: "South African-focused data science certification recognized by local industry."
    },
    {
      name: "Tensorflow Developer Certificate",
      description: "Shows proficiency in using TensorFlow to solve machine learning problems."
    }
  ],
  careerPath: [
    {
      title: "Data Analyst",
      description: "Entry point focused on basic data analysis and visualization."
    },
    {
      title: "Junior Data Scientist",
      description: "Works under supervision on data science projects and model development."
    },
    {
      title: "Data Scientist",
      description: "Independently handles projects from data collection through model deployment."
    },
    {
      title: "Senior Data Scientist",
      description: "Leads complex projects and mentors junior team members."
    },
    {
      title: "Principal Data Scientist/Director of Data Science",
      description: "Sets data science strategy and oversees multiple teams or initiatives."
    }
  ],
  southAfricanContext: "Data science is rapidly growing in South Africa as organizations recognize the value of data-driven decision making. The financial services sector, particularly banking and insurance, leads adoption, followed by telecommunications and retail. Government agencies are also investing in data science capabilities to improve service delivery and policy formulation. South Africa faces a significant skills shortage in this field, creating excellent opportunities for qualified professionals. The Explore Data Science Academy, founded in Cape Town, is one of Africa's premier data science educational institutions, working to address this skills gap through free learnerships sponsored by companies like Amazon Web Services."
};

export default dataScientist;
