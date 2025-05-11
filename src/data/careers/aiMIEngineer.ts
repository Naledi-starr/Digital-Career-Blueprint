import { Users } from "lucide-react";
import { CareerType } from "@/types/career";

const aiMlEngineer: CareerType = {
  id: 7,
  title: "AI/Machine Learning Engineer",
  slug: "ai-machine-learning-engineer",
  shortDescription: "Design and implement AI systems that learn from data and enhance decision-making.",
  description: "AI/ML engineers design, build, and deploy AI models and machine learning systems. They create algorithms that allow computers to learn patterns, make predictions, and automate tasks that typically require human intelligence.",
  icon: Users,
  imageSrc: "https://images.unsplash.com/photo-1588508065120-2c5d3381a54b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  averageSalary: "R700,000 - R1,500,000 per year",
  growthRate: "25% (Much faster than average)",
  experienceLevel: "Mid to Senior",
  responsibilities: "AI/ML engineers design and implement machine learning algorithms, prepare and process data, select appropriate models for specific problems, train and evaluate models, and deploy them to production environments. They also monitor model performance, retrain models as needed, and collaborate with data scientists and software engineers.",
  workEnvironment: "In South Africa, AI/ML engineers work in technology companies, research institutions, and organizations adopting AI across various industries including healthcare, finance, retail, and manufacturing. They typically work in office or lab environments but remote work is increasingly common.",
  technicalSkills: [
    "Python",
    "Machine Learning Frameworks (TensorFlow, PyTorch)",
    "Deep Learning",
    "Natural Language Processing (NLP)",
    "Computer Vision",
    "Data Preprocessing and Feature Engineering",
    "Cloud ML Services (AWS SageMaker, Azure ML)",
    "Distributed Computing (Spark)",
    "MLOps",
    "Big Data Technologies (Hadoop)"
  ],
  softSkills: [
    "Critical Thinking",
    "Research Skills",
    "Problem Solving",
    "Communication",
    "Collaboration",
    "Ethics Awareness"
  ],
  education: "Most AI/ML engineers in South Africa have advanced degrees (master's or PhD) in computer science, mathematics, statistics, or related fields with specialization in machine learning or artificial intelligence. Strong mathematical foundations are essential for this role.",
  certifications: [
    {
      name: "TensorFlow Developer Certificate",
      description: "Validates skills in using TensorFlow to solve machine learning problems."
    },
    {
      name: "AWS Certified Machine Learning – Specialty",
      description: "Demonstrates expertise in designing, implementing, and deploying ML solutions on AWS."
    },
    {
      name: "Microsoft Certified: Azure AI Engineer Associate",
      description: "Shows proficiency in building, managing, and deploying AI solutions on Azure."
    },
    {
      name: "Google Professional Machine Learning Engineer",
      description: "Validates ability to design and implement ML models on Google Cloud."
    }
  ],
  careerPath: [
    {
      title: "Data Scientist",
      description: "Entry point providing experience in data analysis and model building."
    },
    {
      title: "Machine Learning Engineer",
      description: "Entry point focused on implementing established ML models."
    },
    {
      title: "AI/ML Engineer",
      description: "Independently develops and deploys machine learning solutions."
    },
    {
      title: "Senior AI/ML Engineer",
      description: "Leads complex AI projects and mentors junior engineers."
    },
    {
      title: "AI Architect",
      description: "Designs enterprise-wide AI solutions and strategies."
    },
    {
      title: "Director of AI/ML Research",
      description: "Guides advanced AI research and development initiatives."
    }
  ],
  southAfricanContext: "The AI/ML field is rapidly evolving in South Africa, with increasing adoption across various industries. Financial services, healthcare, and retail are leading the way in implementing AI-powered solutions. The South African government is also investing in AI research and development to address societal challenges. The AI/ML community in South Africa is growing, with several universities and research institutions offering specialized programs and conducting cutting-edge research. The demand for skilled AI/ML engineers is high, creating excellent opportunities for qualified professionals."
};

export default aiMlEngineer;
