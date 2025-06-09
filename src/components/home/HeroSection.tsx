
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Star, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50"></div>
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
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
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Transform your spiritual practice with curated pooja kits delivered fresh to your doorstep. 
              Experience the divine connection through authentic, premium essentials.
            </p>
            
            <div className="flex flex-col sm:flex-row xl:flex-col 2xl:flex-row gap-4 justify-center lg:justify-start max-w-4xl">
              <Button 
                size="lg" 
                onClick={() => navigate('/devotee-selection')}
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 xl:px-8 py-4 rounded-full font-semibold group w-full sm:w-auto"
              >
                <Heart className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Choose Your Path
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                onClick={() => navigate('/subscription')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 xl:px-8 py-4 rounded-full font-semibold group w-full sm:w-auto"
              >
                Start Your Spiritual Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/shop')}
                className="border-2 border-orange-300 text-orange-700 hover:bg-orange-50 px-6 xl:px-8 py-4 rounded-full font-semibold group w-full sm:w-auto"
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
            <div className="relative glass-card rounded-3xl p-8 shadow-2xl hover-lift">
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
              
              {/* Main Image */}
              <div className="relative z-10 glass rounded-2xl p-6 text-center overflow-hidden">
                <div className="relative w-full h-80 rounded-xl mb-4 overflow-hidden group">
                  <img 
                    src="/IMG_0015.JPG"
                    alt="Sacred Pooja Essentials Collection"
                    className="w-full h-full object-cover rounded-xl transition-all duration-700 group-hover:scale-110"
                  />
                  {/* Aesthetic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 via-transparent to-yellow-400/20 rounded-xl"></div>
                  {/* Floating text overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="glass-dark rounded-lg p-3 backdrop-blur-md">
                      <p className="font-semibold text-lg mb-1">Sacred Pooja Kit</p>
                      <p className="text-sm opacity-90">Daily Essentials Collection</p>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4">
                    <div className="glass-dark rounded-full p-2 backdrop-blur-md">
                      <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
                    </div>
                  </div>
                </div>
                
                {/* Kit Contents Preview */}
                <div className="grid grid-cols-3 gap-2">
                  {['Incense', 'Flowers', 'Organic', 'Oil Lamp', 'Kumkum', 'Cow Dung'].map((item, index) => (
                    <div key={index} className="glass rounded-lg p-2 text-xs text-gray-600 font-medium hover-lift transition-all duration-300 hover:text-orange-600">
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
