import { Mail, Github, Linkedin, MapPin, Clock, Phone } from 'lucide-react';

const ContactInfo = () => {
  const contactItems = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@coffeeandcoding.dev',
      description: 'Send us an email anytime',
      link: 'mailto:hello@coffeeandcoding.dev',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST',
      link: 'tel:+15551234567',
    },
    {
      icon: Github,
      title: 'GitHub',
      content: '@coffeeandcoding',
      description: 'Check out our repositories',
      link: 'https://github.com/coffeeandcoding',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      content: 'CoffeeandCoding',
      description: 'Connect with our team',
      link: 'https://linkedin.com/company/coffeeandcoding',
    },
  ];

  const officeInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: 'Remote-First Company',
      description: 'Serving clients worldwide',
    },
    {
      icon: Clock,
      title: 'Response Time',
      content: '< 24 Hours',
      description: 'We respond to all inquiries quickly',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-primary mb-4">Let's Connect</h2>
        <p className="text-muted-foreground text-lg">
          We're here to help bring your digital vision to life. Reach out through any of these channels.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-primary">Contact Methods</h3>
        <div className="grid gap-4">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.link}
                className="group bg-card p-6 rounded-xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-card hover:-translate-y-1"
                target={item.link.startsWith('http') ? '_blank' : undefined}
                rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-primary group-hover:text-accent transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-foreground font-medium mt-1">{item.content}</p>
                    <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Office Info */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-primary">Company Info</h3>
        <div className="grid gap-4">
          {officeInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-primary">{item.title}</h4>
                    <p className="text-foreground font-medium mt-1">{item.content}</p>
                    <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-accent p-6 rounded-xl text-center">
        <h3 className="text-xl font-bold text-white mb-2">Ready to Start?</h3>
        <p className="text-white/90 mb-4">
          Let's discuss your project and see how we can help you succeed.
        </p>
        <div className="text-white/80 text-sm">
          We typically respond within 2-4 hours during business hours.
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;