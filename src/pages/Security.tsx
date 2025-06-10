
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, Server } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Security = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Security & Privacy</h1>
            <p className="text-xl text-gray-600">Your security is our top priority</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <Shield className="w-8 h-8 text-orange-600 mb-2" />
                <CardTitle>Data Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Your personal information is encrypted and protected using industry-standard security measures.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <Lock className="w-8 h-8 text-orange-600 mb-2" />
                <CardTitle>Secure Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">All payment transactions are processed through secure, PCI-compliant payment gateways.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <Eye className="w-8 h-8 text-orange-600 mb-2" />
                <CardTitle>Privacy Controls</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">You have full control over your data and can request access, modification, or deletion at any time.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <Server className="w-8 h-8 text-orange-600 mb-2" />
                <CardTitle>Secure Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Our servers and infrastructure are monitored 24/7 and protected against cyber threats.</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Our Security Commitments</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">SSL Encryption</h3>
                <p className="text-gray-600">All data transmitted between your device and our servers is encrypted using SSL technology.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Regular Security Audits</h3>
                <p className="text-gray-600">We conduct regular security assessments to identify and address potential vulnerabilities.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Data Minimization</h3>
                <p className="text-gray-600">We only collect and store the minimum amount of data necessary to provide our services.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Security;
