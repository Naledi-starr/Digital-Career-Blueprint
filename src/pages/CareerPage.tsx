import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareerDetail from "@/components/CareerDetail";
import { Button } from "@/components/ui/button";
import { getCareerBySlug } from "@/data/careers";

const CareerPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const career = slug ? getCareerBySlug(slug) : undefined;
  
  if (!career) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-3xl font-bold mb-4">Career Not Found</h1>
            <p className="text-gray-600 mb-6">
              The career you're looking for doesn't exist or may have been moved.
            </p>
            <Button onClick={() => navigate("/careers")}>
              View All Careers
            </Button>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <CareerDetail career={career} />
      </main>
      
      <Footer />
    </div>
  );
};

export default CareerPage;
