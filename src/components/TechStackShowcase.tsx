import { Code, Database, Globe, Smartphone, Zap, Shield } from 'lucide-react';

const TechStackShowcase = () => {
  const technologies = [
    {
      name: 'React',
      icon: Code,
      description: 'Modern UI with component-based architecture',
      color: 'bg-blue-500/10 text-blue-600 border-blue-200',
    },
    {
      name: 'Node.js',
      icon: Zap,
      description: 'Scalable backend with JavaScript runtime',
      color: 'bg-green-500/10 text-green-600 border-green-200',
    },
    {
      name: 'PHP',
      icon: Globe,
      description: 'Robust server-side scripting for web applications',
      color: 'bg-purple-500/10 text-purple-600 border-purple-200',
    },
    {
      name: 'Java',
      icon: Shield,
      description: 'Enterprise-grade applications with security focus',
      color: 'bg-orange-500/10 text-orange-600 border-orange-200',
    },
    {
      name: 'MySQL',
      icon: Database,
      description: 'Reliable data storage and management',
      color: 'bg-cyan-500/10 text-cyan-600 border-cyan-200',
    },
    {
      name: 'Tailwind CSS',
      icon: Smartphone,
      description: 'Responsive design with utility-first approach',
      color: 'bg-teal-500/10 text-teal-600 border-teal-200',
    },
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Modern Technology Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build fast, secure, and scalable 
            web applications that drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="tech-card group cursor-pointer"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards',
                  opacity: 0,
                }}
              >
                <div className={`w-16 h-16 rounded-2xl ${tech.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                  {tech.name}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {tech.description}
                </p>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to build something amazing together?
          </p>
          <button className="btn-hero">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechStackShowcase;