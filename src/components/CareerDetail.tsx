import React from "react";
import { 
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CareerType } from "@/types/career";

interface CareerDetailProps {
  career: CareerType;
}

const CareerDetail = ({ career }: CareerDetailProps) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex flex-col md:flex-row md:items-center">
          <div className="w-16 h-16 bg-tech-indigo/10 rounded-lg flex items-center justify-center mr-4">
            {career.icon && <career.icon className="w-8 h-8 text-tech-indigo" />}
          </div>
          <div className="flex-grow">
            <h1 className="text-3xl font-bold">{career.title}</h1>
            <p className="text-tech-gray">{career.shortDescription}</p>
          </div>
        </div>
        
        {career.imageSrc && (
          <div className="mb-8 rounded-lg overflow-hidden shadow-md">
            <img 
              src={career.imageSrc} 
              alt={`${career.title} career image`} 
              className="w-full h-64 object-cover"
            />
          </div>
        )}
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Career Snapshot</CardTitle>
            <CardDescription>Key information about this career path in South Africa</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-sm font-medium text-tech-gray">Average Salary</h3>
                <p className="text-xl font-semibold">{career.averageSalary}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-tech-gray">Growth Rate</h3>
                <p className="text-xl font-semibold">{career.growthRate}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-tech-gray">Experience Level</h3>
                <p className="text-xl font-semibold">{career.experienceLevel}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="overview" className="mb-12">
          <TabsList className="grid grid-cols-5 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="skills">Required Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="career-path">Career Path</TabsTrigger>
            <TabsTrigger value="sa-context">SA Context</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="prose max-w-none">
              <p className="text-lg mb-4">{career.description}</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">What does a {career.title} do?</h2>
              <p className="mb-4">{career.responsibilities}</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Industries and Work Environment</h2>
              <p>{career.workEnvironment}</p>
            </div>
          </TabsContent>
          
          <TabsContent value="skills">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Technical Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {career.technicalSkills.map((skill, index) => (
                    <div key={index} className="bg-tech-blue/5 rounded-lg px-4 py-3">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h2 className="text-xl font-semibold mb-4">Soft Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {career.softSkills.map((skill, index) => (
                    <div key={index} className="bg-tech-purple/5 rounded-lg px-4 py-3">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="education">
            <div>
              <h2 className="text-xl font-semibold mb-4">Recommended Education in South Africa</h2>
              <div className="prose max-w-none">
                <p className="mb-4">{career.education}</p>
              </div>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">Certifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {career.certifications.map((cert, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-base">{cert.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">{cert.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="career-path">
            <div>
              <h2 className="text-xl font-semibold mb-4">Career Progression</h2>
              <div className="space-y-8">
                {career.careerPath.map((step, index) => (
                  <div key={index} className="relative pl-8 pb-8">
                    {index !== career.careerPath.length - 1 && (
                      <div className="absolute left-[15px] top-[28px] bottom-0 w-[2px] bg-tech-purple/20"></div>
                    )}
                    <div className="absolute left-0 top-0 w-[31px] h-[31px] rounded-full border-4 border-tech-purple/20 bg-tech-purple/10 flex items-center justify-center">
                      <span className="text-sm font-medium">{index + 1}</span>
                    </div>
                    <div className="pt-1">
                      <h3 className="text-lg font-medium mb-1">{step.title}</h3>
                      <p className="text-tech-gray">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="sa-context">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-4">South African Context</h2>
              {career.southAfricanContext ? (
                <p className="text-lg">{career.southAfricanContext}</p>
              ) : (
                <p className="text-lg text-tech-gray italic">South African context information coming soon.</p>
              )}
              
              <div className="mt-8 bg-tech-purple/5 rounded-lg p-4">
                <h3 className="text-xl font-medium mb-2">Local Industry Demand</h3>
                <p>The demand for {career.title}s in South Africa continues to grow, particularly in major tech hubs like Cape Town, Johannesburg, and Durban.</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CareerDetail;
