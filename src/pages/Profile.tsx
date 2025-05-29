
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { User, MapPin, Package, Settings, Plus, Edit, Trash2, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Profile = () => {
  const navigate = useNavigate();
  const { user, updateProfile, addAddress, updateAddress, deleteAddress, setDefaultAddress, logout } = useAuth();
  const [editingAddress, setEditingAddress] = useState<string | null>(null);
  const [showAddAddress, setShowAddAddress] = useState(false);
  
  const [profileForm, setProfileForm] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phone: user?.phone || ''
  });
  
  const [addressForm, setAddressForm] = useState({
    type: 'home' as 'home' | 'work' | 'other',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    pincode: '',
    phone: '',
    isDefault: false
  });

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Please log in to view your profile</h1>
          <Button onClick={() => navigate('/login')}>Go to Login</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(profileForm);
  };

  const handleAddAddress = (e: React.FormEvent) => {
    e.preventDefault();
    addAddress(addressForm);
    setAddressForm({
      type: 'home',
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      pincode: '',
      phone: '',
      isDefault: false
    });
    setShowAddAddress(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">My Profile</h1>
            <p className="text-gray-600">Manage your account settings and preferences</p>
          </div>

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="addresses">Addresses</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile">
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleProfileUpdate} className="space-y-4 max-w-2xl">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={profileForm.firstName}
                          onChange={(e) => setProfileForm({...profileForm, firstName: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={profileForm.lastName}
                          onChange={(e) => setProfileForm({...profileForm, lastName: e.target.value})}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileForm.email}
                        onChange={(e) => setProfileForm({...profileForm, email: e.target.value})}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        value={profileForm.phone}
                        onChange={(e) => setProfileForm({...profileForm, phone: e.target.value})}
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                    >
                      Update Profile
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="addresses">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-800">Saved Addresses</h2>
                  <Button 
                    onClick={() => setShowAddAddress(true)}
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Address
                  </Button>
                </div>

                {showAddAddress && (
                  <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle>Add New Address</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleAddAddress} className="space-y-4">
                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <Label>Address Type</Label>
                            <select 
                              className="w-full p-2 border rounded-md"
                              value={addressForm.type}
                              onChange={(e) => setAddressForm({...addressForm, type: e.target.value as any})}
                            >
                              <option value="home">Home</option>
                              <option value="work">Work</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                          <div>
                            <Label htmlFor="addrFirstName">First Name</Label>
                            <Input
                              id="addrFirstName"
                              value={addressForm.firstName}
                              onChange={(e) => setAddressForm({...addressForm, firstName: e.target.value})}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="addrLastName">Last Name</Label>
                            <Input
                              id="addrLastName"
                              value={addressForm.lastName}
                              onChange={(e) => setAddressForm({...addressForm, lastName: e.target.value})}
                              required
                            />
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="address">Address</Label>
                          <Input
                            id="address"
                            value={addressForm.address}
                            onChange={(e) => setAddressForm({...addressForm, address: e.target.value})}
                            required
                          />
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <Label htmlFor="city">City</Label>
                            <Input
                              id="city"
                              value={addressForm.city}
                              onChange={(e) => setAddressForm({...addressForm, city: e.target.value})}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="pincode">Pincode</Label>
                            <Input
                              id="pincode"
                              value={addressForm.pincode}
                              onChange={(e) => setAddressForm({...addressForm, pincode: e.target.value})}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="addrPhone">Phone</Label>
                            <Input
                              id="addrPhone"
                              value={addressForm.phone}
                              onChange={(e) => setAddressForm({...addressForm, phone: e.target.value})}
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="isDefault"
                            checked={addressForm.isDefault}
                            onChange={(e) => setAddressForm({...addressForm, isDefault: e.target.checked})}
                          />
                          <Label htmlFor="isDefault">Set as default address</Label>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button type="submit" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                            Save Address
                          </Button>
                          <Button type="button" variant="outline" onClick={() => setShowAddAddress(false)}>
                            Cancel
                          </Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                )}

                <div className="grid md:grid-cols-2 gap-4">
                  {user.addresses.map((address) => (
                    <Card key={address.id} className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-orange-600" />
                            <Badge variant={address.type === 'home' ? 'default' : 'secondary'}>
                              {address.type.charAt(0).toUpperCase() + address.type.slice(1)}
                            </Badge>
                            {address.isDefault && (
                              <Badge className="bg-green-100 text-green-800">Default</Badge>
                            )}
                          </div>
                          <div className="flex gap-1">
                            <Button size="sm" variant="outline" onClick={() => setEditingAddress(address.id)}>
                              <Edit className="w-3 h-3" />
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => deleteAddress(address.id)}>
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                        
                        <div className="space-y-1 text-sm">
                          <p className="font-semibold">{address.firstName} {address.lastName}</p>
                          <p className="text-gray-600">{address.address}</p>
                          <p className="text-gray-600">{address.city}, {address.pincode}</p>
                          <p className="text-gray-600">Phone: {address.phone}</p>
                        </div>
                        
                        {!address.isDefault && (
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="mt-3"
                            onClick={() => setDefaultAddress(address.id)}
                          >
                            Set as Default
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="orders">
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="w-5 h-5" />
                    Order History
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <Package className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">No Orders Yet</h3>
                    <p className="text-gray-600 mb-4">Start your spiritual journey by placing your first order</p>
                    <Button 
                      onClick={() => navigate('/shop')}
                      className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                    >
                      Browse Products
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="settings">
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Account Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">Email Notifications</h3>
                      <p className="text-sm text-gray-600">Receive updates about your orders and offers</p>
                    </div>
                    <Button variant="outline">Configure</Button>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">Privacy Settings</h3>
                      <p className="text-sm text-gray-600">Manage your data and privacy preferences</p>
                    </div>
                    <Button variant="outline">Manage</Button>
                  </div>
                  
                  <div className="pt-6 border-t">
                    <Button 
                      variant="destructive" 
                      onClick={logout}
                      className="w-full"
                    >
                      Sign Out
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Profile;
