import React from 'react';
import { Package, Globe, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-indigo-400 mb-4">
              <Package className="w-8 h-8" />
              <span className="font-bold text-xl tracking-tight text-white">E-Store</span>
            </Link>
            <p className="text-slate-400 max-w-sm mb-6">
              Elevating your everyday essentials with premium quality, cutting-edge technology, and unparalleled customer service.
            </p>
            <div className="flex gap-4 text-slate-400">
              <a href="#" className="hover:text-indigo-400 transition-colors"><Globe className="w-5 h-5" /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><MessageCircle className="w-5 h-5" /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Shop</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link to="/products" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing Plans</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Discounts</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Support</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Order Status</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center md:text-left text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} E-Store. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
