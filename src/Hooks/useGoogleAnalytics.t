import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (
      key: string,
      trackingId: string,
      config: { page_path: string }
    ) => void;
    dataLayer: any[];
  }
}

export const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
        window.gtag('config', 'G-5LSMZQY3M0', {
          page_path: location.pathname + location.search
        });
      }
    } catch (error) {
      // Silently handle analytics errors to not affect the game
      console.error('Analytics error:', error);
    }
  }, [location]);
};