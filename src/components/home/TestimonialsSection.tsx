
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-slideshow for mobile
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 4000); // Change slide every 4 seconds
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      rating: 5,
      text: "Alopi has transformed my daily pooja routine completely. The quality of items is exceptional and the convenience of home delivery means I never miss my prayers. Highly recommended!",
      image: "PS"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Delhi, NCR",
      rating: 5,
      text: "As a working professional, finding time to buy pooja essentials was always challenging. Alopi's subscription service is a blessing - fresh items delivered right on time every day.",
      image: "RK"
    },
    {
      id: 3,
      name: "Meera Patel",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      text: "The Authenticity and purity of Alopi's products is unmatched. My family has been using their services for 6 months now and we're completely satisfied with the quality.",
      image: "MP"
    },
    {
      id: 4,
      name: "Suresh Iyer",
      location: "Chennai, Tamil Nadu",
      rating: 5,
      text: "Excellent service! The items are always fresh, packaging is eco-friendly, and the delivery is punctual. Alopi understands the needs of modern devotees perfectly.",
      image: "SI"
    },
    {
      id: 5,
      name: "Anita Gupta",
      location: "Pune, Maharashtra",
      rating: 5,
      text: "I love how Alopi customizes the kits according to different festivals and occasions. It shows their deep understanding of our traditions and cultural practices.",
      image: "AG"
    },
    {
      id: 6,
      name: "Vikram Singh",
      location: "Jaipur, Rajasthan",
      rating: 5,
      text: "Outstanding quality and service! The customer support team is very helpful and the subscription flexibility allows me to pause and resume as per my travel schedule.",
      image: "VS"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    if (!isMobile) return testimonials;
    return [testimonials[currentSlide]];
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.03'%3E%3Cpath d='M30 30c0-16.569-13.431-30-30-30s-30 13.431-30 30 13.431 30 30 30 30-13.431 30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 rounded-full px-4 py-2 mb-4">
            <Quote className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-700">Devotee Testimonials</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Hear from Our
            <br />
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Happy Devotees
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Alopi has enriched the spiritual lives of thousands of families across India 
            with our Authentic and convenient pooja essentials.
          </p>
        </div>

        {/* Mobile Carousel Controls */}
        {isMobile && (
          <div className="flex justify-center items-center gap-4 mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-orange-200 hover:bg-orange-50 bg-white/80 backdrop-blur-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-orange-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-orange-200 hover:bg-orange-50 bg-white/80 backdrop-blur-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}

        {/* Testimonials Grid/Carousel */}
        <div className={`${isMobile ? 'flex justify-center' : 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'}`}>
          {getVisibleTestimonials().map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="group transition-all duration-300 border-0 bg-white/20 backdrop-blur-md shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-white/30"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100/80 to-red-100/80 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Quote className="w-6 h-6 text-orange-600" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                {/* User Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">50,000+</div>
              <div className="text-gray-600">Satisfied Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">4.7/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">365</div>
              <div className="text-gray-600">Days Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
