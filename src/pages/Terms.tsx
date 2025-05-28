
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-gradient">Terms & Conditions</h1>
          
          <Card className="glassmorphism">
            <CardHeader>
              <CardTitle>Terms of Service</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-700">
              <section>
                <h3 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h3>
                <p>By accessing and using Alopi's services, you accept and agree to be bound by the terms and provision of this agreement.</p>
              </section>
              
              <section>
                <h3 className="text-xl font-semibold mb-3">2. Subscription Services</h3>
                <p>Our subscription services are provided on a recurring basis. You may cancel at any time through your account settings or by contacting customer support.</p>
              </section>
              
              <section>
                <h3 className="text-xl font-semibold mb-3">3. Payment Terms</h3>
                <p>All payments are processed securely through our payment gateway. Subscription fees are charged according to your selected billing cycle.</p>
              </section>
              
              <section>
                <h3 className="text-xl font-semibold mb-3">4. Delivery Policy</h3>
                <p>We strive to deliver fresh products as per the scheduled delivery dates. Delivery times may vary based on location and weather conditions.</p>
              </section>
              
              <section>
                <h3 className="text-xl font-semibold mb-3">5. Privacy Policy</h3>
                <p>Your privacy is important to us. Please review our Privacy Policy to understand how we collect and use your information.</p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Terms;
