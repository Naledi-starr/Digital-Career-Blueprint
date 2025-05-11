import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-tech-indigo/90 to-tech-slate/90 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Career Resources</h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Tools, guides, and resources to help you navigate and succeed in your technology career journey.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="learning" className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-1 sm:grid-cols-3 mb-8">
              <TabsTrigger value="learning">Learning Resources</TabsTrigger>
              <TabsTrigger value="career">Career Development</TabsTrigger>
              <TabsTrigger value="tools">Industry Tools</TabsTrigger>
            </TabsList>
            
            <TabsContent value="learning">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Online Learning Platforms</CardTitle>
                    <CardDescription>Popular platforms for developing technical skills</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Coursera</h3>
                      <p className="text-sm text-gray-500">
                        Offers courses, specializations, and degrees from universities and companies in tech fields.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-tech-blue">
                        Visit Coursera
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Udemy</h3>
                      <p className="text-sm text-gray-500">
                        Marketplace of courses covering programming languages, frameworks, and tools.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-tech-blue">
                        Visit Udemy
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">freeCodeCamp</h3>
                      <p className="text-sm text-gray-500">
                        Free coding curriculum with certificates and projects in web development.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-tech-blue">
                        Visit freeCodeCamp
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Technical Documentation</CardTitle>
                    <CardDescription>Official documentation for popular technologies</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">MDN Web Docs</h3>
                      <p className="text-sm text-gray-500">
                        Comprehensive documentation for web technologies including HTML, CSS, and JavaScript.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-tech-blue">
                        Visit MDN
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">React Documentation</h3>
                      <p className="text-sm text-gray-500">
                        Official guides and API reference for the React library.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-tech-blue">
                        Visit React Docs
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Python Documentation</h3>
                      <p className="text-sm text-gray-500">
                        Official documentation for Python language and standard library.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-tech-blue">
                        Visit Python Docs
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>YouTube Channels</CardTitle>
                    <CardDescription>Educational content creators for tech learning</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Traversy Media</h3>
                      <p className="text-sm text-gray-500">
                        Practical project-based tutorials on web development technologies.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-tech-blue">
                        Visit Channel
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">freeCodeCamp</h3>
                      <p className="text-sm text-gray-500">
                        In-depth tutorials and courses on programming and computer science.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-tech-blue">
                        Visit Channel
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">CS50</h3>
                      <p className="text-sm text-gray-500">
                        Harvard's introduction to computer science and programming.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-tech-blue">
                        Visit Channel
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Interactive Learning</CardTitle>
                    <CardDescription>Platforms for hands-on practice and skill building</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">LeetCode</h3>
                      <p className="text-sm text-gray-500">
                        Platform to practice coding interview questions and algorithmic challenges.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-tech-blue">
                        Visit LeetCode
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Codecademy</h3>
                      <p className="text-sm text-gray-500">
                        Interactive courses on programming languages and web development.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-tech-blue">
                        Visit Codecademy
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Kaggle</h3>
                      <p className="text-sm text-gray-500">
                        Community for data scientists with competitions and notebooks.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-tech-blue">
                        Visit Kaggle
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="career">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Resume Building</CardTitle>
                    <CardDescription>Resources to create effective tech resumes</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Resume Templates</h3>
                      <p className="text-sm text-gray-500">
                        Curated tech-focused resume templates to showcase your skills effectively.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-tech-blue">
                        Browse Templates
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Resume Review Guidelines</h3>
                      <p className="text-sm text-gray-500">
                        Best practices for creating a resume that stands out to tech recruiters.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-tech-blue">
                        Read Guidelines
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Interview Preparation</CardTitle>
                    <CardDescription>Resources for technical interviews</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Technical Interview Handbook</h3>
                      <p className="text-sm text-gray-500">
                        Comprehensive guide to technical interview preparation.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-tech-blue">
                        Read Handbook
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Mock Interview Platforms</h3>
                      <p className="text-sm text-gray-500">
                        Platforms offering practice technical interviews with feedback.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-tech-blue">
                        Explore Platforms
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Behavioral Interview Questions</h3>
                      <p className="text-sm text-gray-500">
                        Common behavioral questions and strategies for answering them.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-tech-blue">
                        View Questions
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Networking</CardTitle>
                    <CardDescription>Resources for professional networking in tech</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Tech Conferences</h3>
                      <p className="text-sm text-gray-500">
                        Calendar of upcoming tech conferences and events.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-tech-blue">
                        View Calendar
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Professional Organizations</h3>
                      <p className="text-sm text-gray-500">
                        Industry organizations for networking and professional development.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-tech-blue">
                        Browse Organizations
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">LinkedIn Profile Guide</h3>
                      <p className="text-sm text-gray-500">
                        Tips for creating an effective tech professional LinkedIn profile.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-tech-blue">
                        Read Guide
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Career Advancement</CardTitle>
                    <CardDescription>Resources for growth and promotion</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Salary Negotiation Guide</h3>
                      <p className="text-sm text-gray-500">
                        Strategies for negotiating tech salaries and benefits.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-tech-blue">
                        Read Guide
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Performance Review Preparation</h3>
                      <p className="text-sm text-gray-500">
                        Tips for documenting achievements and preparing for reviews.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-tech-blue">
                        Read Tips
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Management Transition Resources</h3>
                      <p className="text-sm text-gray-500">
                        Resources for moving from technical roles to management.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-tech-blue">
                        View Resources
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="tools">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Development Tools</CardTitle>
                    <CardDescription>Popular tools for software development</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Code Editors & IDEs</h3>
                      <p className="text-sm text-gray-500">
                        Comparison of popular development environments like VS Code, IntelliJ, and more.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-tech-blue">
                        View Comparison
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Version Control</h3>
                      <p className="text-sm text-gray-500">
                        Guide to Git, GitHub, and version control best practices.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-tech-blue">
                        Read Guide
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Containerization</h3>
                      <p className="text-sm text-gray-500">
                        Introduction to Docker, Kubernetes, and container technologies.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-tech-blue">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Design Tools</CardTitle>
                    <CardDescription>Tools for UX/UI design and prototyping</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">UI Design Tools</h3>
                      <p className="text-sm text-gray-500">
                        Overview of Figma, Adobe XD, Sketch, and other design tools.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-tech-blue">
                        View Tools
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Prototyping Tools</h3>
                      <p className="text-sm text-gray-500">
                        Tools for creating interactive prototypes and user flows.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-tech-blue">
                        Explore Tools
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Design Systems</h3>
                      <p className="text-sm text-gray-500">
                        Examples of effective design systems and how to create them.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-tech-blue">
                        View Examples
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Data Science Tools</CardTitle>
                    <CardDescription>Tools for data analysis and machine learning</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Data Analysis Libraries</h3>
                      <p className="text-sm text-gray-500">
                        Introduction to pandas, NumPy, and other data manipulation tools.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-tech-blue">
                        Learn More
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Machine Learning Frameworks</h3>
                      <p className="text-sm text-gray-500">
                        Overview of TensorFlow, PyTorch, and other ML frameworks.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-tech-blue">
                        Explore Frameworks
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Data Visualization Tools</h3>
                      <p className="text-sm text-gray-500">
                        Tools for creating compelling data visualizations and dashboards.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-tech-blue">
                        View Tools
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Project Management</CardTitle>
                    <CardDescription>Tools for planning and tracking projects</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Agile Tools</h3>
                      <p className="text-sm text-gray-500">
                        Project management tools for Agile and Scrum workflows.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-tech-blue">
                        Explore Tools
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Collaboration Platforms</h3>
                      <p className="text-sm text-gray-500">
                        Tools for team communication and collaboration.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-tech-blue">
                        View Platforms
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Documentation Tools</h3>
                      <p className="text-sm text-gray-500">
                        Platforms for creating and maintaining project documentation.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-tech-blue">
                        Explore Tools
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;
