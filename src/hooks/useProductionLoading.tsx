import { useState, useEffect, useCallback } from 'react';
import { useNetworkStatus } from './useNetworkStatus';

interface ProductionLoadingOptions {
  minLoadTime?: number;
  maxLoadTime?: number;
  simulateNetworkLatency?: boolean;
  simulateServerResponse?: boolean;
  simulateImageLoading?: boolean;
}

interface ProductionLoadingState {
  isLoading: boolean;
  progress: number;
  stage: 'initial' | 'network' | 'server' | 'content' | 'images' | 'complete';
  error: string | null;
  retry: () => void;
}

export const useProductionLoading = (
  options: ProductionLoadingOptions = {}
): ProductionLoadingState => {
  const {
    minLoadTime = 800,
    maxLoadTime = 3000,
    simulateNetworkLatency = true,
    simulateServerResponse = true,
    simulateImageLoading = true
  } = options;

  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState<'initial' | 'network' | 'server' | 'content' | 'images' | 'complete'>('initial');
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  const networkStatus = useNetworkStatus();

  // Production-like loading simulation
  const simulateLoading = useCallback(async () => {
    setIsLoading(true);
    setProgress(0);
    setError(null);
    setStage('initial');

    try {
      // Stage 1: Initial (0-10%)
      await new Promise(resolve => setTimeout(resolve, 100));
      setProgress(10);
      setStage('network');

      // Stage 2: Network latency simulation (10-30%)
      if (simulateNetworkLatency) {
        const networkDelay = networkStatus.isSlow ? 800 : networkStatus.isOnline ? 300 : 600;
        await new Promise(resolve => setTimeout(resolve, networkDelay));
        setProgress(30);
        setStage('server');
      }

      // Stage 3: Server response simulation (30-60%)
      if (simulateServerResponse) {
        const serverDelay = networkStatus.isSlow ? 1200 : networkStatus.isOnline ? 600 : 1000;
        await new Promise(resolve => setTimeout(resolve, serverDelay));
        setProgress(60);
        setStage('content');
      }

      // Stage 4: Content loading (60-85%)
      const contentDelay = networkStatus.isSlow ? 1000 : networkStatus.isOnline ? 400 : 800;
      await new Promise(resolve => setTimeout(resolve, contentDelay));
      setProgress(85);
      setStage('images');

      // Stage 5: Image loading simulation (85-100%)
      if (simulateImageLoading) {
        const imageDelay = networkStatus.isSlow ? 1500 : networkStatus.isOnline ? 600 : 1200;
        await new Promise(resolve => setTimeout(resolve, imageDelay));
        setProgress(100);
        setStage('complete');
      }

      // Ensure minimum loading time
      const totalTime = Date.now();
      const remainingTime = Math.max(0, minLoadTime - totalTime);
      if (remainingTime > 0) {
        await new Promise(resolve => setTimeout(resolve, remainingTime));
      }

      setIsLoading(false);
    } catch (err) {
      setError('Loading failed. Please try again.');
      setIsLoading(false);
    }
  }, [networkStatus, simulateNetworkLatency, simulateServerResponse, simulateImageLoading, minLoadTime]);

  // Retry function
  const retry = useCallback(() => {
    setRetryCount(prev => prev + 1);
    simulateLoading();
  }, [simulateLoading]);

  // Auto-retry on network recovery
  useEffect(() => {
    if (error && networkStatus.isOnline && retryCount < 3) {
      const timer = setTimeout(() => {
        retry();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [error, networkStatus.isOnline, retryCount, retry]);

  // Start loading on mount
  useEffect(() => {
    simulateLoading();
  }, [simulateLoading]);

  return {
    isLoading,
    progress,
    stage,
    error,
    retry
  };
}; 