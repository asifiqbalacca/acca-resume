import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { 
  Calculator, 
  BarChart3, 
  FileSpreadsheet, 
  Brain, 
  Users, 
  Target,
  TrendingUp,
  Shield
} from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "Financial Reporting", level: 85, icon: FileSpreadsheet },
    { name: "Financial Analysis", level: 80, icon: BarChart3 },
    { name: "Tax Preparation", level: 75, icon: Calculator },
    { name: "Audit Procedures", level: 70, icon: Shield },
    { name: "Excel & Spreadsheets", level: 90, icon: FileSpreadsheet },
    { name: "Financial Modeling", level: 75, icon: TrendingUp }
  ];

  const softSkills = [
    { name: "Analytical Thinking", icon: Brain },
    { name: "Attention to Detail", icon: Target },
    { name: "Problem Solving", icon: Brain },
    { name: "Communication", icon: Users },
    { name: "Time Management", icon: Target },
    { name: "Teamwork", icon: Users }
  ];

  const certifications = [
    "Foundation in Accountancy (FIA) - Complete",
    "ACCA Applied Knowledge (F1-F3) Completed",
    "ACCA Applied Skills (F4-F9) - 4/6 Completed", 
    "Microsoft Excel Specialist",
    "QuickBooks Certified User",
    "Financial Modeling Certificate"
  ];

  const software = [
    "Microsoft Excel", "QuickBooks", "Sage", "Xero", 
    "SAP", "Power BI", "Tableau", "Python (Basic)"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Skills & Competencies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical expertise and soft skills that make me a valuable finance professional
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <Card className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 animate-slide-in border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-3">
                <div className="bg-gradient-primary p-2 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <skill.icon className="h-4 w-4 text-primary" />
                      <span className="font-medium text-foreground">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 animate-slide-in border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-3">
                <div className="bg-gradient-primary p-2 rounded-lg">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-3 bg-accent rounded-lg hover:bg-accent/80 transition-colors duration-200"
                  >
                    <skill.icon className="h-5 w-5 text-primary" />
                    <span className="font-medium text-foreground">{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 animate-slide-in border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-3">
                <div className="bg-gradient-primary p-2 rounded-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-3 bg-accent rounded-lg"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Software & Tools */}
          <Card className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 animate-slide-in border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-3">
                <div className="bg-gradient-primary p-2 rounded-lg">
                  <Calculator className="h-6 w-6 text-white" />
                </div>
                Software & Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {software.map((tool, index) => (
                  <Badge 
                    key={index} 
                    variant="outline"
                    className="border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors duration-200 px-3 py-1"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;