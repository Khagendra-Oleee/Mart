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
        <h2 className="text-4xl font-bold text-slate-800 mb-6">Why Choose CoffeeandCoding?</h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          We don't just build websites – we create digital experiences that drive results and grow with your business.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl hover:bg-slate-50 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="inline-flex p-4 bg-blue-100 rounded-xl mb-6 group-hover:bg-blue-200 transition-colors">
                <Icon className="w-8 h-8 text-blue-600" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-700 transition-colors">
                {value.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                {value.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Stats Section */}
      <div className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12 text-center">
        <h3 className="text-3xl font-bold mb-8 text-slate-800">Trusted by Businesses Worldwide</h3>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-4xl font-bold mb-2 text-slate-800">50+</div>
            <div className="text-slate-700 font-medium">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2 text-slate-800">100%</div>
            <div className="text-slate-700 font-medium">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2 text-slate-800">24h</div>
            <div className="text-slate-700 font-medium">Average Response Time</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2 text-slate-800">5+</div>
            <div className="text-slate-700 font-medium">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueStack;