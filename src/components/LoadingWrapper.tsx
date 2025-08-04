import React, { ReactNode } from 'react';
import { useLoading } from '@/contexts/LoadingContext';
import EnhancedSkeleton from './EnhancedSkeleton';

interface LoadingWrapperProps {
  children: ReactNode;
  skeletonType?: 'card' | 'text' | 'avatar' | 'list' | 'hero' | 'project' | 'testimonial' | 'service' | 'team';
  skeletonCount?: number;
  className?: string;
  fallback?: ReactNode;
}

const LoadingWrapper: React.FC<LoadingWrapperProps> = ({
  children,
  skeletonType = 'card',
  skeletonCount = 1,
  className,
  fallback
}) => {
  const { shouldShowSkeleton, networkStatus } = useLoading();

  if (shouldShowSkeleton) {
    if (fallback) {
      return <>{fallback}</>;
    }
    
    return (
      <div className={className}>
        <EnhancedSkeleton 
          type={skeletonType} 
          count={skeletonCount}
          showNetworkIndicator={true}
        />
      </div>
    );
  }

  return <>{children}</>;
};

export default LoadingWrapper; 