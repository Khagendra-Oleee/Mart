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
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto font-medium leading-relaxed">
            Don't just take our word for it. Hear from the businesses and institutions
            that have transformed their
            <span className="text-blue-700 font-semibold"> digital presence</span> with our help.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200/50 backdrop-blur-sm">
            {/* Enhanced Quote Icon */}
            <div className="absolute top-6 left-6 text-blue-200/40">
              <Quote className="h-16 w-16" />
            </div>

            {/* Enhanced Stars */}
            <div className="flex items-center justify-center mb-10">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="h-7 w-7 text-yellow-400 fill-current mx-1"
                />
              ))}
            </div>

            {/* Enhanced Testimonial Content */}
            <blockquote className="text-xl md:text-3xl text-center text-slate-700 leading-relaxed mb-10 font-medium italic">
              "{currentTestimonial.content}"
            </blockquote>

            {/* Enhanced Author Info */}
            <div className="flex items-center justify-center space-x-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full flex items-center justify-center text-3xl shadow-lg">
                {currentTestimonial.image}
              </div>
              <div className="text-left">
                <div className="font-bold text-slate-800 text-xl">
                  {currentTestimonial.name}
                </div>
                <div className="text-slate-600 font-medium">
                  {currentTestimonial.role}
                </div>
                <div className="text-blue-700 font-semibold">
                  {currentTestimonial.company}
                </div>
              </div>
            </div>

            {/* Enhanced Navigation Buttons */}
            <div className="flex items-center justify-center space-x-6 mt-10">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="rounded-full w-12 h-12 p-0 border-2 border-slate-300 hover:border-blue-500 hover:bg-blue-100 transition-all duration-300"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              {/* Enhanced Dots Indicator */}
              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-blue-600 scale-125' : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="rounded-full w-12 h-12 p-0 border-2 border-slate-300 hover:border-blue-500 hover:bg-blue-100 transition-all duration-300"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">50+</div>
              <div className="text-slate-600 font-semibold text-lg">Projects Completed</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">98%</div>
              <div className="text-slate-600 font-semibold text-lg">Client Satisfaction</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">24/7</div>
              <div className="text-slate-600 font-semibold text-lg">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;