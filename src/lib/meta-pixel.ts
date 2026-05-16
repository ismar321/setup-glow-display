const PIXEL_ID = '2102357820377408';

export const initMetaPixel = () => {
  if (typeof window === 'undefined') return;

  // Initialize Meta Pixel
  (function () {
    let img = new Image();
    img.src = `https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`;
    img.style.display = 'none';
    document.body.appendChild(img);
  })();

  // Add Meta Pixel script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://connect.facebook.net/en_US/fbevents.js`;
  document.head.appendChild(script);

  script.onload = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      const fbq = (window as any).fbq;
      fbq('init', PIXEL_ID);
      fbq('track', 'PageView');
    }
  };
};

export const trackPurchase = () => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Purchase');
  }
};

export const trackEvent = (eventName: string, data?: any) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, data);
  }
};
