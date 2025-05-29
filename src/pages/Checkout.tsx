
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShoppingBag, ArrowLeft, User, MapPin } from "lucide-react";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const { user, isAuthenticated, isGuest, saveGuestData, getGuestData } = useAuth();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: ''
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);

  // Auto-fill form with user data or guest data
  useEffect(() => {
    if (isAuthenticated && user) {
      setFormData({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        address: '',
        city: '',
        pincode: ''
      });
      
      // Set default address if available
      const defaultAddress = user.addresses.find(addr => addr.isDefault);
      if (defaultAddress) {
        setSelectedAddress(defaultAddress.id);
        setFormData(prev => ({
          ...prev,
          firstName: defaultAddress.firstName,
          lastName: defaultAddress.lastName,
          address: defaultAddress.address,
          city: defaultAddress.city,
          pincode: defaultAddress.pincode,
          phone: defaultAddress.phone
        }));
      }
    } else if (isGuest) {
      const guestData = getGuestData();
      if (guestData) {
        setFormData(guestData);
      }
    }
  }, [isAuthenticated, user, isGuest]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleAddressSelect = (addressId: string) => {
    const address = user?.addresses.find(addr => addr.id === addressId);
    if (address) {
      setSelectedAddress(addressId);
      setFormData({
        firstName: address.firstName,
        lastName: address.lastName,
        email: user?.email || '',
        phone: address.phone,
        address: address.address,
        city: address.city,
        pincode: address.pincode
      });
    }
  };

  const validateForm = () => {
    const required = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'pincode'];
    for (const field of required) {
      if (!formData[field as keyof typeof formData]) {
        toast({
          title: "Missing Information",
          description: `Please fill in your ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`,
          variant: "destructive"
        });
        return false;
      }
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return false;
    }

    // Basic phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit phone number",
        variant: "destructive"
      });
      return false;
    }

    return true;
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) return;
    
    if (cartItems.length === 0) {
      toast({
        title: "Empty Cart",
        description: "Please add items to your cart before placing an order",
        variant: "destructive"
      });
      return;
    }

    // Save guest data if in guest mode
    if (isGuest) {
      saveGuestData(formData);
    }

    setIsProcessing(true);

    // Simulate payment processing
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real application, you would integrate with a payment gateway here
      // For now, we'll simulate a successful payment
      const orderNumber = Math.random().toString(36).substr(2, 9).toUpperCase();
      
      toast({
        title: "Order Placed Successfully!",
        description: `Your order #${orderNumber} has been confirmed. You will receive a confirmation email shortly.`,
      });

      // Clear cart after successful order
      clearCart();
      
      // Redirect to success page
      navigate('/', { 
        state: { 
          orderSuccess: true, 
          orderNumber: orderNumber,
          customerInfo: formData
        }
      });
      
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const total = getTotalPrice();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <Navbar />
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <ShoppingBag className="w-24 h-24 mx-auto text-gray-400 mb-4" />
            <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">Add some items to your cart before proceeding to checkout</p>
            <Button 
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
              onClick={() => navigate('/shop')}
            >
              Continue Shopping
            </Button>
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="outline"
              onClick={() => navigate('/cart')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Cart
            </Button>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Checkout
            </h1>
            {!isAuthenticated && (
              <Button
                variant="outline"
                onClick={() => navigate('/login', { state: { from: location } })}
                className="ml-auto"
              >
                <User className="w-4 h-4 mr-2" />
                Login for faster checkout
              </Button>
            )}
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Shipping Information */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Shipping Information</CardTitle>
                {isGuest && (
                  <p className="text-sm text-gray-600">
                    Shopping as guest - your details will be saved for convenience
                  </p>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Saved Addresses for authenticated users */}
                {isAuthenticated && user?.addresses && user.addresses.length > 0 && (
                  <div className="mb-6">
                    <Label className="text-base font-semibold mb-3 block">Select Saved Address</Label>
                    <div className="grid gap-3">
                      {user.addresses.map((address) => (
                        <div
                          key={address.id}
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                            selectedAddress === address.id 
                              ? 'border-orange-500 bg-orange-50' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          onClick={() => handleAddressSelect(address.id)}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <MapPin className="w-4 h-4 text-orange-600" />
                            <span className="font-medium capitalize">{address.type}</span>
                            {address.isDefault && (
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Default</span>
                            )}
                          </div>
                          <p className="text-sm text-gray-700">
                            {address.firstName} {address.lastName}, {address.address}, {address.city}, {address.pincode}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <Label className="text-base font-semibold">Or enter new address:</Label>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Enter first name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Enter last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input 
                    id="phone" 
                    placeholder="Enter 10-digit phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="address">Address *</Label>
                  <Input 
                    id="address" 
                    placeholder="Enter full address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input 
                      id="city" 
                      placeholder="Enter city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="pincode">Pincode *</Label>
                    <Input 
                      id="pincode" 
                      placeholder="Enter pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Order Summary */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center py-2 border-b border-gray-100">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">₹{item.price * item.quantity}</p>
                        {item.originalPrice && (
                          <p className="text-xs text-gray-500 line-through">₹{item.originalPrice * item.quantity}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>₹{Math.round(total * 0.18)}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>₹{total + Math.round(total * 0.18)}</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                  onClick={handlePlaceOrder}
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing..." : "Place Order"}
                </Button>

                <div className="text-center">
                  <p className="text-xs text-gray-600">
                    By placing your order, you agree to our Terms of Service and Privacy Policy
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Checkout;
