
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ProductShowcase from "@/components/home/ProductShowcase";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user was redirected from successful checkout
    if (location.state?.orderSuccess) {
      toast({
        title: "🎉 Order Confirmed!",
        description: `Order #${location.state.orderNumber} placed successfully. Thank you for choosing Alopi!`,
      });
      
      // Clear the state to prevent showing the message again on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location.state, toast]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-orange-300 animate-fade-in">
      <Navbar />
      <div className="animate-slide-up">
        <HeroSection />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <FeaturesSection />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <ProductShowcase />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <TestimonialsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
