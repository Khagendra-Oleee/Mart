import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, GraduationCap, ShoppingCart, User, Building } from 'lucide-react';

const PortfolioGrid = () => {
  const projects = [
    {
      title: 'College Management System',
      category: 'Education',
      icon: GraduationCap,
      image: '/placeholder.svg',
      description: 'Comprehensive college portal with student management, course registration, and faculty administration.',
      tech: ['React', 'Node.js', 'MySQL'],
      features: ['Student Portal', 'Course Management', 'Faculty Dashboard', 'Attendance System'],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: 'E-Commerce Platform',
      category: 'Business',
      icon: ShoppingCart,
      image: '/placeholder.svg',
      description: 'Full-featured online store with payment processing, inventory management, and customer analytics.',
      tech: ['React', 'PHP', 'MySQL'],
      features: ['Payment Gateway', 'Inventory Control', 'Order Management', 'Customer Reviews'],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: 'Designer Portfolio',
      category: 'Portfolio',
      icon: User,
      image: '/placeholder.svg',
      description: 'Stunning portfolio website showcasing creative work with smooth animations and contact integration.',
      tech: ['React', 'Tailwind', 'Framer Motion'],
      features: ['Animation Gallery', 'Contact Form', 'Project Showcase', 'Responsive Design'],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: 'Corporate Website',
      category: 'Business',
      icon: Building,
      image: '/placeholder.svg',
      description: 'Professional business website with CMS integration and lead generation functionality.',
      tech: ['React', 'Java', 'PostgreSQL'],
      features: ['CMS Integration', 'Lead Generation', 'SEO Optimized', 'Analytics'],
      links: {
        demo: '#',
        github: '#'
      }
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <div key={index} className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              {/* Project Image */}
              <div className="relative overflow-hidden bg-slate-100 h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-600 to-slate-700 opacity-90 flex items-center justify-center group-hover:opacity-100 transition-opacity duration-300">
                  <Icon className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <div className="flex space-x-2">
                    <a href={project.links.demo} className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a href={project.links.github} className="p-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-1 mb-6 text-sm">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2 flex-shrink-0 group-hover:bg-blue-500 transition-colors duration-300" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to="/portfolio">
                  <Button variant="outline" className="w-full border-slate-300 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 group-hover:shadow-md">
                    View Case Study
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioGrid;