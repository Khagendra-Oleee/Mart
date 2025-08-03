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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto font-medium leading-relaxed">
            Explore our recent work across different industries and platforms.
            Each project showcases our commitment to
            <span className="text-blue-700 font-semibold"> quality and innovation</span>.
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
              {/* Enhanced Project Image */}
              <div className="relative h-72 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 flex items-center justify-center overflow-hidden">
                <div className="text-8xl opacity-15 filter grayscale">
                  {project.category === 'Education' && '🎓'}
                  {project.category === 'Business' && '🛒'}
                  {project.category === 'Personal' && '👤'}
                  {project.category === 'Enterprise' && '🏢'}
                </div>
                
                {/* Professional overlay pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-blue-100/30"></div>
                
                {/* Enhanced Overlay with links */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/10 to-blue-900/10 flex items-center justify-center space-x-3 sm:space-x-4 p-4 opacity-0 group-hover:opacity-100 group-hover:bg-gradient-to-br group-hover:from-slate-900/95 group-hover:to-blue-900/95 transition-all duration-500">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-white border-white/80 bg-white/10 backdrop-blur-md hover:bg-white hover:text-slate-900 text-sm px-4 py-2 transition-all duration-300 shadow-xl font-semibold"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">Live Demo</span>
                    <span className="sm:hidden">Demo</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-white border-white/80 bg-black/80 backdrop-blur-md hover:bg-black hover:text-white text-sm px-4 py-2 transition-all duration-300 shadow-xl font-semibold"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">Code</span>
                    <span className="sm:hidden">Git</span>
                  </Button>
                </div>
              </div>

              {/* Enhanced Project Content */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2 sm:gap-0">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1">
                    {project.category}
                  </Badge>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-slate-300 text-slate-600">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 group-hover:text-blue-700 transition-all duration-300 ease-out">
                  {project.title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed font-medium text-lg group-hover:text-slate-700 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-2">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-slate-300 text-slate-600">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Link to="/portfolio" className="w-full sm:w-auto">
                    <Button variant="ghost" className="text-blue-700 hover:text-white hover:bg-blue-700 px-4 py-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105 group w-full sm:w-auto text-sm sm:text-base">
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

        {/* Enhanced View All Projects CTA */}
        <div className="text-center">
          <Link to="/portfolio">
            <Button className="border-2 border-slate-300 hover:border-blue-500 text-slate-700 hover:text-blue-700 bg-white/80 backdrop-blur-sm hover:bg-blue-50 text-lg px-10 py-5 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:shadow-slate-200 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1">
              View All Projects
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;