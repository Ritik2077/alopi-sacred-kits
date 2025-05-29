
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  addresses: Address[];
  createdAt: string;
}

export interface Address {
  id: string;
  type: 'home' | 'work' | 'other';
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  pincode: string;
  phone: string;
  isDefault: boolean;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isGuest: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: RegisterData) => Promise<boolean>;
  logout: () => void;
  continueAsGuest: () => void;
  saveGuestData: (data: any) => void;
  getGuestData: () => any;
  updateProfile: (data: Partial<User>) => void;
  addAddress: (address: Omit<Address, 'id'>) => void;
  updateAddress: (id: string, address: Partial<Address>) => void;
  deleteAddress: (id: string) => void;
  setDefaultAddress: (id: string) => void;
}

interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isGuest, setIsGuest] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('alopi_user');
    const guestMode = localStorage.getItem('alopi_guest_mode');
    
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else if (guestMode) {
      setIsGuest(true);
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data - in real app, this would come from API
      const mockUser: User = {
        id: 'user_' + Date.now(),
        email,
        firstName: 'John',
        lastName: 'Doe',
        phone: '9876543210',
        addresses: [],
        createdAt: new Date().toISOString()
      };

      setUser(mockUser);
      setIsGuest(false);
      localStorage.setItem('alopi_user', JSON.stringify(mockUser));
      localStorage.removeItem('alopi_guest_mode');
      
      toast({
        title: "Welcome back!",
        description: "You have successfully logged in to your account.",
      });
      
      return true;
    } catch (error) {
      toast({
        title: "Login Failed",
        description: "Invalid email or password. Please try again.",
        variant: "destructive"
      });
      return false;
    }
  };

  const register = async (userData: RegisterData): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newUser: User = {
        id: 'user_' + Date.now(),
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        phone: userData.phone,
        addresses: [],
        createdAt: new Date().toISOString()
      };

      setUser(newUser);
      setIsGuest(false);
      localStorage.setItem('alopi_user', JSON.stringify(newUser));
      
      toast({
        title: "Account Created!",
        description: "Welcome to Alopi! Your account has been created successfully.",
      });
      
      return true;
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "Unable to create account. Please try again.",
        variant: "destructive"
      });
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setIsGuest(false);
    localStorage.removeItem('alopi_user');
    localStorage.removeItem('alopi_guest_mode');
    localStorage.removeItem('alopi_guest_data');
    
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  const continueAsGuest = () => {
    setIsGuest(true);
    localStorage.setItem('alopi_guest_mode', 'true');
    
    toast({
      title: "Guest Mode",
      description: "You can order as a guest. Your data will be saved for convenience.",
    });
  };

  const saveGuestData = (data: any) => {
    localStorage.setItem('alopi_guest_data', JSON.stringify(data));
  };

  const getGuestData = () => {
    const data = localStorage.getItem('alopi_guest_data');
    return data ? JSON.parse(data) : null;
  };

  const updateProfile = (data: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...data };
      setUser(updatedUser);
      localStorage.setItem('alopi_user', JSON.stringify(updatedUser));
      
      toast({
        title: "Profile Updated",
        description: "Your profile has been updated successfully.",
      });
    }
  };

  const addAddress = (addressData: Omit<Address, 'id'>) => {
    if (user) {
      const newAddress: Address = {
        ...addressData,
        id: 'addr_' + Date.now(),
      };
      
      const updatedUser = {
        ...user,
        addresses: [...user.addresses, newAddress]
      };
      
      setUser(updatedUser);
      localStorage.setItem('alopi_user', JSON.stringify(updatedUser));
      
      toast({
        title: "Address Added",
        description: "New address has been saved to your profile.",
      });
    }
  };

  const updateAddress = (id: string, addressData: Partial<Address>) => {
    if (user) {
      const updatedUser = {
        ...user,
        addresses: user.addresses.map(addr => 
          addr.id === id ? { ...addr, ...addressData } : addr
        )
      };
      
      setUser(updatedUser);
      localStorage.setItem('alopi_user', JSON.stringify(updatedUser));
      
      toast({
        title: "Address Updated",
        description: "Address has been updated successfully.",
      });
    }
  };

  const deleteAddress = (id: string) => {
    if (user) {
      const updatedUser = {
        ...user,
        addresses: user.addresses.filter(addr => addr.id !== id)
      };
      
      setUser(updatedUser);
      localStorage.setItem('alopi_user', JSON.stringify(updatedUser));
      
      toast({
        title: "Address Deleted",
        description: "Address has been removed from your profile.",
      });
    }
  };

  const setDefaultAddress = (id: string) => {
    if (user) {
      const updatedUser = {
        ...user,
        addresses: user.addresses.map(addr => ({
          ...addr,
          isDefault: addr.id === id
        }))
      };
      
      setUser(updatedUser);
      localStorage.setItem('alopi_user', JSON.stringify(updatedUser));
      
      toast({
        title: "Default Address Set",
        description: "This address is now your default delivery address.",
      });
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      isGuest,
      login,
      register,
      logout,
      continueAsGuest,
      saveGuestData,
      getGuestData,
      updateProfile,
      addAddress,
      updateAddress,
      deleteAddress,
      setDefaultAddress,
    }}>
      {children}
    </AuthContext.Provider>
  );
};
