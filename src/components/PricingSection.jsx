import React, { useState } from 'react';
import Hero from './Hero';
import BillingToggle from './BillingToggle';
import CurrencySelector from './CurrencySelector';
import PricingCard from './PricingCard';
import { pricingMatrix } from '../data/pricingMatrix';

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('Monthly');
  const [currency, setCurrency] = useState('USD');

  const plansData = [
    {
      name: 'Basic',
      baseRate: pricingMatrix.plans.Basic.baseRate,
      features: ['5 Projects', 'Community Support', 'Email Support', 'Basic Dashboard'],
      ctaText: 'Get Started',
      isPopular: false,
    },
    {
      name: 'Pro',
      baseRate: pricingMatrix.plans.Pro.baseRate,
      features: ['Unlimited Projects', 'AI Features', 'Analytics Dashboard', 'Priority Support', 'Certificates'],
      ctaText: 'Start Free Trial',
      isPopular: true,
    },
    {
      name: 'Enterprise',
      baseRate: pricingMatrix.plans.Enterprise.baseRate,
      features: ['Unlimited Projects', 'Team Management', 'API Access', 'Custom Branding', 'Advanced Analytics', 'Dedicated Support'],
      ctaText: 'Contact Sales',
      isPopular: false,
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center bg-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0f172a] to-black">
      <div className="max-w-7xl mx-auto w-full">
        <Hero />
        
        <div className="mb-16">
          <BillingToggle billingCycle={billingCycle} setBillingCycle={setBillingCycle} />
          <CurrencySelector currency={currency} setCurrency={setCurrency} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {plansData.map((plan, index) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              baseRate={plan.baseRate}
              currencyInfo={pricingMatrix.currencies[currency]}
              billingMultiplier={pricingMatrix.billing[billingCycle]}
              features={plan.features}
              ctaText={plan.ctaText}
              isPopular={plan.isPopular}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
