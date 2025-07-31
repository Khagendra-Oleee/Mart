import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsPreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Dr. Sarah Mitchell',
      role: 'Dean of Technology, Westfield University',
      company: 'Westfield University',
      content: 'CoffeeandCoding transformed our outdated college portal into a modern, user-friendly platform. Student engagement increased by 40% after launch.',
      rating: 5,
      image: '👩‍🏫',
    },
    {
      id: 2,
      name: 'Marcus Chen',
      role: 'CEO & Founder',
      company: 'TechStart Solutions',
      content: 'The eCommerce platform they built for us exceeded all expectations. Our online sales grew 300% in the first quarter after launch.',
      rating: 5,
      image: '👨‍💼',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'Creative Studios Inc.',
      content: 'Professional, responsive, and incredibly talented. They delivered our company website ahead of schedule with pixel-perfect design.',
      rating: 5,
      image: '👩‍💻',
    },
    {
      id: 4,
      name: 'James Thompson',
      role: 'Freelance Designer',
      company: 'Independent',
      content: 'My portfolio website has received countless compliments. The design is clean, fast, and showcases my work beautifully.',
      rating: 5,
      image: '👨‍🎨',
    },
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the businesses and institutions 
            that have transformed their digital presence with our help.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-accent/20">
              <Quote className="h-12 w-12" />
            </div>

            {/* Stars */}
            <div className="flex items-center justify-center mb-8">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 text-yellow-400 fill-current"
                />
              ))}
            </div>

            {/* Testimonial Content */}
            <blockquote className="text-xl md:text-2xl text-center text-foreground leading-relaxed mb-8 font-medium">
              "{currentTestimonial.content}"
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center text-2xl">
                {currentTestimonial.image}
              </div>
              <div className="text-center">
                <div className="font-semibold text-primary text-lg">
                  {currentTestimonial.name}
                </div>
                <div className="text-muted-foreground">
                  {currentTestimonial.role}
                </div>
                <div className="text-accent font-medium">
                  {currentTestimonial.company}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="rounded-full w-10 h-10 p-0"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-accent' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="rounded-full w-10 h-10 p-0"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;