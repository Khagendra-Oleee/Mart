import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              style={{
                animationDelay: `${index * 0.2}s`,
                animation: 'fadeInUp 0.8s ease-out forwards',
                opacity: 0,
              }}
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-to-br from-accent/20 to-coffee-brown/20 flex items-center justify-center">
                <div className="text-6xl opacity-20">
                  {project.category === 'Education' && '🎓'}
                  {project.category === 'Business' && '🛒'}
                  {project.category === 'Personal' && '👤'}
                  {project.category === 'Enterprise' && '🏢'}
                </div>
                
                {/* Overlay with links */}
                <div className="absolute inset-0 bg-coffee-brown/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-white border-white hover:bg-white hover:text-coffee-brown"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-white border-white hover:bg-white hover:text-coffee-brown"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-accent">
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

                <h3 className="text-2xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="ghost" className="text-accent hover:text-accent/80 p-0">
                    View Case Study
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center">
          <Button className="btn-outline-hero">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;