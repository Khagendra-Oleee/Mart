import { Mail, Github, Linkedin, MapPin, Clock, Phone, MessageCircle, Star, Users, Award } from 'lucide-react';

const ContactInfo = () => {
  const contactItems = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@coffeeandcoding.dev',
      description: 'Send us an email anytime',
      link: 'mailto:hello@coffeeandcoding.dev',
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-500',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST',
      link: 'tel:+15551234567',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500',
    },
    {
      icon: Github,
      title: 'GitHub',
      content: '@coffeeandcoding',
      description: 'Check out our repositories',
      link: 'https://github.com/coffeeandcoding',
      color: 'from-gray-700 to-gray-900',
      bgColor: 'bg-gray-700',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      content: 'CoffeeandCoding',
      description: 'Connect with our team',
      link: 'https://linkedin.com/company/coffeeandcoding',
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-600',
    },
  ];

  const stats = [
    {
      icon: Users,
      value: '50+',
      label: 'Happy Clients',
      color: 'text-blue-600',
    },
    {
      icon: Star,
      value: '100%',
      label: 'Satisfaction Rate',
      color: 'text-yellow-500',
    },
    {
      icon: Award,
      value: '5+',
      label: 'Years Experience',
      color: 'text-green-600',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Premium Header */}
      <div className="text-center lg:text-left">
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full mb-4">
          <MessageCircle className="w-4 h-4 text-blue-600 mr-2" />
          <span className="text-sm font-medium text-blue-700">Get In Touch</span>
        </div>
        <h2 className="text-4xl font-bold text-slate-800 mb-4">Let's Build Something Amazing Together</h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Ready to transform your digital presence? We're here to turn your vision into reality with cutting-edge web solutions.
        </p>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-6 border border-slate-200">
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-sm mb-3`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold text-slate-800 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Methods */}
      <div className="space-y-6">
        <div className="flex items-center mb-6">
          <h3 className="text-2xl font-bold text-slate-800">Contact Methods</h3>
          <div className="flex-1 h-px bg-gradient-to-r from-slate-300 to-transparent ml-4"></div>
        </div>
        
        <div className="grid gap-4">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.link}
                className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                target={item.link.startsWith('http') ? '_blank' : undefined}
                rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-800 text-lg group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-slate-700 font-semibold mt-1 text-base">{item.content}</p>
                    <p className="text-slate-500 text-sm mt-1">{item.description}</p>
                  </div>
                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Company Info */}
      <div className="space-y-6">
        <div className="flex items-center mb-6">
          <h3 className="text-2xl font-bold text-slate-800">Company Info</h3>
          <div className="flex-1 h-px bg-gradient-to-r from-slate-300 to-transparent ml-4"></div>
        </div>
        
        <div className="grid gap-4">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-slate-800 text-lg">Global Reach</h4>
                <p className="text-slate-700 font-semibold mt-1">Remote-First Company</p>
                <p className="text-slate-500 text-sm mt-1">Serving clients worldwide with 24/7 availability</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Clock className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-slate-800 text-lg">Lightning Fast Response</h4>
                <p className="text-slate-700 font-semibold mt-1">&lt; 24 Hours</p>
                <p className="text-slate-500 text-sm mt-1">We respond to all inquiries within one business day</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium CTA */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-8 rounded-2xl text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
            <Star className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-sm font-medium text-white">Premium Service</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Start Your Project?</h3>
          <p className="text-slate-200 mb-6 text-lg">
            Let's discuss your vision and create something extraordinary together.
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-slate-300">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Free Consultation
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Custom Quote
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              24h Response
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;