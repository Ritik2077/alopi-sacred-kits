import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, Heart, ShoppingCart, Search, Filter, Grid, List, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Shop = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('popular');
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { addToCart, getTotalItems } = useCart();

  const categories = [
    { id: 'all', name: 'All Products', count: 52 },
    { id: 'hawan-samagri', name: 'Hawan Samagri', count: 12 },
    { id: 'beads-malas', name: 'Beads & Malas', count: 8 },
    { id: 'clay-products', name: 'Clay Products', count: 6 },
    { id: 'camphor', name: 'Camphor Range', count: 5 },
    { id: 'cow-dung', name: 'Cow Dung Products', count: 7 },
    { id: 'miscellaneous', name: 'Miscellaneous', count: 14 }
  ];

  // Enhanced product catalog based on brochure
  const products = [
    // Hawan Samagri
    {
      id: 1,
      name: "Maharishi Hawan Samagri",
      description: "Premium quality hawan samagri with sacred herbs and ingredients for spiritual rituals",
      originalPrice: 350,
      currentPrice: 280,
      image: "hawan-samagri",
      category: "hawan-samagri",
      badge: "Best Seller",
      badgeColor: "bg-red-600",
      rating: 4.9,
      reviews: 2847,
      inStock: true,
      featured: true
    },
    {
      id: 2,
      name: "Sambrani Cups",
      description: "Natural sambrani cups for aromatic smoke and positive vibes",
      originalPrice: 120,
      currentPrice: 95,
      image: "sambrani",
      category: "hawan-samagri",
      badge: "Traditional",
      badgeColor: "bg-orange-600",
      rating: 4.7,
      reviews: 1456,
      inStock: true,
      featured: false
    },
    {
      id: 3,
      name: "Dhoop Sticks Premium",
      description: "Hand-rolled dhoop sticks with natural ingredients for daily worship",
      originalPrice: 180,
      currentPrice: 149,
      image: "dhoop-sticks",
      category: "hawan-samagri",
      badge: "Pure",
      badgeColor: "bg-green-600",
      rating: 4.8,
      reviews: 987,
      inStock: true,
      featured: false
    },
    
    // Beads & Malas
    {
      id: 4,
      name: "Rudraksh Studded Tree",
      description: "Sacred rudraksh tree for spiritual energy and prosperity",
      originalPrice: 2500,
      currentPrice: 1999,
      image: "rudraksh-tree",
      category: "beads-malas",
      badge: "Sacred",
      badgeColor: "bg-purple-600",
      rating: 4.9,
      reviews: 456,
      inStock: true,
      featured: true
    },
    {
      id: 5,
      name: "108 Rudraksh Mala",
      description: "Authentic 108 bead rudraksh mala for meditation and chanting",
      originalPrice: 899,
      currentPrice: 749,
      image: "rudraksh-mala",
      category: "beads-malas",
      badge: "Authentic",
      badgeColor: "bg-blue-600",
      rating: 4.8,
      reviews: 623,
      inStock: true,
      featured: true
    },
    {
      id: 6,
      name: "Tulsi Mala Premium",
      description: "Sacred tulsi beads mala for daily prayers and spiritual practice",
      originalPrice: 299,
      currentPrice: 249,
      image: "tulsi-mala",
      category: "beads-malas",
      badge: "Pure",
      badgeColor: "bg-green-600",
      rating: 4.7,
      reviews: 834,
      inStock: true,
      featured: false
    },
    
    // Clay Products
    {
      id: 7,
      name: "Clay Diyas Set (12 pieces)",
      description: "Handmade clay diyas for festivals and daily lighting",
      originalPrice: 150,
      currentPrice: 119,
      image: "clay-diyas",
      category: "clay-products",
      badge: "Handmade",
      badgeColor: "bg-yellow-600",
      rating: 4.6,
      reviews: 1234,
      inStock: true,
      featured: false
    },
    {
      id: 8,
      name: "Clay Ganesha Idol",
      description: "Eco-friendly clay Ganesha idol for festive celebrations",
      originalPrice: 799,
      currentPrice: 649,
      image: "clay-ganesha",
      category: "clay-products",
      badge: "Eco-Friendly",
      badgeColor: "bg-green-600",
      rating: 4.8,
      reviews: 567,
      inStock: true,
      featured: true
    },
    
    // Camphor Range
    {
      id: 9,
      name: "Pure Camphor Tablets",
      description: "100% pure camphor tablets for aarti and spiritual cleansing",
      originalPrice: 89,
      currentPrice: 75,
      image: "camphor",
      category: "camphor",
      badge: "Pure",
      badgeColor: "bg-blue-600",
      rating: 4.7,
      reviews: 789,
      inStock: true,
      featured: false
    },
    {
      id: 10,
      name: "Camphor Oil",
      description: "Pure camphor oil for lamps and aromatic purposes",
      originalPrice: 199,
      currentPrice: 169,
      image: "camphor-oil",
      category: "camphor",
      badge: "Premium",
      badgeColor: "bg-purple-600",
      rating: 4.6,
      reviews: 345,
      inStock: true,
      featured: false
    },
    
    // Cow Dung Products
    {
      id: 11,
      name: "Cow Dung Cake (Pack of 10)",
      description: "Organic cow dung cakes for hawan and spiritual rituals",
      originalPrice: 199,
      currentPrice: 159,
      image: "cow-dung-cake",
      category: "cow-dung",
      badge: "Organic",
      badgeColor: "bg-green-600",
      rating: 4.5,
      reviews: 456,
      inStock: true,
      featured: false
    },
    {
      id: 12,
      name: "Gomay Agarbatti",
      description: "Natural cow dung incense sticks with herbal fragrances",
      originalPrice: 129,
      currentPrice: 99,
      image: "gomay-agarbatti",
      category: "cow-dung",
      badge: "Natural",
      badgeColor: "bg-green-600",
      rating: 4.6,
      reviews: 234,
      inStock: true,
      featured: false
    },
    
    // Miscellaneous
    {
      id: 13,
      name: "Brass Pooja Thali Set",
      description: "Complete brass thali set with all traditional accessories",
      originalPrice: 1599,
      currentPrice: 1299,
      image: "brass-thali",
      category: "miscellaneous",
      badge: "Complete Set",
      badgeColor: "bg-yellow-600",
      rating: 4.9,
      reviews: 345,
      inStock: true,
      featured: true
    },
    {
      id: 14,
      name: "Kumkum Tilak Set",
      description: "Premium quality kumkum and tilak powder set",
      originalPrice: 249,
      currentPrice: 199,
      image: "kumkum-tilak",
      category: "miscellaneous",
      badge: "Premium",
      badgeColor: "bg-red-600",
      rating: 4.7,
      reviews: 567,
      inStock: true,
      featured: false
    },
    {
      id: 15,
      name: "Panchamrit Set",
      description: "Complete panchamrit ingredients for abhishek rituals",
      originalPrice: 399,
      currentPrice: 329,
      image: "panchamrit",
      category: "miscellaneous",
      badge: "Sacred",
      badgeColor: "bg-purple-600",
      rating: 4.8,
      reviews: 234,
      inStock: true,
      featured: false
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = filterCategory === 'all' || product.category === filterCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.currentPrice - b.currentPrice;
      case 'price-high':
        return b.currentPrice - a.currentPrice;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.id - a.id;
      default:
        return b.reviews - a.reviews;
    }
  });

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.currentPrice,
      image: product.image,
      originalPrice: product.originalPrice
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 animate-fade-in">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12 animate-slide-up">
            <div className="inline-flex items-center gap-2 glass-card px-6 py-3 mb-6 hover-lift">
              <Sparkles className="w-5 h-5 text-orange-600 animate-bounce-subtle" />
              <span className="text-sm font-medium text-gray-700">Rooted in Tradition, Dedicated to Devotion</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 animate-scale-in">
              Shop Sacred
              <br />
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Essentials
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our authentic collection of spiritual products, each blessed and prepared with 
              devotion to enhance your sacred journey and connect you with the divine.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 animate-slide-up">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
              
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search sacred products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 glass-card border-none focus:ring-2 focus:ring-orange-500 text-base"
                />
              </div>

              {/* Sort and View Options */}
              <div className="flex items-center gap-4 w-full lg:w-auto">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full lg:w-48 glass-card border-none">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent className="glass-card">
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex glass-card rounded-full p-1">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-full px-3 hover-lift"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-full px-3 hover-lift"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={filterCategory === category.id ? 'default' : 'outline'}
                  onClick={() => setFilterCategory(category.id)}
                  className={`glass-card hover-lift text-sm ${
                    filterCategory === category.id
                      ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white border-none'
                      : 'border-none text-gray-700 hover:bg-orange-50'
                  }`}
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
              <p className="text-gray-600 text-center sm:text-left">
                Showing {sortedProducts.length} of {products.length} sacred products
              </p>
              <Button
                variant="outline"
                onClick={() => navigate('/cart')}
                className="glass-card border-none text-orange-700 hover:bg-orange-50 hover-lift w-full sm:w-auto"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                View Cart {getTotalItems() > 0 && `(${getTotalItems()})`}
              </Button>
            </div>

            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {sortedProducts.map((product, index) => (
                <Card 
                  key={product.id}
                  className={`group glass-card hover-lift overflow-hidden animate-fade-in ${
                    viewMode === 'list' ? 'flex flex-col sm:flex-row' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`relative ${viewMode === 'list' ? 'sm:w-48 flex-shrink-0' : ''}`}>
                    {/* Product Image */}
                    <div className={`bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center relative overflow-hidden ${
                      viewMode === 'list' ? 'h-48 sm:h-full' : 'h-64'
                    }`}>
                      <div className="text-center p-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-300 to-red-400 rounded-full flex items-center justify-center mx-auto mb-2 animate-bounce-subtle">
                          <span className="text-2xl">🕉️</span>
                        </div>
                        <p className="text-sm text-gray-600 font-medium line-clamp-2">{product.name}</p>
                      </div>
                      
                      {/* Badge */}
                      <Badge className={`absolute top-3 left-3 ${product.badgeColor} text-white px-2 py-1 text-xs animate-pulse-glow`}>
                        {product.badge}
                      </Badge>
                      
                      {/* Wishlist */}
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="absolute top-3 right-3 w-8 h-8 rounded-full glass-card hover-lift group-hover:scale-110 transition-transform"
                      >
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <CardContent className={`${viewMode === 'list' ? 'flex-1 p-4 sm:p-6 flex flex-col justify-between' : 'p-6'}`}>
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({product.reviews})</span>
                    </div>
                    
                    {/* Product Info */}
                    <div className={viewMode === 'list' ? 'flex-1' : ''}>
                      <h3 className="font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                      
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                    
                    {/* Pricing and Actions */}
                    <div>
                      <div className="flex items-center gap-2 mb-4 flex-wrap">
                        <span className="text-xl font-bold text-gray-800">
                          ₹{product.currentPrice}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          ₹{product.originalPrice}
                        </span>
                        <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                          {Math.round((1 - product.currentPrice / product.originalPrice) * 100)}% OFF
                        </Badge>
                      </div>
                      
                      <div className={`gap-2 ${viewMode === 'list' ? 'flex flex-col sm:flex-row' : 'space-y-2'}`}>
                        <Button 
                          onClick={() => handleAddToCart(product)}
                          className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white hover-lift"
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Add to Cart
                        </Button>
                        {viewMode === 'list' && (
                          <Button variant="outline" className="glass-card border-none text-orange-700 hover:bg-orange-50 hover-lift">
                            Quick View
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Load More */}
          <div className="text-center animate-fade-in">
            <Button 
              variant="outline" 
              size="lg"
              className="glass-card border-none text-orange-700 hover:bg-orange-600 hover:text-white px-8 py-3 font-semibold hover-lift"
            >
              Load More Sacred Products
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Shop;
