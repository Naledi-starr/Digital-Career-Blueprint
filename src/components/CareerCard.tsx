import React from "react";
import { Link } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CareerType } from "@/types/career";

interface CareerCardProps {
  career: CareerType;
}

const CareerCard = ({ career }: CareerCardProps) => {
  return (
    <Card className="h-full flex flex-col transition-transform hover:scale-[1.01]">
      <CardHeader>
        <div className="w-12 h-12 bg-tech-indigo/10 rounded-lg flex items-center justify-center mb-3">
          {career.icon && <career.icon className="w-6 h-6 text-tech-indigo" />}
        </div>
        <CardTitle className="text-xl">{career.title}</CardTitle>
        <CardDescription className="text-tech-gray">
          {career.shortDescription}
        </CardDescription>
      </CardHeader>
      
      {career.imageSrc && (
        <div className="px-6 pb-3">
          <div className="aspect-video rounded-md overflow-hidden">
            <img 
              src={career.imageSrc} 
              alt={`${career.title} career`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
      
      <CardContent className="flex-grow">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Average Salary:</span>
            <span className="text-sm text-tech-gray">{career.averageSalary}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Growth Rate:</span>
            <span className="text-sm text-tech-gray">{career.growthRate}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link to={`/career/${career.slug}`} className="w-full">
          <Button variant="outline" className="w-full">
            Explore Career Path
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CareerCard;
