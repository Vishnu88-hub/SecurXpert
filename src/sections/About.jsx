import { motion } from 'framer-motion';

const About = () => {
  const risks = [
    {
      icon: (
        <svg className="w-8 h-8 text-red-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: 'Malware & Ransomware',
      description: 'Third-party APKs can contain hidden malware that locks your files and demands payment.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-orange-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: 'Data Theft',
      description: 'Malicious apps steal your contacts, photos, messages, and sensitive personal information.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Financial Loss',
      description: 'Banking trojans and spyware can drain your accounts and steal payment credentials.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Why SecurXpert?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Every day, millions download APK files from third-party sources, unknowingly exposing themselves to serious security threats.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {risks.map((risk, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-cyber-gray border border-red-900/30 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                {risk.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white text-center">
                {risk.title}
              </h3>
              <p className="text-gray-400 text-center">
                {risk.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-primary-900/30 to-cyber-blue/20 border border-primary-600/30 rounded-xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold mb-4 gradient-text text-center">
            The Solution
          </h3>
          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
            SecurXpert provides <span className="text-cyber-blue font-semibold">pre-installation protection</span> by analyzing APK files before they ever touch your device.
            Our advanced detection algorithms identify ransomware, malware, and suspicious behaviors — keeping you safe from threats before they become problems.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
