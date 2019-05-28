export const GA_TRACKING_ID = 'UA-53155844-4';

declare global {
  interface Window {
    gtag: Gtag.Gtag;
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_location: url
  });
};
