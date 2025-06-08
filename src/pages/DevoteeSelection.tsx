
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Home, Sparkles, Star } from "lucide-react";

const DevoteeSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-br from-red-400 to-pink-500 rounded-full opacity-10 animate-pulse"></div>

      {/* Home Button */}
      <div className="absolute top-8 left-8 z-50">
        <Button
          variant="outline"
          onClick={() => navigate('/')}
          className="glass-card border-orange-200 text-orange-700 hover:bg-orange-50 hover-lift group"
        >
          <Home className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
          Home
        </Button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Sacred Symbol */}
          <div className="mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full shadow-2xl animate-pulse-glow mb-6">
              <span className="text-3xl">🕉️</span>
            </div>
          </div>

          {/* Selection Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Exclusive Premium Devotee Card */}
            <div className="glass-card p-8 rounded-3xl hover-lift group cursor-pointer animate-fade-in"
                 onClick={() => navigate('/premium-devotee')}
                 style={{ animationDelay: '0.2s' }}>
              
              {/* Premium Badge */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                <Star className="w-8 h-8 text-white fill-white" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                    <Sparkles className="w-12 h-12 text-white animate-pulse" />
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent">
                  Exclusive Premium
                </h2>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  Devotee
                </h3>

                {/* Decorative Elements */}
                <div className="grid grid-cols-3 gap-2 mt-8">
                  {['Sacred', 'Premium', 'Divine'].map((item, index) => (
                    <div key={index} className="glass rounded-lg p-2 text-xs text-orange-600 font-medium hover-lift transition-all duration-300">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/10 via-transparent to-yellow-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Loyal Devotee Card */}
            <div className="glass-card p-8 rounded-3xl hover-lift group cursor-pointer animate-fade-in"
                 onClick={() => navigate('/loyal-devotee')}
                 style={{ animationDelay: '0.4s' }}>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                    <span className="text-3xl animate-pulse">🙏</span>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Loyal
                </h2>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  Devotee
                </h3>

                {/* Decorative Elements */}
                <div className="grid grid-cols-3 gap-2 mt-8">
                  {['Pure', 'Essential', 'Sacred'].map((item, index) => (
                    <div key={index} className="glass rounded-lg p-2 text-xs text-orange-600 font-medium hover-lift transition-all duration-300">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/10 via-transparent to-red-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevoteeSelection;
