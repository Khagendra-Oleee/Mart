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
        <h2 className="text-4xl font-bold text-slate-800 mb-6">Our Journey</h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          From our humble beginnings to becoming a trusted web development partner, 
          here's how we've grown over the years.
        </p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 md:-ml-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-300 via-slate-400 to-slate-500"></div>

        <div className="space-y-16">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 md:-ml-8 w-16 h-16 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10 transform hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-20' : 'md:pl-20'} ml-24 md:ml-0`}>
                  <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl font-bold text-slate-700 mr-4">{milestone.year}</span>
                      <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                        {milestone.highlight}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">
                      {milestone.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed text-lg">
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
      <div className="mt-20 bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-12 text-center border border-slate-200">
        <h3 className="text-3xl font-bold text-slate-800 mb-6">Where We Are Today</h3>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <div className="text-4xl font-bold text-slate-700 mb-2">5+</div>
            <div className="text-slate-600 font-medium">Years of Excellence</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <div className="text-4xl font-bold text-slate-700 mb-2">50+</div>
            <div className="text-slate-600 font-medium">Projects Delivered</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <div className="text-4xl font-bold text-slate-700 mb-2">100%</div>
            <div className="text-slate-600 font-medium">Client Satisfaction</div>
          </div>
        </div>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          We continue to evolve and grow, always staying ahead of the latest web development trends 
          and technologies to serve our clients better.
        </p>
      </div>
    </div>
  );
};

export default JourneyTimeline;