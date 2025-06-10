
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Refund = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Refund Policy</h1>
            <p className="text-xl text-gray-600">Fair and transparent refund procedures</p>
          </div>

          <div className="space-y-8">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Subscription Refunds</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  For subscription services, refunds are available within 7 days of the first delivery 
                  if you are not satisfied with our service quality.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Full refund for unused subscription period</li>
                  <li>Processed within 5-7 business days</li>
                  <li>Refunded to original payment method</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Product Refunds</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Individual product purchases can be refunded within 24 hours of delivery 
                  if the items are damaged or not as described.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Items must be in original condition</li>
                  <li>Contact us within 24 hours of delivery</li>
                  <li>Photographic evidence may be required</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Processing Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Once your refund request is approved, it will be processed within 3-5 business days. 
                  The actual time for the refund to appear in your account may vary depending on your 
                  payment method and financial institution.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Refund;
