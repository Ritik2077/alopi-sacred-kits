
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f97316" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-orange-200 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-medium text-gray-700">Sacred Touch, Every Day</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent">
                Divine Pooja
              </span>
              <br />
              <span className="text-gray-800">Essentials</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl text-gray-600 font-normal italic">
                Delivered Daily
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              Transform your spiritual practice with curated pooja kits delivered fresh to your doorstep. 
              Experience the divine connection through authentic, premium essentials.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={() => navigate('/subscription')}
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-full font-semibold group"
              >
                Start Your Spiritual Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/shop')}
                className="border-2 border-orange-300 text-orange-700 hover:bg-orange-50 px-8 py-4 rounded-full font-semibold group"
              >
                <Play className="mr-2 w-5 h-5" />
                Explore Products
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex items-center gap-8 mt-12 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">10,000+</div>
                <div className="text-sm text-gray-600">Happy Devotees</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <span className="text-2xl font-bold text-gray-800">4.9</span>
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                </div>
                <div className="text-sm text-gray-600">Customer Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">365</div>
                <div className="text-sm text-gray-600">Days Support</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl p-8 backdrop-blur-sm border border-white/20 shadow-2xl">
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
              
              {/* Main Image Placeholder */}
              <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="w-full h-80 bg-gradient-to-br from-orange-200 to-red-200 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Sparkles className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">Sacred Pooja Kit</p>
                    <p className="text-sm text-gray-500">Daily Essentials Collection</p>
                  </div>
                </div>
                
                {/* Kit Contents Preview */}
                <div className="grid grid-cols-3 gap-2">
                  {['Incense', 'Flowers', 'Sweets', 'Oil Lamp', 'Kumkum', 'Rice'].map((item, index) => (
                    <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-2 text-xs text-gray-600 font-medium">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
