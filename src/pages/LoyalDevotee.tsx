
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, Leaf, Users } from "lucide-react";

const LoyalDevotee = () => {
  const navigate = useNavigate();

  const kitItems = [
    {
      name: "Clay Diya",
      quantity: "1 piece",
      spiritual: "Traditional earthen lamp that connects us to mother earth and divine light",
      medical: "Natural clay provides grounding energy and purifies surrounding air",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400"
    },
    {
      name: "Ghee Dipped Cotton Baati",
      quantity: "1 piece",
      spiritual: "Sacred flame fueled by pure ghee creates divine ambiance",
      medical: "Ghee vapors have therapeutic effects and improve air quality",
      image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=400"
    },
    {
      name: "Sacred Gangajal",
      quantity: "5ml",
      spiritual: "Holy water for purification rituals and spiritual cleansing",
      medical: "Natural minerals in Ganga water have healing properties",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400"
    },
    {
      name: "Bhimseni Kapur",
      quantity: "Quality grade",
      spiritual: "Pure camphor for aarti and meditation practices",
      medical: "Natural camphor improves concentration and respiratory health",
      image: "https://images.unsplash.com/photo-1578411135199-5a13bc2dfe12?w=400"
    },
    {
      name: "Sacred Akshat (Rice)",
      quantity: "Traditional",
      spiritual: "Unbroken rice grains symbolizing prosperity and completeness",
      medical: "Represents nourishment and abundance in life",
      image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=400"
    },
    {
      name: "Sandalwood Powder",
      quantity: "Pure quality",
      spiritual: "Sacred powder for tilaka and meditation enhancement",
      medical: "Cooling properties that calm mind and reduce stress",
      image: "https://images.unsplash.com/photo-1609205807107-2dd40358b9b6?w=400"
    },
    {
      name: "Turmeric Powder",
      quantity: "Organic",
      spiritual: "Auspicious yellow powder representing purity and knowledge",
      medical: "Natural antiseptic and anti-inflammatory benefits",
      image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400"
    },
    {
      name: "Sacred Kumkum",
      quantity: "Traditional",
      spiritual: "Red powder symbolizing divine feminine energy and protection",
      medical: "Turmeric-based formulation with natural healing properties",
      image: "https://images.unsplash.com/photo-1558618666-4d4c2a6e4cdd?w=400"
    },
    {
      name: "Scented Dhoop",
      quantity: "Premium",
      spiritual: "Aromatic incense creating peaceful atmosphere for prayers",
      medical: "Natural fragrance helps in relaxation and mood elevation",
      image: "https://images.unsplash.com/photo-1544968503-7ad532ba5c85?w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-28 h-28 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-32 right-10 w-36 h-36 bg-gradient-to-br from-red-400 to-orange-500 rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Navigation */}
      <div className="relative z-50 p-6">
        <Button
          variant="outline"
          onClick={() => navigate('/devotee-selection')}
          className="glass-card border-orange-200 text-orange-700 hover:bg-orange-50 hover-lift group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Selection
        </Button>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center py-12 px-4">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full shadow-2xl animate-pulse-glow mb-6">
          <Users className="w-10 h-10 text-white" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Loyal
          </span>
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
          Devotee Kit
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Essential sacred items for the dedicated devotee's daily spiritual practice and divine connection
        </p>
      </div>

      {/* Kit Items Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kitItems.map((item, index) => (
            <Card key={index} className="glass-card border-0 overflow-hidden hover-lift group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/50 via-transparent to-red-400/20"></div>
                <div className="absolute top-4 right-4 glass-dark rounded-full p-2">
                  <span className="text-yellow-300 animate-pulse">🙏</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                  <span className="inline-block glass rounded-full px-3 py-1 text-sm font-medium text-orange-600">
                    {item.quantity}
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="glass rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Heart className="w-4 h-4 text-red-500" />
                      <span className="font-semibold text-gray-700">Spiritual Value</span>
                    </div>
                    <p className="text-sm text-gray-600">{item.spiritual}</p>
                  </div>

                  <div className="glass rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Leaf className="w-4 h-4 text-green-500" />
                      <span className="font-semibold text-gray-700">Medical Value</span>
                    </div>
                    <p className="text-sm text-gray-600">{item.medical}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-card rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Start Your Loyal Journey
            </h3>
            <p className="text-gray-600 mb-6">
              Begin your daily spiritual practice with our essential devotee collection
            </p>
            <Button 
              onClick={() => navigate('/subscription')}
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-full font-semibold hover-lift animate-pulse-glow"
            >
              Subscribe to Loyal Kit
              <span className="ml-2">🙏</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoyalDevotee;
