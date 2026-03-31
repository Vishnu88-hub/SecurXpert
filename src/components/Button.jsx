import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', onClick, href, className = '' }) => {
  const baseStyles = 'px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-block';

  const variants = {
    primary: 'bg-gradient-to-r from-cyber-blue to-primary-600 text-white hover:shadow-lg hover:shadow-cyber-blue/50 hover:scale-105',
    secondary: 'bg-cyber-gray text-white border-2 border-primary-600 hover:bg-primary-600/10 hover:scale-105',
    outline: 'border-2 border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-cyber-darker hover:scale-105'
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

  const ButtonContent = () => (
    <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        <ButtonContent />
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      <ButtonContent />
    </button>
  );
};

export default Button;
