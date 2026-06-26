import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  
  const subtotal = getCartTotal();
  const tax = subtotal * 0.08; // 8% fake tax
  const total = subtotal + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mb-6">
          <ShoppingBag className="w-10 h-10 text-slate-400" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Your cart is empty</h2>
        <p className="text-slate-400 mb-8 max-w-md">Looks like you haven't added any items to your cart yet. Let's get you back to shopping.</p>
        <Link to="/products" className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/25">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-10 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-white tracking-tight mb-10">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items List */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <motion.div 
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col sm:flex-row gap-6 p-6 bg-slate-800/40 border border-slate-700/50 rounded-2xl backdrop-blur-sm"
            >
              <Link to={`/product/${item.id}`} className="shrink-0">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full sm:w-32 h-32 object-cover rounded-xl"
                />
              </Link>
              
              <div className="flex flex-col flex-grow justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <Link to={`/product/${item.id}`}>
                      <h3 className="text-xl font-bold text-white hover:text-indigo-400 transition-colors line-clamp-1">{item.name}</h3>
                    </Link>
                    <p className="text-slate-400 text-sm mt-1">{item.category}</p>
                  </div>
                  <div className="text-xl font-bold text-white">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6">
                  <div className="flex items-center bg-slate-900 rounded-lg border border-slate-700 overflow-hidden">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-semibold text-white">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="flex items-center text-rose-400 hover:text-rose-300 text-sm font-medium transition-colors"
                  >
                    <Trash2 className="w-4 h-4 mr-1" /> Remove
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm sticky top-24">
            <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6 text-slate-300">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium text-white">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax (8%)</span>
                <span className="font-medium text-white">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-medium text-emerald-400">Free</span>
              </div>
            </div>
            
            <div className="border-t border-slate-700 pt-6 mb-8">
              <div className="flex justify-between items-end">
                <span className="text-lg font-bold text-white">Total</span>
                <span className="text-3xl font-extrabold text-white">${total.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transform active:scale-[0.98]">
              Proceed to Checkout <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
