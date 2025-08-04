// Analytics Configuration
const ANALYTICS_CONFIG = {
  googleAnalyticsId: import.meta.env.VITE_GOOGLE_ANALYTICS_ID,
  sentryDsn: import.meta.env.VITE_SENTRY_DSN,
  posthogKey: import.meta.env.VITE_POSTHOG_KEY,
  enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  enableSentry: import.meta.env.VITE_ENABLE_SENTRY === 'true',
  enablePostHog: import.meta.env.VITE_ENABLE_POSTHOG === 'true',
};

// Event Types
export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
  timestamp?: number;
}

export interface PageViewEvent {
  path: string;
  title: string;
  referrer?: string;
}

// Analytics Service
class AnalyticsService {
  private isInitialized = false;

  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      // Initialize Google Analytics
      if (ANALYTICS_CONFIG.enableAnalytics && ANALYTICS_CONFIG.googleAnalyticsId) {
        await this.initializeGoogleAnalytics();
      }

      // Initialize Sentry
      if (ANALYTICS_CONFIG.enableSentry && ANALYTICS_CONFIG.sentryDsn) {
        await this.initializeSentry();
      }

      // Initialize PostHog
      if (ANALYTICS_CONFIG.enablePostHog && ANALYTICS_CONFIG.posthogKey) {
        await this.initializePostHog();
      }

      this.isInitialized = true;
      console.log('Analytics initialized successfully');
    } catch (error) {
      console.error('Failed to initialize analytics:', error);
    }
  }

  private async initializeGoogleAnalytics(): Promise<void> {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.googleAnalyticsId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', ANALYTICS_CONFIG.googleAnalyticsId, {
      page_title: document.title,
      page_location: window.location.href,
    });

    // Make gtag available globally
    (window as any).gtag = gtag;
  }

  private async initializeSentry(): Promise<void> {
    // Dynamic import to avoid bundling Sentry in development
    const Sentry = await import('@sentry/react');
    Sentry.init({
      dsn: ANALYTICS_CONFIG.sentryDsn,
      environment: import.meta.env.VITE_APP_ENV || 'development',
      release: import.meta.env.VITE_APP_VERSION || '1.0.0',
      integrations: [
        new Sentry.BrowserTracing({
          tracePropagationTargets: ['localhost', 'coffeeandcoding.com'],
        }),
      ],
      tracesSampleRate: 1.0,
    });
  }

  private async initializePostHog(): Promise<void> {
    // Dynamic import to avoid bundling PostHog in development
    const posthog = await import('posthog-js');
    posthog.init(ANALYTICS_CONFIG.posthogKey!, {
      api_host: 'https://app.posthog.com',
      capture_pageview: false, // We'll handle this manually
    });
  }

  // Track custom events
  trackEvent(event: AnalyticsEvent): void {
    if (!this.isInitialized) return;

    try {
      // Google Analytics
      if (ANALYTICS_CONFIG.enableAnalytics && (window as any).gtag) {
        (window as any).gtag('event', event.name, event.properties);
      }

      // PostHog
      if (ANALYTICS_CONFIG.enablePostHog && (window as any).posthog) {
        (window as any).posthog.capture(event.name, event.properties);
      }

      // Console log in development
      if (import.meta.env.DEV) {
        console.log('Analytics Event:', event);
      }
    } catch (error) {
      console.error('Failed to track event:', error);
    }
  }

  // Track page views
  trackPageView(pageView: PageViewEvent): void {
    if (!this.isInitialized) return;

    try {
      // Google Analytics
      if (ANALYTICS_CONFIG.enableAnalytics && (window as any).gtag) {
        (window as any).gtag('config', ANALYTICS_CONFIG.googleAnalyticsId, {
          page_title: pageView.title,
          page_location: pageView.path,
          page_referrer: pageView.referrer,
        });
      }

      // PostHog
      if (ANALYTICS_CONFIG.enablePostHog && (window as any).posthog) {
        (window as any).posthog.capture('$pageview', {
          $current_url: pageView.path,
          $pathname: pageView.path,
          $title: pageView.title,
        });
      }

      // Console log in development
      if (import.meta.env.DEV) {
        console.log('Page View:', pageView);
      }
    } catch (error) {
      console.error('Failed to track page view:', error);
    }
  }

  // Track errors
  trackError(error: Error, context?: Record<string, any>): void {
    if (!this.isInitialized) return;

    try {
      // Sentry
      if (ANALYTICS_CONFIG.enableSentry && (window as any).Sentry) {
        (window as any).Sentry.captureException(error, {
          extra: context,
        });
      }

      // PostHog
      if (ANALYTICS_CONFIG.enablePostHog && (window as any).posthog) {
        (window as any).posthog.capture('error', {
          error_message: error.message,
          error_stack: error.stack,
          ...context,
        });
      }

      // Console log in development
      if (import.meta.env.DEV) {
        console.error('Error tracked:', error, context);
      }
    } catch (trackingError) {
      console.error('Failed to track error:', trackingError);
    }
  }

  // Track performance metrics
  trackPerformance(metric: { name: string; value: number; unit?: string }): void {
    if (!this.isInitialized) return;

    try {
      // Google Analytics
      if (ANALYTICS_CONFIG.enableAnalytics && (window as any).gtag) {
        (window as any).gtag('event', 'timing_complete', {
          name: metric.name,
          value: metric.value,
        });
      }

      // PostHog
      if (ANALYTICS_CONFIG.enablePostHog && (window as any).posthog) {
        (window as any).posthog.capture('performance_metric', {
          metric_name: metric.name,
          metric_value: metric.value,
          metric_unit: metric.unit || 'ms',
        });
      }

      // Console log in development
      if (import.meta.env.DEV) {
        console.log('Performance Metric:', metric);
      }
    } catch (error) {
      console.error('Failed to track performance metric:', error);
    }
  }
}

// Export singleton instance
export const analytics = new AnalyticsService();

// Initialize analytics on app start
if (typeof window !== 'undefined') {
  analytics.initialize();
} 