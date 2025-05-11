import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage?: string;
}

const Hero = ({ title, description, buttonText, buttonLink, backgroundImage }: HeroProps) => {
  return (
    <div 
      className="bg-gradient-to-br from-tech-purple/90 to-tech-blue/90 text-white relative"
      style={backgroundImage ? { 
        backgroundImage: `linear-gradient(to bottom right, rgba(155, 135, 245, 0.9), rgba(14, 165, 233, 0.9)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : undefined}
    >
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            {description}
          </p>
          <Link to={buttonLink}>
            <Button size="lg" className="bg-white text-tech-blue hover:bg-white/90 font-medium">
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
