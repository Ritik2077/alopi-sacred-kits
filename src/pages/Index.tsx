import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ProductShowcase from "@/components/home/ProductShowcase";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CallToActionSection from "@/components/home/CallToActionSection";
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
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProductShowcase />
      <TestimonialsSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default Index;
