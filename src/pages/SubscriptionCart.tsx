
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, Trash2, ShoppingBag, Crown, Gift, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SubscriptionCart = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  const subscriptionItems = cartItems.filter(item => item.isSubscription);
  const total = subscriptionItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const getPlanIcon = (planName) => {
    if (planName.includes('Monthly')) return Calendar;
    if (planName.includes('Quarterly')) return Crown;
    if (planName.includes('Annual')) return Gift;
    return Crown;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-orange-200 rounded-full px-4 py-2 mb-4">
              <Crown className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-medium text-gray-700">Premium Subscription Cart</span>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Your Sacred Subscriptions
            </h1>
            <p className="text-gray-600 mt-2">Complete your spiritual journey with our premium subscription plans</p>
          </div>
          
          {subscriptionItems.length > 0 ? (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                {subscriptionItems.map((item) => {
                  const IconComponent = getPlanIcon(item.name);
                  return (
                    <Card key={item.id} className="bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-shadow">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-6">
                          <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center">
                            <IconComponent className="w-10 h-10 text-white" />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h3 className="font-bold text-xl text-gray-800">{item.name}</h3>
                                <div className="flex items-center gap-2 mt-2">
                                  <Badge className="bg-green-100 text-green-800">Active Subscription</Badge>
                                  {item.planDetails?.popular && (
                                    <Badge className="bg-orange-100 text-orange-800">Most Popular</Badge>
                                  )}
                                </div>
                              </div>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="text-red-500 hover:bg-red-50 border-red-200"
                                onClick={() => removeFromCart(item.id)}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                              <div>
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="text-2xl font-bold text-orange-600">₹{item.price}</span>
                                  <span className="text-gray-600">/month</span>
                                  {item.originalPrice && (
                                    <span className="text-sm text-gray-500 line-through">₹{item.originalPrice}</span>
                                  )}
                                </div>
                                {item.planDetails?.billedAs && (
                                  <p className="text-sm text-gray-600">{item.planDetails.billedAs}</p>
                                )}
                              </div>
                              
                              <div className="flex items-center gap-3">
                                <span className="text-sm font-medium text-gray-700">Duration:</span>
                                <div className="flex items-center gap-2">
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                  >
                                    <Minus className="w-4 h-4" />
                                  </Button>
                                  <span className="w-12 text-center font-bold">{item.quantity}</span>
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  >
                                    <Plus className="w-4 h-4" />
                                  </Button>
                                  <span className="text-sm text-gray-600">months</span>
                                </div>
                              </div>
                            </div>
                            
                            {item.planDetails?.features && (
                              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4">
                                <h4 className="font-semibold text-gray-800 mb-2">Plan Includes:</h4>
                                <div className="grid md:grid-cols-2 gap-1">
                                  {item.planDetails.features.slice(0, 4).map((feature, idx) => (
                                    <div key={idx} className="text-sm text-gray-700 flex items-center gap-1">
                                      <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
                                      {feature}
                                    </div>
                                  ))}
                                </div>
                                {item.planDetails.features.length > 4 && (
                                  <p className="text-sm text-orange-600 mt-2">+{item.planDetails.features.length - 4} more benefits</p>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              
              <div className="lg:col-span-1">
                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl sticky top-24">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Crown className="w-5 h-5 text-orange-600" />
                      Subscription Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
                      <h3 className="font-semibold text-green-800 mb-2">🎉 Premium Benefits</h3>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Free delivery on all orders</li>
                        <li>• Priority customer support</li>
                        <li>• Festival special additions</li>
                        <li>• Cancel or pause anytime</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Monthly Subtotal</span>
                        <span>₹{total}</span>
                      </div>
                      <div className="flex justify-between text-green-600">
                        <span>Delivery</span>
                        <span>Free</span>
                      </div>
                      <div className="flex justify-between text-green-600">
                        <span>Setup Fee</span>
                        <span>Waived</span>
                      </div>
                      <hr />
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total per Month</span>
                        <span>₹{total}</span>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 mb-1">Next Billing</h4>
                      <p className="text-sm text-blue-700">
                        You'll be charged ₹{total} every month starting from your first delivery
                      </p>
                    </div>

                    <Button 
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 py-3 rounded-full font-bold"
                      onClick={() => navigate('/checkout')}
                    >
                      Complete Subscription
                    </Button>

                    <Button 
                      variant="outline" 
                      className="w-full border-orange-300 text-orange-700 hover:bg-orange-50"
                      onClick={() => navigate('/subscription')}
                    >
                      Modify Plan
                    </Button>

                    <div className="text-center">
                      <p className="text-xs text-gray-600">
                        By subscribing, you agree to our Terms of Service. Cancel anytime from your profile.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <ShoppingBag className="w-24 h-24 mx-auto text-gray-400 mb-6" />
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">No Subscriptions Yet</h2>
              <p className="text-gray-600 mb-8">Choose a subscription plan to start your spiritual journey</p>
              <Button 
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-8 py-3 rounded-full"
                onClick={() => navigate('/subscription')}
              >
                Browse Subscription Plans
              </Button>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SubscriptionCart;
