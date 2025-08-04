import { useNetworkStatus } from '@/hooks/useNetworkStatus';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface NetworkStatusIndicatorProps {
  className?: string;
  showDetails?: boolean;
}

const NetworkStatusIndicator = ({ 
  className, 
  showDetails = false 
}: NetworkStatusIndicatorProps) => {
  const { isOnline, isSlow, effectiveType, downlink } = useNetworkStatus();

  if (!showDetails && isOnline && !isSlow) {
    return null; // Don't show indicator for good connections
  }

  const getStatusInfo = () => {
    if (!isOnline) {
      return {
        text: 'Offline',
        icon: '📡',
        color: 'bg-red-100 text-red-800 border-red-200',
        description: 'Working offline'
      };
    }
    
    if (isSlow) {
      return {
        text: 'Slow Connection',
        icon: '🐌',
        color: 'bg-yellow-100 text-yellow-800 border-yellow-200',
        description: `${effectiveType || 'Unknown'} connection`
      };
    }
    
    return {
      text: 'Online',
      icon: '✅',
      color: 'bg-green-100 text-green-800 border-green-200',
      description: 'Fast connection'
    };
  };

  const status = getStatusInfo();

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Badge 
        variant="outline" 
        className={cn("text-xs font-medium", status.color)}
      >
        <span className="mr-1">{status.icon}</span>
        {status.text}
      </Badge>
      
      {showDetails && (
        <span className="text-xs text-muted-foreground">
          {status.description}
          {downlink && ` • ${downlink} Mbps`}
        </span>
      )}
    </div>
  );
};

export default NetworkStatusIndicator; 