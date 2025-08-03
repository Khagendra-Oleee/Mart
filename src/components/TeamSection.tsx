import { Code, Palette, Server, Smartphone, Github, Linkedin, Mail } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Full-Stack Developer',
      specialty: 'React & Node.js',
      icon: Code,
      description: 'Passionate about creating scalable web applications with modern frameworks. Loves clean code and performance optimization.',
      skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
      social: {
        github: 'https://github.com/alexjohnson',
        linkedin: 'https://linkedin.com/in/alexjohnson',
        email: 'alex@coffeeandcoding.dev',
      },
    },
    {
      name: 'Sarah Chen',
      role: 'UI/UX Designer',
      specialty: 'Design Systems',
      icon: Palette,
      description: 'Creates beautiful, user-friendly interfaces that convert visitors into customers. Expert in modern design trends.',
      skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
      social: {
        github: 'https://github.com/sarahchen',
        linkedin: 'https://linkedin.com/in/sarahchen',
        email: 'sarah@coffeeandcoding.dev',
      },
    },
    {
      name: 'Mike Rodriguez',
      role: 'Backend Engineer',
      specialty: 'API Development',
      icon: Server,
      description: 'Builds robust backend systems and APIs that power modern web applications. Expert in database design and optimization.',
      skills: ['PHP', 'Java', 'MySQL', 'API Design'],
      social: {
        github: 'https://github.com/mikerodriguez',
        linkedin: 'https://linkedin.com/in/mikerodriguez',
        email: 'mike@coffeeandcoding.dev',
      },
    },
    {
      name: 'Emma Thompson',
      role: 'Mobile Developer',
      specialty: 'Responsive Design',
      icon: Smartphone,
      description: 'Ensures every website works perfectly on all devices. Specialist in mobile optimization and progressive web apps.',
      skills: ['React Native', 'Flutter', 'PWA', 'Mobile UX'],
      social: {
        github: 'https://github.com/emmathompson',
        linkedin: 'https://linkedin.com/in/emmathompson',
        email: 'emma@coffeeandcoding.dev',
      },
    },
  ];

  const coreValues = [
    {
      title: 'Collaboration',
      description: 'We believe the best solutions come from working together, sharing ideas, and learning from each other.',
    },
    {
      title: 'Innovation',
      description: 'We stay ahead of the curve by constantly exploring new technologies and methodologies.',
    },
    {
      title: 'Quality',
      description: 'We take pride in delivering pixel-perfect, high-performance websites that exceed expectations.',
    },
    {
      title: 'Growth',
      description: 'We are committed to continuous learning and helping our clients achieve their business goals.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-800 mb-6">Meet Our Team</h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Our diverse team of developers, designers, and digital strategists work together to bring your vision to life. 
          We're passionate about what we do and it shows in every project.
        </p>
      </div>

      {/* Team Members */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {teamMembers.map((member, index) => {
          const Icon = member.icon;
          return (
            <div
              key={index}
              className="group bg-white border border-slate-200 rounded-2xl p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Profile Icon */}
              <div className="inline-flex p-4 bg-gradient-to-r from-slate-600 to-slate-700 rounded-xl mb-6 group-hover:from-slate-700 group-hover:to-slate-800 transition-all duration-300 shadow-md">
                <Icon className="w-8 h-8 text-white" />
              </div>

              {/* Member Info */}
              <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-slate-700 transition-colors">
                {member.name}
              </h3>
              
              <p className="text-slate-600 font-medium mb-2">{member.role}</p>
              <p className="text-sm text-slate-500 mb-4">{member.specialty}</p>
              
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                {member.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {member.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-3">
                <a
                  href={member.social.github}
                  className="p-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={member.social.linkedin}
                  className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${member.social.email}`}
                  className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Core Values */}
      <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-12 border border-slate-200">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-slate-800 mb-4">Our Core Values</h3>
          <p className="text-lg text-slate-600">
            These principles guide everything we do and every decision we make.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, index) => (
            <div key={index} className="text-center bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <h4 className="text-xl font-bold text-slate-800 mb-3">{value.title}</h4>
              <p className="text-slate-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;