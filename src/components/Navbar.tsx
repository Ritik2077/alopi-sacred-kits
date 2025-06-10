
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { getTotalItems } = useCart();
  const { isAuthenticated, user, isGuest } = useAuth();

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Subscription', path: '/subscription' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate('/')}>
            <img 
              src="/lovable-uploads/8bb721c4-d73a-49d6-93ab-d40af29e6023.png" 
              alt="Alopi Logo" 
              className="w-16 h-16 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => navigate(item.path)}
                  className="relative text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors duration-300 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Cart, Profile, and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={() => navigate('/cart')}
              className="relative glass-card border-orange-200 text-orange-700 hover:bg-orange-50 transition-all duration-300"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Cart</span>
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce-subtle">
                  {getTotalItems()}
                </span>
              )}
            </Button>

            {/* Profile/Login Button */}
            <Button
              variant="outline"
              onClick={() => navigate(isAuthenticated ? '/profile' : '/login')}
              className="glass-card border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300"
            >
              <User className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">
                {isAuthenticated ? user?.firstName || 'Profile' : isGuest ? 'Guest' : 'Login'}
              </span>
            </Button>
            
            <Button 
              onClick={() => navigate('/subscription')}
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white transition-all duration-300 animate-pulse-glow"
            >
              <span className="hidden sm:inline">Subscribe Now</span>
              <span className="sm:hidden">Subscribe</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="glass-card transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-card mt-2 rounded-lg">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    navigate(item.path);
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-medium w-full text-left rounded-lg hover:bg-orange-50 transition-all duration-300"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex flex-col space-y-2 px-3 pt-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    navigate('/cart');
                    setIsMenuOpen(false);
                  }}
                  className="relative glass-card border-orange-300 text-orange-700 hover:bg-orange-50 w-full justify-start"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Cart {getTotalItems() > 0 && `(${getTotalItems()})`}
                </Button>
                
                <Button
                  variant="outline"
                  onClick={() => {
                    navigate(isAuthenticated ? '/profile' : '/login');
                    setIsMenuOpen(false);
                  }}
                  className="glass-card border-gray-300 text-gray-700 hover:bg-gray-50 w-full justify-start"
                >
                  <User className="w-4 h-4 mr-2" />
                  {isAuthenticated ? user?.firstName || 'Profile' : isGuest ? 'Guest' : 'Login'}
                </Button>
                
                <Button 
                  onClick={() => {
                    navigate('/subscription');
                    setIsMenuOpen(false);
                  }}
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white w-full animate-pulse-glow"
                >
                  Subscribe Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
