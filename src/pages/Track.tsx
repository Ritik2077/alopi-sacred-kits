
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Package, Search, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Track = () => {
  const [trackingId, setTrackingId] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Track Your Order</h1>
            <p className="text-xl text-gray-600">Enter your order ID to track your delivery</p>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-12">
            <CardHeader>
              <CardTitle className="text-center">Order Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  placeholder="Enter your order ID"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  className="flex-1"
                />
                <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white">
                  <Search className="w-4 h-4 mr-2" />
                  Track Order
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader className="text-center">
                <Package className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Order Status</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Real-time updates on your order preparation and dispatch.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader className="text-center">
                <MapPin className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Live Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Track your delivery partner's location in real-time.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader className="text-center">
                <Clock className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Delivery Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Estimated delivery time based on current location.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Track;
