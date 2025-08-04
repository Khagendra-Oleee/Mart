import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import EnhancedSkeleton from './EnhancedSkeleton';
import NetworkStatusIndicator from './NetworkStatusIndicator';
import { useNetworkStatus } from '@/hooks/useNetworkStatus';

const SkeletonDemo = () => {
  const [activeType, setActiveType] = useState<'card' | 'text' | 'avatar' | 'list' | 'hero' | 'project' | 'testimonial' | 'service' | 'team'>('card');
  const [count, setCount] = useState(3);
  const networkStatus = useNetworkStatus();

  const skeletonTypes = [
    { type: 'card', label: 'Card', count: 3 },
    { type: 'text', label: 'Text', count: 2 },
    { type: 'avatar', label: 'Avatar', count: 4 },
    { type: 'list', label: 'List', count: 5 },
    { type: 'hero', label: 'Hero', count: 1 },
    { type: 'project', label: 'Project', count: 3 },
    { type: 'testimonial', label: 'Testimonial', count: 2 },
    { type: 'service', label: 'Service', count: 4 },
    { type: 'team', label: 'Team', count: 3 },
  ] as const;

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Skeleton Loading Demo
          </h1>
          <p className="text-lg text-slate-600 mb-6">
            Interactive demonstration of network-aware skeleton loading
          </p>
          
          {/* Network Status */}
          <div className="flex justify-center mb-6">
            <NetworkStatusIndicator showDetails={true} />
          </div>

          {/* Network Info */}
          <div className="bg-white rounded-lg p-4 shadow-sm mb-8">
            <h3 className="font-semibold text-slate-800 mb-2">Network Information</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-slate-600">Status:</span>
                <Badge variant={networkStatus.isOnline ? "default" : "destructive"} className="ml-2">
                  {networkStatus.isOnline ? 'Online' : 'Offline'}
                </Badge>
              </div>
              <div>
                <span className="text-slate-600">Speed:</span>
                <span className="ml-2 font-medium">
                  {networkStatus.isSlow ? 'Slow' : 'Fast'}
                </span>
              </div>
              <div>
                <span className="text-slate-600">Type:</span>
                <span className="ml-2 font-medium">
                  {networkStatus.effectiveType || 'Unknown'}
                </span>
              </div>
              <div>
                <span className="text-slate-600">Downlink:</span>
                <span className="ml-2 font-medium">
                  {networkStatus.downlink ? `${networkStatus.downlink} Mbps` : 'Unknown'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
          <h3 className="font-semibold text-slate-800 mb-4">Skeleton Type</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {skeletonTypes.map(({ type, label }) => (
              <Button
                key={type}
                variant={activeType === type ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveType(type)}
                className="text-sm"
              >
                {label}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <label className="text-sm font-medium text-slate-700">
              Count: {count}
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={count}
              onChange={(e) => setCount(parseInt(e.target.value))}
              className="flex-1"
            />
          </div>
        </div>

        {/* Demo Area */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h3 className="font-semibold text-slate-800 mb-6">
            {skeletonTypes.find(t => t.type === activeType)?.label} Skeleton
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EnhancedSkeleton 
              type={activeType} 
              count={count}
              showNetworkIndicator={true}
            />
          </div>
        </div>

        {/* All Types Preview */}
        <div className="mt-12">
          <h3 className="font-semibold text-slate-800 mb-6 text-center">
            All Skeleton Types
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skeletonTypes.map(({ type, label, count: defaultCount }) => (
              <div key={type} className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-medium text-slate-800 mb-4">{label}</h4>
                <EnhancedSkeleton 
                  type={type} 
                  count={defaultCount}
                  showNetworkIndicator={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonDemo; 