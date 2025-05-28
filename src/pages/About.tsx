
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Sparkles, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-gradient">About Alopi</h1>
          
          <div className="space-y-12">
            <Card className="glassmorphism">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                <p className="text-gray-700 leading-relaxed">
                  Alopi was born from a simple belief: that spiritual practice should be accessible, 
                  convenient, and authentic. Founded by devotees who understand the challenges of 
                  maintaining daily pooja rituals in modern life, we bridge the gap between tradition 
                  and convenience.
                </p>
              </CardContent>
            </Card>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glassmorphism">
                <CardContent className="p-6">
                  <Heart className="w-12 h-12 text-red-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                  <p className="text-gray-700">
                    To make daily spiritual practice effortless by delivering authentic, 
                    premium pooja essentials right to your doorstep.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glassmorphism">
                <CardContent className="p-6">
                  <Sparkles className="w-12 h-12 text-yellow-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                  <p className="text-gray-700">
                    To become India's most trusted spiritual companion, 
                    nurturing millions of households in their daily devotional journey.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glassmorphism">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 text-blue-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Our Values</h3>
                  <p className="text-gray-700">
                    Authenticity, Quality, Convenience, and Devotion guide 
                    everything we do at Alopi.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glassmorphism">
                <CardContent className="p-6">
                  <Award className="w-12 h-12 text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Our Promise</h3>
                  <p className="text-gray-700">
                    Fresh, authentic spiritual essentials delivered with 
                    care and reverence, every single day.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
