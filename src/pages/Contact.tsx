
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-gradient">Contact Us</h1>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="glassmorphism">
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="How can we help you?" rows={4} />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card className="glassmorphism">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Phone className="w-8 h-8 text-orange-500" />
                    <div>
                      <h3 className="font-semibold">Call Us</h3>
                      <p className="text-gray-600">+91 98765 43210</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glassmorphism">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Mail className="w-8 h-8 text-orange-500" />
                    <div>
                      <h3 className="font-semibold">Email Us</h3>
                      <p className="text-gray-600">support@alopi.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glassmorphism">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <MessageCircle className="w-8 h-8 text-orange-500" />
                    <div>
                      <h3 className="font-semibold">WhatsApp</h3>
                      <p className="text-gray-600">+91 98765 43210</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glassmorphism">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <MapPin className="w-8 h-8 text-orange-500" />
                    <div>
                      <h3 className="font-semibold">Visit Us</h3>
                      <p className="text-gray-600">123 Spiritual Street, Delhi, India</p>
                    </div>
                  </div>
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

export default Contact;
