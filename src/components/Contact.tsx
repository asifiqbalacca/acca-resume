import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, FileDown } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "acca.asifiqbal@gmail.com",
      link: "mailto:acca.asifiqbal@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+88 01325409636",
      link: "tel:+8801325409636"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dhanmondi 8/A, Dhaka, Bangladesh",
      link: "#"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/asifiqbal-acca",
      link: "https://www.linkedin.com/in/asifiqbal-acca/"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start my career in accounting and finance. Let's discuss opportunities!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-card shadow-card border-0 animate-slide-in">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-4 p-4 bg-accent rounded-lg hover:bg-accent/80 transition-colors duration-200 group"
                  >
                    <div className="bg-gradient-primary p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-primary">{info.label}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-0 animate-slide-in">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  className="w-full bg-gradient-primary hover:bg-primary-glow transition-all duration-300 shadow-hover"
                  size="lg"
                >
                  <FileDown className="mr-2 h-5 w-5" />
                  Download My CV
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  size="lg"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/asifiqbal-acca" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-card shadow-card border-0 animate-slide-in">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">First Name</label>
                    <Input 
                      placeholder="John" 
                      className="border-primary/20 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">Last Name</label>
                    <Input 
                      placeholder="Doe" 
                      className="border-primary/20 focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Email</label>
                  <Input 
                    type="email" 
                    placeholder="john.doe@example.com" 
                    className="border-primary/20 focus:ring-primary focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Subject</label>
                  <Input 
                    placeholder="Regarding job opportunity..." 
                    className="border-primary/20 focus:ring-primary focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Message</label>
                  <Textarea 
                    placeholder="Tell me about the opportunity..."
                    rows={6}
                    className="border-primary/20 focus:ring-primary focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:bg-primary-glow transition-all duration-300 shadow-hover"
                  size="lg"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
