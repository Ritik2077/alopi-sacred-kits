
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Clock, MapPin, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Shipping = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Shipping Information</h1>
            <p className="text-xl text-gray-600">Everything you need to know about our delivery services</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <Truck className="w-8 h-8 text-orange-600 mb-2" />
                <CardTitle>Free Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We offer free delivery on all subscription orders across India.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <Clock className="w-8 h-8 text-orange-600 mb-2" />
                <CardTitle>Daily Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Fresh pooja essentials delivered every morning before your prayer time.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <MapPin className="w-8 h-8 text-orange-600 mb-2" />
                <CardTitle>Coverage Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We deliver across major cities in India. Check availability during checkout.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <Shield className="w-8 h-8 text-orange-600 mb-2" />
                <CardTitle>Safe Packaging</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Eco-friendly packaging ensures your items arrive fresh and undamaged.</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Delivery Schedule</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Morning Delivery (6:00 AM - 8:00 AM)</h3>
                <p className="text-gray-600">Perfect for morning prayers and rituals</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Evening Delivery (4:00 PM - 6:00 PM)</h3>
                <p className="text-gray-600">Available for evening pooja requirements</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Shipping;
