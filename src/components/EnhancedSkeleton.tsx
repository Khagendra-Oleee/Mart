import { Skeleton } from "@/components/ui/skeleton";
import { useNetworkStatus } from "@/hooks/useNetworkStatus";
import { cn } from "@/lib/utils";

interface EnhancedSkeletonProps {
  type?: 'card' | 'text' | 'avatar' | 'list' | 'hero' | 'project' | 'testimonial' | 'service' | 'team';
  count?: number;
  className?: string;
  showNetworkIndicator?: boolean;
  pulseIntensity?: 'low' | 'medium' | 'high';
}

const EnhancedSkeleton = ({ 
  type = 'card', 
  count = 1, 
  className,
  showNetworkIndicator = true,
  pulseIntensity = 'medium'
}: EnhancedSkeletonProps) => {
  const { isOnline, isSlow, effectiveType, loadingStage } = useNetworkStatus();

  // Production-like pulse behavior based on loading stage and network
  const getPulseClass = () => {
    if (!isOnline) return 'animate-pulse-medium';
    if (isSlow) return 'animate-pulse-slow';
    
    // Stage-based pulse intensity for more realistic feel
    switch (loadingStage) {
      case 'initial':
        return 'animate-pulse-high';
      case 'content':
        return 'animate-pulse-medium';
      case 'images':
        return 'animate-pulse-low';
      case 'complete':
        return 'animate-pulse';
      default:
        return `animate-pulse-${pulseIntensity}`;
    }
  };

  // Production-like shimmer effect
  const getShimmerClass = () => {
    if (isSlow) return 'animate-shimmer-slow';
    if (!isOnline) return 'animate-shimmer-medium';
    return 'animate-shimmer';
  };

  const renderSkeleton = () => {
    const baseClasses = cn(
      getPulseClass(),
      getShimmerClass(),
      className
    );

    switch (type) {
      case 'hero':
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <Skeleton className={cn("h-16 w-3/4 mx-auto", baseClasses)} />
              <Skeleton className={cn("h-6 w-1/2 mx-auto", baseClasses)} />
              <Skeleton className={cn("h-4 w-2/3 mx-auto", baseClasses)} />
            </div>
            <div className="flex justify-center space-x-4">
              <Skeleton className={cn("h-12 w-32", baseClasses)} />
              <Skeleton className={cn("h-12 w-32", baseClasses)} />
            </div>
            {showNetworkIndicator && !isOnline && (
              <div className="text-center text-sm text-amber-600">
                ⚠️ Offline mode - Loading cached content
              </div>
            )}
          </div>
        );

      case 'project':
        return (
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <Skeleton className={cn("h-48 w-full", baseClasses)} />
            <div className="p-6 space-y-4">
              <Skeleton className={cn("h-6 w-3/4", baseClasses)} />
              <Skeleton className={cn("h-4 w-full", baseClasses)} />
              <Skeleton className={cn("h-4 w-2/3", baseClasses)} />
              <div className="flex gap-2 flex-wrap">
                <Skeleton className={cn("h-8 w-16", baseClasses)} />
                <Skeleton className={cn("h-8 w-20", baseClasses)} />
                <Skeleton className={cn("h-8 w-18", baseClasses)} />
              </div>
            </div>
          </div>
        );

      case 'testimonial':
        return (
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <div className="flex items-start space-x-4 mb-4">
              <Skeleton className={cn("h-12 w-12 rounded-full", baseClasses)} />
              <div className="flex-1 space-y-2">
                <Skeleton className={cn("h-4 w-24", baseClasses)} />
                <Skeleton className={cn("h-3 w-16", baseClasses)} />
              </div>
            </div>
            <Skeleton className={cn("h-4 w-full", baseClasses)} />
            <Skeleton className={cn("h-4 w-5/6", baseClasses)} />
            <Skeleton className={cn("h-4 w-3/4", baseClasses)} />
          </div>
        );

      case 'service':
        return (
          <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
            <Skeleton className={cn("h-16 w-16 mx-auto mb-4 rounded-full", baseClasses)} />
            <Skeleton className={cn("h-6 w-3/4 mx-auto mb-3", baseClasses)} />
            <Skeleton className={cn("h-4 w-full mb-2", baseClasses)} />
            <Skeleton className={cn("h-4 w-5/6 mx-auto", baseClasses)} />
          </div>
        );

      case 'team':
        return (
          <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
            <Skeleton className={cn("h-24 w-24 mx-auto mb-4 rounded-full", baseClasses)} />
            <Skeleton className={cn("h-5 w-32 mx-auto mb-2", baseClasses)} />
            <Skeleton className={cn("h-4 w-24 mx-auto mb-3", baseClasses)} />
            <div className="flex justify-center space-x-2">
              <Skeleton className={cn("h-8 w-8 rounded-full", baseClasses)} />
              <Skeleton className={cn("h-8 w-8 rounded-full", baseClasses)} />
              <Skeleton className={cn("h-8 w-8 rounded-full", baseClasses)} />
            </div>
          </div>
        );

      case 'card':
        return (
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <Skeleton className={cn("h-48 w-full", baseClasses)} />
            <div className="p-6 space-y-4">
              <Skeleton className={cn("h-6 w-3/4", baseClasses)} />
              <Skeleton className={cn("h-4 w-full", baseClasses)} />
              <Skeleton className={cn("h-4 w-2/3", baseClasses)} />
              <div className="flex gap-2">
                <Skeleton className={cn("h-8 w-16", baseClasses)} />
                <Skeleton className={cn("h-8 w-20", baseClasses)} />
              </div>
            </div>
          </div>
        );
      
      case 'text':
        return (
          <div className="space-y-3">
            <Skeleton className={cn("h-8 w-3/4", baseClasses)} />
            <Skeleton className={cn("h-4 w-full", baseClasses)} />
            <Skeleton className={cn("h-4 w-5/6", baseClasses)} />
            <Skeleton className={cn("h-4 w-4/5", baseClasses)} />
          </div>
        );
      
      case 'avatar':
        return (
          <div className="flex items-center space-x-4">
            <Skeleton className={cn("h-12 w-12 rounded-full", baseClasses)} />
            <div className="space-y-2">
              <Skeleton className={cn("h-4 w-32", baseClasses)} />
              <Skeleton className={cn("h-3 w-24", baseClasses)} />
            </div>
          </div>
        );
      
      case 'list':
        return (
          <div className="space-y-4">
            {Array.from({ length: count }).map((_, index) => (
              <div key={index} className="flex items-center space-x-4">
                <Skeleton className={cn("h-4 w-4", baseClasses)} />
                <Skeleton className={cn("h-4 flex-1", baseClasses)} />
              </div>
            ))}
          </div>
        );
      
      default:
        return <Skeleton className={cn("h-32 w-full", baseClasses)} />;
    }
  };

  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>
          {renderSkeleton()}
        </div>
      ))}
      {showNetworkIndicator && isSlow && (
        <div className="text-center text-sm text-blue-600">
          🐌 Slow connection detected ({effectiveType || 'unknown'})
        </div>
      )}
    </div>
  );
};

export default EnhancedSkeleton; 