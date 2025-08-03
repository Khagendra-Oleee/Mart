import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImage from '@/assets/logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  const handleLogoClick = (e: React.MouseEvent) => {
    // If we're already on the home page, prevent navigation and scroll to top
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // If we're on another page, let the Link component handle navigation to home
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group" onClick={handleLogoClick}>
            <div className="relative">
              <img
                src={logoImage}
                alt="CoffeeandCoding Logo"
                className="h-10 sm:h-12 w-auto transition-all duration-300 group-hover:scale-110 group-hover:rotate-2 relative z-10"
              />
              
              {/* Animated Steam/Vapor Effect */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 z-0">
                {/* Steam Particle 1 */}
                <div className="absolute w-1 h-3 bg-gradient-to-b from-blue-200/60 to-transparent rounded-full steam-particle-1"></div>
                {/* Steam Particle 2 */}
                <div className="absolute w-0.5 h-2 bg-gradient-to-b from-blue-300/50 to-transparent rounded-full steam-particle-2"></div>
                {/* Steam Particle 3 */}
                <div className="absolute w-1.5 h-4 bg-gradient-to-b from-indigo-200/40 to-transparent rounded-full steam-particle-3"></div>
                {/* Steam Particle 4 */}
                <div className="absolute w-0.5 h-2.5 bg-gradient-to-b from-blue-200/70 to-transparent rounded-full steam-particle-4"></div>
                {/* Steam Particle 5 */}
                <div className="absolute w-1 h-3.5 bg-gradient-to-b from-indigo-300/30 to-transparent rounded-full steam-particle-5"></div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent leading-tight">
                CoffeeandCoding
              </span>
              <span className="text-xs sm:text-sm text-slate-500 font-medium tracking-wide">
                Web Development Agency
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`relative font-semibold text-sm xl:text-base transition-all duration-300 group ${
                  isActive(item.href)
                    ? 'text-blue-600'
                    : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full ${
                  isActive(item.href) ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/portfolio">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 border-0">
                <span className="text-sm xl:text-base">View Portfolio</span>
                <div className="ml-2 w-4 h-4 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors duration-200"
            >
              {isOpen ? (
                <X className="h-5 w-5 text-slate-700" />
              ) : (
                <Menu className="h-5 w-5 text-slate-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-lg border-t border-slate-200/60 shadow-xl rounded-b-2xl">
            <div className="px-4 py-6 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl font-semibold transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-50 border border-blue-200'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Link to="/portfolio" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <span className="text-sm">View Portfolio</span>
                    <div className="ml-2 w-4 h-4 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;