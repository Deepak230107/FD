import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, ArrowLeft, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const found = products.find(p => p.id === id);
    setProduct(found);
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="pt-10 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Link to="/products" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="rounded-3xl overflow-hidden border border-slate-700/50 bg-slate-800/20 backdrop-blur-sm relative"
        >
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover max-h-[600px]"
          />
        </motion.div>

        {/* Product Info */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <div className="mb-6">
            <div className="text-indigo-400 font-semibold tracking-wide uppercase text-sm mb-2">
              {product.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              {product.name}
            </h1>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center text-amber-400">
                <Star className="w-5 h-5 fill-current" />
                <span className="ml-1 font-medium">{product.rating}</span>
              </div>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400 hover:text-white cursor-pointer transition-colors underline decoration-slate-600 underline-offset-4">
                {product.reviews} Reviews
              </span>
            </div>
          </div>

          <div className="text-5xl font-extrabold text-white mb-8">
            ${product.price.toFixed(2)}
          </div>

          <p className="text-lg text-slate-300 mb-10 leading-relaxed">
            {product.description}
          </p>

          <button 
            onClick={() => addToCart(product)}
            className="flex items-center justify-center gap-3 bg-indigo-500 hover:bg-indigo-600 text-white w-full py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-indigo-500/25 mb-10 transform active:scale-[0.98]"
          >
            <ShoppingCart className="w-6 h-6" /> Add to Cart
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-800">
            <div className="flex flex-col gap-2 text-slate-300">
              <Truck className="w-6 h-6 text-indigo-400" />
              <span className="font-medium text-white">Free Shipping</span>
              <span className="text-sm text-slate-500">2-4 business days</span>
            </div>
            <div className="flex flex-col gap-2 text-slate-300">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <span className="font-medium text-white">1 Year Warranty</span>
              <span className="text-sm text-slate-500">Full protection</span>
            </div>
            <div className="flex flex-col gap-2 text-slate-300">
              <RotateCcw className="w-6 h-6 text-amber-400" />
              <span className="font-medium text-white">Free Returns</span>
              <span className="text-sm text-slate-500">Within 30 days</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetails;
