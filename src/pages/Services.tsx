import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServicesGrid from '@/components/ServicesGrid';
import ValueStack from '@/components/ValueStack';

const Services = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-8">
                Web Development Services
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed">
                From college portals to enterprise eCommerce — explore our full-stack web development services designed to help your business thrive online.
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm text-slate-600">
                <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">React</span>
                <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">Node.js</span>
                <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">PHP</span>
                <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">Java</span>
                <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">MySQL</span>
                <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ServicesGrid />
          </div>
        </section>

        {/* Value Stack */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ValueStack />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;