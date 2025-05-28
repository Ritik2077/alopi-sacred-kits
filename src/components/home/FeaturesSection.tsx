
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, Heart, Sparkles, Star, Truck } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Clock,
      title: "Daily Fresh Delivery",
      description: "Fresh pooja essentials delivered to your doorstep every morning before your prayer time",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "Authentically Sourced",
      description: "Premium quality items sourced directly from traditional suppliers and verified temples",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Heart,
      title: "Personalized Kits",
      description: "Customized according to your family traditions, festivals, and special occasions",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Sparkles,
      title: "Sacred Touch",
      description: "Every item is blessed and prepared with devotion to enhance your spiritual experience",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Hand-picked ingredients and materials that meet the highest standards of purity",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Truck,
      title: "Flexible Plans",
      description: "Choose from daily, weekly, or monthly subscriptions with easy pause and resume options",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f97316" fill-opacity="0.02"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-700">What Sets Alopi Apart</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Embrace the Divine with Our
            <br />
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Most Cherished Spiritual Essentials
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the perfect blend of tradition and convenience with our thoughtfully curated pooja kits, 
            designed to enhance your daily spiritual practice.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full border-2 border-white"></div>
              ))}
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-800">Join 10,000+ happy devotees</p>
              <p className="text-sm text-gray-600">who trust Alopi for their daily spiritual needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
