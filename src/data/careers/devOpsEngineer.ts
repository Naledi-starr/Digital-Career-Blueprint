import { GraduationCap } from "lucide-react";
import { CareerType } from "@/types/career";

const devOpsEngineer: CareerType = {
  id: 5,
  title: "DevOps Engineer",
  slug: "devops-engineer",
  shortDescription: "Bridge development and operations to enable faster, more reliable software delivery.",
  description: "DevOps engineers combine software development and IT operations expertise to shorten the development lifecycle and provide continuous delivery of high-quality software. They implement automation, improve collaboration, and optimize infrastructure.",
  icon: GraduationCap,
  imageSrc: "https://images.unsplash.com/photo-1542903660-d16da1c858f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  averageSalary: "R550,000 - R1,200,000 per year",
  growthRate: "20% (Much faster than average)",
  experienceLevel: "Mid to Senior",
  responsibilities: "DevOps engineers implement continuous integration/continuous deployment (CI/CD) pipelines, automate software testing and deployment, manage cloud infrastructure, monitor system performance, and troubleshoot issues. They also collaborate with development and operations teams to improve processes and tools.",
  workEnvironment: "In South Africa, DevOps engineers work in technology companies, enterprise IT departments, and organizations with significant digital operations. They typically work in collaborative office environments but remote work is common. They interact regularly with software developers, system administrators, and other IT professionals.",
  technicalSkills: [
    "CI/CD Tools (Jenkins, GitLab CI)",
    "Configuration Management (Ansible, Chef)",
    "Containerization (Docker)",
    "Container Orchestration (Kubernetes)",
    "Infrastructure as Code (Terraform)",
    "Cloud Platforms (AWS, Azure, Google Cloud)",
    "Linux/Unix Administration",
    "Scripting (Python, Bash)",
    "Monitoring and Logging (Prometheus, ELK Stack)",
    "Version Control (Git)"
  ],
  softSkills: [
    "Problem Solving",
    "Communication",
    "Collaboration",
    "Systems Thinking",
    "Time Management",
    "Continuous Learning"
  ],
  education: "Most DevOps engineers in South Africa have a bachelor's degree in computer science, information technology, or a related field. Many start their careers as software developers or system administrators and transition to DevOps roles after gaining experience in both areas. Certifications and practical experience are highly valued.",
  certifications: [
    {
      name: "AWS Certified DevOps Engineer – Professional",
      description: "Validates technical expertise in provisioning, operating, and managing distributed application systems on the AWS platform."
    },
    {
      name: "Microsoft Certified: Azure DevOps Engineer Expert",
      description: "Demonstrates skills and knowledge to design and implement DevOps practices for Azure."
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      description: "Confirms expertise in Kubernetes administration and operations."
    },
    {
      name: "Red Hat Certified Engineer (RHCE)",
      description: "Validates the ability to automate system administration tasks, including configuration, deployment, and management."
    }
  ],
  careerPath: [
    {
      title: "System Administrator",
      description: "Entry point providing experience in managing and maintaining IT infrastructure."
    },
    {
      title: "Software Developer",
      description: "Entry point providing experience in software development and coding practices."
    },
    {
      title: "Junior DevOps Engineer",
      description: "Works with established pipelines and tools under supervision."
    },
    {
      title: "DevOps Engineer",
      description: "Independently implements and manages automated processes and infrastructure."
    },
    {
      title: "Senior DevOps Engineer",
      description: "Leads DevOps initiatives and mentors junior team members."
    },
    {
      title: "DevOps Architect",
      description: "Designs and implements enterprise-wide DevOps strategies and solutions."
    }
  ],
  southAfricanContext: "The demand for DevOps engineers in South Africa is growing rapidly as more companies adopt cloud-native technologies and agile development practices. Major industries such as financial services, e-commerce, and telecommunications are actively hiring DevOps professionals. The South African DevOps community is vibrant, with regular meetups and conferences providing opportunities for networking and knowledge sharing. Local companies are also investing in training programs to upskill their workforce in DevOps practices."
};

export default devOpsEngineer;
