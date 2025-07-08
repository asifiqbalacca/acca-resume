import { Button } from "./ui/button";
import { Mail, Download, Linkedin, Github } from "lucide-react";
import heroBackground from "../assets/hero-bg.jpg";
import profilePicture from "../assets/profile-picture.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-primary opacity-85"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          {/* Profile Picture */}
          <div className="mb-8">
            <img 
              src={profilePicture} 
              alt="Md Asif Iqbal - ACCA Student"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto shadow-hover border-4 border-white/20 object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Md Asif Iqbal
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 text-primary-foreground/90">
            ACCA Student & Aspiring Finance Professional
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-primary-foreground/80">
            Passionate about accounting and finance with strong analytical skills. 
            Currently pursuing ACCA qualification with a focus on audit, taxation, 
            and financial management.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-hover transition-all duration-300 px-8 py-3"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300 px-8 py-3"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-12">
            <a 
              href="#" 
              className="text-white/70 hover:text-white transition-colors duration-300 p-2"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-white/70 hover:text-white transition-colors duration-300 p-2"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-white/70 hover:text-white transition-colors duration-300 p-2"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70">
        <div className="animate-bounce">
          <div className="w-1 h-16 bg-white/30 rounded-full mx-auto mb-2"></div>
          <span className="text-sm">Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;