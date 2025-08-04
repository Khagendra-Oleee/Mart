import React from 'react';
import { useLoading } from '@/contexts/LoadingContext';

const NavigationLoader = () => {
  const { isNavigating, networkStatus } = useLoading();

  if (!isNavigating) {
    return null;
  }

  // Adjust loading speed based on network conditions
  const getLoadingSpeed = () => {
    if (networkStatus.isSlow) return 'animate-pulse-slow';
    if (!networkStatus.isOnline) return 'animate-pulse-medium';
    return 'animate-pulse-high';
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className={`h-1 bg-gradient-to-r from-blue-500 to-indigo-600 ${getLoadingSpeed()}`} />
    </div>
  );
};

export default NavigationLoader; 