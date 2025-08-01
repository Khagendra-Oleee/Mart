import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
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
            <Link to="/contact">
              <Button className="btn-hero text-lg px-10 py-4 group">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="btn-outline-hero text-lg px-10 py-4 group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                View Our Work
              </Button>
            </Link>
          </div>

          {/* Tech Stack Preview */}
          <div className="mt-16 animate-[fadeInUp_1s_ease-out_0.9s_both]">
            <p className="text-muted-foreground mb-8 text-lg">
              Built with modern technologies
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {/* React */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-5.303 2.715a2.11 2.11 0 0 0-.625 1.282c-.037.207.032.415.188.567.155.152.38.235.61.23.23-.005.45-.098.6-.25.15-.152.24-.36.24-.57 0-.21-.09-.418-.24-.57-.15-.152-.37-.245-.6-.25-.23-.005-.455.078-.61.23-.156.152-.225.36-.188.567.037.207.188.415.625 1.282 2.196 1.755 3.957 2.715 5.303 2.715 1.346 0 3.107-.96 5.303-2.715.437-.867.588-1.075.625-1.282.037-.207-.032-.415-.188-.567-.155-.152-.38-.235-.61-.23-.23.005-.45.098-.6.25-.15.152-.24.36-.24.57 0 .21.09.418.24.57.15.152.37.245.6.25.23.005.455-.078.61-.23.156-.152.225-.36.188-.567-.037-.207-.188-.415-.625-1.282-2.196-1.755-3.957-2.715-5.303-2.715z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium">React</span>
              </div>
              
              {/* Node.js */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.368,1.367 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.604 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,0.136,0.069,0.261,0.184,0.331c0.356,0.216,1.451,0.848,3.721,0.848c2.514,0,4.299-1.086,4.299-2.973"/>
                  </svg>
                </div>
                <span className="text-sm font-medium">Node.js</span>
              </div>
              
              {/* PHP */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-6v2h2v-2h1a2.5 2.5 0 0 0 0-5h-4a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-1a2.5 2.5 0 0 0 0 5h-4a.5.5 0 0 1 0 1z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium">PHP</span>
              </div>
              
              {/* Java */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8.851 18.56s-.917.534-1.943.534c-1.025 0-1.025-.534-1.025-.534V9.72H3.822v8.821c0 2.05 1.22 3.129 3.086 3.129 1.866 0 3.086-1.079 3.086-3.129V9.72H8.851v8.84zm6.535-5.903c0-.534-.383-.534-.383-.534s.383 0 .383.534v3.721c0 .534.383.534.383.534s-.383 0-.383-.534v-3.721zm-1.45-3.721c0-.534-.383-.534-.383-.534s.383 0 .383.534v8.821c0 .534.383.534.383.534s-.383 0-.383-.534V9.72zm-1.45 0c0-.534-.383-.534-.383-.534s.383 0 .383.534v8.821c0 .534.383.534.383.534s-.383 0-.383-.534V9.72z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium">Java</span>
              </div>
              
              {/* Tailwind CSS */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-cyan-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                  </svg>
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