import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "ACCA Qualification",
      institution: "Association of Chartered Certified Accountants",
      period: "2018 - Present",
      status: "In Progress",
      description: "Currently pursuing the Applied Skills level of the ACCA certificate, focusing on advanced knowledge in areas such as Financial Management, Performance Management, Audit & Assurance, and Taxation. Meeting global accounting and financial standards by improving analytical, reporting, and decision-making skills. Continuously learning and pursuing ACCA membership.",
      subjects: ["Financial Reporting", "Audit & Assurance", "Taxation", "Financial Management", "Corporate Law"],
      progress: "11/17 papers completed"
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Cumilla Victoria Government College",
      period: "Apr 2014 - Apr 2016",
      status: "Completed",
      description: "Successfully finished HSC with a specialization in Business Studies.  Gained extensive knowledge in core subjects including Accounting, Management, and Finance.  This academic path helped develop a solid platform for future education in the field of business and professional certificates like ACCA.",
      subjects: ["Financial Accounting", "Management Accounting", "Business Law", "Economics", "Statistics"],
      grade: "GPA (3.25/4.0)"
    },
{
      degree: "Secondary School Certificate ",
      institution: "Cumilla Modern high school",
      period: "Jan 2009 - Mar 2014",
      status: "Completed",
      description: "Successfully finished HSC with a specialization in Business Studies.  Gained extensive knowledge in core subjects including Accounting, Management, and Finance.  This academic path helped develop a solid platform for future education in the field of business and professional certificates like ACCA.",
      subjects: ["Financial Accounting", "Management Accounting", "Business Law", "Economics", "Statistics"],
      grade: "GPA (3.25/4.0)"
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Education & Qualifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic journey and professional development in accounting and finance
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 animate-slide-in border-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-primary p-3 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-primary mb-2">
                        {edu.degree}
                      </CardTitle>
                      <p className="text-lg text-muted-foreground font-medium">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge 
                      variant={edu.status === "Completed" ? "default" : "secondary"}
                      className="text-sm"
                    >
                      {edu.status}
                    </Badge>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>
                
                {edu.progress && (
                  <div className="flex items-center gap-2 p-3 bg-accent rounded-lg">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="font-medium text-primary">Progress: {edu.progress}</span>
                  </div>
                )}
                
                {edu.grade && (
                  <div className="flex items-center gap-2 p-3 bg-accent rounded-lg">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="font-medium text-primary">Achievement: {edu.grade}</span>
                  </div>
                )}
                
                <div>
                  <h4 className="font-semibold text-primary mb-3">Key Subjects</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.subjects.map((subject, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline"
                        className="border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors duration-200"
                      >
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
