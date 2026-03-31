import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: (
        <svg className="w-10 h-10 text-cyber-blue" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Pre-Installation Protection',
      description: 'Catch threats before they infect your device — not after the damage is done.'
    },
    {
      icon: (
        <svg className="w-10 h-10 text-cyber-blue" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Fast & Simple Detection',
      description: 'Get instant results with no complex setup or technical knowledge required.'
    },
    {
      icon: (
        <svg className="w-10 h-10 text-cyber-blue" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Designed for Everyday Users',
      description: 'Built for students, Android enthusiasts, and anyone who values their security.'
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Why Choose Us</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're committed to making Android security accessible to everyone
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-cyber-blue/20 to-primary-600/20 w-20 h-20 rounded-full flex items-center justify-center cyber-glow">
                  {reason.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {reason.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial-style quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-primary-900/30 to-cyber-blue/20 border border-primary-600/30 rounded-xl p-8 md:p-12 text-center"
        >
          <svg className="w-12 h-12 text-cyber-blue mx-auto mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-2xl text-gray-200 mb-6 font-medium italic">
            "In a world where digital threats are growing every day, SecurXpert empowers users to take control of their security — one APK at a time."
          </p>
          <div className="flex justify-center items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-cyber-blue to-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">SecurXpert Team</div>
              <div className="text-gray-400 text-sm">Cybersecurity Experts</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
