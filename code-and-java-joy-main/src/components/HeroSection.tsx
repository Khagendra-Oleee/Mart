import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      
      {/* Hero Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroImage} 
          alt="CoffeeandCoding workspace" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-float absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-accent rounded-full opacity-20" />
        <div className="hero-float absolute top-1/3 right-1/4 w-12 h-12 bg-coffee-brown/20 rounded-full opacity-30" style={{ animationDelay: '2s' }} />
        <div className="hero-float absolute bottom-1/3 left-1/3 w-20 h-20 bg-accent/10 rounded-full opacity-25" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-[fadeInUp_1s_ease-out]">
            <span className="text-gradient">Code That Converts.</span>
            <br />
            <span className="text-primary">Design That Delivers.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-[fadeInUp_1s_ease-out_0.3s_both]">
            Empowering startups, colleges, and brands with high-performing websites 
            built on modern technology stacks.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-[fadeInUp_1s_ease-out_0.6s_both]">
            <Button className="btn-hero text-lg px-10 py-4 group">
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="lg" className="btn-outline-hero text-lg px-10 py-4 group">
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              View Our Work
            </Button>
          </div>

          {/* Tech Stack Preview */}
          <div className="mt-16 animate-[fadeInUp_1s_ease-out_0.9s_both]">
            <p className="text-muted-foreground mb-8 text-lg">
              Built with modern technologies
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                  <span className="text-accent font-bold text-sm">R</span>
                </div>
                <span className="text-sm font-medium">React</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 font-bold text-sm">N</span>
                </div>
                <span className="text-sm font-medium">Node.js</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">P</span>
                </div>
                <span className="text-sm font-medium">PHP</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-sm">J</span>
                </div>
                <span className="text-sm font-medium">Java</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-cyan-600 font-bold text-sm">T</span>
                </div>
                <span className="text-sm font-medium">Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;