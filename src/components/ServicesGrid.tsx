import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  ShoppingCart, 
  GraduationCap, 
  User,
  Building, 
  Server, 
  Database 
} from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    {
      icon: GraduationCap,
      title: 'College Website Development',
      description: 'Modern, responsive websites for educational institutions with student portals, course management, and administrative features.',
      features: ['Student Management Systems', 'Course Registration', 'Faculty Portals', 'Event Management'],
      cta: 'View College Projects',
      gradient: 'from-blue-500/10 to-indigo-500/10',
      iconColor: 'text-blue-600',
    },
    {
      icon: ShoppingCart,
      title: 'eCommerce Web Development',
      description: 'Full-featured online stores with secure payment processing, inventory management, and customer analytics.',
      features: ['Payment Integration', 'Inventory Management', 'Customer Analytics', 'Mobile Optimization'],
      cta: 'See eCommerce Sites',
      gradient: 'from-green-500/10 to-emerald-500/10',
      iconColor: 'text-green-600',
    },
    {
      icon: User,
      title: 'Personal Portfolio Sites',
      description: 'Professional portfolio websites that showcase your work, skills, and experience to potential clients or employers.',
      features: ['Responsive Design', 'Project Showcase', 'Contact Forms', 'SEO Optimization'],
      cta: 'View Portfolio Examples',
      gradient: 'from-purple-500/10 to-violet-500/10',
      iconColor: 'text-purple-600',
    },
    {
      icon: Building,
      title: 'Business Websites',
      description: 'Corporate websites that establish your brand presence and convert visitors into customers with modern design.',
      features: ['Brand Integration', 'Lead Generation', 'Content Management', 'Analytics Integration'],
      cta: 'Explore Business Sites',
      gradient: 'from-orange-500/10 to-red-500/10',
      iconColor: 'text-orange-600',
    },
    {
      icon: Server,
      title: 'API & Backend Systems',
      description: 'Robust backend systems and APIs to power your applications with scalable architecture and secure data handling.',
      features: ['RESTful APIs', 'Database Design', 'Authentication', 'Third-party Integrations'],
      cta: 'Learn About APIs',
      gradient: 'from-teal-500/10 to-cyan-500/10',
      iconColor: 'text-teal-600',
    },
    {
      icon: Database,
      title: 'Database Design & Integration',
      description: 'Efficient database solutions with optimized queries, data modeling, and seamless integration with your applications.',
      features: ['Data Modeling', 'Query Optimization', 'Migration Services', 'Backup Solutions'],
      cta: 'Database Solutions',
      gradient: 'from-gray-500/10 to-slate-500/10',
      iconColor: 'text-gray-600',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 sm:mb-6">Our Services</h2>
        <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-2 sm:px-0">
          We offer comprehensive web development solutions tailored to your specific needs and industry requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="group bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className={`inline-flex p-3 sm:p-4 rounded-xl bg-gradient-to-br ${service.gradient} mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`w-6 sm:w-8 h-6 sm:h-8 ${service.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6 sm:mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-3 flex-shrink-0 group-hover:bg-blue-500 transition-colors duration-300" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="w-full border-slate-300 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 text-sm sm:text-base py-2 sm:py-3 transition-all duration-300 group-hover:shadow-md"
                >
                  {service.cta}
                </Button>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12 sm:mt-16">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto shadow-sm">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">
            Need Something Custom?
          </h3>
          <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 px-2 sm:px-0">
            Don't see exactly what you're looking for? We specialize in custom solutions tailored to your unique requirements.
          </p>
          <Link to="/contact">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 hover:shadow-lg">
              Discuss Your Project
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;