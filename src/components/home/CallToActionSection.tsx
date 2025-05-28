
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Star, Gift } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CallToActionSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-br from-orange-600 via-red-600 to-orange-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M40 40c0-22.091-17.909-40-40-40s-40 17.909-40 40 17.909 40 40 40 40-17.909 40-40z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-500"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6">
            <Gift className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Limited Time Offer</span>
          </div>
          
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Start Your Sacred Journey
            <br />
            <span className="text-2xl md:text-4xl font-normal opacity-90">
              with 25% Off First Month
            </span>
          </h2>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Join thousands of devotees who have transformed their spiritual practice with Alopi's 
            premium pooja essentials delivered fresh to their doorstep every day.
          </p>
        </div>

        {/* Offer Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <Sparkles className="w-8 h-8 text-white mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Premium Quality</h3>
            <p className="text-white/80 text-sm">Handpicked essentials from trusted sources</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <Star className="w-8 h-8 text-white mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Daily Fresh Delivery</h3>
            <p className="text-white/80 text-sm">Fresh items delivered before prayer time</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <Gift className="w-8 h-8 text-white mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Flexible Plans</h3>
            <p className="text-white/80 text-sm">Pause, resume, or customize anytime</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            onClick={() => navigate('/subscription')}
            className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg group shadow-xl"
          >
            Start Subscription Now
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => navigate('/shop')}
            className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full font-bold text-lg"
          >
            Explore Products First
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex items-center justify-center gap-8 text-white/80">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="text-sm">4.9/5 Rating</span>
          </div>
          <div className="text-sm">10,000+ Happy Customers</div>
          <div className="text-sm">Free Cancellation</div>
        </div>

        {/* Urgency Timer */}
        <div className="mt-8">
          <p className="text-white/70 text-sm">
            🔥 Offer expires soon! Join now and save ₹200 on your first month
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
