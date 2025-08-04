import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PortfolioGrid from '@/components/PortfolioGrid';
import PageTransitionSkeleton from '@/components/PageTransitionSkeleton';

const Portfolio = () => {
  return (
    <PageTransitionSkeleton skeletonType="project" skeletonCount={9}>
      <div className="min-h-screen bg-slate-100">
        <Navigation />
        <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-blue-50/30" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
                Our
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Portfolio
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 mb-8 leading-relaxed">
                Explore our diverse collection of web development projects, from college portals to enterprise eCommerce solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <PortfolioGrid />
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </PageTransitionSkeleton>
  );
};

export default Portfolio;