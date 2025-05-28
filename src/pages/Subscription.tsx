import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Crown, Gift, Sparkles, Clock, Heart, Shield, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState('quarterly');
  const navigate = useNavigate();

  const plans = [
    {
      id: 'monthly',
      name: 'Monthly Devotion',
      price: 799,
      originalPrice: 999,
      period: 'month',
      badge: 'Most Flexible',
      badgeColor: 'bg-blue-600',
      icon: Calendar,
      features: [
        'Daily fresh pooja essentials',
        'Standard quality items',
        'Basic packaging',
        'Email support',
        'Pause/resume anytime',
        'Free delivery in city limits'
      ],
      savings: '20% off',
      popular: false
    },
    {
      id: 'quarterly',
      name: 'Sacred Quarterly',
      price: 649,
      originalPrice: 799,
      period: 'month',
      badge: 'Most Popular',
      badgeColor: 'bg-green-600',
      icon: Crown,
      features: [
        'Daily fresh pooja essentials',
        'Premium quality items',
        'Beautiful eco-friendly packaging',
        'Priority customer support',
        'Festival special additions',
        'Free delivery nationwide',
        'Monthly spiritual guide',
        'Exclusive member discounts'
      ],
      savings: '35% off',
      popular: true,
      billedAs: '₹1,947 billed quarterly'
    },
    {
      id: 'yearly',
      name: 'Divine Annual',
      price: 549,
      originalPrice: 799,
      period: 'month',
      badge: 'Best Value',
      badgeColor: 'bg-purple-600',
      icon: Gift,
      features: [
        'Daily fresh pooja essentials',
        'Premium + luxury items',
        'Handcrafted artisan packaging',
        'Dedicated customer manager',
        'All festival special editions',
        'Free express delivery',
        'Monthly spiritual consultation',
        'Exclusive VIP member perks',
        'Free gift on special occasions',
        'Early access to new products'
      ],
      savings: '45% off',
      popular: false,
      billedAs: '₹6,588 billed annually'
    }
  ];

  const whatYouGet = [
    {
      icon: Sparkles,
      title: 'Fresh Daily Essentials',
      description: 'Incense sticks, flowers, kumkum, rice, oil, and more delivered fresh every morning'
    },
    {
      icon: Clock,
      title: 'Perfect Timing',
      description: 'Delivery scheduled before your preferred pooja time, never miss your daily prayers'
    },
    {
      icon: Heart,
      title: 'Blessed Items',
      description: 'Every item is blessed and prepared with devotion by our spiritual team'
    },
    {
      icon: Shield,
      title: 'Premium Quality',
      description: 'Hand-picked items from trusted sources, ensuring purity and authenticity'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      text: 'Alopi has made my daily pooja so much more meaningful. The quality is exceptional!',
      rating: 5,
      location: 'Mumbai'
    },
    {
      name: 'Rajesh Kumar',
      text: 'Never have to worry about running out of pooja items. Perfect service!',
      rating: 5,
      location: 'Delhi'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-orange-200 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-medium text-gray-700">Transform Your Spiritual Practice</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Choose Your
              <br />
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Sacred Subscription
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join thousands of devotees who have enhanced their daily spiritual practice with our 
              premium pooja essentials delivered fresh to their doorstep.
            </p>

            {/* Quick Stats */}
            <div className="flex items-center justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">10,000+</div>
                <div className="text-sm text-gray-600">Active Subscribers</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <span className="text-2xl font-bold text-gray-800">4.9</span>
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                </div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">99.9%</div>
                <div className="text-sm text-gray-600">On-time Delivery</div>
              </div>
            </div>
          </div>

          {/* Subscription Plans */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan) => (
              <Card 
                key={plan.id}
                className={`relative cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 ${
                  selectedPlan === plan.id 
                    ? 'border-orange-500 shadow-xl scale-105' 
                    : plan.popular 
                      ? 'border-green-500' 
                      : 'border-gray-200'
                } ${plan.popular ? 'bg-gradient-to-br from-green-50 to-emerald-50' : 'bg-white/80 backdrop-blur-sm'}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-600 text-white px-4 py-1 text-sm font-semibold">
                      ⭐ Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${plan.badgeColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                    {plan.name}
                  </CardTitle>
                  
                  <Badge className={`${plan.badgeColor} text-white mb-4`}>
                    {plan.badge}
                  </Badge>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-4xl font-bold text-gray-800">₹{plan.price}</span>
                      <span className="text-gray-600">/{plan.period}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-lg text-gray-500 line-through">₹{plan.originalPrice}</span>
                      <Badge variant="secondary" className="bg-red-100 text-red-800">
                        {plan.savings}
                      </Badge>
                    </div>
                    {plan.billedAs && (
                      <p className="text-sm text-gray-600">{plan.billedAs}</p>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full py-3 rounded-full font-semibold ${
                      selectedPlan === plan.id
                        ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white'
                        : plan.popular
                          ? 'bg-green-600 hover:bg-green-700 text-white'
                          : 'bg-gray-800 hover:bg-gray-900 text-white'
                    }`}
                    onClick={() => navigate('/checkout')}
                  >
                    {selectedPlan === plan.id ? 'Selected - Continue' : 'Select This Plan'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* What You Get Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              What You Get in Every Kit
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whatYouGet.map((item, index) => (
                <Card key={index} className="text-center bg-white/80 backdrop-blur-sm border-0 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: "Can I pause or cancel my subscription anytime?",
                  a: "Yes, you have complete flexibility to pause, resume, or cancel your subscription at any time through your account dashboard."
                },
                {
                  q: "What if I'm not satisfied with the quality?",
                  a: "We offer a 100% satisfaction guarantee. If you're not happy with any delivery, we'll replace it immediately or provide a full refund."
                },
                {
                  q: "Do you deliver on festivals and special occasions?",
                  a: "Absolutely! We provide special festival kits and never miss deliveries on important religious occasions."
                },
                {
                  q: "Can I customize my kit contents?",
                  a: "Yes, premium and annual subscribers can customize their kits based on their specific needs and traditions."
                }
              ].map((faq, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border-0">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-gray-800 mb-2">{faq.q}</h4>
                    <p className="text-gray-600">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">What Our Subscribers Say</h3>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border-0">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                    <div className="font-bold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Subscription;
