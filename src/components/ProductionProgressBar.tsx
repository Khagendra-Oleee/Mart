import React, { useEffect, useState } from 'react';
import { useLoading } from '@/contexts/LoadingContext';
import { cn } from '@/lib/utils';

const ProductionProgressBar = () => {
  const { isNavigating, loadingProgress, loadingStage, networkStatus } = useLoading();
  const [displayProgress, setDisplayProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth progress animation
  useEffect(() => {
    if (isNavigating || loadingProgress > 0) {
      setIsVisible(true);
    }

    const timer = setTimeout(() => {
      setDisplayProgress(loadingProgress);
    }, 50);

    return () => clearTimeout(timer);
  }, [loadingProgress, isNavigating]);

  // Hide progress bar when complete
  useEffect(() => {
    if (loadingProgress === 100) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setDisplayProgress(0);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [loadingProgress]);

  if (!isVisible) {
    return null;
  }

  // Get stage-specific colors and behavior
  const getStageConfig = () => {
    switch (loadingStage) {
      case 'initial':
        return {
          color: 'from-blue-500 to-blue-600',
          speed: 'transition-all duration-300 ease-out',
          message: 'Initializing...'
        };
      case 'content':
        return {
          color: 'from-blue-600 to-indigo-600',
          speed: 'transition-all duration-500 ease-out',
          message: 'Loading content...'
        };
      case 'images':
        return {
          color: 'from-indigo-600 to-purple-600',
          speed: 'transition-all duration-700 ease-out',
          message: 'Loading assets...'
        };
      case 'complete':
        return {
          color: 'from-green-500 to-green-600',
          speed: 'transition-all duration-200 ease-out',
          message: 'Complete!'
        };
      default:
        return {
          color: 'from-blue-500 to-indigo-600',
          speed: 'transition-all duration-300 ease-out',
          message: 'Loading...'
        };
    }
  };

  const stageConfig = getStageConfig();

  // Network-aware speed adjustments
  const getNetworkSpeed = () => {
    if (networkStatus.isSlow) return 'animate-pulse-slow';
    if (!networkStatus.isOnline) return 'animate-pulse-medium';
    return 'animate-pulse-high';
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Main progress bar */}
      <div className="relative h-1 bg-slate-200">
        <div
          className={cn(
            "h-full bg-gradient-to-r",
            stageConfig.color,
            stageConfig.speed,
            getNetworkSpeed()
          )}
          style={{ width: `${displayProgress}%` }}
        />
        
        {/* Glow effect */}
        <div
          className={cn(
            "absolute top-0 h-full bg-gradient-to-r opacity-30 blur-sm",
            stageConfig.color
          )}
          style={{ width: `${displayProgress}%` }}
        />
      </div>

      {/* Stage indicator for slow connections */}
      {networkStatus.isSlow && (
        <div className="bg-slate-800 text-white text-xs px-4 py-1 text-center">
          {stageConfig.message} ({Math.round(displayProgress)}%)
        </div>
      )}

      {/* Network status indicator for offline mode */}
      {!networkStatus.isOnline && (
        <div className="bg-amber-600 text-white text-xs px-4 py-1 text-center">
          ⚠️ Offline mode - Loading cached content
        </div>
      )}
    </div>
  );
};

export default ProductionProgressBar; 