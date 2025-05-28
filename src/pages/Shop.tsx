
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, Heart, ShoppingCart, Search, Filter, Grid, List, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Shop = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('popular');
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const categories = [
    { id: 'all', name: 'All Products', count: 45 },
    { id: 'daily-kits', name: 'Daily Kits', count: 12 },
    { id: 'incense', name: 'Incense & Dhoop', count: 8 },
    { id: 'oils', name: 'Oils & Ghee', count: 6 },
    { id: 'flowers', name: 'Fresh Flowers', count: 5 },
    { id: 'sweets', name: 'Prasadam & Sweets', count: 7 },
    { id: 'accessories', name: 'Pooja Accessories', count: 7 }
  ];

  const products = [
    {
      id: 1,
      name: "Complete Daily Pooja Kit",
      description: "Complete 7-day pooja essentials for home worship including incense, flowers, kumkum, rice, and oil lamp",
      originalPrice: 849,
      currentPrice: 399,
      image: "daily-kit",
      category: "daily-kits",
      badge: "Bestseller",
      badgeColor: "bg-red-600",
      rating: 4.9,
      reviews: 2847,
      inStock: true,
      featured: true
    },
    {
      id: 2,
      name: "Premium Ashtagandha Tika Set",
      description: "Authentic Ashtagandha powder set (Pack of 5) for traditional forehead marking",
      originalPrice: 599,
      currentPrice: 449,
      image: "ashtagandha",
      category: "accessories",
      badge: "Premium",
      badgeColor: "bg-purple-600",
      rating: 4.8,
      reviews: 1205,
      inStock: true,
      featured: true
    },
    {
      id: 3,
      name: "Festival Special Combo",
      description: "Special combo for Diwali and other major festivals with premium items and decorations",
      originalPrice: 1299,
      currentPrice: 899,
      image: "festival-combo",
      category: "daily-kits",
      badge: "Festival Special",
      badgeColor: "bg-orange-600",
      rating: 4.9,
      reviews: 856,
      inStock: true,
      featured: true
    },
    {
      id: 4,
      name: "Divine Incense Collection",
      description: "Premium incense sticks and dhoop collection with natural fragrances",
      originalPrice: 449,
      currentPrice: 299,
      image: "incense",
      category: "incense",
      badge: "New",
      badgeColor: "bg-green-600",
      rating: 4.7,
      reviews: 634,
      inStock: true,
      featured: false
    },
    {
      id: 5,
      name: "Sacred Cow Ghee & Oil Set",
      description: "Pure cow ghee and essential oils for oil lamps and aarti",
      originalPrice: 699,
      currentPrice: 499,
      image: "oil-ghee",
      category: "oils",
      badge: "Pure",
      badgeColor: "bg-blue-600",
      rating: 4.8,
      reviews: 945,
      inStock: true,
      featured: false
    },
    {
      id: 6,
      name: "Traditional Brass Pooja Thali",
      description: "Handcrafted brass thali set with all traditional accessories included",
      originalPrice: 1599,
      currentPrice: 1199,
      image: "thali-set",
      category: "accessories",
      badge: "Traditional",
      badgeColor: "bg-yellow-600",
      rating: 4.9,
      reviews: 456,
      inStock: true,
      featured: false
    },
    {
      id: 7,
      name: "Fresh Marigold Flowers",
      description: "Fresh marigold garlands and loose flowers delivered daily",
      originalPrice: 149,
      currentPrice: 99,
      image: "flowers",
      category: "flowers",
      badge: "Fresh Daily",
      badgeColor: "bg-pink-600",
      rating: 4.6,
      reviews: 1234,
      inStock: true,
      featured: false
    },
    {
      id: 8,
      name: "Prasadam Sweet Box",
      description: "Assorted traditional sweets prepared with pure ingredients for offerings",
      originalPrice: 399,
      currentPrice: 299,
      image: "sweets",
      category: "sweets",
      badge: "Fresh Made",
      badgeColor: "bg-orange-500",
      rating: 4.7,
      reviews: 567,
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
        return b.reviews - a.reviews; // Popular = most reviews
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-orange-200 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-medium text-gray-700">Sacred Collection</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Shop Sacred
              <br />
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Essentials
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our handpicked collection of premium pooja items, blessed and prepared with 
              devotion to enhance your spiritual journey.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
              
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-3 rounded-full border-gray-300 focus:border-orange-500"
                />
              </div>

              {/* Sort and View Options */}
              <div className="flex items-center gap-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48 rounded-full">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex bg-white rounded-full p-1 border border-gray-300">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-full px-3"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-full px-3"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={filterCategory === category.id ? 'default' : 'outline'}
                  onClick={() => setFilterCategory(category.id)}
                  className={`rounded-full ${
                    filterCategory === category.id
                      ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white'
                      : 'border-gray-300 text-gray-700 hover:bg-orange-50'
                  }`}
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Showing {sortedProducts.length} of {products.length} products
              </p>
              <Button
                variant="outline"
                onClick={() => navigate('/cart')}
                className="rounded-full border-orange-300 text-orange-700 hover:bg-orange-50"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                View Cart
              </Button>
            </div>

            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {sortedProducts.map((product) => (
                <Card 
                  key={product.id}
                  className={`group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm hover:-translate-y-1 overflow-hidden ${
                    viewMode === 'list' ? 'flex flex-row' : ''
                  }`}
                >
                  <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                    {/* Product Image */}
                    <div className={`bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center relative overflow-hidden ${
                      viewMode === 'list' ? 'h-full' : 'h-64'
                    }`}>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-300 to-red-400 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-2xl">🕉️</span>
                        </div>
                        <p className="text-sm text-gray-600 font-medium px-2">{product.name}</p>
                      </div>
                      
                      {/* Badge */}
                      <Badge className={`absolute top-3 left-3 ${product.badgeColor} text-white px-2 py-1`}>
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
                    </div>
                  </div>
                  
                  <CardContent className={`${viewMode === 'list' ? 'flex-1 p-6 flex flex-col justify-between' : 'p-6'}`}>
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                    </div>
                    
                    {/* Product Info */}
                    <div className={viewMode === 'list' ? 'flex-1' : ''}>
                      <h3 className="font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                        {product.name}
                      </h3>
                      
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                    
                    {/* Pricing and Actions */}
                    <div>
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
                      
                      <div className={`gap-2 ${viewMode === 'list' ? 'flex' : 'space-y-2'}`}>
                        <Button className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white">
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Add to Cart
                        </Button>
                        {viewMode === 'list' && (
                          <Button variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-50">
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
          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-orange-600 text-orange-700 hover:bg-orange-600 hover:text-white px-8 py-3 rounded-full font-semibold"
            >
              Load More Products
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Shop;
