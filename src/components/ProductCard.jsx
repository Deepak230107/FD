import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-slate-800/40 border border-slate-700/50 rounded-2xl overflow-hidden shadow-xl shadow-black/20 flex flex-col group backdrop-blur-sm"
    >
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden h-64">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-slate-300">
          {product.category}
        </div>
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-xl font-bold text-white mb-2 line-clamp-1 hover:text-indigo-400 transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center mb-4 text-amber-400 text-sm">
          <Star className="w-4 h-4 fill-current" />
          <span className="ml-1 text-slate-300">{product.rating} ({product.reviews})</span>
        </div>
        
        <p className="text-slate-400 text-sm mb-6 line-clamp-2 flex-grow">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-2xl font-bold text-white">${product.price.toFixed(2)}</span>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-xl font-medium transition-colors shadow-lg shadow-indigo-500/25"
          >
            <ShoppingCart className="w-4 h-4" />
            Add
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
