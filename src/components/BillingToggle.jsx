import React from 'react';
import { motion } from 'framer-motion';

const BillingToggle = ({ billingCycle, setBillingCycle }) => {
  return (
    <div className="flex items-center justify-center mt-8 space-x-4">
      <span className={`text-sm font-medium ${billingCycle === 'Monthly' ? 'text-white' : 'text-slate-400'}`}>
        Monthly
      </span>
      
      <button
        className="relative inline-flex h-8 w-16 items-center rounded-full bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors duration-300"
        onClick={() => setBillingCycle(billingCycle === 'Monthly' ? 'Annual' : 'Monthly')}
      >
        <span className="sr-only">Toggle billing cycle</span>
        <motion.span
          className="inline-block h-6 w-6 rounded-full bg-indigo-500 shadow-lg transform"
          initial={false}
          animate={{ x: billingCycle === 'Annual' ? 34 : 4 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </button>

      <span className={`flex items-center text-sm font-medium ${billingCycle === 'Annual' ? 'text-white' : 'text-slate-400'}`}>
        Annually
        <span className="ml-2 inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
          Save 20%
        </span>
      </span>
    </div>
  );
};

export default BillingToggle;
