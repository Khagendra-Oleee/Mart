import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SkeletonDemo from "./components/SkeletonDemo";
import ProductionLoadingDemo from "./components/ProductionLoadingDemo";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import PageTransition from "./components/PageTransition";
import { LoadingProvider } from "./contexts/LoadingContext";
import ProductionProgressBar from "./components/ProductionProgressBar";

const queryClient = new QueryClient();

const App = () => (
          <ErrorBoundary>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter
                future={{
                  v7_startTransition: true,
                  v7_relativeSplatPath: true,
                }}
              >
                <LoadingProvider>
                  <ProductionProgressBar />
                  <ScrollProgress />
                  <PageTransition>
                    <Routes>
                      {/* Exact match routes - order matters */}
                      <Route path="/" element={<Index />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/services" element={<Services />} />
                      <Route path="/portfolio" element={<Portfolio />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/skeleton-demo" element={<SkeletonDemo />} />
                      <Route path="/production-demo" element={<ProductionLoadingDemo />} />
                      
                      {/* Catch-all route for 404 - must be last */}
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </PageTransition>
                  <BackToTop />
                </LoadingProvider>
              </BrowserRouter>
            </TooltipProvider>
          </QueryClientProvider>
        </ErrorBoundary>
);

export default App;
