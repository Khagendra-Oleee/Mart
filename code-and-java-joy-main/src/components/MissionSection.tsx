import { Target, Heart, Zap, Users } from 'lucide-react';

const MissionSection = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      content: 'To empower businesses and educational institutions with modern, high-performing websites that drive growth and engagement through cutting-edge technology.',
    },
    {
      icon: Heart,
      title: 'Our Passion',
      content: 'We believe great websites are born from the perfect blend of creativity and technical excellence, just like the perfect cup of coffee.',
    },
    {
      icon: Zap,
      title: 'Our Approach',
      content: 'Fast, efficient development using modern frameworks combined with meticulous attention to user experience and performance optimization.',
    },
    {
      icon: Users,
      title: 'Our Commitment',
      content: 'Building long-term partnerships with our clients by delivering exceptional results and providing ongoing support for their digital success.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-primary mb-6">Our Story & Values</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          CoffeeandCoding was born from the simple idea that the best work happens when passion meets expertise. 
          We combine the energy of a great cup of coffee with the precision of clean, efficient code.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-8 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.content}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quote Section */}
      <div className="bg-gradient-accent rounded-2xl p-12 text-center text-white">
        <blockquote className="text-2xl md:text-3xl font-medium mb-6">
          "Great websites aren't just built with code – they're crafted with passion, 
          attention to detail, and a deep understanding of what makes users click."
        </blockquote>
        <cite className="text-lg text-white/80">— The CoffeeandCoding Team</cite>
      </div>
    </div>
  );
};

export default MissionSection;