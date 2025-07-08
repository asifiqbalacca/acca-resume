import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, FileText, TrendingUp, PieChart, Calculator } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Financial Statement Analysis Project",
      description: "Comprehensive analysis of a public company's financial statements over 3 years, including ratio analysis, trend analysis, and investment recommendations.",
      type: "Academic Project",
      skills: ["Financial Analysis", "Excel", "Financial Modeling", "Report Writing"],
      highlights: [
        "Analyzed 3 years of financial data for Apple Inc.",
        "Created comprehensive ratio analysis dashboard",
        "Provided investment recommendation with supporting evidence",
        "Achieved 95% grade for analytical depth"
      ],
      icon: TrendingUp,
      link: "#"
    },
    {
      title: "Small Business Accounting System Design",
      description: "Designed and implemented a complete accounting system for a small retail business, including chart of accounts, bookkeeping procedures, and financial controls.",
      type: "Case Study",
      skills: ["Accounting Systems", "Internal Controls", "QuickBooks", "Process Design"],
      highlights: [
        "Designed chart of accounts for retail business",
        "Created monthly closing procedures",
        "Implemented segregation of duties controls",
        "Reduced month-end closing time by 40%"
      ],
      icon: Calculator,
      link: "#"
    },
    {
      title: "Tax Planning Optimization Study",
      description: "Research project on tax planning strategies for small and medium enterprises, including legal tax minimization techniques and compliance requirements.",
      type: "Research Project",
      skills: ["Tax Law", "Research", "Tax Planning", "Compliance"],
      highlights: [
        "Researched 15 different tax planning strategies",
        "Created decision framework for SMEs",
        "Presented findings to academic panel",
        "Published in university finance journal"
      ],
      icon: FileText,
      link: "#"
    },
    {
      title: "Investment Portfolio Analysis",
      description: "Created and analyzed a diversified investment portfolio using modern portfolio theory principles, including risk assessment and performance measurement.",
      type: "Academic Project",
      skills: ["Investment Analysis", "Portfolio Management", "Risk Assessment", "Excel"],
      highlights: [
        "Built portfolio of 20 stocks across 5 sectors",
        "Applied modern portfolio theory principles",
        "Achieved 12% simulated annual return",
        "Created automated rebalancing system"
      ],
      icon: PieChart,
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Academic Projects & Case Studies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Practical applications of accounting and finance knowledge through real-world projects
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 animate-slide-in border-0 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-gradient-primary p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {project.type}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-primary group-hover:text-primary-glow transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-primary mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-3">Skills Applied</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline"
                        className="border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors duration-200 text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    className="bg-gradient-primary hover:bg-primary-glow transition-all duration-300"
                    asChild
                  >
                    <a href={project.link}>
                      <FileText className="w-4 h-4 mr-2" />
                      View Details
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                    asChild
                  >
                    <a href="#">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Report
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;