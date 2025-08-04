import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServicesGrid from '@/components/ServicesGrid';
import ValueStack from '@/components/ValueStack';
import { ArrowRight, CheckCircle, Star, Users, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageTransitionSkeleton from '@/components/PageTransitionSkeleton';

const Services = () => {
  return (
    <PageTransitionSkeleton skeletonType="service" skeletonCount={6}>
      <div className="min-h-screen bg-slate-100">
        <Navigation />
        <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-slate-100" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-5xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-8">
                <Star className="w-4 h-4 mr-2" />
                Professional Web Development Services
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
                Web Development
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 mb-12 leading-relaxed max-w-4xl mx-auto">
                From college portals to enterprise eCommerce — explore our comprehensive web development services designed to help your business thrive in the digital world.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">50+</div>
                  <div className="text-sm text-slate-600">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">100%</div>
                  <div className="text-sm text-slate-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">24h</div>
                  <div className="text-sm text-slate-600">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">5+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                <span className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-slate-200 text-sm font-medium text-slate-700 hover:shadow-md transition-shadow">React</span>
                <span className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-slate-200 text-sm font-medium text-slate-700 hover:shadow-md transition-shadow">Node.js</span>
                <span className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-slate-200 text-sm font-medium text-slate-700 hover:shadow-md transition-shadow">PHP</span>
                <span className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-slate-200 text-sm font-medium text-slate-700 hover:shadow-md transition-shadow">Java</span>
                <span className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-slate-200 text-sm font-medium text-slate-700 hover:shadow-md transition-shadow">MySQL</span>
                <span className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-slate-200 text-sm font-medium text-slate-700 hover:shadow-md transition-shadow">Tailwind CSS</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 border-0">
                    <span className="text-lg">Get Started Today</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button variant="outline" className="border-2 border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400 font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                    <span className="text-lg">View Our Work</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                Why Choose CoffeeandCoding?
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We combine technical expertise with creative design to deliver websites that not only look great but also perform exceptionally well.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-blue-100 hover:to-indigo-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ease-out cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500 ease-out">
                  <Award className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-700 transition-colors duration-300">Quality Assured</h3>
                <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">Every project undergoes rigorous testing and quality checks to ensure excellence.</p>
              </div>
              
              <div className="group text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-green-100 hover:to-emerald-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ease-out cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500 ease-out">
                  <Clock className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-green-700 transition-colors duration-300">Fast Delivery</h3>
                <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">Quick turnaround times without compromising on quality or attention to detail.</p>
              </div>
              
              <div className="group text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-purple-100 hover:to-pink-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ease-out cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500 ease-out">
                  <Users className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-purple-700 transition-colors duration-300">Expert Team</h3>
                <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">Experienced developers and designers dedicated to bringing your vision to life.</p>
              </div>
              
              <div className="group text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-orange-100 hover:to-red-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ease-out cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500 ease-out">
                  <CheckCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-orange-700 transition-colors duration-300">Ongoing Support</h3>
                <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">Continuous support and maintenance to keep your website running smoothly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                Our Services
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Comprehensive web development solutions tailored to your specific needs and industry requirements.
              </p>
            </div>
            <ServicesGrid />
          </div>
        </section>

        {/* Value Stack */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ValueStack />
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </PageTransitionSkeleton>
  );
};

export default Services;