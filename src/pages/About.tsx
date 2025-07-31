import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MissionSection from '@/components/MissionSection';
import JourneyTimeline from '@/components/JourneyTimeline';
import TeamSection from '@/components/TeamSection';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold text-primary mb-6">
                About CoffeeandCoding
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We help businesses and institutions go digital through expertly crafted websites using modern technology stacks. Founded on the belief that great coffee and great code go hand in hand.
              </p>
              <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2" />
                  Est. 2019
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2" />
                  50+ Projects
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2" />
                  Remote Team
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <MissionSection />
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <JourneyTimeline />
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <TeamSection />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;