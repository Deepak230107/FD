import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4"
      >
        Simple, transparent pricing
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-lg md:text-xl text-slate-400"
      >
        No hidden fees. No surprise charges. Choose the plan that best fits your needs and start building today.
      </motion.p>
    </div>
  );
};

export default Hero;
