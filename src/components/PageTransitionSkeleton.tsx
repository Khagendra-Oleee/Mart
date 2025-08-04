import React from 'react';
import { useLoading } from '@/contexts/LoadingContext';
import EnhancedSkeleton from './EnhancedSkeleton';

interface PageTransitionSkeletonProps {
  children: React.ReactNode;
  skeletonType?: 'card' | 'text' | 'avatar' | 'list' | 'hero' | 'project' | 'testimonial' | 'service' | 'team';
  skeletonCount?: number;
}

const PageTransitionSkeleton: React.FC<PageTransitionSkeletonProps> = ({
  children,
  skeletonType = 'card',
  skeletonCount = 3
}) => {
  const { isNavigating, shouldShowSkeleton, loadingStage, loadingProgress } = useLoading();

  // Production-like loading behavior
  const shouldShowLoading = isNavigating || shouldShowSkeleton;

  if (shouldShowLoading) {
    return (
      <div className="min-h-screen bg-slate-100">
        {/* Loading overlay with fade effect */}
        <div className="relative">
          {/* Background skeleton */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <EnhancedSkeleton 
              type={skeletonType} 
              count={skeletonCount}
              showNetworkIndicator={false}
            />
          </div>

          {/* Loading stage indicator for slow connections */}
          {loadingProgress < 100 && (
            <div className="fixed bottom-4 right-4 bg-slate-800 text-white px-4 py-2 rounded-lg shadow-lg text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span>
                  {loadingStage === 'initial' && 'Initializing...'}
                  {loadingStage === 'content' && 'Loading content...'}
                  {loadingStage === 'images' && 'Loading assets...'}
                  {loadingStage === 'complete' && 'Complete!'}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default PageTransitionSkeleton; 