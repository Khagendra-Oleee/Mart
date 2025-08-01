import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'EduConnect - College Portal',
      description: 'Complete student management system with course enrollment, grade tracking, and communication tools.',
      image: '/api/placeholder/600/400',
      tags: ['College', 'React', 'PHP', 'MySQL'],
      category: 'Education',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'ShopFlow - eCommerce Platform',
      description: 'Modern online shopping experience with payment integration, inventory management, and analytics.',
      image: '/api/placeholder/600/400',
      tags: ['eCommerce', 'Node.js', 'React', 'Stripe'],
      category: 'Business',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'DevPortfolio - Personal Showcase',
      description: 'Responsive portfolio website with blog, project gallery, and contact integration.',
      image: '/api/placeholder/600/400',
      tags: ['Portfolio', 'React', 'Tailwind', 'API'],
      category: 'Personal',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'BizSuite - Business Dashboard',
      description: 'Comprehensive business management tool with analytics, CRM, and reporting features.',
      image: '/api/placeholder/600/400',
      tags: ['Business', 'Java', 'React', 'Charts'],
      category: 'Enterprise',
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our recent work across different industries and platforms. 
            Each project showcases our commitment to quality and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card group"
              style={{
                animationDelay: `${index * 0.2}s`,
                animation: 'fadeInUp 0.8s ease-out forwards',
                opacity: 0,
              }}
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                <div className="text-6xl opacity-20">
                  {project.category === 'Education' && '🎓'}
                  {project.category === 'Business' && '🛒'}
                  {project.category === 'Personal' && '👤'}
                  {project.category === 'Enterprise' && '🏢'}
                </div>
                

                
                {/* Overlay with links */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-700/20 flex items-center justify-center space-x-2 sm:space-x-4 p-4 group-hover:bg-gradient-to-br group-hover:from-blue-600/95 group-hover:to-indigo-700/95 transition-all duration-300">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-blue-600 border-blue-600 bg-white/90 backdrop-blur-sm hover:bg-white hover:text-blue-600 text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 transition-all duration-200 shadow-lg"
                  >
                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Live Demo</span>
                    <span className="sm:hidden">Demo</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-blue-600 border-blue-600 bg-white/90 backdrop-blur-sm hover:bg-white hover:text-blue-600 text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 transition-all duration-200 shadow-lg"
                  >
                    <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Code</span>
                    <span className="sm:hidden">Git</span>
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 gap-2 sm:gap-0">
                  <Badge variant="secondary" className="text-accent text-xs sm:text-sm">
                    {project.category}
                  </Badge>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-primary mb-3 group-hover:text-accent transition-all duration-300 ease-out">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-2">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Link to="/portfolio" className="w-full sm:w-auto">
                    <Button variant="ghost" className="btn-case-study group w-full sm:w-auto text-sm sm:text-base">
                      <span className="flex items-center justify-center sm:justify-start">
                        <span className="hidden sm:inline">View Case Study</span>
                        <span className="sm:hidden">Case Study</span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center">
          <Link to="/portfolio">
            <Button className="btn-outline-hero">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;