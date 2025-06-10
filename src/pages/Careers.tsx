
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Users, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Careers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-orange-200 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-medium text-gray-700">Join Our Mission</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Build Your Career with
              <br />
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Alopi Sacred Essentials
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our team in transforming spiritual practices across India. We're looking for passionate individuals who want to make a meaningful impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader className="text-center">
                <Heart className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Purpose-Driven Work</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Make a meaningful impact by connecting people with their spiritual practices daily.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader className="text-center">
                <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Amazing Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Work with passionate individuals who share your values and vision for spiritual growth.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader className="text-center">
                <Target className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Growth Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Advance your career in a rapidly growing company with endless possibilities.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Current Openings</h2>
            <p className="text-lg text-gray-600 mb-8">We're currently building our team. Check back soon for exciting opportunities!</p>
            
            <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-3 rounded-full font-semibold">
              Get Notified About New Openings
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Careers;
