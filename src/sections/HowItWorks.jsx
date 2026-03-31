import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Upload APK',
      description: 'Simply drag and drop your APK file or browse to select it from your device.',
      icon: (
        <svg className="w-12 h-12 text-cyber-blue" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Analyze',
      description: 'Our AI scans the APK for malware, ransomware, and suspicious permissions in real-time.',
      icon: (
        <svg className="w-12 h-12 text-cyber-blue" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Get Risk Report',
      description: 'Receive a detailed security report with clear verdicts and recommendations.',
      icon: (
        <svg className="w-12 h-12 text-cyber-blue" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get protected in three simple steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Lines (hidden on mobile) */}
          <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary-600 via-cyber-blue to-primary-600 opacity-30"
               style={{ width: '66%', left: '16.666%' }}
          />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-cyber-gray border border-primary-900/30 rounded-xl p-8 text-center hover:border-cyber-blue/50 transition-all duration-300 h-full">
                {/* Step Number */}
                <div className="text-6xl font-bold gradient-text mb-4 opacity-30">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-br from-cyber-blue/20 to-primary-600/20 w-20 h-20 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step indicator dot */}
              <div className="hidden md:flex absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyber-blue rounded-full border-4 border-cyber-dark z-10" />
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-primary-900/30 to-cyber-blue/20 border border-primary-600/30 rounded-lg px-8 py-4">
            <p className="text-lg text-gray-300">
              ⚡ Average scan time: <span className="text-cyber-blue font-bold">0.8 seconds</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
