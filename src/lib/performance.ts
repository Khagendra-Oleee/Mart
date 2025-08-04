import { analytics } from './analytics';

// Performance Metrics Interface
interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  timestamp: number;
}

interface CoreWebVitals {
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  fcp: number; // First Contentful Paint
}

// Performance Monitoring Service
class PerformanceMonitor {
  private metrics: PerformanceMetric[] = [];
  private observers: Map<string, PerformanceObserver> = new Map();

  initialize(): void {
    if (typeof window === 'undefined') return;

    try {
      this.setupCoreWebVitals();
      this.setupCustomMetrics();
      this.setupResourceTiming();
      this.setupNavigationTiming();
      console.log('Performance monitoring initialized');
    } catch (error) {
      console.error('Failed to initialize performance monitoring:', error);
    }
  }

  private setupCoreWebVitals(): void {
    // Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry;
        this.trackMetric('LCP', lastEntry.startTime, 'ms');
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.set('lcp', lcpObserver);

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const eventEntry = entry as PerformanceEventTiming;
          this.trackMetric('FID', eventEntry.processingStart - eventEntry.startTime, 'ms');
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.set('fid', fidObserver);

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries() as any[];
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            this.trackMetric('CLS', clsValue, 'score');
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.set('cls', clsObserver);
    }
  }

  private setupCustomMetrics(): void {
    // Track page load time
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      this.trackMetric('Page Load Time', loadTime, 'ms');
    });

    // Track DOM content loaded
    document.addEventListener('DOMContentLoaded', () => {
      const domReadyTime = performance.now();
      this.trackMetric('DOM Ready Time', domReadyTime, 'ms');
    });

    // Track first paint
    if ('PerformanceObserver' in window) {
      const paintObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-paint') {
            this.trackMetric('First Paint', entry.startTime, 'ms');
          } else if (entry.name === 'first-contentful-paint') {
            this.trackMetric('First Contentful Paint', entry.startTime, 'ms');
          }
        });
      });
      paintObserver.observe({ entryTypes: ['paint'] });
      this.observers.set('paint', paintObserver);
    }
  }

  private setupResourceTiming(): void {
    if ('PerformanceObserver' in window) {
      const resourceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries() as PerformanceResourceTiming[];
        entries.forEach((entry) => {
          // Track slow resources (>2s)
          if (entry.duration > 2000) {
            this.trackMetric('Slow Resource', entry.duration, 'ms', {
              resource: entry.name,
              type: entry.initiatorType,
            });
          }
        });
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
      this.observers.set('resource', resourceObserver);
    }
  }

  private setupNavigationTiming(): void {
    // Track navigation timing
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        this.trackMetric('Time to First Byte', navigation.responseStart - navigation.requestStart, 'ms');
        this.trackMetric('DOM Content Loaded', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart, 'ms');
        this.trackMetric('Load Complete', navigation.loadEventEnd - navigation.loadEventStart, 'ms');
      }
    }
  }

  private trackMetric(name: string, value: number, unit: string, metadata?: Record<string, any>): void {
    const metric: PerformanceMetric = {
      name,
      value,
      unit,
      timestamp: Date.now(),
    };

    this.metrics.push(metric);

    // Send to analytics
    analytics.trackPerformance({
      name,
      value,
      unit,
      ...metadata,
    });

    // Log in development
    if (import.meta.env.DEV) {
      console.log(`Performance Metric: ${name} = ${value}${unit}`, metadata);
    }
  }

  // Get current metrics
  getMetrics(): PerformanceMetric[] {
    return [...this.metrics];
  }

  // Get Core Web Vitals
  getCoreWebVitals(): Partial<CoreWebVitals> {
    const vitals: Partial<CoreWebVitals> = {};
    
    this.metrics.forEach((metric) => {
      switch (metric.name) {
        case 'LCP':
          vitals.lcp = metric.value;
          break;
        case 'FID':
          vitals.fid = metric.value;
          break;
        case 'CLS':
          vitals.cls = metric.value;
          break;
        case 'Time to First Byte':
          vitals.ttfb = metric.value;
          break;
        case 'First Contentful Paint':
          vitals.fcp = metric.value;
          break;
      }
    });

    return vitals;
  }

  // Track custom performance metric
  trackCustomMetric(name: string, value: number, unit: string = 'ms'): void {
    this.trackMetric(name, value, unit);
  }

  // Track user interaction performance
  trackInteraction(name: string, startTime: number, endTime: number): void {
    const duration = endTime - startTime;
    this.trackMetric(`Interaction: ${name}`, duration, 'ms');
  }

  // Cleanup observers
  destroy(): void {
    this.observers.forEach((observer) => {
      observer.disconnect();
    });
    this.observers.clear();
    this.metrics = [];
  }
}

// Export singleton instance
export const performanceMonitor = new PerformanceMonitor();

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  performanceMonitor.initialize();
} 