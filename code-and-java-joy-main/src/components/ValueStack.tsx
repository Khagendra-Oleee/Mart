import { Search, Monitor, Smartphone, Shield, Zap, Code } from 'lucide-react';

const ValueStack = () => {
  const values = [
    {
      icon: Search,
      title: 'SEO Best Practices',
      description: 'Every website we build is optimized for search engines to help you rank higher and attract more visitors.',
    },
    {
      icon: Monitor,
      title: 'Cross-Browser Compatibility',
      description: 'Your website will work perfectly across all modern browsers, ensuring a consistent experience for all users.',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Fast-loading websites with optimized code, compressed images, and efficient caching strategies.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Responsiveness',
      description: 'Beautiful, functional designs that adapt seamlessly to all screen sizes and devices.',
    },
    {
      icon: Shield,
      title: 'Security & Reliability',
      description: 'Robust security measures and reliable hosting solutions to keep your website safe and online.',
    },
    {
      icon: Code,
      title: 'Modern Tech Stack',
      description: 'Built with the latest technologies and frameworks for scalability, maintainability, and future growth.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-primary mb-6">Why Choose CoffeeandCoding?</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We don't just build websites – we create digital experiences that drive results and grow with your business.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl hover:bg-card hover:shadow-card transition-all duration-300"
            >
              {/* Icon */}
              <div className="inline-flex p-4 bg-accent/10 rounded-xl mb-6 group-hover:bg-accent/20 transition-colors">
                <Icon className="w-8 h-8 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                {value.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Stats Section */}
      <div className="mt-20 bg-gradient-accent rounded-2xl p-12 text-center text-white">
        <h3 className="text-3xl font-bold mb-8">Trusted by Businesses Worldwide</h3>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-white/80">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">100%</div>
            <div className="text-white/80">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">24h</div>
            <div className="text-white/80">Average Response Time</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">5+</div>
            <div className="text-white/80">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueStack;