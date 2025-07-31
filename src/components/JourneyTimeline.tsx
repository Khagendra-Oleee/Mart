import { Calendar, Lightbulb, Rocket, Trophy, Users, Globe } from 'lucide-react';

const JourneyTimeline = () => {
  const milestones = [
    {
      year: '2019',
      icon: Lightbulb,
      title: 'The Beginning',
      description: 'Founded CoffeeandCoding with a simple mission: create beautiful, functional websites that help businesses grow.',
      highlight: 'First Client Project',
    },
    {
      year: '2020',
      icon: Rocket,
      title: 'Growth & Expansion',
      description: 'Expanded our services to include full-stack development and began working with educational institutions.',
      highlight: '10+ Projects Completed',
    },
    {
      year: '2021',
      icon: Users,
      title: 'Team Building',
      description: 'Built a remote-first team of talented developers and designers, focusing on modern technologies and best practices.',
      highlight: 'Remote Team Established',
    },
    {
      year: '2022',
      icon: Trophy,
      title: 'Excellence Recognition',
      description: 'Achieved 100% client satisfaction rate and began specializing in complex eCommerce and college portal solutions.',
      highlight: '100% Client Satisfaction',
    },
    {
      year: '2023',
      icon: Globe,
      title: 'Global Reach',
      description: 'Expanded our client base internationally and developed expertise in modern frameworks like React and Node.js.',
      highlight: 'International Clients',
    },
    {
      year: '2024',
      icon: Calendar,
      title: 'Innovation Focus',
      description: 'Currently pioneering new approaches to web development with AI integration and advanced performance optimization.',
      highlight: '50+ Projects & Counting',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-primary mb-6">Our Journey</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          From our humble beginnings to becoming a trusted web development partner, 
          here's how we've grown over the years.
        </p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 md:-ml-0.5 top-0 bottom-0 w-0.5 bg-accent/30"></div>

        <div className="space-y-12">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 md:-ml-6 w-12 h-12 bg-accent rounded-full flex items-center justify-center border-4 border-background shadow-lg z-10">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-16' : 'md:pl-16'} ml-20 md:ml-0`}>
                  <div className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl font-bold text-accent mr-4">{milestone.year}</span>
                      <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                        {milestone.highlight}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      {milestone.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Current Status */}
      <div className="mt-20 bg-gradient-subtle rounded-2xl p-12 text-center">
        <h3 className="text-3xl font-bold text-primary mb-6">Where We Are Today</h3>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-4xl font-bold text-accent mb-2">5+</div>
            <div className="text-muted-foreground">Years of Excellence</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2">50+</div>
            <div className="text-muted-foreground">Projects Delivered</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2">100%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We continue to evolve and grow, always staying ahead of the latest web development trends 
          and technologies to serve our clients better.
        </p>
      </div>
    </div>
  );
};

export default JourneyTimeline;