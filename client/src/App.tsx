
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Index from "./pages/Index";
import HowToUse from "./pages/HowToUse";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import Order from "./pages/Order";
// import OrderSuccess from "./pages/OrderSuccess";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollRestoration/>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/how-to-use" element={<HowToUse />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          {/* ADD ALL CUSTOM ROUTES BELOW */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
