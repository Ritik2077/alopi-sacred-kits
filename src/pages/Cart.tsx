
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  const total = getTotalPrice();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-orange-300 animate-fade-in">
      <Navbar />
      
      <div className="container mx-auto px-4 py-20 lg:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 lg:mb-12 animate-slide-up">
            <Button
              variant="ghost"
              onClick={() => navigate('/shop')}
              className="glass-card border-none mb-6 hover-lift group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Continue Shopping
            </Button>
            
            <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent animate-scale-in">
              Your Sacred Cart
            </h1>
            <p className="text-gray-600 mt-4 text-lg">Review your spiritual essentials</p>
          </div>
          
          {cartItems.length > 0 ? (
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="lg:col-span-2 space-y-4 animate-slide-up">
                {cartItems.map((item, index) => (
                  <Card 
                    key={item.id} 
                    className="glass-card hover-lift overflow-hidden"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-4 lg:p-6">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center flex-shrink-0 animate-bounce-subtle">
                          <span className="text-2xl lg:text-3xl">🕉️</span>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-lg lg:text-xl text-gray-800 mb-2 line-clamp-2">{item.name}</h3>
                          <div className="flex items-center gap-2 mb-3">
                            <p className="text-orange-600 font-bold text-lg lg:text-xl">₹{item.price}</p>
                            {item.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">₹{item.originalPrice}</span>
                            )}
                          </div>
                          
                          {/* Quantity Controls */}
                          <div className="flex items-center justify-between sm:justify-start gap-4">
                            <div className="flex items-center gap-2">
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="glass-card border-none w-8 h-8 p-0 hover-lift"
                              >
                                <Minus className="w-4 h-4" />
                              </Button>
                              <span className="w-12 text-center font-semibold text-lg">{item.quantity}</span>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="glass-card border-none w-8 h-8 p-0 hover-lift"
                              >
                                <Plus className="w-4 h-4" />
                              </Button>
                            </div>
                            
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="glass-card border-none text-red-500 hover:bg-red-50 hover-lift"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <Trash2 className="w-4 h-4 mr-2" />
                              <span className="hidden sm:inline">Remove</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="glass-card sticky top-24 hover-lift animate-slide-up" style={{ animationDelay: '0.3s' }}>
                  <CardHeader>
                    <CardTitle className="text-xl lg:text-2xl text-gray-800">Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                      <span>₹{total}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span className="text-green-600 font-semibold">Free</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Sacred Blessing</span>
                      <span className="text-orange-600 font-semibold">Included</span>
                    </div>
                    <hr className="border-gray-200" />
                    <div className="flex justify-between font-bold text-lg lg:text-xl text-gray-800">
                      <span>Total</span>
                      <span>₹{total}</span>
                    </div>
                    
                    <div className="space-y-3 pt-4">
                      <Button 
                        className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 hover-lift animate-pulse-glow"
                        onClick={() => navigate('/checkout')}
                      >
                        Proceed to Checkout
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full glass-card border-none text-orange-700 hover:bg-orange-50 hover-lift"
                        onClick={() => navigate('/subscription')}
                      >
                        Convert to Subscription
                      </Button>
                    </div>
                    
                    {/* Trust Indicators */}
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mb-2">
                            <span className="text-green-600 text-sm">✓</span>
                          </div>
                          <span className="text-xs text-gray-600">Secure Payment</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                            <span className="text-blue-600 text-sm">🚚</span>
                          </div>
                          <span className="text-xs text-gray-600">Fast Delivery</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 animate-scale-in">
              <div className="glass-card max-w-md mx-auto p-8 lg:p-12 hover-lift">
                <ShoppingBag className="w-20 h-20 lg:w-24 lg:h-24 mx-auto text-gray-400 mb-6 animate-bounce-subtle" />
                <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-gray-800">Your cart awaits sacred items</h2>
                <p className="text-gray-600 mb-8 text-lg">Fill it with spiritual essentials for your divine journey</p>
                <Button 
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 text-lg hover-lift animate-pulse-glow"
                  onClick={() => navigate('/shop')}
                >
                  Start Shopping
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Cart;
