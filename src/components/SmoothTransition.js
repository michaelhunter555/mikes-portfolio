import React from 'react';

import { motion } from 'framer-motion';

export const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  viewport: { once: true },
};

const SmoothTransition = ({ children }) => {
  return (
    <motion.div
      variants={animationConfiguration}
      viewport="viewport"
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default SmoothTransition;
