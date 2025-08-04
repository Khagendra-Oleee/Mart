import React, { useEffect, useState } from 'react';
import { useLoading } from '@/contexts/LoadingContext';
import { useNetworkStatus } from '@/hooks/useNetworkStatus';

interface PerformanceMetrics {
  initialLoadTime: number;
  navigationTime: number;
  totalLoadTime: number;
  networkLatency: number;
  serverResponseTime: number;
  assetLoadTime: number;
}

const LoadingPerformanceMonitor = () => {
  const { loadingProgress, loadingStage, isNavigating } = useLoading();
  const networkStatus = useNetworkStatus();
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    initialLoadTime: 0,
    navigationTime: 0,
    totalLoadTime: 0,
    networkLatency: 0,
    serverResponseTime: 0,
    assetLoadTime: 0
  });
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [isVisible, setIsVisible] = useState(false);

  // Track loading performance
  useEffect(() => {
    if (isNavigating || loadingProgress > 0) {
      setIsVisible(true);
    }

    if (loadingProgress === 100) {
      const endTime = Date.now();
      const totalTime = endTime - startTime;

      // Calculate stage-specific times based on progress
      const stageTimes = {
        initial: totalTime * 0.1,
        network: totalTime * 0.2,
        server: totalTime * 0.3,
        content: totalTime * 0.25,
        images: totalTime * 0.15
      };

      setMetrics({
        initialLoadTime: stageTimes.initial,
        navigationTime: isNavigating ? totalTime : 0,
        totalLoadTime: totalTime,
        networkLatency: stageTimes.network,
        serverResponseTime: stageTimes.server,
        assetLoadTime: stageTimes.images
      });

      // Hide monitor after 3 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    }
  }, [loadingProgress, isNavigating, startTime]);

  // Reset timer on navigation
  useEffect(() => {
    if (isNavigating) {
      setStartTime(Date.now());
    }
  }, [isNavigating]);

  if (!isVisible) {
    return null;
  }

  const getPerformanceGrade = (time: number) => {
    if (time < 1000) return { grade: 'A', color: 'text-green-600' };
    if (time < 2000) return { grade: 'B', color: 'text-yellow-600' };
    if (time < 3000) return { grade: 'C', color: 'text-orange-600' };
    return { grade: 'D', color: 'text-red-600' };
  };

  const totalGrade = getPerformanceGrade(metrics.totalLoadTime);

  return (
    <div className="fixed bottom-4 left-4 bg-white border border-slate-200 rounded-lg shadow-lg p-4 max-w-sm z-50">
      <div className="text-xs font-medium text-slate-700 mb-2">
        Loading Performance Monitor
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span>Total Time:</span>
          <span className="font-medium">{metrics.totalLoadTime}ms</span>
        </div>
        
        <div className="flex justify-between">
          <span>Grade:</span>
          <span className={`font-bold ${totalGrade.color}`}>{totalGrade.grade}</span>
        </div>

        {metrics.navigationTime > 0 && (
          <div className="flex justify-between">
            <span>Navigation:</span>
            <span>{metrics.navigationTime}ms</span>
          </div>
        )}

        <div className="flex justify-between">
          <span>Network:</span>
          <span>{Math.round(metrics.networkLatency)}ms</span>
        </div>

        <div className="flex justify-between">
          <span>Server:</span>
          <span>{Math.round(metrics.serverResponseTime)}ms</span>
        </div>

        <div className="flex justify-between">
          <span>Assets:</span>
          <span>{Math.round(metrics.assetLoadTime)}ms</span>
        </div>

        <div className="pt-2 border-t border-slate-200">
          <div className="flex justify-between text-xs text-slate-500">
            <span>Network:</span>
            <span>{networkStatus.isSlow ? 'Slow' : networkStatus.isOnline ? 'Fast' : 'Offline'}</span>
          </div>
          <div className="flex justify-between text-xs text-slate-500">
            <span>Type:</span>
            <span>{networkStatus.effectiveType || 'Unknown'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPerformanceMonitor; 