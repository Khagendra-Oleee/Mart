import { Mail, Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import logoImage from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
    { href: '/blog', label: 'Blog' },
  ];

  const services = [
    'College Website Development',
    'eCommerce Solutions',
    'Portfolio Websites',
    'Business Applications',
    'API Development',
    'Database Design',
  ];

  const technologies = [
    { name: 'React', color: 'text-blue-600' },
    { name: 'Node.js', color: 'text-green-600' },
    { name: 'PHP', color: 'text-purple-600' },
    { name: 'Java', color: 'text-orange-600' },
    { name: 'MySQL', color: 'text-cyan-600' },
    { name: 'Tailwind', color: 'text-teal-600' },
  ];

  return (
    <footer className="bg-gradient-to-b from-transparent via-amber-50/30 to-amber-100 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <img 
                  src={logoImage} 
                  alt="CoffeeandCoding Logo" 
                  className="h-12 w-auto" 
                />
                <span className="text-lg font-poppins font-bold text-slate-800">
                  CoffeeandCoding
                </span>
              </Link>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                Empowering businesses and institutions with modern web solutions. 
                We turn your digital ideas into reality with cutting-edge technology.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-slate-800">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-slate-600 hover:text-blue-600 transition-colors link-animated"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-slate-800">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-slate-600 text-sm">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Tech Stack */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-slate-800">Stay Updated</h3>
              <p className="text-slate-600 mb-4 text-sm">
                Get the latest insights on web development and our newest projects.
              </p>
              
              <div className="flex space-x-2 mb-6">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-slate-100 border-slate-200 text-slate-800 placeholder:text-slate-600"
                />
                <Button size="sm" className="btn-hero">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              <div>
                <h4 className="font-medium mb-3 text-slate-800">Technologies We Use</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech.name}
                      className={`text-xs px-2 py-1 bg-slate-100 rounded-full ${tech.color}`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-600 text-sm mb-4 md:mb-0">
              © {currentYear} CoffeeandCoding. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-slate-600 hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-600 hover:text-blue-600 transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-slate-600 hover:text-blue-600 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;