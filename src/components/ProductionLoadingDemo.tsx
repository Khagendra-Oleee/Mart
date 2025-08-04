import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useProductionLoading } from '@/hooks/useProductionLoading';
import { useNetworkStatus } from '@/hooks/useNetworkStatus';
import ProductionProgressBar from './ProductionProgressBar';
import LoadingPerformanceMonitor from './LoadingPerformanceMonitor';

const ProductionLoadingDemo = () => {
  const [demoType, setDemoType] = useState<'fast' | 'slow' | 'offline' | 'error'>('fast');
  const networkStatus = useNetworkStatus();

  const productionLoading = useProductionLoading({
    minLoadTime: demoType === 'slow' ? 3000 : demoType === 'offline' ? 2000 : 1200,
    simulateNetworkLatency: true,
    simulateServerResponse: true,
    simulateImageLoading: true
  });

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'initial': return 'bg-blue-500';
      case 'network': return 'bg-indigo-500';
      case 'server': return 'bg-purple-500';
      case 'content': return 'bg-green-500';
      case 'images': return 'bg-yellow-500';
      case 'complete': return 'bg-green-600';
      default: return 'bg-gray-500';
    }
  };

  const getStageIcon = (stage: string) => {
    switch (stage) {
      case 'initial': return '🚀';
      case 'network': return '🌐';
      case 'server': return '⚡';
      case 'content': return '📄';
      case 'images': return '🖼️';
      case 'complete': return '✅';
      default: return '⏳';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <ProductionProgressBar />
      <LoadingPerformanceMonitor />
      
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Production Loading Demo
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Real-world loading scenarios with network-aware behavior
          </p>

          {/* Network Status */}
          <div className="flex justify-center mb-6">
            <Badge variant={networkStatus.isOnline ? "default" : "destructive"} className="text-sm">
              {networkStatus.isOnline ? '🟢 Online' : '🔴 Offline'}
              {networkStatus.isSlow && ' (Slow)'}
            </Badge>
          </div>
        </div>

        {/* Demo Controls */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Loading Scenarios</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button
                variant={demoType === 'fast' ? "default" : "outline"}
                onClick={() => setDemoType('fast')}
              >
                🚀 Fast Loading
              </Button>
              <Button
                variant={demoType === 'slow' ? "default" : "outline"}
                onClick={() => setDemoType('slow')}
              >
                🐌 Slow Connection
              </Button>
              <Button
                variant={demoType === 'offline' ? "default" : "outline"}
                onClick={() => setDemoType('offline')}
              >
                📡 Offline Mode
              </Button>
              <Button
                variant={demoType === 'error' ? "default" : "outline"}
                onClick={() => setDemoType('error')}
              >
                ❌ Error Handling
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Loading Progress */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Loading Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Overall Progress</span>
                <span className="text-sm text-slate-600">{Math.round(productionLoading.progress)}%</span>
              </div>
              <Progress value={productionLoading.progress} className="h-3" />
              
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${getStageColor(productionLoading.stage)}`}></div>
                <span className="text-sm">
                  {getStageIcon(productionLoading.stage)} {productionLoading.stage}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Loading Stages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {['initial', 'network', 'server', 'content', 'images', 'complete'].map((stage) => (
            <Card key={stage} className={productionLoading.stage === stage ? 'ring-2 ring-blue-500' : ''}>
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full ${getStageColor(stage)} flex items-center justify-center text-white text-sm`}>
                    {getStageIcon(stage)}
                  </div>
                  <div>
                    <div className="font-medium capitalize">{stage}</div>
                    <div className="text-xs text-slate-500">
                      {stage === 'initial' && 'App initialization'}
                      {stage === 'network' && 'Network connection'}
                      {stage === 'server' && 'Server response'}
                      {stage === 'content' && 'Content loading'}
                      {stage === 'images' && 'Asset loading'}
                      {stage === 'complete' && 'Ready to use'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Error Handling */}
        {productionLoading.error && (
          <Card className="mb-8 border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-800">Loading Error</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-700 mb-4">{productionLoading.error}</p>
              <Button onClick={productionLoading.retry} variant="outline">
                🔄 Retry Loading
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Network Information */}
        <Card>
          <CardHeader>
            <CardTitle>Network Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-slate-600">Status:</span>
                <div className="font-medium">
                  {networkStatus.isOnline ? '🟢 Online' : '🔴 Offline'}
                </div>
              </div>
              <div>
                <span className="text-slate-600">Speed:</span>
                <div className="font-medium">
                  {networkStatus.isSlow ? '🐌 Slow' : '⚡ Fast'}
                </div>
              </div>
              <div>
                <span className="text-slate-600">Type:</span>
                <div className="font-medium">
                  {networkStatus.effectiveType || 'Unknown'}
                </div>
              </div>
              <div>
                <span className="text-slate-600">Downlink:</span>
                <div className="font-medium">
                  {networkStatus.downlink ? `${networkStatus.downlink} Mbps` : 'Unknown'}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductionLoadingDemo; 