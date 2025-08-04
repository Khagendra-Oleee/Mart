import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNetworkStatus } from '@/hooks/useNetworkStatus';
import { useLocation } from 'react-router-dom';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  loadingDelay: number;
  shouldShowSkeleton: boolean;
  isNavigating: boolean;
  loadingProgress: number;
  loadingStage: 'initial' | 'content' | 'images' | 'complete';
  networkStatus: ReturnType<typeof useNetworkStatus>;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

interface LoadingProviderProps {
  children: ReactNode;
  minLoadingTime?: number;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ 
  children, 
  minLoadingTime = 800 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldShowSkeleton, setShouldShowSkeleton] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingStage, setLoadingStage] = useState<'initial' | 'content' | 'images' | 'complete'>('initial');
  const networkStatus = useNetworkStatus();
  const location = useLocation();

  // Production-like loading delays based on network conditions
  const getLoadingDelays = () => {
    if (networkStatus.isSlow) {
      return {
        initial: 800,
        content: 1200,
        images: 2000,
        navigation: 1500,
        minTime: 2500
      };
    } else if (!networkStatus.isOnline) {
      return {
        initial: 600,
        content: 1000,
        images: 1500,
        navigation: 1200,
        minTime: 2000
      };
    } else {
      return {
        initial: 300,
        content: 600,
        images: 1000,
        navigation: 800,
        minTime: 1200
      };
    }
  };

  const delays = getLoadingDelays();

  // Simulate realistic loading stages
  const simulateLoadingStages = () => {
    setLoadingProgress(0);
    setLoadingStage('initial');

    // Stage 1: Initial load (0-30%)
    setTimeout(() => {
      setLoadingProgress(30);
      setLoadingStage('content');
    }, delays.initial);

    // Stage 2: Content load (30-70%)
    setTimeout(() => {
      setLoadingProgress(70);
      setLoadingStage('images');
    }, delays.initial + delays.content);

    // Stage 3: Images and assets (70-100%)
    setTimeout(() => {
      setLoadingProgress(100);
      setLoadingStage('complete');
      setShouldShowSkeleton(false);
    }, delays.initial + delays.content + delays.images);
  };

  // Handle page navigation with realistic timing
  useEffect(() => {
    setIsNavigating(true);
    setShouldShowSkeleton(true);
    setLoadingProgress(0);

    // Simulate navigation loading with progress
    const navigationInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 90) {
          clearInterval(navigationInterval);
          return 100;
        }
        return prev + Math.random() * 15 + 5; // Random progress increments
      });
    }, delays.navigation / 10);

    const timer = setTimeout(() => {
      clearInterval(navigationInterval);
      setIsNavigating(false);
      setShouldShowSkeleton(false);
      setLoadingProgress(100);
    }, delays.navigation);

    return () => {
      clearTimeout(timer);
      clearInterval(navigationInterval);
    };
  }, [location.pathname, delays.navigation]);

  // Handle initial page load with realistic stages
  useEffect(() => {
    if (!isNavigating) {
      simulateLoadingStages();
    }
  }, [networkStatus.isSlow, networkStatus.isOnline, delays]);

  // Auto-hide loading after content is ready
  useEffect(() => {
    if (!shouldShowSkeleton && !isNavigating && loadingStage === 'complete') {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [shouldShowSkeleton, isNavigating, loadingStage]);

  const value: LoadingContextType = {
    isLoading,
    setIsLoading,
    loadingDelay: delays.minTime,
    shouldShowSkeleton,
    isNavigating,
    loadingProgress,
    loadingStage,
    networkStatus,
  };

  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = (): LoadingContextType => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}; 