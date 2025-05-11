import { 
    Briefcase,
    GraduationCap,
    Laptop,
    Computer,
    BookOpen,
    FileText,
    Users
  } from "lucide-react";
  import { CareerType } from "@/types/career";
  
  import softwareDeveloper from "./careers/softwareDeveloper";
  import dataScientist from "./careers/dataScientist";
  import cybersecurityAnalyst from "./careers/cybersecurityAnalyst";
  import uxUiDesigner from "./careers/uxUiDesigner";
  import devOpsEngineer from "./careers/devOpsEngineer";
  import productManager from "./careers/productManager";
  import aiMlEngineer from "./careers/aiMlEngineer";
  import blockchainDeveloper from "./careers/blockchainDeveloper";
  
  export const careers: CareerType[] = [
    softwareDeveloper,
    dataScientist,
    cybersecurityAnalyst,
    uxUiDesigner,
    devOpsEngineer,
    productManager,
    aiMlEngineer,
    blockchainDeveloper
  ];
  
  export const getCareerBySlug = (slug: string): CareerType | undefined => {
    return careers.find(career => career.slug === slug);
  };
  
  export default careers;
  