import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Truck } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="pt-16 pb-24">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400"
          >
            Elevate Your <br className="hidden md:block" /> Everyday Essentials
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto"
          >
            Discover our curated collection of premium electronics, ergonomic furniture, and lifestyle accessories designed for modern professionals.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-4"
          >
            <Link to="/products" className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/25 flex items-center gap-2">
              Shop Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/pricing" className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-bold transition-all border border-slate-700">
              View Plans
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-800/20 py-16 mb-24 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <Zap className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Fast Delivery</h3>
              <p className="text-slate-400">Get your products delivered within 48 hours globally.</p>
            </div>
            <div className="p-6">
              <Shield className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Secure Payments</h3>
              <p className="text-slate-400">Your transactions are protected by bank-level security.</p>
            </div>
            <div className="p-6">
              <Truck className="w-12 h-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Free Returns</h3>
              <p className="text-slate-400">30-day money-back guarantee on all purchases.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Featured Products</h2>
            <p className="text-slate-400">Handpicked items for the highest quality experience.</p>
          </div>
          <Link to="/products" className="hidden md:flex items-center text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
            View All <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link to="/products" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
            View All Products <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
