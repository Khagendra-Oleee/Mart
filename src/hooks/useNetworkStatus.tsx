import { useState, useEffect } from 'react';

export interface NetworkStatus {
  isOnline: boolean;
  isSlow: boolean;
  connectionType: string | null;
  downlink: number | null;
  effectiveType: string | null;
  rtt: number | null;
}

export const useNetworkStatus = (): NetworkStatus => {
  const [networkStatus, setNetworkStatus] = useState<NetworkStatus>({
    isOnline: navigator.onLine,
    isSlow: false,
    connectionType: null,
    downlink: null,
    effectiveType: null,
    rtt: null,
  });

  useEffect(() => {
    const updateNetworkStatus = () => {
      const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
      
      const newStatus: NetworkStatus = {
        isOnline: navigator.onLine,
        isSlow: false,
        connectionType: connection?.type || null,
        downlink: connection?.downlink || null,
        effectiveType: connection?.effectiveType || null,
        rtt: connection?.rtt || null,
      };

      // Determine if connection is slow
      if (newStatus.downlink && newStatus.downlink < 1) {
        newStatus.isSlow = true;
      } else if (newStatus.effectiveType && ['slow-2g', '2g', '3g'].includes(newStatus.effectiveType)) {
        newStatus.isSlow = true;
      } else if (newStatus.rtt && newStatus.rtt > 200) {
        newStatus.isSlow = true;
      }

      setNetworkStatus(newStatus);
    };

    // Initial check
    updateNetworkStatus();

    // Listen for online/offline events
    const handleOnline = () => updateNetworkStatus();
    const handleOffline = () => updateNetworkStatus();

    // Listen for connection changes
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    if (connection) {
      connection.addEventListener('change', updateNetworkStatus);
    }

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      if (connection) {
        connection.removeEventListener('change', updateNetworkStatus);
      }
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return networkStatus;
}; 