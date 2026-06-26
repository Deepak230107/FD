import React from 'react';
import { pricingMatrix } from '../data/pricingMatrix';

const CurrencySelector = ({ currency, setCurrency }) => {
  const currencies = Object.keys(pricingMatrix.currencies);

  return (
    <div className="flex justify-center mt-6">
      <div className="relative">
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="appearance-none bg-slate-800/50 border border-slate-700 text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 pr-8 hover:bg-slate-700/50 transition-colors backdrop-blur-sm cursor-pointer outline-none"
        >
          {currencies.map((curr) => (
            <option key={curr} value={curr} className="bg-slate-800 text-white">
              {curr} ({pricingMatrix.currencies[curr].symbol})
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CurrencySelector;
