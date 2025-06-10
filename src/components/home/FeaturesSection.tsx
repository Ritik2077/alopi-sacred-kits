
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Heart, Sparkles, Shield, Clock, Leaf } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Truck,
      title: "Free Daily Delivery",
      description: "Fresh pooja essentials delivered to your doorstep every morning before your prayer time"
    },
    {
      icon: Heart,
      title: "Blessed Products",
      description: "Every item is blessed with devotion and prepared with sacred rituals by our spiritual team"
    },
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "Hand-picked Authentic items from trusted sources ensuring purity and spiritual energy"
    },
    {
      icon: Shield,
      title: "Satisfaction Guarantee",
      description: "100% satisfaction promised with hassle-free returns and replacement policy"
    },
    {
      icon: Clock,
      title: "Perfect Timing",
      description: "Never miss your daily prayers with our reliable and punctual delivery schedule"
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Sustainable packaging and environmentally conscious sourcing for a better tomorrow"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.03'%3E%3Cpath d='M30 30c0-16.569-13.431-30-30-30s-30 13.431-30 30 13.431 30 30 30 30-13.431 30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-700">Sacred Features</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Embrace the Divine with Our
            <br />
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Most Cherished Spiritual Essentials
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the perfect blend of tradition and convenience with our Premium pooja services 
            designed to enhance your spiritual journey every single day.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="text-center border-0 bg-gradient-to-br from-white to-orange-50 shadow-lg transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
