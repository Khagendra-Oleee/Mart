import { ExternalLink, Github, GraduationCap, ShoppingCart, User, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PortfolioGrid = () => {
  const projects = [
    {
      title: 'University Portal System',
      category: 'College',
      icon: GraduationCap,
      image: '/placeholder.svg',
      description: 'Complete student management system with course registration, grade tracking, and faculty portals.',
      tech: ['React', 'Node.js', 'MySQL', 'Express'],
      features: ['Student Registration', 'Course Management', 'Grade Portal', 'Admin Dashboard'],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: 'E-Commerce Platform',
      category: 'eCommerce',
      icon: ShoppingCart,
      image: '/placeholder.svg',
      description: 'Modern online store with payment integration, inventory management, and customer analytics.',
      tech: ['React', 'PHP', 'MySQL', 'Stripe'],
      features: ['Payment Gateway', 'Inventory System', 'Customer Analytics', 'Admin Panel'],
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
            <div key={index} className="project-card group">
              {/* Project Image */}
              <div className="relative overflow-hidden bg-muted h-64">
                <div className="absolute inset-0 bg-gradient-accent opacity-80 flex items-center justify-center">
                  <Icon className="w-16 h-16 text-white" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <div className="flex space-x-2">
                    <a href={project.links.demo} className="p-2 bg-muted rounded-lg hover:bg-accent hover:text-white transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a href={project.links.github} className="p-2 bg-muted rounded-lg hover:bg-accent hover:text-white transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-1 mb-6 text-sm">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to="/portfolio">
                  <Button variant="outline" className="w-full btn-outline-hero">
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