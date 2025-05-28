
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Clock, Heart, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const ProductShowcase = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const featuredProducts = [
    {
      id: 1,
      name: "Complete Daily Pooja Kit",
      description: "Complete 7-day pooja essentials for home worship",
      originalPrice: 849,
      currentPrice: 399,
      image: "daily-kit",
      badge: "Bestseller",
      rating: 4.9,
      reviews: 2847
    },
    {
      id: 2,
      name: "Premium Ashtagandha Tika Set",
      description: "Authentic Ashtagandha powder set (Pack of 5)",
      originalPrice: 599,
      currentPrice: 449,
      image: "ashtagandha",
      badge: "Premium",
      rating: 4.8,
      reviews: 1205
    },
    {
      id: 3,
      name: "Festival Special Combo",
      description: "Special combo for Diwali and other major festivals",
      originalPrice: 1299,
      currentPrice: 899,
      image: "festival-combo",
      badge: "Festival Special",
      rating: 4.9,
      reviews: 856
    },
    {
      id: 4,
      name: "Divine Incense Collection",
      description: "Premium incense sticks and dhoop collection",
      originalPrice: 449,
      currentPrice: 299,
      image: "incense",
      badge: "New",
      rating: 4.7,
      reviews: 634
    },
    {
      id: 5,
      name: "Sacred Oil & Ghee Set",
      description: "Pure cow ghee and essential oils for lamps",
      originalPrice: 699,
      currentPrice: 499,
      image: "oil-ghee",
      badge: "Pure",
      rating: 4.8,
      reviews: 945
    },
    {
      id: 6,
      name: "Pooja Thali Complete Set",
      description: "Traditional brass thali with all accessories",
      originalPrice: 1599,
      currentPrice: 1199,
      image: "thali-set",
      badge: "Traditional",
      rating: 4.9,
      reviews: 456
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Bestseller": return "bg-red-600";
      case "Premium": return "bg-purple-600";
      case "Festival Special": return "bg-orange-600";
      case "New": return "bg-green-600";
      case "Pure": return "bg-blue-600";
      case "Traditional": return "bg-yellow-600";
      default: return "bg-gray-600";
    }
  };

  const handleAddToCart = (product: typeof featuredProducts[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.currentPrice,
      image: product.image,
      originalPrice: product.originalPrice
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-25 via-red-25 to-yellow-25 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-orange-200 rounded-full px-4 py-2 mb-4">
            <Clock className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-gray-700">Shop the Divine Deals of the Day</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Sacred Essentials
            </span>
            <br />
            For Every Devotion
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our handpicked collection of premium pooja items, blessed and prepared with devotion 
            to enhance your spiritual journey.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <Card 
              key={product.id}
              className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative">
                {/* Product Image Placeholder */}
                <div className="h-64 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-300 to-red-400 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">🕉️</span>
                    </div>
                    <p className="text-sm text-gray-600 font-medium">{product.name}</p>
                  </div>
                  
                  {/* Badge */}
                  <Badge className={`absolute top-3 left-3 ${getBadgeColor(product.badge)} text-white px-2 py-1`}>
                    {product.badge}
                  </Badge>
                  
                  {/* Wishlist */}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white group-hover:scale-110 transition-transform"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                  
                  {/* Quick View on Hover */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button className="bg-white text-gray-800 hover:bg-gray-100">
                      Quick View
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                  </div>
                  
                  {/* Product Name */}
                  <h3 className="font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  {/* Pricing */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold text-gray-800">
                      ₹{product.currentPrice}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ₹{product.originalPrice}
                    </span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {Math.round((1 - product.currentPrice / product.originalPrice) * 100)}% OFF
                    </Badge>
                  </div>
                  
                  {/* Add to Cart Button */}
                  <Button 
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => navigate('/shop')}
            className="border-2 border-orange-600 text-orange-700 hover:bg-orange-600 hover:text-white px-8 py-3 rounded-full font-semibold group"
          >
            View All Sacred Products
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
