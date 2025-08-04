import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import ValueStack from '@/components/ValueStack';
import TestimonialsPreview from '@/components/TestimonialsPreview';
import Footer from '@/components/Footer';
import PageTransitionSkeleton from '@/components/PageTransitionSkeleton';

const Index = () => {
  return (
    <PageTransitionSkeleton skeletonType="hero" skeletonCount={1}>
      <div className="min-h-screen bg-slate-100">
        <Navigation />
        <main className="pt-20">
          <HeroSection />
          <FeaturedProjects />
          <ValueStack />
          <TestimonialsPreview />
        </main>
        <Footer />
      </div>
    </PageTransitionSkeleton>
  );
};

export default Index;
