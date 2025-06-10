
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Crown, Sparkles, Star, ArrowRight, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DevoteeSelection = () => {
  const navigate = useNavigate();

  const devoteeTypes = [
    {
      id: 'premium',
      title: 'Premium Devotee',
      subtitle: 'For the Dedicated Spiritual Seeker',
      icon: Crown,
      price: '₹1,299',
      originalPrice: '₹1,599',
      savings: '20% off',
      features: [
        'Daily Premium pooja essentials',
        'Handpicked quality items',
        'Beautiful eco-friendly packaging',
        'Priority customer support',
        'Festival special inclusions',
        'Free nationwide delivery'
      ],
      bgGradient: 'from-purple-500 to-pink-500',
      cardBg: 'from-purple-50 to-pink-50',
      popular: true
    },
    {
      id: 'loyal',
      title: 'Loyal Devotee',
      subtitle: 'For the Consistent Daily Worshipper',
      icon: Heart,
      price: '₹899',
      originalPrice: '₹1,199',
      savings: '25% off',
      features: [
        'Daily fresh pooja essentials',
        'Standard quality items',
        'Eco-friendly packaging',
        'Email support',
        'Basic festival additions',
        'Free delivery in major cities'
      ],
      bgGradient: 'from-orange-500 to-red-500',
      cardBg: 'from-orange-50 to-red-50',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-orange-200 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-medium text-gray-700">Choose Your Spiritual Journey</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Discover Your
              <br />
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Devotee Path
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Select the perfect subscription plan that aligns with your spiritual practice and devotional needs. 
              Each path is thoughtfully designed to enhance your daily connection with the divine.
            </p>
          </div>

          {/* Devotee Type Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {devoteeTypes.map((type) => (
              <Card 
                key={type.id}
                className={`relative overflow-hidden bg-gradient-to-br ${type.cardBg} border-2 border-transparent hover:border-orange-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group`}
              >
                {type.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-bl-2xl font-semibold text-sm">
                    ⭐ Most Popular
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${type.bgGradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-center text-gray-800 mb-2">
                    {type.title}
                  </CardTitle>
                  
                  <p className="text-center text-gray-600 italic mb-6">
                    {type.subtitle}
                  </p>
                  
                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-3xl font-bold text-gray-800">{type.price}</span>
                      <span className="text-gray-600">/month</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-lg text-gray-500 line-through">{type.originalPrice}</span>
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-medium">
                        {type.savings}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Star className="w-5 h-5 text-orange-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={() => navigate(`/${type.id.toLowerCase()}-devotee`)}
                    className={`w-full py-3 rounded-full font-semibold transition-all duration-300 bg-gradient-to-r ${type.bgGradient} hover:scale-105 text-white group`}
                  >
                    Choose This Path
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* More Products Section */}
          <div className="text-center mb-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-orange-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Explore Our Full Range
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Browse through our complete collection of Premium pooja essentials, 
                individual items, and special festival kits to enhance your spiritual practice.
              </p>
              <Button 
                onClick={() => navigate('/shop')}
                variant="outline"
                size="lg"
                className="border-2 border-orange-300 text-orange-700 hover:bg-orange-50 px-8 py-3 rounded-full font-semibold group transition-all duration-300"
              >
                <ShoppingBag className="mr-2 w-5 h-5" />
                More Products
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: 'Authentic Quality',
                description: 'Hand-picked essentials sourced from trusted suppliers ensuring purity and authenticity in every item.'
              },
              {
                icon: Sparkles,
                title: 'Fresh Daily Delivery',
                description: 'Receive fresh pooja essentials delivered to your doorstep before your preferred prayer time, every single day.'
              },
              {
                icon: Crown,
                title: 'Spiritual Guidance',
                description: 'Access to monthly spiritual guides and festival calendars to deepen your devotional practice.'
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center bg-white/60 backdrop-blur-sm border-0 hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DevoteeSelection;
