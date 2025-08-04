import { useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Home, ArrowLeft, Search, ExternalLink, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (command: string, action: string, params: Record<string, unknown>) => void;
  }
}

const NotFound = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.title = '404 - Page Not Found | CoffeeandCoding';
  }, []);

  const handleGoHome = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate('/');
    }, 300);
  };

  const handleGoBack = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate(-1);
    }, 300);
  };

  // Analytics tracking
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: '404 - Page Not Found',
        page_location: window.location.href,
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Assuming Navigation and Footer components are available */}
      {/* <Navigation /> */}
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* 404 Number */}
            <div className="mb-8">
              <h1 className="text-8xl sm:text-9xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                404
              </h1>
            </div>

            {/* Main Message */}
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
                Page Not Found
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
                The page you're looking for doesn't exist or has been moved. Let's get you back on track.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                onClick={handleGoHome}
                disabled={isLoading}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 border-0"
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Button>
              <Button
                onClick={handleGoBack}
                disabled={isLoading}
                variant="outline"
                className="w-full border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400 transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
            </div>

            {/* Quick Navigation */}
            <div className="mb-16">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Quick Navigation</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link to="/about" className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-200">
                  <div className="text-blue-600 font-semibold">About Us</div>
                  <div className="text-sm text-slate-600">Learn about our team</div>
                </Link>
                <Link to="/services" className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-200">
                  <div className="text-blue-600 font-semibold">Services</div>
                  <div className="text-sm text-slate-600">View our offerings</div>
                </Link>
                <Link to="/portfolio" className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-200">
                  <div className="text-blue-600 font-semibold">Portfolio</div>
                  <div className="text-sm text-slate-600">See our work</div>
                </Link>
                <Link to="/contact" className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-200">
                  <div className="text-blue-600 font-semibold">Contact</div>
                  <div className="text-sm text-slate-600">Get in touch</div>
                </Link>
              </div>
            </div>

            {/* Need Help Section */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 mb-16">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Need Help?</h3>
              <p className="text-slate-600 mb-6">
                Can't find what you're looking for? Our team is here to help you navigate our website.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  disabled={isLoading}
                  variant="outline"
                  className="flex-1 border-blue-300 text-blue-700 hover:bg-blue-100"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Support
                </Button>
                <a 
                  href="tel:+1234567890" 
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </a>
              </div>
            </div>

            {/* Search Suggestion */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 mb-16">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Looking for something specific?</h3>
              <p className="text-slate-600 mb-6">
                Try searching for what you need, or browse our most popular pages below.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {['web development', 'college website', 'ecommerce', 'portfolio', 'contact'].map((term) => (
                  <span key={term} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm hover:bg-slate-200 cursor-pointer transition-colors">
                    {term}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical Details (Development Mode) */}
            {process.env.NODE_ENV === 'development' && (
              <div className="bg-slate-800 text-slate-200 rounded-2xl p-6 text-left">
                <h4 className="font-semibold mb-2">Technical Details:</h4>
                <div className="text-sm space-y-1">
                  <div><span className="text-slate-400">Path:</span> {location.pathname}</div>
                  <div><span className="text-slate-400">Timestamp:</span> {new Date().toISOString()}</div>
                  <div><span className="text-slate-400">User Agent:</span> {navigator.userAgent.substring(0, 50)}...</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default NotFound;
