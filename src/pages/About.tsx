import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MissionSection from '@/components/MissionSection';
import JourneyTimeline from '@/components/JourneyTimeline';
import TeamSection from '@/components/TeamSection';

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-8">
                About CoffeeandCoding
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed">
                We help businesses and institutions go digital through expertly crafted websites using modern technology stacks. Founded on the belief that great coffee and great code go hand in hand.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-slate-500">
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">
                  <div className="w-2 h-2 bg-slate-500 rounded-full mr-3" />
                  Est. 2019
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">
                  <div className="w-2 h-2 bg-slate-500 rounded-full mr-3" />
                  50+ Projects
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">
                  <div className="w-2 h-2 bg-slate-500 rounded-full mr-3" />
                  Remote Team
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MissionSection />
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <JourneyTimeline />
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <TeamSection />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;