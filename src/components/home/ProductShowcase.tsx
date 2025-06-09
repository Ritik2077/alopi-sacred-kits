
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ArrowRight, Star, Clock, Heart, ShoppingCart, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const ProductShowcase = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quickViewProduct, setQuickViewProduct] = useState<typeof featuredProducts[0] | null>(null);

  const featuredProducts = [
    {
      id: 1,
      name: "Maharishi Hawan Samagri",
      description: "Premium quality hawan samagri with sacred herbs for spiritual rituals",
      originalPrice: 350,
      currentPrice: 280,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "Best Seller",
      rating: 4.9,
      reviews: 2847
    },
    {
      id: 4,
      name: "Rudraksh Studded Tree",
      description: "Sacred rudraksh tree for spiritual energy and prosperity",
      originalPrice: 2500,
      currentPrice: 1999,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "Sacred",
      rating: 4.9,
      reviews: 456
    },
    {
      id: 5,
      name: "108 Rudraksh Mala",
      description: "Authentic 108 bead rudraksh mala for meditation and chanting",
      originalPrice: 899,
      currentPrice: 749,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "Authentic",
      rating: 4.8,
      reviews: 623
    },
    {
      id: 8,
      name: "Clay Ganesha Idol",
      description: "Eco-friendly clay Ganesha idol for festive celebrations",
      originalPrice: 799,
      currentPrice: 649,
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "Eco-Friendly",
      rating: 4.8,
      reviews: 567
    },
    {
      id: 13,
      name: "Brass Pooja Thali Set",
      description: "Complete brass thali set with all traditional accessories",
      originalPrice: 1599,
      currentPrice: 1299,
      image: "https://images.unsplash.com/photo-1609664689795-849cac65ddff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "Complete Set",
      rating: 4.9,
      reviews: 345
    },
    {
      id: 15,
      name: "Panchamrit Set",
      description: "Complete panchamrit ingredients for abhishek rituals",
      originalPrice: 399,
      currentPrice: 329,
      image: "https://images.unsplash.com/photo-1594736797933-d0d39c0ca8ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "Sacred",
      rating: 4.8,
      reviews: 234
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Best Seller": return "bg-red-500 hover:bg-red-600";
      case "Sacred": return "bg-purple-500 hover:bg-purple-600";
      case "Authentic": return "bg-blue-500 hover:bg-blue-600";
      case "Eco-Friendly": return "bg-green-500 hover:bg-green-600";
      case "Complete Set": return "bg-yellow-500 hover:bg-yellow-600";
      default: return "bg-gray-500 hover:bg-gray-600";
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

  const QuickViewContent = ({ product }: { product: typeof featuredProducts[0] }) => (
    <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
      <div className="relative h-40 sm:h-48 lg:h-56 mb-4 rounded-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <Badge className={`absolute top-2 left-2 ${getBadgeColor(product.badge)} text-white px-2 py-1 text-xs`}>
          {product.badge}
        </Badge>
      </div>
      
      <div className="space-y-3 px-1">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{product.rating}</span>
          </div>
          <span className="text-sm text-gray-500">({product.reviews.toLocaleString()} reviews)</span>
        </div>
        
        <h3 className="font-bold text-lg text-gray-800 leading-tight">{product.name}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
        
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            ₹{product.currentPrice.toLocaleString()}
          </span>
          <span className="text-sm text-gray-500 line-through">
            ₹{product.originalPrice.toLocaleString()}
          </span>
          <Badge variant="secondary" className="bg-gradient-to-r from-green-100 to-green-50 text-green-800 text-xs">
            {Math.round((1 - product.currentPrice / product.originalPrice) * 100)}% OFF
          </Badge>
        </div>
        
        <Button 
          onClick={() => handleAddToCart(product)}
          className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white mt-4"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 relative overflow-hidden">
      {/* Enhanced decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-br from-red-200/25 to-pink-200/25 rounded-full blur-2xl animate-bounce-subtle"></div>
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-orange-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 glass-card px-6 py-3 mb-6 hover-lift">
            <Clock className="w-5 h-5 text-orange-600 animate-bounce-subtle" />
            <span className="text-sm font-medium text-gray-700">Blessed Products of the Day</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 animate-scale-in">
            <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
              Sacred Essentials
            </span>
            <br />
            For Every Devotion
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover our handpicked collection of premium spiritual products, each blessed and prepared with devotion 
            to enhance your sacred journey and connect you with the divine.
          </p>
        </div>

        {/* Enhanced Products Grid Container */}
        <div className="relative glass-card rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl hover-lift mb-12">
          {/* Floating decorative elements for the grid container */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
          
          {/* Products Grid - Properly optimized for mobile 2x2 and desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-8 relative z-10">
            {featuredProducts.map((product, index) => (
              <Card 
                key={product.id}
                className="group glass overflow-hidden animate-fade-in border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift rounded-xl lg:rounded-2xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  {/* Product Image */}
                  <div className="relative h-32 sm:h-40 lg:h-64 overflow-hidden rounded-t-xl lg:rounded-t-2xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    {/* Enhanced gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-orange-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl lg:rounded-t-2xl"></div>
                    
                    {/* Badge with enhanced styling */}
                    <Badge className={`absolute top-2 left-2 ${getBadgeColor(product.badge)} text-white px-1.5 py-0.5 lg:px-3 lg:py-1 text-xs animate-pulse-glow shadow-lg transition-all duration-300 glass-dark backdrop-blur-md`}>
                      {product.badge}
                    </Badge>
                    
                    {/* Enhanced Wishlist */}
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="absolute top-2 right-2 w-8 h-8 lg:w-10 lg:h-10 rounded-full glass backdrop-blur-md hover-lift group-hover:scale-110 transition-all duration-300 shadow-lg border border-white/20"
                    >
                      <Heart className="w-3 h-3 lg:w-4 lg:h-4 text-white/80 hover:text-red-400 transition-colors" />
                    </Button>
                    
                    {/* Enhanced Quick View on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center rounded-t-xl lg:rounded-t-2xl">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button className="glass text-white hover:bg-white/20 hover-lift transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl backdrop-blur-md border border-white/30 text-xs lg:text-sm px-2 py-1 lg:px-4 lg:py-2">
                            Quick View
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent 
                          className="p-0 border-0 bg-transparent shadow-none w-screen max-w-xs sm:max-w-sm lg:max-w-md mx-4"
                          align="center"
                          side="top"
                          sideOffset={10}
                        >
                          <div className="glass-card p-4 lg:p-6 rounded-xl lg:rounded-2xl shadow-2xl backdrop-blur-md border border-white/20 bg-white/95">
                            <QuickViewContent product={product} />
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  
                  <CardContent className="p-3 sm:p-4 lg:p-6 glass-card backdrop-blur-sm border-t border-white/20">
                    {/* Rating with enhanced styling */}
                    <div className="flex items-center gap-1 lg:gap-2 mb-2 lg:mb-3">
                      <div className="flex items-center gap-1 glass-dark rounded-full px-1.5 py-0.5 lg:px-2 lg:py-1 backdrop-blur-sm">
                        <Star className="w-3 h-3 lg:w-4 lg:h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs lg:text-sm font-medium text-gray-700">{product.rating}</span>
                      </div>
                      <span className="text-xs lg:text-sm text-gray-500 hidden sm:inline">({product.reviews.toLocaleString()})</span>
                    </div>
                    
                    {/* Product Name */}
                    <h3 className="font-bold text-gray-800 mb-1.5 lg:mb-2 group-hover:text-orange-600 transition-colors line-clamp-2 text-xs sm:text-sm lg:text-lg leading-tight">
                      {product.name}
                    </h3>
                    
                    {/* Description - Hidden on mobile for better spacing */}
                    <p className="text-xs lg:text-sm text-gray-600 mb-2 lg:mb-4 line-clamp-2 leading-relaxed hidden sm:block">
                      {product.description}
                    </p>
                    
                    {/* Enhanced Pricing */}
                    <div className="flex items-center gap-1 lg:gap-2 mb-2 lg:mb-4 flex-wrap">
                      <span className="text-sm sm:text-lg lg:text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        ₹{product.currentPrice.toLocaleString()}
                      </span>
                      <span className="text-xs lg:text-sm text-gray-500 line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                      <Badge variant="secondary" className="bg-gradient-to-r from-green-100 to-green-50 text-green-800 text-xs font-semibold px-1 lg:px-2 py-0.5 lg:py-1 shadow-sm">
                        {Math.round((1 - product.currentPrice / product.originalPrice) * 100)}% OFF
                      </Badge>
                    </div>
                    
                    {/* Enhanced Add to Cart Button */}
                    <Button 
                      onClick={() => handleAddToCart(product)}
                      className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white hover-lift transform transition-all duration-300 shadow-lg hover:shadow-xl rounded-lg lg:rounded-xl glass-dark backdrop-blur-sm border border-orange-500/20 text-xs lg:text-sm py-1.5 lg:py-3"
                    >
                      <ShoppingCart className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced View All Products CTA */}
        <div className="text-center animate-fade-in">
          <div className="glass-card rounded-2xl p-6 inline-block hover-lift shadow-xl">
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/shop')}
              className="glass border-2 border-orange-200/50 text-orange-700 hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-600 hover:text-white px-8 py-4 font-semibold group hover-lift transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl backdrop-blur-md"
            >
              View All Sacred Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
