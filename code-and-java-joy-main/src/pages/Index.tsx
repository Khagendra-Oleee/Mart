import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TechStackShowcase from '@/components/TechStackShowcase';
import FeaturedProjects from '@/components/FeaturedProjects';
import TestimonialsPreview from '@/components/TestimonialsPreview';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <TechStackShowcase />
        <FeaturedProjects />
        <TestimonialsPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
