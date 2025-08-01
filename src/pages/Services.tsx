import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServicesGrid from '@/components/ServicesGrid';
import ValueStack from '@/components/ValueStack';

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold text-primary mb-6">
                Web Development Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                From college portals to enterprise eCommerce — explore our full-stack web development services designed to help your business thrive online.
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
                <span className="bg-primary/10 px-3 py-1 rounded-full">React</span>
                <span className="bg-primary/10 px-3 py-1 rounded-full">Node.js</span>
                <span className="bg-primary/10 px-3 py-1 rounded-full">PHP</span>
                <span className="bg-primary/10 px-3 py-1 rounded-full">Java</span>
                <span className="bg-primary/10 px-3 py-1 rounded-full">MySQL</span>
                <span className="bg-primary/10 px-3 py-1 rounded-full">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ServicesGrid />
          </div>
        </section>

        {/* Value Stack */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <ValueStack />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;