
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-tech-purple to-tech-blue bg-clip-text text-transparent">
            Digital Career Blueprint
          </h1>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-600 hover:text-tech-blue transition-colors">
            Home
          </Link>
          <Link to="/careers" className="text-gray-600 hover:text-tech-blue transition-colors">
            Careers
          </Link>
          <Link to="/resources" className="text-gray-600 hover:text-tech-blue transition-colors">
            Resources
          </Link>
        </nav>

        <div className="md:hidden">
          {/* Mobile menu button would go here */}
          <button className="text-gray-600">
            Menu
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
