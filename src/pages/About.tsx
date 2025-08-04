import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MissionSection from '@/components/MissionSection';
import JourneyTimeline from '@/components/JourneyTimeline';
import TeamSection from '@/components/TeamSection';
import ValueStack from '@/components/ValueStack';
import PageTransitionSkeleton from '@/components/PageTransitionSkeleton';

const About = () => {
  return (
    <PageTransitionSkeleton skeletonType="team" skeletonCount={4}>
      <div className="min-h-screen bg-slate-100">
        <Navigation />
        <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-gray-50" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
                About
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  CoffeeandCoding
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 mb-8 leading-relaxed">
                We're passionate about creating exceptional web experiences that drive business growth and user engagement.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-sm text-slate-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">30+</div>
                  <div className="text-sm text-slate-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-sm text-slate-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-6">Our Story</h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto">
                CoffeeandCoding was founded with a simple yet powerful vision: to create websites that not only look stunning 
                but also perform exceptionally well. We believe that great web experiences are built on the foundation of 
                clean code, thoughtful design, and unwavering attention to detail.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">How It All Started</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  It all began over countless cups of coffee and late-night coding sessions. Our founder realized that 
                  the best web solutions come from combining technical expertise with creative thinking – just like the 
                  perfect blend of coffee beans creates an exceptional brew.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Today, we continue to approach every project with the same passion and precision, ensuring that 
                  each website we create is not just functional, but truly exceptional.
                </p>
              </div>
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">☕</div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-2">Coffee-Fueled Innovation</h4>
                  <p className="text-slate-600">
                    Every line of code is written with the same care and attention that goes into brewing the perfect cup of coffee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MissionSection />
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <JourneyTimeline />
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <TeamSection />
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

export default About;