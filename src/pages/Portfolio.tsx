import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PortfolioGrid from '@/components/PortfolioGrid';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-8">
                Project Portfolio
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed">
                Explore real-world web projects developed using React, PHP, Node.js, Java, and MySQL. 
                Each project showcases our commitment to quality, performance, and user experience.
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                <span className="bg-white text-slate-700 px-4 py-2 rounded-full shadow-sm border border-slate-200 font-medium">All Projects</span>
                <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-800 cursor-pointer transition-colors">College</span>
                <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-800 cursor-pointer transition-colors">eCommerce</span>
                <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-800 cursor-pointer transition-colors">Portfolio</span>
                <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-800 cursor-pointer transition-colors">Business</span>
                <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-800 cursor-pointer transition-colors">API</span>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <PortfolioGrid />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;