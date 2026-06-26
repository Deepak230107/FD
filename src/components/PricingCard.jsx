import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingCard = ({ 
  name, 
  baseRate, 
  currencyInfo, 
  billingMultiplier, 
  isPopular, 
  features, 
  ctaText,
  index 
}) => {
  // Calculate dynamic price
  const finalPrice = useMemo(() => {
    const calculated = baseRate * currencyInfo.multiplier * billingMultiplier;
    return calculated.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  }, [baseRate, currencyInfo.multiplier, billingMultiplier]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className={`relative flex flex-col p-8 rounded-2xl backdrop-blur-sm border ${
        isPopular 
          ? 'bg-slate-800/80 border-indigo-500/50 shadow-2xl shadow-indigo-500/10' 
          : 'bg-slate-800/40 border-slate-700/50 shadow-xl shadow-black/20'
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
        <div className="flex items-baseline text-white">
          <span className="text-3xl font-extrabold tracking-tight">{currencyInfo.symbol}</span>
          <motion.span 
            key={finalPrice}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold tracking-tight ml-1"
          >
            {finalPrice}
          </motion.span>
          <span className="ml-2 text-slate-400 font-medium">/mo</span>
        </div>
      </div>

      <ul className="flex-1 space-y-4 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <Check className={`w-5 h-5 ${isPopular ? 'text-indigo-400' : 'text-slate-400'}`} />
            </div>
            <span className="ml-3 text-slate-300">{feature}</span>
          </li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
          isPopular
            ? 'bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
            : 'bg-slate-700 hover:bg-slate-600 text-white'
        }`}
      >
        {ctaText}
      </motion.button>
    </motion.div>
  );
};

export default PricingCard;
