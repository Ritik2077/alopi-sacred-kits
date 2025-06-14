
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import DevoteeSelection from "./pages/DevoteeSelection";
import PremiumDevotee from "./pages/PremiumDevotee";
import LoyalDevotee from "./pages/LoyalDevotee";
import Subscription from "./pages/Subscription";
import SubscriptionCart from "./pages/SubscriptionCart";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import Shipping from "./pages/Shipping";
import Returns from "./pages/Returns";
import Track from "./pages/Track";
import Cookies from "./pages/Cookies";
import Refund from "./pages/Refund";
import Security from "./pages/Security";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/devotee-selection" element={<DevoteeSelection />} />
              <Route path="/premium-devotee" element={<PremiumDevotee />} />
              <Route path="/loyal-devotee" element={<LoyalDevotee />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/subscription-cart" element={<SubscriptionCart />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/press" element={<Press />} />
              <Route path="/shipping" element={<Shipping />} />
              <Route path="/returns" element={<Returns />} />
              <Route path="/track" element={<Track />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/refund" element={<Refund />} />
              <Route path="/security" element={<Security />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
