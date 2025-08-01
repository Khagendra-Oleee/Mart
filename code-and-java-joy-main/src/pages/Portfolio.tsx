import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PortfolioGrid from '@/components/PortfolioGrid';

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold text-primary mb-6">
                Project Portfolio
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Explore real-world web projects developed using React, PHP, Node.js, Java, and MySQL. 
                Each project showcases our commitment to quality, performance, and user experience.
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">All Projects</span>
                <span className="bg-muted px-3 py-1 rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors">College</span>
                <span className="bg-muted px-3 py-1 rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors">eCommerce</span>
                <span className="bg-muted px-3 py-1 rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors">Portfolio</span>
                <span className="bg-muted px-3 py-1 rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors">Business</span>
                <span className="bg-muted px-3 py-1 rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors">API</span>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <PortfolioGrid />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;