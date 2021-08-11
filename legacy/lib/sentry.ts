import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: process.env.NODE_ENV === 'production' ? 'https://c0afda44511f47a08bfd4648e5c4b82e@sentry.io/1469433' : ''
});
