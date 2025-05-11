import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareerCard from "@/components/CareerCard";
import careers from "@/data/careers";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [experienceFilter, setExperienceFilter] = useState("all");
  
  const filteredCareers = careers.filter(career => {
    const matchesSearch = career.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        career.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesExperience = experienceFilter === "all" || 
                            career.experienceLevel.toLowerCase().includes(experienceFilter.toLowerCase());
    
    return matchesSearch && matchesExperience;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-tech-purple/90 to-tech-blue/90 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Technology Career Paths</h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Explore diverse tech careers, from coding to design. Find salary info, skills needed, and growth opportunities.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-2">
                <Label htmlFor="search" className="mb-2 block">Search Careers</Label>
                <Input
                  id="search"
                  placeholder="Search by title or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              
              <div>
                <Label htmlFor="experience" className="mb-2 block">Experience Level</Label>
                <Select value={experienceFilter} onValueChange={setExperienceFilter}>
                  <SelectTrigger id="experience">
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="entry">Entry Level</SelectItem>
                    <SelectItem value="mid">Mid Level</SelectItem>
                    <SelectItem value="senior">Senior Level</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {filteredCareers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCareers.map((career) => (
                <CareerCard key={career.id} career={career} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-medium text-gray-700 mb-2">No careers match your search</h3>
              <p className="text-gray-500">Try adjusting your filters or search term</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
