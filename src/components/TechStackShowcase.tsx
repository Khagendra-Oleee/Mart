import { Database, Smartphone, Zap } from 'lucide-react';

const TechStackShowcase = () => {
  const technologies = [
    {
      name: 'React',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s',
      description: 'Modern UI with component-based architecture',
      color: 'bg-blue-500/10 text-blue-600 border-blue-200',
      isImage: true,
    },
    {
      name: 'Node.js',
      icon: Zap,
      description: 'Scalable backend with JavaScript runtime',
      color: 'bg-green-500/10 text-green-600 border-green-200',
      isImage: false,
    },
    {
      name: 'PHP',
      icon: 'https://pngdownload.io/wp-content/uploads/2024/02/PHP-Logo-symbol-of-the-scripting-language-web-development-transparent-PNG-image-768x534.webp',
      description: 'Robust server-side scripting for web applications',
      color: 'bg-purple-500/10 text-purple-600 border-purple-200',
      isImage: true,
    },
    {
      name: 'Java',
      icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968282.png',
      description: 'Enterprise-grade applications with security focus',
      color: 'bg-orange-500/10 text-orange-600 border-orange-200',
      isImage: true,
    },
    {
      name: 'MySQL',
      icon: Database,
      description: 'Reliable data storage and management',
      color: 'bg-cyan-500/10 text-cyan-600 border-cyan-200',
      isImage: false,
    },
    {
      name: 'Tailwind CSS',
      icon: Smartphone,
      description: 'Responsive design with utility-first approach',
      color: 'bg-teal-500/10 text-teal-600 border-teal-200',
      isImage: false,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
              Modern Technology Stack
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto font-medium leading-relaxed">
            We leverage cutting-edge technologies to build
            <span className="text-blue-700 font-semibold"> fast, secure, and scalable</span> web applications that drive business growth.
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
                <div className={`w-20 h-20 rounded-2xl ${tech.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                  {tech.isImage ? (
                    <img
                      src={tech.icon as string}
                      alt={`${tech.name} icon`}
                      className="h-10 w-10 object-contain"
                    />
                  ) : (
                    <Icon className="h-10 w-10" />
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                  {tech.name}
                </h3>
                
                <p className="text-slate-600 leading-relaxed font-medium">
                  {tech.description}
                </p>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-xl text-slate-600 mb-8 font-medium">
            Ready to build something amazing together?
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg px-10 py-5 rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechStackShowcase;