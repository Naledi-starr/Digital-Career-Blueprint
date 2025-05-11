import React from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareerCard from "@/components/CareerCard";
import careers from "@/data/careers";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  // Display only 3 featured careers on the home page
  const featuredCareers = careers.slice(0, 3);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="Find Your Tech Career in South Africa" 
          description="Explore technology career paths, understand skill requirements, and discover how to build a successful career in South Africa's growing tech industry."
          buttonText="Explore Careers"
          buttonLink="/careers"
          backgroundImage="https://images.unsplash.com/photo-1577417006269-0f464e5e1b2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        />
        
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose a Tech Career in South Africa?</h2>
              <p className="text-lg text-gray-600">
                South Africa's tech industry is booming, offering diverse opportunities from fintech to e-commerce. 
                With competitive salaries, a growing startup ecosystem, and major international tech companies 
                establishing local offices, now is the perfect time to build your career in the South African tech landscape.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-tech-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-tech-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Growing Tech Hubs</h3>
                <p className="text-gray-600">
                  Cape Town's "Silicon Cape", Johannesburg, and Durban are emerging as thriving centers for technology innovation in Africa.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-tech-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-tech-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Competitive Salaries</h3>
                <p className="text-gray-600">
                  Tech professionals in South Africa earn above-average salaries with excellent benefits and growth potential.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-tech-indigo/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-tech-indigo" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Digital Transformation</h3>
                <p className="text-gray-600">
                  South African businesses are rapidly digitalizing, creating high demand for skilled tech professionals across industries.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-2">Featured Tech Careers</h2>
                <p className="text-gray-600">Explore some of the most in-demand technology career paths in South Africa</p>
              </div>
              <Link to="/careers" className="mt-4 md:mt-0">
                <Button variant="outline">View All Careers</Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredCareers.map((career) => (
                <CareerCard key={career.id} career={career} />
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4 bg-gradient-to-br from-tech-slate to-tech-indigo text-white">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Launch Your Tech Career in South Africa?</h2>
              <p className="text-xl mb-8 opacity-90">
                Explore our comprehensive guides, skill requirements, and career roadmaps tailored for the South African tech landscape.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/careers">
                  <Button size="lg" className="bg-white text-tech-indigo hover:bg-white/90">
                    Browse Career Paths
                  </Button>
                </Link>
                <Link to="/resources">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Explore SA Resources
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
