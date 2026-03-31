import { motion } from 'framer-motion';

const Card = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-cyber-gray border border-primary-900/30 rounded-xl p-6 card-hover group"
    >
      <div className="bg-gradient-to-br from-cyber-blue/20 to-primary-600/20 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:from-cyber-blue/30 group-hover:to-primary-600/30 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyber-blue transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default Card;
